import express, {Express} from "express"
import path from "path"

const app: Express = express()
const port = 8000

app.use(express.static(path.join(__dirname, "../public")))
app.listen(port, () => {
    console.log(`Server running on port ${port}`);

})