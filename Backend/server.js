import express from "express";
import cors from "cors";
import bodyParser from 'body-parser';
import userRoutes from "./routes/userRoutes.js";
import { createUsers } from "./controllers/userController.js";

const app = express();
app.use(cors());

// Menggunakan rute yang sudah dibuat
app.use("/", userRoutes);

const port = process.env.PORT || 7000;

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
