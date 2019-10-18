class Stack {

    items = [];
    //push item to the stack
    push(item) {
        this.items.push(item);
    }

    //pull out the topmost item (last item) from stack
    pop() {
        this.items.pop();
    }

    // see what's the last item in stack(top of the stack)
    peek() {
        return this.items[this.items.length - 1];
    }

    //return the size of the satck
    size() {
        return this.items.length;
    }

    //return if the stack is empty or not
    isEmpty() {
        return this.length == 0;
    }

    //clear  the stack
    clear() {
        this.items = [];
        return this.items;
    }

    //swaps the top two elements of the stack
    swapTopTwo() {
        let temp = this.items[this.size() - 1];
        this.items[this.size() - 1] = this.items[this.size() - 2];
        this.items[this.size() - 2] = temp;
    }
}


i = new Stack();
i.push(1);
i.push(2);
i.push(3);
i.swapTopTwo();
console.log(i.items);



