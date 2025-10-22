// console.log("hello world");

var canvas = document.querySelector("canvas")
var ctx = canvas.getContext("2d")




// var person = {
//     first: "Noah",
//     last: "Brisson",

//     firstAndLastName: function()
//     {
//         alert("My name is: " + this.first + " " + this.last)
//     }
// }

// //person.firstAndLastName();
// console.log(person.first, person.last)


// var square = {
//     x: 500,
//     y: 500,
//     color: "red",
//     width: 100,
//     height: 100
// }


// ctx.fillStyle = square.color
// ctx.fillRect(square.x, square.y, square.width, square.height)

// for(var s = 0; s < 20; s++)
// {
//     ctx.fillStyle = "red"
//     ctx.fillRect(s * 5, s * 5, 20, 20)
// }


// var colors = []
// colors[1] = "red"
// colors[2] = "olive"
// colors[3] = "yellow"

// var person = ["Noah", "Nick", "Nathan"]

// colors[4] = "blue"

// var num = 0;
// for(var s = 10; s < 20; s++)
//     {
//         if(num > 4)
//             num = 0;
//         ctx.fillStyle = colors[num]
//         ctx.fillRect(s * 5, s * 5, 20, 20)
//         num++;
//     }

// var twodArray = [
//     [1, 1, 1, 1, 1, 1, 1, 1],
//     [2, 2, 2, 2, 2, 2, 2, 2],
//     [3, 3, 3, 3, 3, 3, 3, 3],
//     [4, 4, 4, 4, 4, 4, 4, 4]
// ]

// //for(var x = 0; x < twodArray.length; x++)
// //{
//     //console.log(twodArray[x][4])
// //}

// for(var x = 0; x < twodArray.length; x++)
// {
//     for(var y = 0; y < 8; y++)
//     {
//         console.log(twodArray[x][y])
//     }
// }

// var whileInt = 0;
// while(whileInt < 20 * 4)
// {
//     whileInt++
//     console.log(whileInt)
// }



//wednesday work

var timer = setInterval(main, 1000/60);

var x = 50;
var y = canvas.height / 2
var w = 10;
var h = 10;
var moveAmountX = 20;
var moveAmountY = 20;

var box = new GameObject(canvas);
box.x = 72;
box.y = 84;
box.width = 100;
box.height = 100;


var box2 = new GameObject(canvas)
box2.width = 50;
box2.height = 50;
box2.x = canvas.width / 2;
box2.y = canvas.height/2;
box2.color = "blanchedalmond"


var r = Math.round(Math.random() * 5)


var lr = Math.floor(Math.random * 5)


function main()
{
    ctx.clearRect(0,0,canvas.width, canvas.height)


    box.renderRect();


    box.color = "purple"

    box2.renderRect()

    box.move();
    box2.move();




    x += moveAmountX;
    y += moveAmountY;
    ctx.fillStyle = "red"
    ctx.beginPath();
    ctx.arc(x,y,50,0,2 * Math.PI)
    ctx.fill();

    if(x>canvas.width - 50)
    {
        moveAmountX *= -1;
    }
    if(y>canvas.height - 50)
    {
        moveAmountY *= -1;
    }
    if(y<50)
    {
        moveAmountY *= -1;
    }
    if(x<50)
    {
        moveAmountX *= -1;
    }
}