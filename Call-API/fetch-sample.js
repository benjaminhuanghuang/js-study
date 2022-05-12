
fetch('/readme.txt')
.then(response => response.text())
.then(data => console.log(data));

async function fetchText() {
  let response = await fetch('/readme.txt');
  let data = await response.text();
  console.log(data);
}