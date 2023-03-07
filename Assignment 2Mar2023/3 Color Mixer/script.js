//mixing two colors
function mixColors(color1,color2){
  switch(color1){
      //case for red color1
      case 'red':
      switch (color2) {
          case 'blue':
          console.log("purple");
break;
          
case 'yellow':
          console.log("orange");
break;

default :
          console.log("Invalid color mix")
      }
      break ;
      //case for blue color1
case 'blue':
      switch (color2) {
          case 'red':
          console.log("purple");
break;
          
case 'yellow':
          console.log("green");
break;

default :
          console.log("Invalid color mix")
      }
      break;
      //case for yellow color1
case 'yellow':
      switch (color2) {
          case 'red':
          console.log("orange");
break;
          
case 'yellow':
          console.log("green");
break;

default :
          console.log("Invalid color mix")
      }
      break;
//default case for color1

default:
      console.log("Invalid color mix")
}
}
//calling function
mixColors('red','yellow');//orange

