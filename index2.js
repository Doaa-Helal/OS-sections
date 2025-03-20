
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://doohelal055:doaahelalmongodb@cluster0.wcb1e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri);

async function main()
{
    await client.connect();
    console.log("connected");

    const db=client.db("OS_SEC");
    const collection=db.collection("Products");

    const data=await collection.find().toArray();
    console.log(data);
    
}
main().catch(console.error);