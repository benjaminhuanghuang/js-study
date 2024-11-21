const card = document.querySelector('./card');

card.onmousedown = (e) => {
    let x = e.pageX - card.offsetLeft;
    let y = e.pageY - card.offsetTop;

    window.onmousemove = (e) => {
        const cx = e.pageX -x;
        const cy = e.pageY -y;
        card.style.left = cx+ 'px';
        card.style.top = cy+'px';
    }

    window.onmouseup = () =>{
        window.onmousemove = null;
        window.onmouseup = null
    }

}

function init() {
    // pase the url index.html?type=k
    const url = new URL(location.href);
    const type = url.searchParams.get('type') || 'Q';
    card.src = `./${type}.png`;
}

init();


