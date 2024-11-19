# API

```js
const response  = await fetch("/json");   // return the header
const json  = await response.json()       // return the body
``` 

https://github.com/tom-on-the-internet/fetch-demonstration


```js

const fetchJson = async function () {
    console.log("making request")
    let response = await fetch("/json")
    console.log("got response headers, now waiting for the body")
    let myObject = await response.json()
    console.log("turned the JSON in an object")
    console.log(myObject)
}

const fetchStream = async function () {
    outputBox.textContent = ""
    let response = await fetch("/json")
    const decoder = new TextDecoder("utf-8")
    for await (const value of response.body) {
        const chunk = decoder.decode(value)
        outputBox.textContent += chunk
    }
}

```