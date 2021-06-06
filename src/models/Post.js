const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

const schema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  body: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: "user",
      key: "id",
    },
    onDelete: "CASCADE",
  },
};

const options = {
  sequelize,
  modelName: "post",
  timestamps: true,
  underscored: true,
  freezeTableName: true,
};

class Post extends Model {}

Post.init(schema, options);

module.exports = Post;
