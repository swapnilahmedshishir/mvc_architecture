import  express  from "express"

const app = express()
const port = 3001;

app.use('/', (req, res) => {
   const id =  req.query.id
   res.send(`<h1>Quer ID : ${id}</h1>`);
})


app.listen(port , () => {
    console.log(`server is running http://localhost:${port} `);
})

