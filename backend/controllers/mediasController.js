const models = require("../models");
const Media = models.Media;
const Tag = models.Tag;

module.exports = {
  index: function(req, res, next) {
    Media.findAll()
    .then((medias) => {
      res.json({medias})
    })
    .catch((error) => res.status(500).json({message: error}))
  },

  show: function(req, res, next) {
    Media.findByPk(req.params.id, {include: [ 'tags' ]})
    .then((media) => {
      if(media){
        res.json({media})
      } else {
        res.status(404).json({message: `Media does not exist with id: ${req.params.id}`})
      }
    })
    .catch((error) => res.status(500).json({message: error}))
  },

  create: function(req, res, next) {
    if(req.body.name && req.file){
      Media.create({
        name: req.body.name,
        type: 'file',
        url: `${req.get('Host')}/uploads/${req.file.originalname}`
      })
      .then((newMedia) => {
        // si une liste d'id à été fourni alors on lie les tags correspondants au média
        if(req.body.tagIds){
          let tagIds = req.body.tagIds.split(",")
          Tag.findAll({where: {id: tagIds}})
          .then(tags => newMedia.addTags(tags))
          .catch(err => res.send(err))
        }
        res.json({media: newMedia});
      })
      .catch((error) => res.status(500).json({error}))
    } else {
      res.status(500).json({message: "name or file cannot be blank"})
    }
  },

  edit: function(req, res, next) {
    Media.findByPk(req.params.id)
    .then((media) => {
      if(media){
        if(req.body.name && req.body.type && req.body.url){
          media.name = req.body.name;
          media.type = req.body.type;
          media.url = req.body.url;
          media.save()
          .then((updatedMedia) => {
            // si une liste d'id à été fourni alors on lie les tags correspondants au média
            if(req.body.tagIds){
              let tagIds = req.body.tagIds.split(",")
              Tag.findAll({where: {id: tagIds}})
              .then(tags => updatedMedia.addTags(tags))
              .catch(err => res.send(err))
            }
            res.json({media: updatedMedia})
          })
          .catch((error) => res.status(500).json({message: error}))
        } else {
          res.status(500).json({message: "name or type or url cannot be blank"})
        }
      } else {
        res.status(404).json({message: `Media does not exist with id: ${req.params.id}` })
      }
    })
    .catch((error) => res.status(500).json({message: error}))
  },

  delete: function(req, res, next) {
    Media.findByPk(req.params.id)
    .then((media) => {
      if(media){
        media.setTags([])
        .then((result) => {
          media.save()
          .then((result) => {
            media.destroy()
            .then((media) => res.json({message: 'Media has been deleted'}))
            .catch((error) => res.status(500).json({message: error}))
          })
        })
      } else {
        res.status(404).json({message: `Media does not exist with id: ${req.params.id}`})
      }
    })
    .catch((error) => res.status(500).json({message: error}))
  }
}