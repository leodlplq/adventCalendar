import {input} from './inputs.js'

//two input addition
input.forEach((number)=>{
    let toFind = 2020 - parseInt(number);
    let otherOne = input.find(toFindE=> parseInt(toFindE)==toFind);
    if(otherOne != undefined){
        //console.log(parseInt(number)*parseInt(otherOne));
        
    }
});

//three input addition
input.forEach((number)=>{
    input.forEach(number2=>{
        let toFind = 2020 - parseInt(number) - number2;
        let otherOne = input.find(toFindE=> parseInt(toFindE)==toFind);
        if(otherOne != undefined){
            console.log(parseInt(number)*parseInt(otherOne)* parseInt(number2));
            
        }
    });
    
});

