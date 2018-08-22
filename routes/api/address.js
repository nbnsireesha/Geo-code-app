const router = require("express").Router();
const addressController = require("../../controllers/addressController");

// Matches with "/api/articles"
router.route("/")
  .get(addressController.findAll)
  .post(addressController.create)
  .delete(addressController.delete);

router.route("/next")
  .get(addressController.find);

module.exports = router; 