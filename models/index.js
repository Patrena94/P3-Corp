// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category);

// Categories have many Products
Category.hasMany(Products);

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag);

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Products);

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
