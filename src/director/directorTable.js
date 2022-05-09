const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/connection");
const Movie = require("../movie/movieTable");
// const Movie = require("./movieTable");

    const Director = sequelize.define("Director", {
      director: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
      },
      director_id: {
        type: DataTypes.INTEGER,
        foreignKey: true
      },
      country: {
        type: DataTypes.STRING
      }
    });

  // Director.hasMany(Movie, {foreignKey: 'title'});
  // Movie.belongsTo(Director, {foreignKey: "title"})

module.exports = Director;