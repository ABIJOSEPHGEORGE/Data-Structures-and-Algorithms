class Node{
    constructor(value){
        this.value = value;
        this.next = null;
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
            this.head = node;
        }
        this.size++;
    }

    append(value){
        const node = new Node(value);
        if(this.size===0){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            this.tail = node;
        }
        this.size++
    }

    removeFromFront(){
        if(this.size===0){
            return null
        }else{
            this.head = this.head.next;
            this.size--;
        }
    }

    removeFromEnd(){
        if(this.size===0){
            return null;
        }else{
            let prev = this.head;
            while(prev.next!==this.tail){
                prev = prev.next;
            }
            prev.next = null;
        }
        this.size--;
    }

    print(){
        if(this.size===0){
            console.log('empty')
        }else{
            let curr = this.head;
            let listValues = ''
            while(curr){
                
                listValues+=`${curr.value} `
                curr = curr.next;
            }
            console.log(listValues);
        }
    }
}

const list = new linkedList();
list.append(10);
list.append(20);
list.append(30);
list.prepend(40);
list.print()
list.removeFromEnd();
list.print()
list.removeFromFront();
list.print()