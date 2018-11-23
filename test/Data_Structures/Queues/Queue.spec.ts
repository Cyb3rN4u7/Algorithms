import { expect } from 'chai';
import 'mocha';
import Queue from '../../../src/Data_Structures/Queues/Queue';

describe('Queue Tests', ()=>{

    it('should be empty',()=>{
        let queue = new Queue();
        expect(queue.size()).equals(0);
        expect(queue.isEmpty()).equals(true);
        expect(queue.peek()).equals(undefined);
    });

    it('should add elements A,B,C as expected ', ()=>{
        let queue = new Queue();
        queue.enqueue('A');
        queue.enqueue('B');
        queue.enqueue('C');
        expect(queue.size()).to.equal(3);
        expect(queue.peek()).to.equal('A');
        expect(queue.size()).to.equal(3);
    });

    it('should remove properly items', ()=>{
        let queue = new Queue();
        queue.enqueue('A');
        queue.enqueue('B');
        queue.enqueue('C');
        expect(queue.size()).to.equal(3);
        expect(queue.dequeue()).to.equal('A'); // A
        expect(queue.peek()).to.equal('B');
        expect(queue.size()).to.equal(2);
        queue.dequeue(); // B
        queue.dequeue(); // C
        expect(queue.dequeue()).to.equal(undefined);
        expect(queue.size()).to.equal(0);
        expect(queue.isEmpty()).to.equal(true);
    });

    it('should remove everything', ()=>{
        let queue = new Queue();
        queue.enqueue('A');
        queue.enqueue('B');
        queue.enqueue('C');
        expect(queue.size()).to.equal(3);
        queue.clear();
        expect(queue.size()).to.equal(0);
    });

    it('should print the contents',()=>{
        let queue = new Queue();
        expect(queue.toString()).to.equal('');
        queue.enqueue('A');
        expect(queue.toString()).to.equal('A');
        queue.enqueue('B');
        expect(queue.toString()).to.equal('A,B');
        queue.enqueue('B');
        expect(queue.toString()).to.equal('A,B,B');
    })



});