const server = require('RecipeHelper\server\Server.js');
const app = server.getInstance();

app.get('/', (req,res) =>{
    console.log('Here');
    res.send('Hi');
})


