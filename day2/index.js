import {input} from './inputs.js';
let nbValid = 0;

const verif = (conditions, password)=>{
    let view = 0;
    console.log(conditions, password);
    password.split('').forEach(letter=>{
        
        if(letter == conditions[1]){
            view++
        }
        
    });
    
    let instance = conditions[0].split('-');
    console.log(instance, view);
    if(view >= parseInt(instance[0]) && view <= parseInt(instance[1])){
        nbValid++;
    }
};

const verif2 = (conditions, password)=>{
    let passwordDecomposed = password.split('');
    let instance = conditions[0].split('-');
    console.log(conditions);
    
    if((passwordDecomposed[parseInt(instance[0])-1] == conditions[1] && passwordDecomposed[parseInt(instance[1])-1] != conditions[1]) || passwordDecomposed[parseInt(instance[0])-1] != conditions[1] && passwordDecomposed[parseInt(instance[1])-1] == conditions[1]){
        nbValid++
    }
    
}

input.forEach(el => {
    let conditions = el.split(': ')[0].split(' ');
    let password = el.split(': ')[1];

    //verif(conditions, password);
    verif2(conditions, password);
});
console.log(input.length)
console.log(nbValid);