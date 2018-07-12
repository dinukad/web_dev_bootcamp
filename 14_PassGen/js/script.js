var keylist = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*-";
var temp = '';

function generatePass(pLength){
    temp = '';
    for(i=0; i<pLength; i++){
        temp += keylist.charAt(Math.floor(Math.random() * keylist.length));
    }
    return temp;
}

function populateForm(enterLength){
    document.passGen.output.value = generatePass(enterLength);
}