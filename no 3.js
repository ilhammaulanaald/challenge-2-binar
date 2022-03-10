// SOAL 3 ALAMAT EMAIL
let checkEmail = (email) => {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(regexEmail)) {
        return 'VALID'; 
    } else {
        return 'INVALID'; 
    }
}
console.log(checkEmail('apranata@binar.co.id'))