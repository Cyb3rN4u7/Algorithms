//  complexity O(n)
class StackArrayBased{
    items: any[];
    constructor(){
        this.items = [];
    }

    push(item:any){
        this.items.push(item);
    }

    pop(){
        return this.items.pop();
    }

    peek(){
        return this.items[this.items.length -1];
    }

    isEmpty(){
        return this.items.length === 0;
    }

    clear(){
        this.items = [];
    }

    size(){
        return this.items.length;
    }



}

export default StackArrayBased;