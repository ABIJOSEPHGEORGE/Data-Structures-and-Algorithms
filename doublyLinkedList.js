class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class linkedList{
    constructor(){
        this.head = null;
        this.size = 0;
        this.tail = null;
    }

    prepend(value){
        const node = new Node(value);
        if(this.size===0){
            this.head = node;
            this.tail = node;
        }else{
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.size++
    }

    append(value){
        const node = new Node(value);
        if(this.size===0){
            this.head = node;
            this.tail = node;
        }else{
            node.prev = this.tail;
            this.tail = node;
        }
        this.size++
    }

    printReverse(){
        let listValue = '';
        let curr =this.tail;
        while(curr){
            listValue+=`${curr.value} `;
            curr = curr.prev;
        }
        console.log(listValue);
    }
}

const list = new linkedList();
list.append(10);
list.append(20);
list.append(30);
list.prepend(100);
list.prepend(200);
list.printReverse()