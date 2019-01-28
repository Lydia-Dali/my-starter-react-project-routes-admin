'use strict';
module.exports = (sequelize, DataTypes) => {
  const MediaTag = sequelize.define('MediaTag', {
    mediaId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {});
  MediaTag.associate = function(models) {
    MediaTag.belongsTo(models.Media)
    MediaTag.belongsTo(models.Tag)
  };
  return MediaTag;
};