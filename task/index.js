
let passs = prompt('enter new pass');
function submit() {
    //    document.write(psw.value)
    let psw = document.getElementById('pass').value;
    
    if(psw == "") {
        console.log('please enter your pass')
   }else if(psw == passs) {
    console.log("correct pass")
   }
   else {
    console.log("wrong pass")
   }
}