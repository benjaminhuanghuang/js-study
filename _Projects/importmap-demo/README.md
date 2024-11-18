## importmap

An Import Map is a new web platform feature that allows you to control how JavaScript modules are resolved and imported in the browser. 
It is primarily used to specify module paths for ES Modules in a way that provides a consistent and centralized mechanism for managing dependencies.

In simpler terms, an Import Map provides a way to define aliases for module paths, enabling you to easily map module names to specific URLs, including local files or CDNs.


```html
<script type="importmap">
{
  "imports": {
    "lodash": "https://cdn.jsdelivr.net/npm/lodash-es@4.17.21/lodash.min.js",
    "myModule": "./modules/myModule.js"
     "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
  }
}
</script>


<script type="module">
  import { debounce } from 'lodash';
  import { myFunction } from 'myModule';

  debounce(myFunction, 200);
</script>
</script>
```