const yargs = require("yargs");
const { sequelize } = require("./db/connection");


//Imports for crud functions
const { addMovie, listMovie, deleteMovie, updateMovie } = require("./movie/movieMethods");
const { addDirector, listDirector, deleteDirector, updateDirector } = require("./director/directorMethods");

const app = async (yargsObj) => {
    try {
        await sequelize.sync();
        if (yargsObj.add) {
            //add movie to database
            await addMovie({title: yargsObj.title, actor: yargsObj.actor});
        } else if (yargsObj.addDir) {
            //add director to database
            await addDirector({director: yargsObj.director, country: yargsObj.country});
        } else if (yargsObj.list) {
            //list movies
            console.log(await listMovie())
        } else if (yargsObj.listDir) {
            //list director
            console.log(await listDirector())
        } else if (yargsObj.delete) {
            //delete movies
            await deleteMovie({
                title: yargsObj.title,
                actor: yargsObj.actor
            })
            console.log(`Successfully deleted ${yargsObj.title}`)
        } else if (yargsObj.deleteDir) {
            //delete director
            await deleteDirector({
                director: yargsObj.director,
                country: yargsObj.country
            })
            console.log(`Successfully deleted ${yargsObj.director}`)
        } else if (yargsObj.update) {
            //update movies
            await updateMovie({
                title: yargsObj.title,
                actor: yargsObj.actor 
            })
            console.log(`Successfully updated ${yargsObj.title}`)
        } else if (yargsObj.updateDir) {
            //update director
            await updateDirector({
                director: yargsObj.director,
                country: yargsObj.country 
            })
            console.log(`Successfully updated ${yargsObj.director}`)
        } else {
            console.log("Incorrect Command")
        }
    } catch (error) {
        console.log(error)
    }
} 




app(yargs.argv)
