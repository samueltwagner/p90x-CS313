var express = require('express');
var router = express.Router();
const {MongoClient} = require('mongodb');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, 'p90x/index.html'));
});


async function main(){
  const uri = "mongodb://localhost:27017/P90XDb";
  const client = new MongoClient(uri, { useUnifiedTopology: true } );

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

  async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
  
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
  };
}

main().catch(console.error);

module.exports = router;
