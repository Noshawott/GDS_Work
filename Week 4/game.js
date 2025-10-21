console.log("hello world");

var canvas = document.querySelector("canvas")
var ctx = canvas.getContext("2d")




var person = {
    first: "Noah",
    last: "Brisson",

    firstAndLastName: function()
    {
        alert("My name is: " + this.first + " " + this.last)
    }
}

//person.firstAndLastName();
console.log(person.first, person.last)


var square = {
    x: 500,
    y: 500,
    color: "red",
    width: 100,
    height: 100
}


ctx.fillStyle = square.color
ctx.fillRect(square.x, square.y, square.width, square.height)

for(var s = 0; s < 20; s++)
{
    ctx.fillStyle = "red"
    ctx.fillRect(s * 5, s * 5, 20, 20)
}


var colors = []
colors[1] = "red"
colors[2] = "olive"
colors[3] = "yellow"

var person = ["Noah", "Nick", "Nathan"]

colors[4] = "blue"

var num = 0;
for(var s = 10; s < 20; s++)
    {
        if(num > 4)
            num = 0;
        ctx.fillStyle = colors[num]
        ctx.fillRect(s * 5, s * 5, 20, 20)
        num++;
    }

var twodArray = [
    [1, 1, 1, 1, 1, 1, 1, 1],
    [2, 2, 2, 2, 2, 2, 2, 2],
    [3, 3, 3, 3, 3, 3, 3, 3],
    [4, 4, 4, 4, 4, 4, 4, 4]
]

//for(var x = 0; x < twodArray.length; x++)
//{
    //console.log(twodArray[x][4])
//}

for(var x = 0; x < twodArray.length; x++)
{
    for(var y = 0; y < 8; y++)
    {
        console.log(twodArray[x][y])
    }
}

var whileInt = 0;
while(whileInt < 20 * 4)
{
    whileInt++
    console.log(whileInt)
}
