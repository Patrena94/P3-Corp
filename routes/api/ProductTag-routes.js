// const router = require('express').Router();
// const { Tag, Product, ProductTag } = require('../../models');

// // The `/api/tags` endpoint

// router.get('/', (req, res) => {
//   ProductTag.findAll()
//   .then(dbProductTagData => res.json(dbProductTagData))
//   .catch(err => {
//     console.log(err);
//    res.status(500).json(err);
//   });
//   // be sure to include its associated Product data
// });

// router.get('/:id', (req, res) => {
//     Category.findOne({
//         where: {id: req.params.id
//         }
//       })
//       .then(dbProductTagData => {
//         if(dbProductTagData){
//           res.status(404).json({message:"Product Tag does not exist!"});
//           return;
//         }
//         res.json(dbProductTagData);
//       })
//       .catch(err=>{
//         console.log(err);
//         res.status(500).json(err);
//       })
//   // be sure to include its associated Product data
// });

// router.post('/', (req, res) => {
//     ProductTag.create({
//         id: req.body.id,
//         product_name: req.body.product_name,
//         tag_id: req.body.tag_id,
//       })
//       .then(dbProductTagData => res.json(dbProductTagData))
//       .catch(err=> {
//         console.log(err);
//         res.status(500).json(err);
//       });
//     });

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
