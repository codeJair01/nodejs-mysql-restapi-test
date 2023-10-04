import {Router} from 'express'
import {getEmpleados,getEmpleado,postEmpleado,putEmpleado,deleteEmpleado} from '../controllers/empleados.controllers.js'
const router = Router()

router.get("/empleados",getEmpleados)

router.get("/empleados/:id",getEmpleado)

router.post("/empleados", postEmpleado)

router.patch("/empleados/:id",putEmpleado)

router.delete("/empleados/:id",deleteEmpleado)

export default router