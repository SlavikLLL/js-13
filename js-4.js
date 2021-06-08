let button4 = document.getElementById('button4');
function numberPow(){
    let input =document.getElementById("input");
    let number = Number(input.value);
    let pow = number * number;
    alert(pow);
}
button4.onclick = numberPow;
