function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let numberToInsert = arr[i];
        let j = i-1;
        while(j>=0&&arr[j]>numberToInsert){
            arr[j+1] = arr[j];
            j = j-1;
        }
        arr[j+1] = numberToInsert;
    }
    return arr;
}

console.log(insertionSort([1,14,5,6,98,75,74,12]));