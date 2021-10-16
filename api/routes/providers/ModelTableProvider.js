const Sequelize = require("sequelize")
const instance = require("../../db//index")
const columns = {
  company: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  category: {
    type: Sequelize.ENUM("portion", "toy"),
    allowNull: false,
  },
}
options = {
  freezeTableName: true,
  tableName: "providers",
  timestamps: true,
}
module.exports = instance.define("providers", colums, options)
