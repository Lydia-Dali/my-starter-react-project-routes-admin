'use strict';
module.exports = (sequelize, DataTypes) => {
  const Media = sequelize.define('Media', {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    url: DataTypes.STRING
  }, {
    tableName: 'Medias'
  });
  Media.associate = function(models) {
    Media.belongsToMany(models.Tag, {through: 'MediaTags', foreignKey : 'mediaId'})
  };
  return Media;
};