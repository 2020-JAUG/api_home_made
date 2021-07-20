const router = require("express").Router();
const dueñoController = require("../controllers/dueño.controller");

router.get("/", async(req, res) => {
    try {
        res.json( await dueñoController.searchAll());
    } catch (error) {
        return res.status(500).json ({
            message: error.message
        });
    }
});






module.exports = router();