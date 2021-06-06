require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const { connection } = require("./config/connection");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../", "public")));

const init = async () => {
  try {
    await connection.sync();
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    );
  } catch (error) {
    console.error(error, "Failed to connect to DB");
  }
};

init();
