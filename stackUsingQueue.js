class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.head = null;
        this.size =0;
        this.tail = null;
    }

    enqueue(element){
        const node = new Node(element)
        if(!this.size){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            this.tail = node;
        }
        this.size++
    }

    dequeue(){
        if(!this.size){
            return null;
        }else{
            let removed  = this.head;
            this.head = removed.next;
            this.size--;
        }
    }
}


class Stack{
    constructor(){
        this.queue = new Queue()
    }

    push(value){
        let rotate = this.queue.size;
        this.queue.enqueue(value);
        while(rotate){
            this.queue.enqueue(this.queue.dequeue);
            rotate--;
        }
    }
}