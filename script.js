var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav_bar").style.top = "0";
  } else {
    document.getElementById("nav_bar").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
}


function percentage1(){
    const numb0 = document.getElementsByClassName("inside-circle")[0];{
      let counter = 0;
      setInterval(()=>{
        if(counter == 85){
          clearInterval();
        }else{
          counter+=1;
          numb0.textContent = counter + "%";
        }
      }, 23);
    }

    const numb1 = document.getElementsByClassName("inside-circle")[1];{
      let counter = 0;
      setInterval(()=>{
        if(counter == 70){
          clearInterval();
        }else{
          counter+=1;
          numb1.textContent = counter + "%";
        }
      }, 25);
    }

    const numb2 = document.getElementsByClassName("inside-circle")[2];{
      let counter = 0;
      setInterval(()=>{
        if(counter == 75){
          clearInterval();
        }else{
          counter+=1;
          numb2.textContent = counter + "%";
        }
      }, 25);
    }
}

function percentage2(){
    const numb3 = document.getElementsByClassName("inside-circle")[3];{
      let counter = 0;
      setInterval(()=>{
        if(counter == 60){
          clearInterval();
        }else{
          counter+=1;
          numb3.textContent = counter + "%";
        }
      }, 29);
    }

    const numb4 = document.getElementsByClassName("inside-circle")[4];{
      let counter = 0;
      setInterval(()=>{
        if(counter == 50){
          clearInterval();
        }else{
          counter+=1;
          numb4.textContent = counter + "%";
        }
      }, 36);
    }

    const numb5 = document.getElementsByClassName("inside-circle")[5];{
      let counter = 0;
      setInterval(()=>{
        if(counter == 65){
          clearInterval();
        }else{
          counter+=1;
          numb5.textContent = counter + "%";
        }
      }, 27);
    }
}

