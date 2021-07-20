


const router = require("express").Router();

const serieController = require("../controllers/serieController");

// CRUD

// Get
//http://localhost:3000/movies/
router.get("/", async(req, res) => {
    try {
        res.json(await serieController.findPopular());
    } catch (error) {
        return res.status(500).json ({
            mensaje: error.message
        });
    }
});

router.get("/:id", async(req, res) => {
    try {
        let id = req.params.id;
        res.json(await serieController.serachById(id));
    } catch (error) {
        return res.status(500).json ({
            mensaje: error.message
        });
    }
});

module.exports = router;