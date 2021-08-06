class Display{
    constructor(ValRes, ValTotal){
        this.ValRes = ValRes;
        this.ValTotal = ValTotal;
        this.cal = new Calculadora();
        this.dValRes = '';
        this.dValTotal = '';
        this.typeOp = undefined;
        this.map = {
            sumar: '+',
            restar: '-',
            dividir: '/',
            multiplicar: '*',
            porcentaje: '%'
        }
    }

    clear(){
        this.dValRes = '';
        this.dValTotal = '';
        this.typeOp = undefined;
        this.printVal();
    }
 
    ope(type){
        this.typeOp !== 'igual' && this.result();
        this.typeOp = type;
        this.dValRes = this.dValTotal || this.dValRes;
        this.dValTotal = '';
        this.printVal();
    }

    addNum(num){
        if(num === '.' && this.dValTotal.includes('.')) return
        this.dValTotal = this.dValTotal.toString() + num.toString() + this.dValTotal.toString();
        this.printVal();
    }

    printVal(){
        this.ValTotal.textContent = this.dValTotal;
        this.ValRes.textContent = `${this.dValRes} ${this.map[this.typeOp] || ''}`;
    }

    result(){
        const dValRes = parseFloat(this.dValRes);
        const dValTotal = parseFloat(this.dValTotal);
        if(isNaN(dValRes) || isNaN(dValTotal)) return
        this.dValTotal = this.cal[this.typeOp](dValRes, dValTotal);
    }
}