
class LoanObserver {
    update(eventData) {
      console.log('Nuevo préstamo creado:', eventData);
    }
  }
  
  module.exports = LoanObserver;
  