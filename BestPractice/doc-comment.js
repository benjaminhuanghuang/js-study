/**
 * Get random number between min and max
 * @param {number} min - The minimum number
 * @param {number} max - The maximum number
 * @returns {number} The random number
 * @example
 * getRandomNumber(1, 10); // get random number in range [1,10]
 */

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



/**
 * Network request
 * @param {object} options  The configuration object
 * @param {string} options.url The URL to make the request
 * @param {'GET'|'POST'} options.method The method
 * @param {object} options.body
 * @param {object} options.headers 
 */
async function request(options){

}

function all(){
    //getRandomNumber
}