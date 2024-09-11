import express from 'express';

const app = express();
app.use(express.json()); // Para permitir o envio de JSON no corpo da requisição

const users = [];

// Mudar a rota POST para /usuarios
app.post('/usuarios', (req, res) => {
    users.push(req.body); // Adiciona o corpo da requisição à lista de usuários
    
    res.status(201).json(req.body)

    // res.send("Ok, deu certo");
});

app.get('/usuarios', (req, res) => {
    res.status(200).json(users)
    // res.json(users); // Retorna a lista de usuários em JSON
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});

/* 
Username: admin
Password: dPOQ7n2amPbjdYdo
*/