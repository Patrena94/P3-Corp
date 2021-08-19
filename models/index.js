// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const { Sequelize } = require('sequelize/types');
const sequelize = require('../config/connection');

// Products belongsTo Category
class Products extends category{}
Products.init({
  product_name: Sequelize.STRING,
  id: sequelize.STRING,
  price: sequelize.STRING,
  stock:  sequelize.STRING,
  category_id: sequelize.STRING
},{ Sequelize, Category: 'product'});
Products.belongsTo(Category);
// Categories have many Products
const Categories =Product.hasMany(Tag,{as:'categories'});
Product.create({
  id: 1,
product_name:'Plain T-Shirt',
  categories:[{id: 1, product_name:'Alpha'},
        { id: 2, product_name: 'Beta'} 
 ]
}, {
  include:[{association: Categories, as: "categories"}]
})
Categories.belongsToMany(Product)
// Products belongToMany Tags (through ProductTag)
Product.create({
  id:1, 
  product_name: 'Plain T-Shirt',
  tags: [
    {product_name: 'Alpha'},
    {product_name:'Beta'}
  ]
},{
  include:[Tag]
})
Product.belongsToMany(Tag);

// Tags belongToMany Products (through ProductTag)
class Tags extends ProductTag{}
Tag.init({
 tag_name: Sequelize.STRING
}, {sequelize, ProductTag: 'tag'});
Tag.belongsToMany(ProductTag);

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
