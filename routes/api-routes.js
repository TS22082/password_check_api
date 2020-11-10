const router = require("express").Router()

router.get("/check/:password", (req, res) => {
  let securityLevel = 0
  const pw = req.params.password
  if (pw.match(/[a-z]+/)) securityLevel++
  if (pw.match(/[A-Z]+/)) securityLevel++
  if (pw.match(/[0-9]+/)) securityLevel++
  if (pw.match(/[$@#&!]+/)) securityLevel++
  if (pw.length > 8) securityLevel++

  res.send({ pw: pw, passed: securityLevel, total: 5 })
})

module.exports = router