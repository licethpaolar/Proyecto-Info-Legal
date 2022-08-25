import { Router } from 'express'
import {deleteProceso,  getProcesos,  getProcesosCount,  saveProceso, updateProceso,  getProceso} from '../controllers/tasks'
const router = Router()


/**
 * @swagger
 * tags:
 *  name: Procesos
 *  description: proceso endpoint 
 */


/**
 * @swagger
 * /infol:
 *  get:
 *    summary: Get all proceso
 *    tags: [Procesos]
 */
router.get("/infol",  getProcesos)

/**
 * @swagger
 * /infol/count:
 *  get:
 *    summary: Get total proceso counter
 *    tags: [Procesos]
 */
router.get("/infol/count",  getProcesosCount)

/**
 * @swagger
 * /infol/id:
 *  get:
 *    summary: Get a proceso by id
 *    tags: [Procesos]
 */
router.get("/infol/:id",  getProceso)

/**
 * @swagger
 * /infol:
 *  post:
 *    summary: creat new proceso
 *    tags: [Procesos]
 */
router.post("/infol",  saveProceso)

/**
 * @swagger
 * /infol/id:
 *  delete:
 *    summary: delete a proceso by id
 *    tags: [Procesos]    
 */
router.delete("/infol/:id", deleteProceso)

/**
 * @swagger
 * /infol/id:
 *  put:
 *    summary: update a proceso by id
 *    tags: [Procesos]
 */
router.put("/infol/:id", updateProceso)

export default router