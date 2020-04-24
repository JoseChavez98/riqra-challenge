module.exports = (sequelize, DataTypes) => {
    const Purchase = sequelize.define(
      'purchase',
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        subtotal: {
          type: DataTypes.FLOAT,
        },
        shipping: {
          type: DataTypes.FLOAT,
        },
        taxes: {
          type: DataTypes.FLOAT,
        },
        total: {
          type: DataTypes.FLOAT,
        },
        deliveryDate: {
          type: DataTypes.DATE,
        },
      },
      {
        freezeTableName: false,
      },
    );
  
    Purchase.associate = models => {
      Purchase.belongsToMany(models.product, {
        through: 'ProductsPurchases',
        foreignKey: 'purchaseId',
      });
    };
  
    return Purchase;
  };
  