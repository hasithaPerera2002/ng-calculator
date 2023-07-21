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
  funcStatus: Operators;

  constructor() {
    this.funcStatus = Operators.NON;
  }

  calc(val: any) {

    switch (val) {
      case 1:
        if (this.displayNumber === '0' || this.funcStatus === Operators.EQUALS) {
          if (this.funcStatus === Operators.EQUALS) this.funcStatus = Operators.NON;
          this.displayNumber = '1';
        } else {
          this.displayNumber += '1';
        }
        break;

      case 2:
        if (this.displayNumber === '0' || this.funcStatus === Operators.EQUALS) {
          if (this.funcStatus === Operators.EQUALS) this.funcStatus = Operators.NON;
          this.displayNumber = '2';
        } else {
          this.displayNumber += '2';
        }

        break;
      case 3:
        if (this.displayNumber === '0' || this.funcStatus === Operators.EQUALS) {
          if (this.funcStatus === Operators.EQUALS) this.funcStatus = Operators.NON;
          this.displayNumber = '3';
        } else {
          this.displayNumber += '3';
        }

        break;
      case 4:
        if (this.displayNumber === '0' || this.funcStatus === Operators.EQUALS) {
          if (this.funcStatus === Operators.EQUALS) this.funcStatus = Operators.NON;
          this.displayNumber = '4';
        } else {
          this.displayNumber += '4';
        }

        break;
      case 5:
        if (this.displayNumber === '0' || this.funcStatus === Operators.EQUALS) {
          if (this.funcStatus === Operators.EQUALS) this.funcStatus = Operators.NON;
          this.displayNumber = '5';
        } else {
          this.displayNumber += '5';
        }

        break;
      case 6:
        if (this.displayNumber === '0' || this.funcStatus === Operators.EQUALS) {
          if (this.funcStatus === Operators.EQUALS) this.funcStatus = Operators.NON;
          this.displayNumber = '6';

        } else {
          this.displayNumber += '6';
        }

        break;
      case 7:
        if (this.displayNumber === '0' || this.funcStatus === Operators.EQUALS) {
          if (this.funcStatus === Operators.EQUALS) this.funcStatus = Operators.NON;
          this.displayNumber = '7';
        } else {
          this.displayNumber += '7';
        }

        break;
      case 8:
        if (this.displayNumber === '0' || this.funcStatus === Operators.EQUALS) {
          if (this.funcStatus === Operators.EQUALS) this.funcStatus = Operators.NON;
          this.displayNumber = '8';
        } else {
          this.displayNumber += '8';
        }

        break;
      case 9:
        if (this.displayNumber === '0' || this.funcStatus === Operators.EQUALS) {
          if (this.funcStatus === Operators.EQUALS) this.funcStatus = Operators.NON;
          this.displayNumber = '9';
        } else {
          this.displayNumber += '9';
        }

        break;
      case 0:
        if (this.displayNumber === '0' || this.funcStatus === Operators.EQUALS) {
          if (this.funcStatus === Operators.EQUALS) this.funcStatus = Operators.NON;
          this.displayNumber = '0';
        } else {
          this.displayNumber += '0';
        }

        break;
      case "00":
        if (this.displayNumber === '0' || this.funcStatus === Operators.EQUALS) {
          if (this.funcStatus === Operators.EQUALS) this.funcStatus = Operators.NON;
          this.displayNumber = '0';
        } else {
          this.displayNumber += '00';
        }

        break;
      case "+":

        if (this.displayFunction !== 'No Function') {
          this.displayFunction = this.displayFunction.slice(0, -2) + ' + ';
          this.funcStatus = Operators.ADD;
          console.log('called here')
        }
        if (this.displayNumber === '0') {
          this.displayNumber = '0';
        } else {
          if (this.displayFunction === 'No Function') {
            this.calcValue = Number(this.displayNumber)
            this.displayFunction = this.calcValue + ' + '
            this.displayNumber = '0';

          } else if (this.funcStatus === Operators.ADD) {
            this.calcValue += Number(this.displayNumber);
            this.displayFunction = this.calcValue + ' + ';
            this.displayNumber = '0';
          } else {
            this.operations(Operators.ADD)
          }
        }


        break;
      case "-":
        if (this.displayFunction !== 'No Function') {
          this.displayFunction = this.displayFunction.slice(0, -2) + ' - ';
          this.funcStatus = Operators.SUB;
        }
        if (this.displayNumber === '0') {
          this.displayNumber = '0';
        } else {
          console.log(this.calcValue)
          if (this.displayFunction === 'No Function') {
            this.calcValue = Number(this.displayNumber)
            this.displayFunction = this.calcValue+' - '

          } else if (this.funcStatus === Operators.SUB) {
            this.calcValue -= Number(this.displayNumber);
            this.displayFunction = this.calcValue + ' - ';
          } else {
            this.operations(Operators.SUB)
          }
          this.displayNumber = '0';
          this.funcStatus = Operators.SUB;
        }
        break;
      case "/":
        if (this.displayFunction !== 'No Function') {
          this.displayFunction = this.displayFunction.slice(0, -2) + ' / ';
          this.funcStatus = Operators.DIV;
        }
        if (this.displayNumber === '0') {
          this.displayNumber = '0';
        } else {
          if (this.displayFunction === 'No Function') {
            this.calcValue = Number(this.displayNumber)
            this.displayFunction = this.calcValue+' / '
          } else if (this.funcStatus === Operators.DIV) {
            this.calcValue /= Number(this.displayNumber);
            this.displayFunction = this.calcValue + ' / ';
          } else {
            this.operations(Operators.DIV)
          }

          this.displayNumber = '0';
          this.funcStatus = Operators.DIV;
        }
        break;
      case "*":
        if (this.displayFunction !== 'No Function') {
          this.displayFunction = this.displayFunction.slice(0, -2) + '* ';
          this.funcStatus = Operators.MUL;
        }
        if (this.displayNumber === '0') {
          this.displayNumber = '0';
        } else {
          if (this.displayFunction === 'No Function') {
            this.calcValue = Number(this.displayNumber)
            this.displayFunction = this.calcValue+' * '
          }
          else if (this.funcStatus === Operators.MUL) {
            this.calcValue *= Number(this.displayNumber);
            this.displayFunction = this.calcValue + ' * ';
          }else {
            this.operations(Operators.MUL)
          }

          this.displayNumber = '0';
          this.funcStatus = Operators.MUL;
        }
        break;
      case "%":
        if (this.displayNumber === '0') {
          this.displayNumber = '0';
        } else if (this.displayFunction === 'No Function') {
          this.displayFunction = (Number(this.displayNumber) / 100 + ' % ');
          this.displayNumber = '0';
        } else {
          this.displayFunction = this.displayNumber + ' % ';
          this.calcValue = Number(this.displayNumber);
          this.displayNumber = '0';
          this.funcStatus = Operators.PERCENT;
        }
        break;
      case "DEL":
        if (this.displayNumber === '0') {
          this.displayNumber = '0';
        } else if (this.displayNumber.length > 1) {
          this.displayNumber = this.displayNumber.slice(0, -1);
        }
        break;
      case "C":
        this.displayNumber = '0';
        this.funcStatus = Operators.NON;
        this.displayFunction = 'No Function';
        this.calcValue = 0;
        break;
      case "=":
        console.log(this.funcStatus)
        if (this.displayNumber === '0') {
          this.displayNumber = '0';
        } else switch (this.funcStatus) {
          case Operators.ADD:
            this.calcValue += Number(this.displayNumber);
            console.log(this.calcValue)
            this.displayFunction = this.calcValue.toString();
            this.displayNumber = this.displayFunction
            this.funcStatus = Operators.EQUALS;
            break;
          case Operators.SUB:
            this.calcValue -= Number(this.displayNumber);
            this.displayFunction = this.calcValue.toString();
            this.displayNumber = this.displayFunction;
            this.funcStatus = Operators.EQUALS;
            break;
          case Operators.MUL:
            this.calcValue *= Number(this.displayNumber);
            this.displayFunction = this.calcValue.toString();
            this.displayNumber = this.displayFunction
            this.funcStatus = Operators.EQUALS;
            break;
          case Operators.DIV:
            this.calcValue /= Number(this.displayNumber);
            this.displayFunction = this.calcValue.toString();
            this.displayNumber = this.displayFunction
            this.funcStatus = Operators.EQUALS;
            break;
          case Operators.PERCENT:
            this.calcValue = (Number(this.displayNumber) / 100);
            this.displayFunction = this.calcValue.toString();
            this.displayNumber = this.displayFunction
            this.funcStatus = Operators.EQUALS;
            break;
        }

        break;
      case ".":
        console.log(val);
        break;

    }

  }

  protected operations(c: Operators) {
    switch (this.funcStatus) {
      case Operators.SUB:
        this.calcValue -= Number(this.displayNumber);
        this.displayFunction = this.calcValue + ' - '
        this.funcStatus = c
        break;
      case Operators.ADD:
        this.calcValue += Number(this.displayNumber);
        this.displayFunction = this.calcValue + ' + '
        this.funcStatus = c
        break
      case Operators.DIV:
        this.calcValue /= Number(this.displayNumber);
        this.displayFunction = this.calcValue + ' / '
        this.funcStatus = c
        break
      case Operators.MUL:
        this.calcValue *= Number(this.displayNumber);
        this.displayFunction = this.calcValue + ' * '
        this.funcStatus = c
        break
    }
  }
}

enum Operators {
  ADD,
  SUB,
  DIV,
  MUL,
  NON,
  EQUALS,
  PERCENT,
}
