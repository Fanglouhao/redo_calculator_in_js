function add(character) {
    var str = String(document.calculator.numScreen.value);
    str += String(character);
    document.calculator.numScreen.value = str;
}
function balanceBrackets(expr) { //补加括号
    var unbalanced = 0;
    var i;
    for (i = 0; i < expr.length; i++) {
        if (expr.substr(i, 1) === "(") {
            unbalanced++;
        }
        else if (expr.substr(i, 1) === ")") {
            unbalanced--;
        }
    }
    for (i = 0; i < unbalanced; i++) {
        expr = expr + ")";
    }
    return expr;
}
function del() {
    var str = String(document.calculator.numScreen.value);
    str = str.substr(0, str.length - 1);
    document.calculator.numScreen.value = str;
}
function clearScreen() {
    document.calculator.numScreen.value = "";
}
function equal() {
    var str = String(document.calculator.numScreen.value);
    str = balanceBrackets(str);
    try{
        document.calculator.numScreen.value = calculate(str);
    }
    catch(err) {
        document.getElementById("note").innerHTML="错误的输入！";
        setTimeout(clearnote,4000);
        clearScreen();
    }
}
function clearnote(){ //清空提示
    document.getElementById("note").innerHTML="";
}
function calculate(str) {
    var strHasBeenChanged = 0;
    var inBrackets = "";
    var resultInBrackets = 0;
    for (var i = 0; i < str.length; i++) {
        switch (str.substr(i, 1)) {
            case '(': {      //处理被省略的乘号
                var character = Number(str.substr(i-1, 1));
                if(!isNaN(character)){
                    str = str.substr(0, i) + '*' + str.substr(i, str.length - i);
                    strHasBeenChanged = 1;
                }
                break;
            }
            case 's': {     //处理正弦函数
                inBrackets = findNextBrackets(str, i + 3);
                var result = calculate(inBrackets);
                if(result%Math.PI === 0){resultInBrackets = 0}
                else {resultInBrackets = String(Math.sin(calculate(inBrackets)));}
                str = str.replace("sin" + inBrackets, '(' + resultInBrackets + ')');
                strHasBeenChanged = 1;
                break;
            }
            case 'c': {     //处理余弦函数
                inBrackets = findNextBrackets(str, i + 3);
                resultInBrackets = String(Math.cos(calculate(inBrackets)));
                str = str.replace("cos" + inBrackets, '(' + resultInBrackets + ')');
                strHasBeenChanged = 1;
                break;
            }
            case 't': {     //处理正切函数
                inBrackets = findNextBrackets(str, i + 3);
                resultInBrackets = String(Math.tan(calculate(inBrackets)));
                str = str.replace("tan" + inBrackets, '(' + resultInBrackets + ')');
                strHasBeenChanged = 1;
                break;
            }
            case 'l': {     //处理对数函数
                inBrackets = findNextBrackets(str, i + 2);
                resultInBrackets = String(Math.log(calculate(inBrackets)));
                str = str.replace("ln" + inBrackets, '(' + resultInBrackets + ')');
                strHasBeenChanged = 1;
                break;
            }
            case 'p': {     //圆周率
                str = str.replace("pi", '(' + String(Math.PI) + ')');
                strHasBeenChanged = 1;
                break;
            }
            case 'e': {     //自然对数
                str = str.replace("e", '(' + String(Math.E) + ')');
                strHasBeenChanged = 1;
                break;
            }
        }
        if (strHasBeenChanged === 1) {
            break;
        }
    }
    if (strHasBeenChanged === 0) {
        return eval(str);
    }
    else {
        return calculate(str);
    }
}
function findNextBrackets(str, index) {
    var unbalanced = 0;
    for (var i = index; i < str.length; i++) {
        if (str.substr(i, 1) === '(') {
            unbalanced++;
        } else if (str.substr(i, 1) === ')') {
            unbalanced--;
        }
        if (unbalanced === 0) { return str.substr(index, i - index + 1); }
    }
}