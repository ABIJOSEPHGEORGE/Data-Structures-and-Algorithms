function heapify(arr,length,parentIndex){
    let largest = parentIndex;
    let left = parentIndex*2+1;
    let right = parentIndex*2+2;

    if(left<length&&arr[left]>arr[largest]){
        largest = left;
    }

    if(right<length&&arr[right]>arr[largest]){
        largest = right;
    }

    if(largest!==parentIndex){
        [arr[largest],arr[parentIndex]] = [arr[parentIndex],arr[largest]];
        heapify(arr,length,largest);
    }
}

function heapSort(arr){
    const length = arr.length;
    const mid = Math.floor((length/2)-1);

    for(let i=mid;i>=0;i--){
        heapify(arr,length,i)
    }

    for(let i=length-1;i>0;i--){
        [arr[0],arr[i]] = [arr[i],arr[0]];
        heapify(arr,length,0)
    }
    return arr;
}

console.log(heapSort([1,2,4,5,2,33,44,8]))