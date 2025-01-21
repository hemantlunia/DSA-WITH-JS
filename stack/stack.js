class Stack {
    #items = [];
    constructor(){
        // this.items = [];
    }

    push(ele){
        this.#items.push(ele)
    }

    pop (){
        if(this.#items.length === 0){
            throw new Error("This is A Empty Array!")
        }
        return this.#items.pop();
    }

    peek(){
        if(this.#items.length === 0){
            throw new Error("This is A Empty Array!")
        }
        return this.#items[this.#items.length - 1];
    }

    isEmpty(){
        return this.#items.length === 0;
    }

    size(){
        return this.#items.length;
    }
}

export default Stack;