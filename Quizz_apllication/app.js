import express from "express"
import path from "path"
import { fileURLToPath } from "url";
import gameRoutes from "./routes/game.js";

const app = express();

app.listen(3000, () => {
    console.log("Server is Lisening Lets GOOOO")
});

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.static(
    path.join(__dirname, "public")
))

gameRoutes(app)