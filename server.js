const express = require("express")

const server = express()

server.all("/", (req, res) => {
  res.send("Botcito esta listo!")
})

function keepAlive() {
  server.listen(3000, () => {
    console.log("El server esta listo.")
  })
}

module.exports = keepAlive
