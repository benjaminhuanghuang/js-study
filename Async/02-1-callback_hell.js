const verifyUser = function(username, password, callback){
  dataBase.verifyUser(username, password, (error, userInfo) => {
      if (error) {
          callback(error)
      }else{
          dataBase.getRoles(username, (error, roles) => {
              if (error){
                  callback(error)
              }else {
                  dataBase.logAccess(username, (error) => {
                      if (error){
                          callback(error);
                      }else{
                          callback(null, userInfo, roles);
                      }
                  })
              }
          })
      }
  })
};

const getRoles = function (username, callback){
  database.connect((connection) => {
      connection.query('get roles sql', (result) => {
          callback(null, result);
      })
  });
};