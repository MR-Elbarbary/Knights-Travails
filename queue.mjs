class Node {
    constructor(cords, brev) {
        this.cords = cords;
        this.brev = brev;
        this.next = undefined;
    }
}

export class Queue {
    constructor() {
        this.head = this.tale = undefined;
        this.length = 0;
    }

    enqueue(cords, brev = undefined) {
        const node = new Node(cords, brev);
        if (this.tale === undefined) {
            this.tale = this.head = node;
        }
        else{
        this.tale.next = node;
        this.tale = node;
        }
        this.length++;
    }
    deque() {
        if (!this.head) {
            return undefined
        }
        let node = this.head;
        this.head = this.head.next;
        this.length--;
        if(this.length === 0){
            this.tale = this.head = undefined;
        }
        return node;
    }
}