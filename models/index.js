// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
// const { Sequelize } = require('sequelize/types');
const sequelize = require('../config/connection');
const { Sequelize } = require('sequelize/types');

// Products belongsTo Category
class Products extends Category{}
Product.init({
  product_name: Sequelize.STRING,
  id: Sequelize.STRING,
  price: Sequelize.STRING,
  stock:  Sequelize.STRING,
  category_id: Sequelize.STRING
},{ sequelize, Category: 'product'});
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
Products.create({
  id:1, 
  product_name: 'Plain T-Shirt',
  tags: [
    {product_name: 'Alpha'},
    {product_name:'Beta'}
  ]
},{
  include:[Tag]
})
Products.belongsToMany(Tag);

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
