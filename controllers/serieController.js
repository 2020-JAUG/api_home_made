
const axios = require("axios"); //Aqui guardamos toda la libreria axios

class Serie {

    //Métodos controladores
    async findPopular() {
        let res = await axios.get("https://api.themoviedb.org/3/tv/popular?api_key=79a61f5dc13e3e9e4834fadbf4f326c7&language=en-US&page=1");
        return res;
    }

    async serachById(id) {
        let res = await axios.get(`https://api.themoviedb.org/3/tv/${id}api_key=79a61f5dc13e3e9e4834fadbf4f326c7&language=en-US`);
            return res.data;
    }


};

let serieController = new Serie();
module.exports = serieController;
