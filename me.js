var name, age, gender, country, state, city, zip, street;


function savelocal () {
    name = document.getElementById("fname").value;
    age = document.getElementById("inputage").value;
    gender = document.getElementById("gender").value;
    country = document.getElementById("country").value;
    city = document.getElementById("inputCity").value;
    state = document.getElementById("inputState").value;
    zip = document.getElementById("inputZip").value;
    street = document.getElementById("autocomplete").value;

    localStorage.setItem('fname', JSON.stringify(name));
    localStorage.setItem('inputage', JSON.stringify(age));
    localStorage.setItem('gender', JSON.stringify(gender));
    localStorage.setItem('country', JSON.stringify(country));
    localStorage.setItem('inputCity', JSON.stringify(city));
    localStorage.setItem('inputState', JSON.stringify(state));
    localStorage.setItem('inputZip', JSON.stringify(zip));
    localStorage.setItem('autocomplete', JSON.stringify(street));

  
    

}


function validateForm () {
    name = document.getElementById("fname").value;
    age = document.getElementById("inputage").value;
    gender = document.getElementById("gender").value;
    country = document.getElementById("country").value;
    city = document.getElementById("inputCity").value;
    state = document.getElementById("inputState").value;
    zip = document.getElementById("inputZip").value;
    street = document.getElementById("autocomplete").value;
    if (name == "" ||  age == "" || gender == "" || country == "" || city == "" || state == "" || zip == "" || street == "") {
        alert ("All Information Must Be Filled Out");
        return false;
    }

    else {
        alert ("Confirmed")
    }
}