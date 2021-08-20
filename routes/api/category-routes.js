const router = require('express').Router(); 
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
    },
    include: [
      {mode: Product,
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
  // .then ((category)=> {
  //   return Product.findall({ where:{
  //     category_id: req.params.id
  //   }
  // });
  // })
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
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
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
