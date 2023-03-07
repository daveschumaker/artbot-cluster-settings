import appRoot from 'app-root-path'
import express, { Request, Response } from 'express'
import fs from 'fs'

const router = express.Router()

router.get('/get', async (req: Request, res: Response) => {
  try {
    const data = fs.readFileSync(appRoot + '/CLUSTER_SETTINGS.json', {
      encoding: 'utf8'
    })
    const clusterSettings = JSON.parse(data)
    return res.send({ ...clusterSettings })
  } catch (err) {
    console.log(`err?`, err)
    return res.send()
  }
})

router.get('*', (req, res) => {
  res.send()
})

export default router
