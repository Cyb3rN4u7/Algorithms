import { expect } from 'chai';
import 'mocha';

import StackArrayBased from '../../../src/Data_Structures/Stacks/StackObjBased';

describe('Stack Object Based Tests', () => {

    let stack = new StackArrayBased();

    stack.push(0);
    stack.push(10);
    stack.push(100);

    it('should eq to 3', () => {
      expect(stack.size()).to.equal(3);
    });

    it('should isEmpty to be false', () => {
        expect(stack.isEmpty()).to.equal(false);
    });

    it('should peek to be 100', () => {
      expect(stack.peek()).to.equal(100);
      expect(stack.size()).to.equal(3);
    });

    it('should remove the top element', () => {
      expect(stack.pop()).to.equal(100);
      expect(stack.size()).to.equal(2);
      expect(stack.peek()).to.equal(10);
      expect(stack.size()).to.equal(2);
    });

    it('should add new top element 20', () => {
      stack.push(20);
      expect(stack.size()).to.equal(3);
      expect(stack.peek()).to.equal(20);
    });

    it('should remove all items', () => {
      stack.clear();
      expect(stack.size()).to.equal(0);
      expect(stack.isEmpty()).to.equal(true);
      expect(stack.peek()).to.equal(undefined);
      expect(stack.pop()).to.equal(undefined);
    });

   

   

  
  });