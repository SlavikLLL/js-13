let inputText1 = document.getElementById('input-text1');
let inputText2 = document.getElementById('input-text2');
let buttonforclick = document.getElementById('button-for-change');
function textChange(){
    let inputValue1=inputText1.value;
    let inputValue2=inputText2.value;
    inputText1.value = inputValue2;
    inputText2.value = inputValue1;
}
buttonforclick.onclick = textChange;