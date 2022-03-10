// SOAL 4 PASSWORD
function isValidpassword (valpass){
    var pswd= /^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,20}$/;
    if(valpass.match(pswd))
    {

        return true;
    }
    else{
        return false;
    }
}
console.log(isValidpassword('Meong2021'))
console.log(isValidpassword('meong2021'))
console.log(isValidpassword('@eong'))
console.log(isValidpassword('Meong2'))
console.log(isValidpassword(0))
console.log(isValidpassword())
console.log();
