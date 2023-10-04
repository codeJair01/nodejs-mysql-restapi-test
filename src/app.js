import express from 'express'
import routerEmpleados from './routes/empleados.router.js'
import routerIndex from './routes/index.router.js'

const app = express()

app.use(express.json())

app.use('/api',routerEmpleados)
app.use(routerIndex)

app.use((req,res,next)=>{
    res.status(404).json({"Mensaje":"ruta no encontrada"})
})

export default app