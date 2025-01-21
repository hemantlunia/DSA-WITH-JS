class Queue{
    #itmes= [];

    enqueue(item ){
       this.#itmes.push(item)
       return this.#itmes
       
    }

    dequeue(){
        if (this.#itmes.length === 0) {
            throw new Error("No item")
        }
        return this.#itmes.shift();
    }

    peek(){
        if (this.#itmes.length === 0) {
            throw new Error("No item for peeking")
        }
        return this.#itmes[0];
    }
    isEmpty(){
        return this.#itmes.length === 0;
    }

    size(){
        return this.#itmes.length;
    }
}

const queue = new Queue();



const deq1 = queue.enqueue(83)
const deq2 = queue.enqueue(84)
console.warn(deq1);

const deq = queue.peek()
console.log(deq);

