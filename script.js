let string = "";
let buttons = document.querySelectorAll(".btns");
Array.from(buttons).forEach((btns)=>{
    btns.addEventListener('click' , (e)=>{
        if(e.target.innerHTML == "="){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == "AC"){
            string =""
            document.querySelector('input').value = string;

        }
        else if(e.target.innerHTML == "DEL"){
            string = string.substring(0, string.length-1);
            document.querySelector('input').value = string;

        }
        else{
        console.log(e.target)
        string = string + e.target.innerHTML;
        document.querySelector('input').value= string;
        }
    })
    
 } )
