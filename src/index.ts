import express from 'express'
import databaseService from './services/database.services'
const app = express()
const port = 3000
app.use(express.json())
databaseService.run()
app.listen(port, () => {
  console.log(`Server is running at localhost:${port}`)
})
