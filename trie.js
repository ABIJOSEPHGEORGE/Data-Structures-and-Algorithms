class Node{
    constructor(value){
        this.value = value;
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie{
    constructor(){
        this.root = new Node(null)
    }

    insert(word){
        let curr = this.root;
        for(let character of word){
            if(curr.children[character]===undefined){
                curr.children[character] = new Node(character)
            }
            curr = curr.children[character];
        }
        curr.isEndOfWord = true;
    }

    search(word){
        let curr = this.root;
        for(let character of word){
            if(curr.children[character]===undefined){
                return false;
            }
            curr = curr.children[character];
        }
        return curr.isEndOfWord;
    }
}

let trie = new Trie();
trie.insert('abin');
trie.insert('george');
console.log(trie.search('abin'));
console.log(trie.search('hello'))