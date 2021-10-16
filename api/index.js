const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const config = require("config")

app.use(bodyParser.json())

const roteador = require("./routes/providers")

app.use("/api/providers", roteador)

app.listen(config.get("api.port"), () => console.log("A API está funcionando!"))
