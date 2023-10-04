import app from './app.js'
import {PORT} from'./config.js'

//const puerto = PORT
app.listen(PORT,()=>{  
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})