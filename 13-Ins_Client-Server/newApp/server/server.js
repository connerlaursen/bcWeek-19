const express = require('express');

const PORT = 3001;
const app = express();

app.use(express.static('../client/dist'));

app.get('/', (req, res) => {
    res.render('../client/dist/index.html')
})

app.listen(PORT, () => {
    console.log(`server running on ${PORT}`)
})