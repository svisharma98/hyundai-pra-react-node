import { Router } from 'express';
import userR from './user/index.route.js'

const route = Router()

route.use("user", userR)

export default route