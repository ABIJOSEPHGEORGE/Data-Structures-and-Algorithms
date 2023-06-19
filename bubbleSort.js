function bubbleSort(arr){
   let swapped;
   do{
        swapped = false;
        for(let i=0;i<arr.length;i++){
            if(arr[i]>arr[i+1]){
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped = true;
            }
        }
   }while(swapped);
   return arr;
}
console.log(bubbleSort([1,14,5,6,98,75,74,12]));

