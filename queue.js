class queue{
    constructor(){
        this.queue = []
    }

    enqueue(element){
        this.queue.push(element);
    }

    dequeue(){
        this.queue.shift();
    }
}