$("#container-loader").on("click", function (e) {
    $.getJSON("data.json").done((obj) => {
        let container = $("#container");
        let ul = container.find("ul");
        container.find("h3").html(obj.title);
        obj.items.forEach((itemValue, index) => {
            $("<li>").html(itemValue).appendTo(ul);
        });
        $("#container ul li").addClass("color-red");
    });
});