function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype.magnitude = function () {
    return Math.sqrt(x * x + y * y)
}

var point = new Point(100, 10);


console.log(point);


function onSubmit()
{   
    // prevent the form submittion
    preventSubmition();

    //ajax xhlRequest
    ajaxGet("service ulr / employ/1")
    .then(data)
    {   
        // user data has json format;
        setElementInnerText("firstName", data.firstName);
        setElementInnerText("lastName", data.lastName);
        setElementInnerText("dobtName", data.dobtName);
        setElementInnerText("department", data.department);

    }
    .catch(err)
    {
        // show error message
    }
}

function setElementInnerText( id, text)
{
    var ele = document.getElementById(id);
    ele.innerText = text;
}