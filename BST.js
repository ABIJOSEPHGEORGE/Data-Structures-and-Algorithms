class Node{
    constructor(value){
        this.value = value;
        this.right = null;  
        this.left = null;
    }
}

class BST{
    constructor(){
        this.root = null;
    }

    insert(value){
        const node = new Node(value)
        if(!this.root){
            this.root = node;
        }else{
            this.insertNode(this.root,node)
        }
    }

    insertNode(root,node){
        if(node.value<root.value){
            if(root.left===null){
                root.left = node;
            }else{
                return this.insertNode(root.left,node)
            }
            
        }else{
            if(root.right===null){
                root.tight = node;
            }else{
                return this.insertNode(root.right,node)
            }
        }
    }

    search(root,value){
        if(!root){
            return false;
        }

        if(root.value===value){
            return true
        }

        if(value<root.value){
            return this.search(root.left,value)
        }else{
            return this.search(root.right,value)
        }
    }

    min(root){
        if(root.left){
            return this.min(root.left)
        }else{
            return root.value;
        }
    }

    max(root){
        if(root.right){
            return this.min(root.right)
        }else{
            return root.value;
        }
    }

    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value);
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        }
    }

    delete(value){
        this.root = this.deleteNode(this.root,value)
    }

    deleteNode(root,value){
        if(root.value===null){
            return root;
        }

        if(value<root.value){
            root.left = this.deleteNode(root.left,value)
        }else if(value>root.value){
            root.right = this.deleteNode(root.right,value)
        }else{
            if(!root.right&&!root.left){
                return null
            }

            if(!root.left){
                return root.right;
            }else if(!root.right){
                return root.left;
            }else{
                root.value = this.min(root.right);
                root.right = this.deleteNode(root.right,root.value)
            }
        }
        return root;
    }

    isBST(root){
        if(root.value===null){
            return null
        }

        if(root.left!==null&&this.max(root.left)>root.value){
            return false;
        }

        if(root.right!==null&&this.max(root.right)<root.value){
            return false;
        }

        if(!this.isBST(root.left)||!this.isBST(root.right)){
            return false;
        }
        return true; 
    }
}