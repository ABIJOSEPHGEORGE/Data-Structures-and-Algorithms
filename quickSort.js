function quickSort(arr){
    if(arr.length<2){
        return arr;
    }

    let pivot = arr.length-1;
    let left  =[]
    let right = [];

    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i]);
        }

        if(arr[i]>pivot){
            right.push(arr[i]);
        }
    }

    return [...quickSort(left),pivot,...quickSort(right)];
}

console.log(quickSort([1,14,5,6,98,75,74,12]));