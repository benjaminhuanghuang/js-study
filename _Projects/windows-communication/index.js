const card = document.querySelector("./card");

card.onmousedown = (e) => {
  let x = e.pageX - card.offsetLeft;
  let y = e.pageY - card.offsetTop;

  window.onmousemove = (e) => {
    const cx = e.pageX - x;
    const cy = e.pageY - y;
    card.style.left = cx + "px";
    card.style.top = cy + "px";

    //tell other window
    const screenPoints = clientToScreen(cx, cy);
    channel.postMessage(screenPoints);
  };

  window.onmouseup = () => {
    window.onmousemove = null;
    window.onmouseup = null;
  };
};

function init() {
  // pase the url index.html?type=k
  const url = new URL(location.href);
  const type = url.searchParams.get("type") || "Q";
  card.src = `./${type}.png`;
}

init();

// Calc the hight of title + search bar +  menu bar....
function barHeight() {
  return window.outerHeight - window.innerHeight;
}
// view coordination to screen coordination
function clientToScreen(x, y) {
  const screenX = x + window.screenX;
  const screenY = y + window.screenY + barHeight();

  return [screenX, screenY];
}

function screenToClient(x, y) {
  const clientX = x - window.screen.X;
  const clientY = y - window.screenY - barHeight();
  return [clientX, clientY];
}

const channel = new BroadcastChannel("card");
// listen to the other window
channel.onmessage = (e) => {
  const [x, y] = screenToClient(e.data[0], e.data[1]);
  card.style.left = x + "px";
  card.style.top = y + "px";
};
