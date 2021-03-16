var arr1=[12,17,24,13,14];


var result=arr1.filter((currentValue,index,arr)=>{
    return !(currentValue%2);
})

console.log(result);