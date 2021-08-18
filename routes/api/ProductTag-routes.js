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
//   ProductTag.update(req.body, {
//     where: {id: req.params.id
//     }
//   })
// .then(dbProductTagData =>{
//   if(!dbProductTagData[0]){
//     res.status(404).json({ message: 'ProductTag not found with this id'});
//   return;
// }
// res.json(dbProductTagData);
// })
// .catch(err =>{
//   console.log(err);
//   res.status(500).json(err);
// });
// });
// // delete on ProductTag by its `id` value
// router.delete('/:id', (req, res) => {
//   ProductTag.destroy({
//     where: {id: req.params.id
//     }
//   })
//   .then(dbProductTagData=>{
//   if(!dbProductTagData){
//     res.status(404).json({ message: "No Category found with this id"});
//   }
//   res.json(dbProductTagData);
//   })
//   .catch(err => {
//   console.log(err);
//   res.status(500).json(err);
//   });
//   });
// });

// module.exports = router;
})