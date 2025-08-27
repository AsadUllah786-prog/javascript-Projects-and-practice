console.log("learning the basics of js");


age=Number(prompt("enter your age"));
function canVote(age){
    return age>=18? "eligible for voting":
    "not eligible for vote";
}


console.log(canVote());
buiding traffic signal FileSystem,;

signal=String(prompt("enter the signal")).trim().toLowerCase();
console.log(signal);
function trafficSignalCheck(signal){
    if (signal=="red"){
        console.log("stop the vehicle");

    }else if (signal==="orange"){
        console.log("get ready for moving");
    }else if (signal==="green"){
        console.log("drive the car");
    }
}

console.log((trafficSignalCheck(signal)));


num1=Number(prompt("enter the first number"));

num2=Number(prompt("enter the second number"));

op=String(prompt("enter the operator: +,-,/,*,%,**"))
function calculator(num1,num2, op){
    if(op==="+"){
      result= num1+num2;
      return result;
    }else if (op==="-"){
        result=num1-num2;
        return result;
    }else if (op==="*"){
        result= num1*num2;
        return result;
    }else if (op==="/"){
        if (num2===0){
            console.log("cannot be divided by zero");
        }else{
        result=num1/num2;
        return result;
        }
        
    }else if (op==="%"){
        result=num1%num2;
        result===0?console.log("number is even"):console.log("number is odd");
        return result;
    }else if (op==="**"){
        result =num1**num2;
        return result;
    }else{
        console.log("invalid operator please enter the operator from the given options");
    }

}
console.log(calculator(num1,num2,op));