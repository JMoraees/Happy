//importar dependencial

const express=require('express');
const path=require('path');
//inciando o express
const server =express()
server
.use(express.static('public'))

//criar uma rota
.get('/', (request, response)=>{
    return response.sendFile(path.join(__dirname,'views', 'index.html'))

})
 

//ligar o servidor
server.listen(5500)