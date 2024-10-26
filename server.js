// require('dotenv').config();
// const express = require('express');
// const fetch = require('node-fetch');
// const app = express();
// const port = process.env.PORT || 3000;

// // Middleware para habilitar CORS
// app.get("/", (req, res) => {
//     return res.json("Olá, Mundo!")
// })

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, access_token');
    
//     // Se a requisição for do tipo OPTIONS (preflight), responde com status 200
//     if (req.method === 'OPTIONS') {
//         return res.status(200).json({});
//     }
    
//     next();
// });

// app.use(express.json());

// app.post('/create-charge', async (req, res) => {
//     const chargeData = req.body;
//     const response = await fetch('https://sandbox.asaas.com/api/v3/payments', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'access_token': process.env.API_CHAVE
//             // Substitua pela sua chave de API
//         },
//         body: JSON.stringify(chargeData)
//     });
//     const data = await response.json();
//     res.json(data);
// });

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });

require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = process.env.PORT || 3000;

// Middleware para habilitar CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, access_token');
    if (req.method === 'OPTIONS') {
        return res.status(200).json({});
    }
    next();
});

app.use(express.json());

app.get("/", (req, res) => {
    res.json("Olá, Mundo!");
});

app.post('/create-charge', async (req, res) => {
    const chargeData = req.body;
    const response = await fetch('https://sandbox.asaas.com/api/v3/payments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'access_token': process.env.API_CHAVE // Substitua pela sua chave de API
        },
        body: JSON.stringify(chargeData)
    });
    const data = await response.json();
    res.header('Access-Control-Allow-Origin', '*'); // Adicione este cabeçalho aqui também
    res.json(data);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
