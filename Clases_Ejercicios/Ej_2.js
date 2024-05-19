class CajeroAutomatico {
    constructor(Bank) {
      this.Bank = Bank;
      this.clienteActual = null;
      this.encendido = true;
    }
  
    ChangeState(state) {
      this.encendido = state;
    }
  
    iniciarTransaccion(cliente) {
      if (!this.encendido) {
        alert("El cajero automático  se encuentra apagado.");
        return;
      }
  
      this.clienteActual = cliente;
      this.validarPin();
    }
  
    validarPin() {
      let intentos = 0;
      while (intentos < 3) {
        const pin = prompt("Ingrese su PIN de 4 dígitos:");
  
        if (this.banco.validarPin(this.clienteActual.documento, pin)) {
          this.mostrarMenu();
          return;
        } else {
          intentos++;
          console.log("PIN incorrecto. Por favor, inténtelo nuevamente.");
        }
      }
  
      console.log("Ha excedido el número máximo de intentos. Intentelo de nuevo.");
      this.clienteActual = null;
    }
  

    mostrarMenu() {
      let opcion;
      do {
        opcion = prompt("Seleccione una opción:\n1. Retiro en efectivo\n2. Depósito\n3. Transferencia \n4. Consultar saldo\n5. Salir");
  
        switch (opcion) {
          case "1":
            this.realizarRetiro();
            break;
          case "2":
            this.realizarDeposito();
            break;
          case "3":
            this.realizarTransferencia();
            break;
          case "4":
            this.consultarSaldo();
            break;
          case "5":
            console.log("Gracias por usar nuestros servicios");
            break;
          default:
            console.log("Opción inválida.");
        }
      } while (opcion !== "5");
    }
  
    realizarRetiro() {
      
    }
  
    realizarDeposito() {
     
    }
  
    realizarTransferencia() {
     
    }
  
    consultarSaldo() {
    
    }
  }
  
  class Banco {
    constructor() {
    }
  
    validarPin(documento, pin) {
      this.documento = documento
      this.pin = pin
     
    }
  }
  
  class Cliente {
    constructor(documento) {
      this.documento = documento;
    }
  }