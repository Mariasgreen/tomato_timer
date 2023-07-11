class CounterObject {
    constructor(name, counter = 0) {
      this._id = generateUniqueId();
      this._name = name;
      this._counter = counter;
    }
  
    changeCounter() {
      this._counter += 1;
    }
  
    changeName(newName) {
      this._name = newName;
    }
  
    get id() {
      return this._id;
    }
  
    get name() {
      return this._name;
    }
  
    get counter() {
      return this._counter;
    }
  }
  
  function generateUniqueId() {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  }
  
  const myCounter = new CounterObject('example', 3);
  myCounter.changeCounter();
  console.log(myCounter.counter); 

  myCounter.changeName('new name');
  console.log(myCounter.name);