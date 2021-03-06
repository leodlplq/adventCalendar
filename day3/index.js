import {input} from './inputs.js';
let CurrentLocationX = 0;
let nbTrees = 0;
let slopes = [[1,1], [3,1], [5,1],[7,1], [1,2]];
let totalNbTrees = [];

input.forEach(line=>{
    
      
    if(line[CurrentLocationX % line.length]== "#"){
        nbTrees++
    }
    
    CurrentLocationX += 3;
});

slopes.forEach(slope=>{
    CurrentLocationX = 0;
    let nbTreesA = 0;
    
    for(let i=0;i<input.length;i+=slope[1]){
        let line = input[i];
          
        if(line[CurrentLocationX % line.length]== "#"){
            nbTreesA++
        }
        CurrentLocationX += slope[0];
    }

    totalNbTrees.push(nbTreesA);
})

console.log(totalNbTrees)
console.log(totalNbTrees.reduce((curr,total) => total*=curr))

console.log(nbTrees)
