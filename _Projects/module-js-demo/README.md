# module import

```html
<script type="module"
```
The type="module" attribute in a <script> tag is used to specify that the JavaScript file is a module. 
This is part of the ES6 (ECMAScript 2015) specification, which introduced JavaScript modules to allow 
for better code organization, reuse, and dependency management.

When using type="module", the script is `deferred` by default. 
This means the browser will wait until the HTML is fully parsed before executing the script. 
No need to explicitly use the defer attribute.


In modules, you can use the await keyword at the top level of the script without needing to wrap it in an asynchronous function. This allows for more readable asynchronous code.
```js
// Using top-level await in a module
const data = await fetch('/data.json').then(response => response.json());
console.log(data);
```

You can also use external modules hosted on a CDN, such as from https://unpkg.com or other sources.
```html
<script type="module">
  import { capitalize } from 'https://cdn.jsdelivr.net/npm/lodash-es@4.17.21/lodash.min.js';
  console.log(capitalize('hello world')); // "Hello world"
</script>
```