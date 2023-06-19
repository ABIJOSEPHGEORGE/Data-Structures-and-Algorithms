class MaxHeap{
    constructor(){
        this.heap = []
    }

    leftChildIndex(i){
        return i*2+1;
    }

    rightChildIndex(i){
        return i*2+2
    }

    parentIndex(i){
        return Math.floor((i-1)/2)
    }

    insert(value){
        this.heap.push(value);
        this._bubbleUp(this.heap.length-1)
    }

    _bubbleUp(i){
        if(i===0){
            return
        }
        const parent = this.parentIndex(i)

        if(this.heap[i]>this.heap[parent]){
            [this.heap[i],this.heap[parent]] = [this.heap[parent],this.heap[i]];
            this._bubbleUp(parent);
        }

    }

    remove(){
        this.heap[0] = this.heap[this.heap.length-1];
        this.heap.pop()
        this._bubbleDown(0)
    }

    _bubbleDown(i){
        let left = this.leftChildIndex(i);
        let right = this.rightChildIndex(i);
        let highest = left;
        if(this.heap[right]>this.heap[left]){
            highest = right
        }

        if(this.heap[highest]>this.heap[i]){
            [this.heap[highest],this.heapp[i]] = [this.heap[i],this.heap[highest]]
            return this._bubbleDown(highest)
        }
    }
}