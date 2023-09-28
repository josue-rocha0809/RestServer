const { Router } = require("express");
const {
  getUsers,
  updateUser,
  setUser,
  deleteUser,
} = require("../controllers/users");

const router = Router();

router.get("/", getUsers);
router.put("/:id", updateUser);
router.post("/", setUser);
router.delete("/", deleteUser);

module.exports = router;
