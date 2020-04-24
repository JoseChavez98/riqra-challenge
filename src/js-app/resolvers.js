export default {
    Purchase: {
        products: (parent, args, context, info) => parent.getProducts(),
    },
    Query: {
        products: (parent, args, { db }, info) => db.product.findAll(),
        productsByName: (parent, { name }, { db }, info) => {
            const sequelize = db.sequelize;
            return name === ''
                ? []
                : db.product.findAll({
                    where: {
                        name: sequelize.where(
                            sequelize.fn('LOWER', sequelize.col('name')),
                            'LIKE',
                            `${name.toLowerCase()}%`,
                        ),
                    },
                });
        },
        purchase: (parent, args, { db }, info) => db.purchase.findAll(),
        product: (parent, { id, name }, { db }, info) => {
            const sequelize = db.sequelize;
            return id
                ? db.product.findByPk(id)
                : db.product.findOne({
                    where: {
                        name: sequelize.where(
                            sequelize.fn('LOWER', sequelize.col('name')),
                            'LIKE',
                            `%${name.toLowerCase()}%`,
                        ),
                    },
                });
        },
        purchase: (parent, { id }, { db }, info) => db.purchase.findByPk(id),
    },
    Mutation: {
        createPurchase: async (
            parent,
            { subtotal, shipping, taxes, total, deliveryDate, products },
            { db },
            info,
        ) => {
            const purchase = await db.purchase.create({
                subtotal,
                shipping,
                taxes,
                total,
                deliveryDate,
            });
            products.forEach(product => purchase.addProducts(product.id));

            return purchase;
        },
        createProduct : async (
            parent,{name,photoURL,price,stock},
            {db},
            info,
        ) => {
            const product = await db.product.create({
                name,
                photoURL,
                price,
                stock,
            });
        }
    },
};
