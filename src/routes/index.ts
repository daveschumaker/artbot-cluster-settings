import express from 'express'
const router = express.Router()
const BASE_URL = '/artbot/api'

// Individual route files
import clusterSettingsRoute from './clusterSettingsRoute'

router.use(`${BASE_URL}/v1/cluster-settings`, clusterSettingsRoute)

export default router
