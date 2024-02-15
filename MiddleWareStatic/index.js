import  express  from 'express';
import {dirname} from 'path';
import { fileURLToPath } from 'url';
const fileName = dirname(fileURLToPath(import.meta.url))
const app = express();
app.use(express.static("./public"));

const port = 3001
app.get('/', (req, res) => {
    res.sendFile(fileName + '/index.html')
})

app.listen(port ,() => {
    console.log(`port is running http://localhost:${port }`)
})