const router = require("express").Router()

router.get("/check/:password", (req, res) => {
  res.send({ pw: req.params.password })
})

module.exports = router