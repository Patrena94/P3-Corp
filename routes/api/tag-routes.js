const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll()
  .then(dbTagData => res.json(dbTagData))
  .catch(err => {
    console.log(err);
   res.status(500).json(err);
  });
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  Category.findOne({
    where: {id: req.params.id
    }
  })
  .then(dbTagData => {
    if(dbTagData){
      res.status(404).json({message:"Tag not found!"});
      return;
    }
    res.json(dbTagData);
  })
  .catch(err=>{
    console.log(err);
    res.status(500).json(err);
  })
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  Tag.create({
    id: req.body.id,
    tag_name: req.body.tag_name,
  })
  .then(dbTagData => res.json(dbTagData))
  .catch(err=> {
    console.log(err);
    res.status(500).json(err);
  });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
