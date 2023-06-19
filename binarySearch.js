function binarySearch(arr,target){
    return search(arr,target,0,arr.length-1)
}

function search(arr,target,leftIndex,rightIndex){
    if(leftIndex>rightIndex){
        return -1;
    }

    let middleIndex = Math.floor((leftIndex+rightIndex)/2);
    if(arr[middleIndex]===target){
        return middleIndex;
    }

    if(target<arr[middleIndex]){
        return search(arr,target,leftIndex,middleIndex-1);
    }

    if(target>arr[middleIndex]){
        return search(arr,target,middleIndex+1,rightIndex);
    }

    return -1
}


console.log(binarySearch([1,3,4,5,6,9,10,23],9));