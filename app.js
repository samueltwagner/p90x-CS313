var express = require('express');
var router = express.Router();
const port = process.env.PORT || 5000;
const {MongoClient} = require('mongodb');

// tell it to use the public directory as one where static files live
app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/weight', calculateWeight);

app.get('/' , function(req , res){
  res.sendFile('form.html', { root: __dirname + "/public"});
})

// start the server listening
app.listen(port, function() {
  console.log('Node app is running on port', port);
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, 'p90x/app.js'));
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

function calculateWeight(request, response) {
	const startWeight = request.query.startWeight;
	const currentWeight = Number(request.query.currentWeight);

	computeLoss(startWeight, currentWeight);
}

function computeLoss(startWeight, currentWeight) {
  const params = {startWeight: startWeight, currentWeight:currentWeight};
	response.render('pages/result', params);
}

main().catch(console.error);

module.exports = router;








