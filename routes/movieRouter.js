
const router = require("express").Router();
const movieController = require("../controllers/movieController");

// API routes == ENDPOOINT
// CRUD

//http://localhost:3000/movies/
router.get("/toprated", async(req, res) => {
    try {
        res.json(await movieController.findTopRated());
    } catch (error) {
        return res.status(500).json ({
            mensaje: error.message
        });
    }
});

router.get("/upcoming", async(req, res) => {
    try {
        res.json(await movieController.upComing());
    } catch (error) {
        return res.status(500).json ({
            mensaje: error.message
        });
    }
});

router.get("/:id", async(req, res) => {
    try {
        let id = req.params.id;
        res.json(await movieController.searchById(id));
    } catch (error) {
        return res.status(500).json ({
            mensaje: error.message
        });
    }
});

// http://localhost:3000/movie/search/matrix
router.get("/search/:query", async(req, res) => {
    try {
        let query = req.params.query;
        res.json(await movieController.searchByTitle(query));
    } catch (error) {
        return res.status(500).json ({
            message: error.message
        });
    }
});

router.get("/genre/:name", async(req, res) => {
    try {
        let name = req.params.name;
        res.json(await movieController.findToGenre(name));
    } catch (err) {
        return res.status(500).json ({
            message: err.message
        });
    }
});

router.post('/',async (req, res) => {
    try {
        const film = req.body;
        res.json(await movieController.createNewFilm(film));
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

module.exports = router;