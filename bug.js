```javascript
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db('mydatabase');
    const collection = database.collection('mycollection');

    // Incorrect use of updateOne without upsert:true, leading to no changes when a document doesn't exist
    const result = await collection.updateOne({ name: 'John Doe' }, { $set: { age: 30 } });
    console.log(result);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
```