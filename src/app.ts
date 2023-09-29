import express from 'express';
import configExpress from './config/express';
import routes from './routes';
import connect from './config/database';


const app = express()
// connect()
const port = process.env.PORT || 8080

//Setup Express
configExpress(app)

//Setup Routes
routes(app)

connect()

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})