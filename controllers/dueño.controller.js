const {  } = require("../models");

class Animal {

    async searchAll() {
        return Client.finAll();
    }
}



let dueñoController = new Animal();
module.exports = dueñoController;