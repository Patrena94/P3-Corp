const router = require('express').Router(); 
// const { Sequelize } = require('sequelize/types');
const sequelize = require('../../config/connection');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
 Category.findAll({
   attributes: [
     'id',
     'category_name'],
     include: [{
       model: Product,
       attributes:['id', 'product_name', 'price', 'stock','category_id'],
      } ]
 })
 .then(dbCategoryData => res.json(dbCategoryData))
 .catch(err => {
   console.log(err);
  res.status(500).json(err);
 });
});
// find one category by its `id` value be sure to include its associated Products
router.get('/:id', (req, res) => {
  Category.findOne({
    where: {id: req.params.id
    },
  //   attributes: [
  //     'id',
  //     'category_name',
  //   [sequelize.literal(`(SELECT ONE (*)FROM Product Where Category.id = Category_id )`),'Products']
  // ],
    include: [
      {model: Product,
      attributes:['id', "product_name", "price","stock","category_id"],
    },
    ],
  })
  .then(dbCategoryData => {
    if(dbCategoryData){
      res.status(404).json({message:"Category not found!"});
      return;
    }
    res.json(dbCategoryData);
  })
  .catch(err=>{
    console.log(err);
    res.status(500).json(err);
  });
});
// create a new category
router.post('/', (req, res) => {
  console.log("LOGGING BODY",req.body)
  Category.create({
    // id: req.body.id,
    category_name: req.body.category_name,
  })
  .then(dbCategoryData => res.json(dbCategoryData))
  .catch(err=> {
    console.log(err);
    res.status(500).json(err);
  });
});
// update a category by its `id` value
router.put('/:id', (req, res) => {
  Category.update(req.body, {
    category_name: req.body.category_name
  },
  {
    where: {
      id: req.params.id
    }
  }
  )
  .then(dbCategoryData=>{
    if(!dbCategoryData[0]){
      res.status(404).json({message: "Category no found relating to this id"});
      return;
    }
  })
  .catch(err=>{
    console.log(err);
    res.status(500).json(err);
  });
});
  // delete a category by its `id` value
router.delete('/:id', (req, res) => {
  category.destroy({
    where: {id: req.params.id
    }
  })
.then(dbCategoryData=>{
  if(!dbCategoryData){
    res.status(404).json({ message: "No Category found with this id"});
  }
  res.json(dbCategoryData);
})
.catch(err => {
  console.log(err);
  res.status(500).json(err);
});
});

module.exports = router;
