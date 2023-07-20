import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class AppComponent {
  title = 'untitled';
  displayFunction: string = 'No Function';
  displayNumber: string = '0';
  calcValue: number = 0;
  funcStatus: Operators = Operators.NON;


  calc(val: any) {
    switch (val) {
      case 1:
        if (this.displayNumber === '0' || this.funcStatus === Operators.EQUALS) {
          this.funcStatus = Operators.NON;
          this.displayNumber = '1';
        } else {
          this.displayNumber += '1';
        }
        break;

      case 2:
        if (this.displayNumber === '0' || this.funcStatus === Operators.EQUALS) {
          this.funcStatus = Operators.NON;
          this.displayNumber = '2';
        } else {
          this.displayNumber += '2';
        }

        break;
      case 3:
        if (this.displayNumber === '0' || this.funcStatus === Operators.EQUALS) {
          this.funcStatus = Operators.NON;
          this.displayNumber = '3';
        } else {
          this.displayNumber += '3';
        }

        break;
      case 4:
        if (this.displayNumber === '0' || this.funcStatus === Operators.EQUALS) {
          this.funcStatus = Operators.NON;
          this.displayNumber = '4';
        } else {
          this.displayNumber += '4';
        }

        break;
      case 5:
        if (this.displayNumber === '0' || this.funcStatus === Operators.EQUALS) {
          this.funcStatus = Operators.NON;
          this.displayNumber = '5';
        } else {
          this.displayNumber += '5';
        }

        break;
      case 6:
        if (this.displayNumber === '0' || this.funcStatus === Operators.EQUALS) {
          this.funcStatus = Operators.NON;
          this.displayNumber = '6';
        } else {
          this.displayNumber += '6';
        }

        break;
      case 7:
        if (this.displayNumber === '0' || this.funcStatus === Operators.EQUALS) {
          this.funcStatus = Operators.NON;
          this.displayNumber = '7';
        } else {
          this.displayNumber += '7';
        }

        break;
      case 8:
        if (this.displayNumber === '0' || this.funcStatus === Operators.EQUALS) {
          this.funcStatus = Operators.NON;
          this.displayNumber = '8';
        } else {
          this.displayNumber += '8';
        }

        break;
      case 9:
        if (this.displayNumber === '0' || this.funcStatus === Operators.EQUALS) {
          this.funcStatus = Operators.NON;
          this.displayNumber = '9';
        } else {
          this.displayNumber += '9';
        }

        break;
      case 0:
        if (this.displayNumber === '0' || this.funcStatus === Operators.EQUALS) {
          this.funcStatus = Operators.NON;
          this.displayNumber = '0';
        } else {
          this.displayNumber += '0';
        }

        break;
      case "00":
        if (this.displayNumber === '0' || this.funcStatus === Operators.EQUALS) {
          this.funcStatus = Operators.NON;
          this.displayNumber = '0';
        } else {
          this.displayNumber += '00';
        }

        break;
      case "+":
        if (this.displayNumber === '0') {
          this.displayNumber = '0';
        } else {
          this.displayFunction = this.displayNumber + ' + ';
          this.calcValue = Number(this.displayNumber);
          this.displayNumber = '0';
          console.log(this.calcValue)
          this.funcStatus = Operators.ADD;
        }
        break;
      case "-":
       if (this.displayNumber === '0') {
          this.displayNumber = '0';
        } else {
          this.displayFunction = this.displayNumber + ' - ';
          this.calcValue = Number(this.displayNumber);
          this.displayNumber = '0';
          this.funcStatus = Operators.SUB;
        }
        break;
      case "/":
        if (this.displayNumber === '0') {
          this.displayNumber = '0';
        }else {
          this.displayFunction = this.displayNumber + ' / ';
          this.calcValue = Number(this.displayNumber);
          this.displayNumber = '0';
          this.funcStatus = Operators.DIV;
        }
        break;
      case "*":
       if (this.displayNumber === '0') {
          this.displayNumber = '0';
        }else {
          this.displayFunction = this.displayNumber + ' * ';
          this.calcValue = Number(this.displayNumber);
          this.displayNumber = '0';
          this.funcStatus = Operators.MUL;
        }
        break;
      case "%":
        if (this.displayNumber === '0') {
          this.displayNumber = '0';
        }else {
          this.displayFunction = this.displayNumber + ' % ';
          this.calcValue = Number(this.displayNumber);
          this.displayNumber = '0';
          this.funcStatus = Operators.PERCENT;
        }
        break;
      case "DEL":
        console.log(val);
        break;
      case "C":
        this.displayNumber = '0';
        this.funcStatus = Operators.NON;
        this.displayFunction= 'No Function';
        this.calcValue = 0;
        break;
      case "=":
        if (this.displayNumber === '0') {
          this.displayNumber = '0';
        } else switch (this.funcStatus) {
          case Operators.ADD:
            this.displayNumber = (Number(this.displayNumber) + this.calcValue).toString();
            this.displayFunction = this.displayNumber;
            this.funcStatus = Operators.EQUALS;
            break;
          case Operators.SUB:
            this.displayNumber = (Number(this.displayNumber) - this.calcValue).toString();
            this.displayFunction = this.displayNumber;
            this.funcStatus = Operators.EQUALS;
            break;
          case Operators.MUL:
            this.displayNumber = (Number(this.displayNumber) * this.calcValue).toString();
            this.displayFunction = this.displayNumber;
            this.funcStatus = Operators.EQUALS;
            break;
          case Operators.DIV:
            this.displayNumber = (Number(this.displayNumber) / this.calcValue).toString();
            this.displayFunction = this.displayNumber;
            this.funcStatus = Operators.EQUALS;
            break;
            case Operators.PERCENT:
            this.displayNumber = (Number(this.displayNumber) / 100).toString();
            this.displayFunction = this.displayNumber;
            this.funcStatus = Operators.EQUALS;
            break;

        }
      {


      }
        break;
      case ".":
        console.log(val);
        break;

    }
  }

}

enum Operators {
  ADD,
  SUB,
  DIV,
  MUL,
  NON = 0,
  EQUALS = -1,
  PERCENT = -2,
}
