const router = require('express').Router();
const { UPSERT } = require('sequelize/types/lib/query-types');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
 Category.findAll()
 .then(dbCategoryData => res.json(dbCategoryData))
 .catch(err => {
   console.log(err);
  res.status(500).json(err);
 });
});

router.get('/:id', (req, res) => {
  Category.findOne({
    where: {id: req.params.id
    }
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
  })
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  Category.create({
    id: req.body.id,
    category_name: req.body.category_name,
  })
  .then(dbCategoryData => res.json(dbCategoryData))
  .catch(err=> {
    console.log(err);
    res.status(500).json(err);
  });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
