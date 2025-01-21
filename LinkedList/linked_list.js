class Node {
    constructor(data) {
        this.data = data; // Correctly assign the data parameter
        this.next = null; // Initialize next as null
    }
}

class LinkedList {
    constructor() {
        this.head = null; // Initialize head as null
    }

    insertData(data) {
        const newNode = new Node(data); // Create a new node with the given data

        // If the list is empty, set the head to the new node
        if (this.head === null) {
            this.head = newNode;
        } else {
            // Traverse to the end of the list and append the new node
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    traverse(){
        if(this.head === null){
            return;
        }

        let current = this.head;
        console.log(current.data);

        while (current.next !== null) {
            current = current.next;
            console.log(current.data);
            
        }
        
    }

    deleteNode(datadelete){
        if (this.head === null) {
            return;
        }

        let current = this.head;
        if (current.data === datadelete) {
            this.head = current.next;
            return;
        }

        let prev = null;
        while (current.next !== null) {
            prev = current;
            // console.log(prev,"prev");
            
            current = current.next;
            console.log(current.next,"current");
            if (current.data === datadelete) {
                prev.next = current.next;
                return;
            }
        }
    }

    search(text){
        if (this.head === null) {
            return false;
        }

        let curr = this.head;
        if (curr.data === text) {
            return true;
        }

        while (curr.next !== null) {
            curr = curr.next;
            if (curr.data === text) {
                return true;
            }
        }
        return "Not Found"
    }

    lengthOfNode(){
        if (this.head === null) {
            return 0;
        }

        let counter = 1;
        let curr = this.head;
        while (curr.next !== null) {
            curr = curr.next;
            counter++
        }
        return counter;
    }
}


const list = new LinkedList();
list.insertData(4)
list.insertData(5)
list.insertData(6)
list.insertData(7)
list.insertData(10)
list.insertData(10)

// list.traverse();

// list.deleteNode(4)
// list.deleteNode(10)
list.traverse();

console.log(list.search(6));
console.log(list.lengthOfNode());



