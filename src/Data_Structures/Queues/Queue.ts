class Queue {
    count: number;
    lowestCount: number;
    items: {[k: string]: any};
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }

    enqueue(element:any) {
        this.items[this.count] = element;
        this.count++;
    }

    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        const first = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return first; 
    }

    peek() {
        if(this.isEmpty()) {
            return undefined;
        }
        return this.items[this.lowestCount];
    }

    size() {
        return this.count - this.lowestCount;
    }

    isEmpty() {
        return this.size() === 0;
    }

    clear () {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }

    toString() {
        let objToStr = '';
        if (this.isEmpty()) {
            return objToStr;
        }
        objToStr = `${this.items[this.lowestCount]}`;
        for(let i = this.lowestCount +1;i<this.count;i++) {
            objToStr = `${objToStr},${this.items[i]}`;
        }
        return objToStr;
    }

   


}

export default Queue;