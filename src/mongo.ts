const { MongoClient } = require('mongodb');

export async function run() {
    const uri = "mongodb+srv://Admin:tofi2011@rpg-bot.jxnmu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    const mongoclient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        await mongoclient.connect();
        console.log("Mongoose connected")
    } 
    catch (e){
        console.log(e)
    } 
    finally {
        await mongoclient.close()
    }
}