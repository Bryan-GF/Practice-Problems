/*
push(val), which pushes an element onto the stack
pop(), which pops off and returns the topmost element of the stack. If there are no elements in the stack, then it should throw an error or return null.
max(), which returns the maximum value in the stack currently. If there are no elements in the stack, then it should throw an error or return null.
*/

class Stack {
    constructor ()  {
        this.orderList = [];
    }

    push (val) {
        this.orderList.push(val);
    }

    pop () {
        if (this.orderList.length < 1) {
            return null;
        }
        return this.orderList.pop();
    }

    max (){
        if (this.orderList.length < 1) {
            return null;
        }
        let max = -Infinity;
        for(let val of this.orderList) {
            if(val > max) {
                max = val;
            }
        }
        return max;
    }
}

const test = () => {
    let stack = new Stack();

    stack.push(3);
    stack.push(4);
    console.log(stack.max());
    console.log(stack.pop());
    console.log(stack.max());
    console.log(stack.pop());
    console.log(stack.pop());
    console.log(stack.max());
}

test()