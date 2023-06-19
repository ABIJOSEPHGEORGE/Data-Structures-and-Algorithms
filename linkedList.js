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
    }

    prepend(value){
        const node = new Node(value);
        if(!this.head){
            this.head = node;
        }else{
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    append(value){
        const node = new Node(value);
        if(!this.head){
            this.head = node;
        }else{
            let prev = this.head;
            while(prev.next){
                prev = prev.next;
            }
            prev.next = node;
        }
        this.size++;
    }

    print(){
        let curr = this.head;
        let listValues = ""
        while(curr){
            listValues+=`${curr.value} `;
            curr = curr.next;
        }
        console.log(listValues);
    }

    insertAt(value,index){
        if(this.size===0){
            return null
        }
        const node = new Node(value);
        if(index===0){
            this.prepend(value);
        }
        let prev = this.head;
        for(let i=0;i<index-1;i++){
            prev = prev.next;
        }
        node.next = prev.next;
        prev.next = node;
        this.size++;

    }

    remove(index){
        if(index<0||index>this.size){
            return null
        }

        if(index===0){
            let removed = this.head;
            this.head = removed.next;
        }else{
            let prev = this.head;
            for(let i=0;i<index-1;i++){
                prev = prev.next;
            }
            let removed = prev.next;
            prev.next = removed.next;
            this.size--;
        }
    }

    removeValue(value){
        if(this.size===0){
            return null;
        }

        if(value===this.head.value){
            this.head =this.head.next;
            this.size--;
        }else{
            let prev = this.head;
            while(prev.next && prev.next!==value){
                prev = prev.next;
            }
            let removed = prev.next;
            prev.next = removed.next;
            this.size--;
        }
    }

    search(value){
        if(this.size===0){
            return null;
        }

        let i=0;
        let curr = this.head;
        while(curr){
            if(curr.value===value){
                return i;
            }
            curr = curr.next;
            i++
        }
        return -1;
    }
}