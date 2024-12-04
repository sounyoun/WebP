onmessage = function(e) {
    let num1 = parseInt(e.data.num1);
    let num2 = parseInt(e.data.num2);
    this.postMessage(num1*num2);
}