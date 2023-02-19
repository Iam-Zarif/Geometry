
document.getElementById('blog').addEventListener('click' , function(){
    window.open('blog.html');
})

 function calc(bOrD1, hOrD2) {
   const result = 0.5 * parseFloat(bOrD1) * parseFloat(hOrD2);
   return result;
 }
 

// 


function onTriangleButtonClick() {
  const bOrD1 = document.getElementsByClassName("b-or-d1")[0].value;
  const hOrD2 = document.getElementsByClassName("h-or-d2")[0].value;
  if (bOrD1 <= 0 || hOrD2 <= 0 || bOrD1 === "" || hOrD2 === "") {
    alert("Invalid input");
    
  } else {
// 

// 
    const result = (parseFloat(bOrD1) * parseFloat(hOrD2) * 0.5).toFixed(2);
    let calc1 = document.getElementById("calc-1");
    if (result % 1 === 0) {
      calc1.innerText = parseInt(result);
    }
    
    else {
      calc1.innerText = result;
    }
  }
}
// 
function onRhombusButtonClick() {
  const d1 = document.getElementsByClassName("b-or-d1")[1].value;
  const d2 = document.getElementsByClassName("h-or-d2")[1].value;
  if (d1 <= 0 || d2 <= 0 || d1 === "" || d2 === "") {
    alert("Invalid input");
  } else {
    const result = (parseFloat(d1) * parseFloat(d2) * 0.5).toFixed(2);
    let calc2 = document.getElementById("calc-2");
    if (result % 1 === 0) {
      calc2.innerText = parseInt(result);
    } else {
      calc2.innerText = result;
    }
  }
}

// 
function onRectangleButtonClick() {
  const bOrD1 = document.getElementsByClassName("w-or-p ")[0].value;
  const hOrD2 = document.getElementsByClassName("l-or-b")[0].value;
  if (bOrD1 <= 0 || hOrD2 <= 0 || bOrD1 === "" || hOrD2 === "") {
    alert("Invalid input");
    
  } else {
    const result =( parseFloat(bOrD1) * parseFloat(hOrD2)).toFixed(2);
    let calc3 = document.getElementById("calc-3");
     if (result % 1 === 0) {
       calc3.innerText = parseInt(result);
     } else {
       calc3.innerText = result;
     }
  }
}
//
function onParallelogramButtonClick() {
  const d1 = document.getElementsByClassName("w-or-b")[0].value;
  const d2 = document.getElementsByClassName("l-or-h")[0].value;
  if (d1 <= 0 || d2 <= 0 || d1 === "" || d2 === "") {
    alert("Invalid input");
  } else {
    const result = (parseFloat(d1) * parseFloat(d2)).toFixed(2);
    let calc4 = document.getElementById("calc-4");
    if(result % 1 === 0){
calc4.innerText = parseInt(result);

    }
    else{
      calc4.innerText = result;
    }
  }
}
// 

document
  .getElementById("triangle-btn")
  .addEventListener("click", onTriangleButtonClick);
document
  .getElementById("rhombus-btn")
  .addEventListener("click", onRhombusButtonClick);
//   
document
  .getElementById("rectangle-btn")
  .addEventListener("click", onRectangleButtonClick);
document
  .getElementById("parallelogram-btn")
  .addEventListener("click", onParallelogramButtonClick);
// 
// 
// 
// 
// 
document.getElementById("pentagon").addEventListener('click' , function(){
    calc5 = document.getElementById("calc-5");
    calc5.innerText  = (parseFloat(5*7)* 0.5).toFixed(2);
});

// 
document.getElementById("ellipse").addEventListener("click", function () {
  calc5 = document.getElementById("calc-6");
  calc5.innerText = (parseFloat(11 * 7) * 3.1416).toFixed(2);
});



// 


 document.getElementById("line-1").style.display = "none";


 document.getElementById("triangle-btn").addEventListener("click", function () {
  let calc1 = document.getElementById('calc-1');
  
  if(calc1.innerText <= 0){
    document.getElementById("line-1").style.display = "none";
  }
  
   else{
    document.getElementById("line-1").style.display = "inline";
  }
 });

  document.getElementById("line-2").style.display = "none";
  document.getElementById("rhombus-btn").addEventListener("click", function () {
    let calc2 = document.getElementById("calc-2");

    if (calc2.innerText <= 0) {
      document.getElementById("line-2").style.display = "none";
    } else {
      document.getElementById("line-2").style.display = "inline";
    }
  });

    document.getElementById("line-3").style.display = "none";
    document.getElementById("rectangle-btn").addEventListener("click", function () {
         let calc3 = document.getElementById("calc-3");

         if (calc3.innerText <= 0) {
           document.getElementById("line-3").style.display = "none";
         } else {
           document.getElementById("line-3").style.display = "inline";
         }
       });

        document.getElementById("line-4").style.display =
          "none";
        document
          .getElementById("parallelogram-btn")
          .addEventListener("click", function () {
            let calc4 = document.getElementById("calc-4");

            if (calc4.innerText <= 0) {
              document.getElementById("line-4").style.display = "none";
            } else {
              document.getElementById("line-4").style.display = "inline";
            }
          });

           document.getElementById("line-5").style.display =
             "none";

           document
             .getElementById("pentagon")
             .addEventListener("click", function () {

               let calc5 = document.getElementById("calc-5");

               if (calc5.innerText <= 0) {
                 document.getElementById("line-5").style.display = "none";
               } else {
                 document.getElementById("line-5").style.display = "inline";
               }
             });

              document.getElementById("line-6").style.display = "none";
              document
                .getElementById("ellipse")
                .addEventListener("click", function () {
                  document.getElementById("line-6").style.display = "inline";
                });

                

// 
function randomColor() {
  let numbers = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += numbers[Math.floor(Math.random() * 16)];
  }
  return color;
}

let theColors = document.querySelectorAll(".bg-color");
theColors.forEach((theColor) => {
  theColor.addEventListener("mouseover", function () {
    theColor.style.backgroundColor = randomColor();
  });
});


// function hover(event) {
//   event.stopPropagation(); // stop the event from bubbling up the DOM tree
//   event.target.style.backgroundColor = randomColor();
// }

// function normal(event) {
//   event.target.style.backgroundColor = "";
// }

// document
//   .getElementById("bg-color-triangle")
//   .addEventListener("mouseover", function (event) {
//     hover(event);
//   });


//   // 
//   document
//     .getElementById("bg-color-rhombus")
//     .addEventListener("mouseover", function (event) {
//       hover(event);
      
//     });

//   // 
//   document
//     .getElementById("bg-color-rectangle")
//     .addEventListener("mouseover", function (event) {
//       hover(event);
//     });
  
//     // 

// document
//   .getElementById("bg-color-pentagon")
//   .addEventListener("mouseover", function (event) {
//     hover(event);
//   });
// document
//   .getElementById("bg-color-parallelogram")
//   .addEventListener("mouseover", function (event) {
//     hover(event);
//   });
// document
//   .getElementById("bg-color-ellipse")
//   .addEventListener("mouseover", function (event) {
//     hover(event);
//   });



