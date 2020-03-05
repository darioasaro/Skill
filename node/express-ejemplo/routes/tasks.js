import express from "express";
const tasksController = require("../controllers/task");
const router = express.Router();

router.get("/", tasksController.index);
router.get("/:id", tasksController.show);
router.post("/", tasksController.store);
// router.put('/:id', tasksController.upgrade )
// router.delete('/:id', tasksController.delete )

export default router;
