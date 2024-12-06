```javascript
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db('mydatabase');
    const collection = database.collection('mycollection');

    // Correct use of updateOne with upsert:true
    const result = await collection.updateOne({ name: 'John Doe' }, { $set: { age: 30 } }, { upsert: true });
    console.log(result);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
```