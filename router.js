
const router = require("express").Router();

const movieRouter = require("./routes/movieRouter");
const serieRouter = require("./routes/serieRouter");
const dueñoRouter = require("./routes/dueño.router");
const mascotaRouter = require("./routes/mascota.router");
// const userRouter = require("./routes/userRouter");

router.use("/movie", movieRouter);
router.use("/serie", serieRouter);
router.use("/dueño", dueñoRouter);
router.use("/mascota", mascotaRouter);
// router.use("/user", userRouter);

module.exports = router;