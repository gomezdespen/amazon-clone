const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51HyKrbBIkpIu7Pdn6Mz5gCBg7tOHC4a4Z7mH44GUjafvaRW9qbrDZiNJWFoJl8s6NX6ulzrT7QabVszwCNK1xYIX00Bfw3hL3V');

// API

// App config
const app = express();

// Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment request recieved Boom!! for this amount >>>', total);

    const paymentIntent = await stripe.paymentIntents.create({
            amount: total,
            currency: "usd",
    });

// ok- created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// listen command
exports.api = functions.https.onRequest(app);

// example endpoint
// http://localhost:5001/clone-d3a88/us-central1/api