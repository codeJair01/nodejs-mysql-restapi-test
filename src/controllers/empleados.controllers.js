import {pool} from '../db.js'

export const getEmpleados = async(req, res)=>{
    try {
        const [rows] = await pool.query('SELECT *FROM empleado')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({"Mensaje":"Ah ocurrido un error con el servidor"})
    }
}

export const getEmpleado = async(req, res)=>{
    try {
        const id = req.params.id
        const [rows] = await pool.query("SELECT *FROM empleado where id = ?",id)
        if(rows.length <=0) return res.status(404).json({"Mensaje": "Empleado no encontrado"})
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({"Mensaje":"Ah ocurrido un error con el servidor"})  
    }
}

export const postEmpleado = async (req, res)=>{
    const {nombre, salary} = req.body
    try {
        //devolver la fila insertada
        const [rows] = await pool.query('INSERT INTO empleado (nombre, salary) values (?, ?)',[nombre, salary])
        res.send({
            id:rows.insertId,
            nombre,
            salary
        })
    } catch (error) {
        return res.status(500).json({"Mensaje":"Ah ocurrido un error con el servidor"})
    }
}

export const deleteEmpleado = async (req, res)=>{
    try {
        const [result] = await pool.query('DELETE FROM empleado where id = ?',req.params.id)
        if(result.affectedRows <=0) return res.status(404).json({"Mensaje":"No se encontro al usuario con ese id"})
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({"Mensaje":"Ah ocurrido un error con el servidor"})
    }
}

export const putEmpleado = async (req, res)=>{
    const {id} = req.params
    const {nombre, salary} = req.body
    try {
        const [result] = await pool.query('UPDATE empleado set nombre = IFNULL(?,nombre), salary = IFNULL(?,salary) where id = ?',
        [nombre,salary,id])
        if(result.affectedRows <=0) return res.status(404).json({'Mensaje':'No se encontro el usuario a eliminar'})
        const [rows] = await pool.query('SELECT *FROM empleado where id = ?',id)
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({"Mensaje":"Ah ocurrido un error con el servidor"})
    }
}

