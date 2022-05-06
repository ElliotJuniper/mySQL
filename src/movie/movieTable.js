const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/connection");
// const Director = require("../director/directorTable")

const Movie = sequelize.define("Movie", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    actor: {
        type: DataTypes.STRING,
        defaultValue: "Not Specified",
    },
    // rating: {
    //     type: DataTypes.INTEGER,
    // },
});

module.exports = Movie;