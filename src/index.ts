import express, { Express, Request, Response } from 'express'
import helmet from 'helmet'

const app: Express = express()
const port = process.env.PORT || 3000

app.use(express.json({ limit: '1mb' }))
app.use(express.urlencoded())
app.use(helmet())

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server')
})

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`)
})
