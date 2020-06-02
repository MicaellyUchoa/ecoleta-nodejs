import express from "express";

const app = express();

app.get("/users", (request, response) => {
  // MESSAGE response.send("Hello Word");

  //JSON 

  response.json([
    "Micaelly",
  ])
});

app.listen(3333);
