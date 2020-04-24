module.exports = (sequelize, DataTypes) => {
    const ProductsPurchases = sequelize.define(
      'productpurchases',
      {
        productId: DataTypes.INTEGER,
        purchaseId: DataTypes.INTEGER,
      },
      {
        freezeTableName: false,
      },
    );
  
    ProductsPurchases.associate = models => {
      ProductsPurchases.belongsTo(models.product, { foreignKey: 'productId' });
      ProductsPurchases.belongsTo(models.purchase, { foreignKey: 'orderId' });
    };
  
    return ProductsPurchases;
  };
  