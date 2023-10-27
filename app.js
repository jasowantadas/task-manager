const express = require("express");
const tasks = require("./routes/tasks");
require("./db/connect");
const app = express();

//middle ware
app.use(express.json());

// app.get("/hello", (req, res) => {
//   res.send("Task Manager");
// });

app.use("/api/v1/tasks", tasks);

const PORT = 3000;

app.listen(PORT || 3000, console.log(`Server is listening to port : ${PORT}`));
