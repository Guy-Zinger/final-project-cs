const express = require('express');

//test
class Server{
    constructor(){
        const app = express();
        app.listen(8080);
    }

    static getInstance(){
        if (!Server.instance){
            Server.instance = new Server();
        }
        return Server.instance;
    }
}

module.exports = Server;
