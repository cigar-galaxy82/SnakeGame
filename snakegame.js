var cvs=document.getElementById("canvas");
var ctx=cvs.getContext("2d");//leading to formation of canvasrendering context 2D
//ctx=document.getElementById("canvas").getContext("2d")
var snakeW=10;
var snakeH=10;
var dir="right";//decides starting direction of snake
function drawsnake(x,y) {
  	ctx.fillStyle="white";
    ctx.fillRect(x*snakeW,y*snakeH,snakeW,snakeH);
    ctx.fillStyle="black";
    ctx.strokeRect(x*snakeW,y*snakeH,snakeW,snakeH);
  }  

  //create snake
   var len=4;
   var snake=[];
   for(var i=len-1;i>=0;i--)
   {
   	 snake.push({x:i,
   	 	y:0
   	     })
   }

   //control dir
   document.addEventListener("keydown",dircontrol) //whole document is linked to keydown event
   function dircontrol(event)
   {
     if(event.keyCode==37 && dir!="right")// CONFUSION
     {
     	dir="left";
     } 
     else if(event.keyCode==38 && dir!="down")// CONFUSION
     {
     	dir="up";
     } 
     else if(event.keyCode==39 && dir!="left")
     {
     	dir="right";
     } 
     else if(event.keyCode==40&& dir!="up")
     {
     	dir="down";
     } 
   }
   //food
   var food={
   	x:Math.round(Math.random()*(cvs.width/snakeW-1)+1),
   	y:Math.round(Math.random()*(cvs.height/snakeH-1)+1)
   }
   //drawfood
   function drawfood(x,y)
   {
   	ctx.fillStyle="red";
    ctx.fillRect(x*snakeW,y*snakeH,snakeW,snakeH);
    ctx.fillStyle="black";
    ctx.strokeRect(x*snakeW,y*snakeH,snakeW,snakeH);

   }
   //draw function
   function draw()
   {
   	ctx.clearRect(0,0,cvs.width,cvs.height)
    for(var i=0;i<snake.length;i++)
   {
   	  var X=snake[i].x//CONFUSION
   	  var Y=snake[i].y
   	  drawsnake(X,Y);
   }
   drawfood(food.x,food.y)
   // snake head
   var snakeX=snake[0].x
   var snakeY=snake[0].y
    if(snakeX<0||snakeY<0|| snakeX>=cvs.width/snakeW||snakeY>=cvs.height/snakeH)

   {
   	alert("GAME OVER")
   }
  if(dir=="right")
  {
  	snakeX++
  }
  else  if(dir=="left")
  {
  	snakeX--
  }
  else  if(dir=="up")
  {
  	snakeY--
  }
  else  if(dir=="down")
  {
  	snakeY++
  }

  
  if(snakeX==food.x && snakeY==food.y)
  { 
     food={
   	x:Math.round(Math.random()*(cvs.width)/snakeW+1),//this maybe is where x and y comes from
   	y:Math.round(Math.random()*(cvs.width)/snakeH+1) //this maybe is where x and y comes from
   }
    var newhead={
     x:snakeX,
     y:snakeY
   }
  }
  else{
            snake.pop();
            var newhead={
            x:snakeX,
            y:snakeY
   }
  }
   //new head
  
   
   snake.unshift(newhead);
   }
   setInterval(draw,100)
   


