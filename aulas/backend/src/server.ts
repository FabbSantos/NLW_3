import express from 'express';
import './database/connection';


const app = express();

app.use(express.json());

// rota = conjunto
// recurso  = usuario   

// métodos http = GET, POST, PUT, DELETE
// parametros

// GET = buscando informação
// POST = criando uma informação
// PUT = editando uma informação
// DELETE = deletando uma informação

// Query Params: http://localhost:3333/users?search=diego
// Route Params: http://localhost:3333/users/1 (Identificar um recurso)
// Body: http://localhost:3333/users/1 (Identificar um recurso)


app.get('/users', (request, response) => {
    return response.json({ message: "Hello World" });
});

app.listen(3333);

// sempre requisição / resposta
// localhost:3333

// Driver nativo, Query builder, ORM