let doc = document;

doc.getElementById("container-loader").addEventListener("click", function (e) {
    fetch("data.json").then((response) => {
        response.json().then((obj) => {
            let container = doc.getElementById("container");
            let ul = doc.querySelector("ul");
            container.querySelector("h3").innerHTML = obj.title;
            obj.items.forEach((item, index) => {
                let li = doc.createElement("li");
                li.innerHTML = item;
                ul.appendChild(li);
            });
            ul.classList.add("fade-in");
            doc.querySelectorAll("#container ul li").forEach((element, index)=>{
                element.classList.add("color-red")
            });
        });
    });
});