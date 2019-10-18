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
        return this.items.length == 0;
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


stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);



function renderStack() {
    let html = "";
    let items =  stack.items;
    for (let i = stack.size()-1; i>=0; i--) {
        html += `<div class="lonely-item item${items[i]}">${items[i]}</div>`;
    }
    document.getElementById("stack").innerHTML = html;
}

renderStack();

function showStackSize() {
    document.getElementById("size").innerHTML = ":" + stack.size();
}

function pop() {
    stack.pop();
    renderStack();
}

function peek() {
    let item =stack.peek();
    if(item ==undefined)
    item="stack is empty"
    document.getElementById("peek").innerHTML = ":" + item;

}

function newStack() {
    stack.clear();
    renderStack();
}

function isStackEmpty() {
    let answer="";
    if (stack.isEmpty()) {
        answer = "yes";
    }
    else {
        answer = "no";
    }
    document.getElementById("is-empty").innerHTML=answer;
}

function swapTopTwo(){
    stack.swapTopTwo();
    renderStack();
}

function push(){
    stack.push(stack.size()+1);
    renderStack();
}





