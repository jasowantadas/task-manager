const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://jasowanta21:Kolkata12@nodeexpressprojects.ltwwk8r.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority";

mongoose
  .connect(connectionString)
  .then(() => console.log("Connected to DB..."))
  .catch((err) => console.log(err));
