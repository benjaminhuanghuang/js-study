/*
https://medium.com/@rossbulat/using-promises-async-await-with-mongodb-613ed8243900
*/

var myPromise = () => (
  new Promise((resolve, reject) => {

    //do something, fetch something....
    //you guessed it, mongo queries go here.
    db.collection('your_collection').find({})
      //I can continue to process my result inside my promise
      .then(function (result) {
        //another query can be called based on my result...
        return updatedResult;
      })
      //This promise may take a while...
      .then(function (result) {
        //post processing, non related mongo code...
        //when you are ready, you can resolve the promise.
        resolve(result);
      });
  })
);


//when you are ready you can resolve the promise.
var somethingWentWrong = (dataReturned == null);

(somethingWentWrong)
  ? reject('something messed up')
  : resolve(result);


// Putting everything together
router.post('/api/get_data', (req, res, next) => {
  try {
    MongoClient.connect(connectionStr, mongoOptions, function (err, client) {
      assert.equal(null, err);
      const db = client.db('db');

      //Step 1: declare promise

      var myPromise = () => {
        return new Promise((resolve, reject) => {

          db
            .collection('your_collection')
            .find({ id: 123 })
            .limit(1)
            .toArray(function (err, data) {
              err
                ? reject(err)
                : resolve(data[0]);
            });
        });
      };

      //Step 2: async promise handler
      var callMyPromise = async () => {

        var result = await (myPromise());
        //anything here is executed after result is resolved
        return result;
      };

      //Step 3: make the call
      callMyPromise().then(function (result) {
        client.close();
        res.json(result);
      });
    }); //end mongo client

  } catch (e) {
    next(e)
  }
});


outer.post('/api/get_data', async (req, res, next) => {
  try {
    MongoClient.connect(connectionStr, mongoOptions, function (err, client) {
      assert.equal(null, err);
      const db = client.db('db');

      //Step 1: declare promise

      var myPromise = () => {
        return new Promise((resolve, reject) => {

          db
            .collection('your_collection')
            .find({ id: 123 })
            .limit(1)
            .toArray(function (err, data) {
              err
                ? reject(err)
                : resolve(data[0]);
            });
        });
      };
      //await myPromise
      var result = await myPromise();
      //continue execution
      client.close();
      res.json(result);
    }); //end mongo client
  } catch (e) {
    next(e)
  }
});

module.exports = router;