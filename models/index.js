// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongToMany(Category);

// Categories have many Products
Category.hasMany(Products);

// Products belongToMany Tags (through ProductTag)
Product.belongToMany(Tag);

// Tags belongToMany Products (through ProductTag)
Tag.belongToMany(Products);

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
