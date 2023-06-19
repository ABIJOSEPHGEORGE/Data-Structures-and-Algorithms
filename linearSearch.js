function linearSearch(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return i;
        }
    }

    return -1;
}

const index = linearSearch([1,3,4,5,99,3,44,99],4);
console.log(index)