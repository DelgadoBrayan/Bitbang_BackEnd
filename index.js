import express from "express";
import cors from "cors";
import { config } from "dotenv";
import routerProduct from "./src/routes/contacts.js";
import connectDB from "./src/Config/connetionDB.js";
import routerUsers from "./src/routes/users.js";
config()
const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());
connectDB()
app.options('*', cors());

app.use(express.json());
app.use('/api/contacts',routerProduct)
app.use('/api/user', routerUsers)
app.listen(PORT, () => console.log(`Listo por el puerto ${PORT}`));