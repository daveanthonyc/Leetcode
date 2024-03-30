// Implement the MinStack class:
// 
//     MinStack() initializes the stack object.
//     void push(int val) pushes the element val onto the stack.
//     void pop() removes the element on the top of the stack.
//     int top() gets the top element of the stack.
//     int getMin() retrieves the minimum element in the stack.
// 
// You must implement a solution with O(1) time complexity for each function.

type ValMinPair = {
    val: number,
    min: number,
}

export class MinStack {
    private stack: ValMinPair[];

    constructor() {
        this.stack = [];
    }

    push(val: number): void {
        this.stack.push({
            val: val,
            min: (this.stack.length === 0) ? val : Math.min(val, this.getMin())
        })
    }

    pop(): void {
        this.stack.pop();
    }

    top(): number {
        return this.stack[this.stack.length-1].val;
    }

    getMin(): number {
        return this.stack[this.stack.length-1].min;
    }
}
