//intial value;
let count=0;


const display=document.getElementById("Answer");
const btns=document.querySelectorAll(".btn");
console.log(btns);
let icon=document.getElementById("icon");

//for each
btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        // console.log(e.currentTarget.textContent);
        //   console.log(e.currentTarget);
        //     console.log(e.target);
            // console.log(e.currentTarget.classList)
            const counting=e.currentTarget.classList;
            if(counting.contains("decrease")){
                count--;
            }
            else if(counting.contains("increase")){
                count++;
            }
            else{
                count=0;
            }
            if(count<0){
                display.style.color="red";
            }
            else if(count>0){
                display.style.color="green";
            }
            else{
                display.style.color="blue";
            }
            display.textContent=count;
    })

})