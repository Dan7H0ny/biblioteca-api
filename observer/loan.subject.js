
class LoanSubject {
    constructor() {
      this.observers = [];
    }
  
    subscribe(observer) {
      this.observers.push(observer);
    }
  
    notify(eventData) {
      this.observers.forEach(observer => observer.update(eventData));
    }
  }
  
  module.exports = LoanSubject;
  