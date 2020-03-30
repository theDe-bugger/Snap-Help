var docName, docNum, hospName, hospCity;
const idCard = document.getElementById("idCard");

function submission(){
    docName = document.getElementById("docName").value;
    docNum = document.getElementById("docNum").value;
    hospName = document.getElementById("hospName").value;
    hospCity = document.getElementById("hospCity").value;
    if (docName != '' && docNum !='' && hospName !='' && hospCity != ''){
        localStorage.setItem('docName', docName);
        localStorage.setItem('docNum', docNum);
        localStorage.setItem('hospName', hospName);    
        localStorage.setItem('hospCity', hospCity);
        localStorage.setItem('idCard', idCard);
        alert("Thank you for the submission, it will be reviewed and you will hear from us shortly");
    }
    else {alert('Please complete the form entirely')}
}