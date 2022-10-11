let keys = document.querySelectorAll("#keyboard>div");
let bag="";
for(let i=0;i<keys.length;i++){
    keys[i].addEventListener("click",myCalculator)
}
function myCalculator(event){
    // console.log("inside function");
    // console.log(event.target);
    // console.log(event.target.innerText);
    let targetNumber = event.target.innerText;
    if (targetNumber == "C") {
        bag="";
        document.querySelector("#display").innerText="";
    }
    else if(targetNumber== "="){
        // console.log(bag);
        // console.log(eval(bag));
        let ans=eval(bag);

        if(ans==Infinity){
        alert(ans);
        }else if(bag=="")
        {
            document.querySelector("#display").innerText="";
        }
        else{
            document.querySelector("#display").innerText=eval(bag);
        }
    }
        else{
    bag= bag+targetNumber;
    document.querySelector("#display").innerText=bag;
    }
}