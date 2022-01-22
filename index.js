// Code your solutions in this file
const names=["Guadalupe", "Ollie", "Aki"];

function writeCards(names,occassion){
    const newArray=[];
    for (let i=0;i<names.length;i++){
        newArray.push(`Thank you, ${names[i]}, for the wonderful ${occassion} gift!`);
        debugger;
}
return newArray;
}
writeCards(names);

function countDown(number){
    for (let i=number; i>=0;i--){
        console.log(i);
    }
}
countDown(10);

