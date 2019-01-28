const models = require("../models")
const Tag = models.Tag

module.exports = {
  index: function(req, res, next) {
    Tag.findAll()
    .then((tags) => {
      res.json({tags})
    })
    .catch((error) => res.status(500).json({message: error}))
  },

  show: function(req, res, next) {
    Tag.findByPk(req.params.id, {include: ['medias']})
    .then((tag) => {
      if(tag){
        res.json({tag})
      } else {
        res.status(404).json({message: `Tag does not exist with id: ${req.params.id}`})
      }
    })
    .catch((error) => res.status(500).json({message: error}))
  },

  create: function(req, res, next) {
    if(req.body.name){
      Tag.create({
        name: req.body.name
      })
      .then((newTag) => {
        res.json({tag: newTag})
      })
      .catch((error) => res.status(500).json({message: error}))
    } else {
      res.status(500).json({message: "name cannot be blank"})
    }
  },

  edit: function(req, res, next) {
    Tag.findByPk(req.params.id)
    .then((tag) => {
      if(tag){
        if(req.body.name){
          tag.name = req.body.name;
          tag.save()
          .then((updatedTag) => {
            res.json({tag: updatedTag})
          })
          .catch((error) => res.status(500).json({message: error}))
        } else {
          res.status(500).json({message: "name cannot be blank"})
        }
      } else {
        res.status(404).json({message: `Tag does not exist with id: ${req.params.id}` })
      }
    })
    .catch((error) => res.status(500).json({message: error}))
  },

  delete: function(req, res, next) {
    Tag.findByPk(req.params.id)
    .then((tag) => {
      if(tag){
        tag.destroy()
        .then((tag) => res.json({message: 'Tag has been deleted'}))
        .catch((error) => res.status(500).json({message: error}))
      } else {
        res.status(404).json({message: `Tag does not exist with id: ${req.params.id}`})
      }
    })
    .catch((error) => res.status(500).json({message: error}))
  }
}