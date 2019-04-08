// Using Callback
function successCallback(result) {
  console.log("Audio file ready at URL: " + result);
}

function failureCallback(error) {
  console.log("Error generating audio file: " + error);
}

createAudioFileAsync(audioSettings, successCallback, failureCallback);

// Using permison
createAudioFileAsync(audioSettings).then(successCallback, failureCallback);

const promise = createAudioFileAsync(audioSettings); 
promise.then(successCallback, failureCallback);


// File process using promise
const fs = require('fs');
const text = new Promise(function (resolve, reject) {
    // Normal fs.readFile call, but inside Promise constructor . . . 
    fs.readFile('text.txt', function (err, text) {
      // . . . Call reject if there's an error . . . 
      if (err) 
        reject(err);
      // . . . And call resolve otherwise.
      else
    // We need toString() because fs.readFile returns a buffer.
        resolve(text.toString());
    })
  });

  text.then(function(result) {
    console.log("Promise worked");
  }, function(err) {
    console.log("Something broke");
  });

// promise using XMLHttpRequest load image.
const loadImage = url => {
  return new Promise(function(resolve, reject) {

    //Open a new XHR
    var request = new XMLHttpRequest();
    request.open('GET', url);

    // When the request loads, check whether it was successful
    request.onload = function() {
      if (request.status === 200) {
        // If successful, resolve the promise
        resolve(request.response);
      } else {
        // Otherwise, reject the promise
        reject(Error('An error occurred while loading image. error code:' + request.statusText));
      }
    };

    request.send();
  });
};

const embedImage = url => {
  loadImage(url).then(function(result) {
      const img = new Image();
      var imageURL = window.URL.createObjectURL(result);
      img.src = imageURL;
      document.querySelector('body').appendChild(img);
    },
    function(err) {
      console.log(err);
    });
}