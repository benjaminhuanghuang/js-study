// copy to clipboard
// const copyToClipboard = (str) => navigator.clipboard.writeText(str);
// copyToClipboard("Hello, World!");

// day of the year
const dayOfYear = (date) =>
  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
dayOfYear(new Date(2022, 10, 27)); // 331

// gray
const gray = (r, g, b) => {
  0.2126 * r + 0.7152 * g + 0.0722 * b;
};

gray(50, 100, 150); // rgb of gray: (100.7, 100.7, 100.7)

// parse params in query
const parseQuery = (url) => {
  q = {};
  // ([^?&=]+) Captures one or more characters that are not ?, &, or =. This is the key.
  // ([^&]+)?  Captures one or more characters that are not &, as the value. The ? makes this group optional, meaning the value can be empty.
  url.replace(/([^?&=]+)=([^&]+)?/g, (_, k, v) => (q[k] = v));

  return q;
};

console.log(parseQuery("https://www.google.com/search?q=hello")); // { a: '1', b: '2' }
console.log(parseQuery("https://www.google.com/search?a=1&b=2")); // {q: "hello"}
parseQuery("a=1&b=2"); // {a: "1", b: "2"}

// Filter the property
const pick = (obj, ...props) =>
  Object.fromEntries(
    Object.entries(obj).filter(([key]) => props.includes(key))
  );

pick({ a: 1, b: "2", c: 3 }, "a", "c"); // { a: 1, c: 3 }

// Random color
const randomColor = () =>
  "#" +
  Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, "0");
// 36 is the highest base supported by toString(),
const randomString = () => Math.random().toString(36).slice(2);

// Remove tag
const removeTag = (fragment) =>
  new DOMParser().parseFromString(fragment, "text/html").body.textContent || "";

removeTag("<h1>Hello, World!</h1>"); // "Hello, World!"