(function () {

    let firstValue = document.getElementById('firstInputValue');
    let secondValue = document.getElementById('secondInputValue');
    let firstCircleResult = document.getElementById('firstCircleResult');
    let secondCircleResult = document.getElementById('secondCircleResult');
    let result = document.getElementById('result');


    firstValue.addEventListener('keyup', firstLogKey);
    secondValue.addEventListener('keyup', secondlogKey);
    let division = document.getElementById('division');
    let multiply = document.getElementById('multiply');
    division.addEventListener('click', divisionCalc)
    multiply.addEventListener('click', multiplyCalc)

    function fontCalc() {
        // let firstLen = firstCircleResult.innerText.length / 10;
        // let secondLen = secondCircleResult.innerText.length / 10;
        // firstCircleResult.style.fontSize = `${2.2 - firstLen}em`;
        // secondCircleResult.style.fontSize = `${2.2 - secondLen}em`;
        fontResize(firstCircleResult.innerText.length, firstCircleResult);
        fontResize(secondCircleResult.innerText.length, secondCircleResult);
    }

    function fontResize(len, result) {
        len = result.innerText.length / 10;
        result.style.fontSize = `${2.2 - len}em`;
    }
    function disableButton() {
        disabledBtns(firstValue);
        disabledBtns(secondValue);
    }

    function disabledBtns(value){
        if (value.value == "") {
            multiply.disabled = true;
            division.disabled = true;
        } else {
            multiply.disabled = false;
            division.disabled = false;
        }
    }

    function firstLogKey(e) {
        firstCircleResult.textContent = firstValue.value;
        disableButton();
        fontCalc();
        return firstCircleResult.textContent;
    }

    function secondlogKey(e) {
        secondCircleResult.textContent = secondValue.value;
        disableButton();
        fontCalc();
        return secondCircleResult.textContent;
    }

    function multiplyCalc() {
        result.innerHTML = firstLogKey() * secondlogKey();
        resetInputs()
    }

    function divisionCalc() {
        result.innerHTML = firstLogKey() / secondlogKey();
        resetInputs()
    }

    function resetInputs() {
        firstValue.value = "";
        secondValue.value = "";
        disableButton();
    }

    disableButton();


})();