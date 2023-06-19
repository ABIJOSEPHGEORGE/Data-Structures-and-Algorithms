class HashTable{
    constructor(size){
        this.table = new Array(size);
        this.size = size
    }

    hash(key){
        let total = 0;
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i);
        }
        return total%this.size;
    }

    insert(key,value){
        const index = this.hash(key);
        const bucket = this.table[index];
        if(!bucket){
            this.table[index] = [[key,value]];
        }else{
            const sameKeyItem = bucket.find(item=>item[0]===key);
            if(sameKeyItem){
                sameKeyItem[1] = value;
            }else{
                bucket.push([key,value])
            }
        }
    }

    get(key){
        const index = this.hash(key);
        const bucket = this.table[index];
        if(!bucket){
            return undefined;
        }else{
            const sameKeyItem = bucket.find(item=>item[0]===key);
            if(sameKeyItem){
                return sameKeyItem[1]
            }
        }
    }

    remove(key){
        const index = this.hash(key);
        const bucket = this.table[index];
        if(!bucket){
            return undefined;
        }else{
            const sameKeyItem = bucket.find(item=>item[0]===key);
            if(sameKeyItem){
                bucket.splice(sameKeyItem,1)
            }
        }
    }
}

const table = new HashTable()
table.insert('name','abin');
table.insert('name','george');
table.insert('place','calicut');
console.log(table.get('name'));
table.remove('calicut');

console.log(table.get('calicut'));