import express, { Express, Request, Response } from 'express'
import helmet from 'helmet'
import routes from './routes'

const appApi: Express = express()
const api_port = process.env.API_PORT || 3001

appApi.use(express.json({ limit: '1mb' }))
appApi.use(express.urlencoded())
appApi.use(helmet())
appApi.use(routes)

appApi.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server')
})

appApi.listen(api_port, () => {
  console.log(
    `[server]: API server is running at https://localhost:${api_port}`
  )
})
