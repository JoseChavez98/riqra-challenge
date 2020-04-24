module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define(
      'product',
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        photoUrl: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        price: {
          type: DataTypes.FLOAT,
        },
        stock: {
          type: DataTypes.INTEGER,
        },
      },
      {
        freezeTableName: false,
      },
    );
  
    Product.associate = models => {
      Product.belongsToMany(models.purchase, {
        through: 'ProductsPurchases',
        foreignKey: 'productId',
      });
    };
  
    return Product;
  };
  