import express from "express";

const app = express();

app.get("/", (req, res) => {
    console.log("Ola!")
})

app.listen(4000, () => {
    console.log("Servidor rodando na porta 4000")
})