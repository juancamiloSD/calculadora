const btnNum = document.querySelectorAll('#num');
const btnOp = document.querySelectorAll('#op');
const iframe = document.getElementById('iframe');

const ValRes = iframe.contentWindow.document.getElementById('res');
const ValTotal = iframe.contentWindow.document.getElementById('total');

const display = new Display(ValRes, ValTotal);

btnNum.forEach(btn => {
    btn.addEventListener('click', () => {
        display.addNum(btn.innerHTML);
    });
});

btnOp.forEach(btn => {
    btn.addEventListener('click', () =>{
        display.ope(btn.value);
    });
});