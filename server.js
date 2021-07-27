const express = require('express')
const app = express()
const {MongoClient} = require('mongodb');


async function main(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
     const dbUrl = "mongodb+srv://ahsabbir103:sabbir.setpass.mongodb@cluster0.lypfc.mongodb.net/ahsabbir103?retryWrites=true&w=majority"
 

    const client = new MongoClient(dbUrl);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        await  listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

main().catch(console.error);


app.get('/', (req, res) => {
  res.send('Hello World!')
  res.end();
})


const host = '0.0.0.0';
const port = process.env.PORT || 3000;

app.listen(port, host, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})