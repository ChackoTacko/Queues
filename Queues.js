class Node {
    constructor(data) {
        this.data = data;
        this.next = null
    }
}

class SimpleQueue {
    constructor() {
        this.front = null
        this.rear = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    enqueue(data) {
        const node = new Node(data);
        if (this.rear === null) {
            this.front = this.rear = node;
        } else {
            this.rear.next = node;
            this.rear = node;
        }
        this.size++;
    }

    dequeue() {
        if (this.front === null) {
            return null;
        }
        const temp = this.front;
        this.front = this.front.next;
        if (this.front === null) {
            this.rear = null;
        }
        this.size--;
        return temp.data;
    }

    peek() {
        if (this.front === null){
            return null;
        }
        return this.front.data;
    }

}

module.exports = {
    SimpleQueue
}