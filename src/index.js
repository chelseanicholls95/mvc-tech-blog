require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../", "public")));

const init = async () => {
  try {
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    );
  } catch (error) {
    console.error("Failed to connect to DB");
  }
};

init();
