/**
 * initialize your data structure here.
 */
 var MinStack = function() {
  this.mainStack = [];
  this.minStack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.mainStack.push(x);
  this.minStack.push(Math.min(this.minStack[this.minStack.length - 1], x));
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.mainStack.pop();
  this.minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.mainStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
  return this.minStack.pop();
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */