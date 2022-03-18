"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const { MongoClient } = require('mongodb');
async function run() {
    const uri = "mongodb+srv://Admin:tofi2011@rpg-bot.jxnmu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    const mongoclient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        await mongoclient.connect();
        console.log("Mongoose connected");
    }
    catch (e) {
        console.log(e);
    }
    finally {
        await mongoclient.close();
    }
}
exports.run = run;
