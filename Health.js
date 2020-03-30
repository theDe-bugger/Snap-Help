var travel;
var fever;
var tiredness;
var cough;
var pressure;
var heart;
var breath;
var resp;
var diabetes;
var country;
var age;
const countryCode = localStorage.getItem('country');
var cases;
var recovered;
var death;
var realCity = localStorage.getItem('inputCity')
var address = localStorage.getItem('autocomplete').split(' ').join('+');
var city = localStorage.getItem('inputCity').split(' ').join('+');
var state = localStorage.getItem('inputState').split(' ').join('+');
var zip = localStorage.getItem('inputZip').split(' ').join('+');
var location1, location2, location3, location4, location5;
var locationTo1, locationTo2, locationTo3, locationTo4, locationTo5;
var locationNy1, locationNy2, locationNy3, locationNy4, locationNy5;
var locationLa1, locationLa2, locationLa3, locationLa4, locationLa5;
var locationSf1, locationSf2, locationSf3, locationSf4, locationSf5;
var locationCh1, locationCh2, locationCh3, locationCh4, locationCh5;
var locationPh1, locationPh2, locationPh3, locationPh4, locationPh5;
var locationSe1, locationSe2, locationSe3, locationSe4, locationSe5;
var locationVa1, locationVa2, locationVa3, locationVa4, locationVa5;
var locationMi1, locationMi2, locationMi3, locationMi4, locationMi5;
var locationHo1, locationHo2, locationHo3, locationHo4, locationHo5;

var settingsRONA = {
	"async": true,
	"crossDomain": true,
	"url": "https://covid-19-data.p.rapidapi.com/country/code?format=undefined&code=" + countryCode.split('"').join(''),
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-19-data.p.rapidapi.com",
		"x-rapidapi-key": "c6ec7d9f25msh0283764d9ae1e21p142776jsn1298bb50990e"
	}
}

$.ajax(settingsRONA).done(function (response) {
    console.log(response);
    cases = response[0].confirmed;
    recovered = response[0].recovered;
    death = response[0].deaths;
    printStuff();
});

function printStuff() {
    document.getElementById("Active").innerHTML = cases;
    document.getElementById("Recovered").innerHTML = recovered;
    document.getElementById("Deaths").innerHTML = death;
}

function checkup() {
    travel = document.getElementById("travel").checked;
    breath = document.getElementById("breath").checked;
    resp = document.getElementById("resp").checked;
    fever = document.getElementById("fever").checked;
    tiredness = document.getElementById("tiredness").checked;
    cough = document.getElementById("cough").checked;
    pressure = document.getElementById("pressure").checked;
    heart = document.getElementById("heart").checked;
    diabetes = document.getElementById("diabetes").checked;
    age = localStorage.getItem('inputage');
    if(travel === true || breath === true || resp === true){
        document.getElementById("checkUPres").innerHTML = "Call your nearest testing center to schedule a check up.";}
    else if(age >= 65 && pressure === true || heart === true || diabetes === true){
        document.getElementById("checkUPres").innerHTML = "Call your nearest testing center to schedule a check up.";}
    else if(tiredness === true && fever === true && cough === true){
        document.getElementById("checkUPres").innerHTML = "Wait for a week, if conditions worsen, schedule a check up.";}
    else{
        document.getElementById("checkUPres").innerHTML = "You seem to be fine, however you should stay indoors as much as you can to avoid contracting the virus.";}
}

var settingsHOSP = {
    "async": true,
    "crossDomain": true,
    "url": "https://www.mapquestapi.com/search/v2/radius?origin=" +
        address + "," + city + "," + state + "+" + zip +
        "&radius=&maxMatches=5&ambiguities=ignore&hostedData=mqap.ntpois%7Cgroup_sic_code=?%7C806202&outFormat=json&key=Ad2Dr15l7s5XXGiA5SkKWBalNAPXyeHB",
    "method": "GET",
    "headers": {
    }
}

blockspring.runParsed(
    "read-worksheet-google-sheets",
    { "file_id": "1_PNLPxrX6yDo5gk9isiup7JBQgAuf2GqzwX15_T1CiM", "worksheet_id": 0, "has_header": true},
    { "api_key": "8ac14a6be5a0ee3f17734ca13d9f7a27" },
    function(res){
        console.log(res);
        locationTo1 = res.params.data[0].name;
        locationTo2 = res.params.data[1].name;
        locationTo3 = res.params.data[2].name;
        locationTo4 = res.params.data[3].name;
        locationTo5 = res.params.data[4].name;
        
        locationNy1 = res.params.data[5].name;
        locationNy2 = res.params.data[6].name;
        locationNy3 = res.params.data[7].name;
        locationNy4 = res.params.data[8].name;
        locationNy5 = res.params.data[9].name;
        
        locationLa1 = res.params.data[10].name;
        locationLa2 = res.params.data[11].name;
        locationLa3 = res.params.data[12].name;
        locationLa4 = res.params.data[13].name;
        locationLa5 = res.params.data[14].name;
        
        locationSf1 = res.params.data[15].name;
        locationSf2 = res.params.data[16].name;
        locationSf3 = res.params.data[17].name;
        locationSf4 = res.params.data[18].name;
        locationSf5 = res.params.data[19].name;
        
        locationCh1 = res.params.data[20].name;
        locationCh2 = res.params.data[21].name;
        locationCh3 = res.params.data[22].name;
        locationCh4 = res.params.data[23].name;
        locationCh5 = res.params.data[24].name;
        
        locationPh1 = res.params.data[25].name;
        locationPh2 = res.params.data[26].name;
        locationPh3 = res.params.data[27].name;
        locationPh4 = res.params.data[28].name;
        locationPh5 = res.params.data[29].name;
        
        locationSe1 = res.params.data[30].name;
        locationSe2 = res.params.data[31].name;
        locationSe3 = res.params.data[32].name;
        locationSe4 = res.params.data[33].name;
        locationSe5 = res.params.data[34].name;
        
        locationVa1 = res.params.data[35].name;
        locationVa2 = res.params.data[36].name;
        locationVa3 = res.params.data[37].name;
        locationVa4 = res.params.data[38].name;
        locationVa5 = res.params.data[39].name;
        
        locationMi1 = res.params.data[40].name;
        locationMi2 = res.params.data[41].name;
        locationMi3 = res.params.data[42].name;
        locationMi4 = res.params.data[43].name;
        locationMi5 = res.params.data[44].name;
        
        locationHo1 = res.params.data[45].name;
        locationHo2 = res.params.data[46].name;
        locationHo3 = res.params.data[47].name;
        locationHo4 = res.params.data[48].name;
        locationHo5 = res.params.data[49].name;
        searchHOSP();
        setTimeout(function() {printStuffHosp()}, 1000); 
    }
)

function searchHOSP(){
    if (realCity == '"Toronto"'){
        location1 = locationTo1
        location2 = locationTo2
        location3 = locationTo3
        location4 = locationTo4
        location5 = locationTo5
    }
    else if (realCity == '"New York"'){
        location1 = locationNy1
        location2 = locationNy2
        location3 = locationNy3
        location4 = locationNy4
        location5 = locationNy5        
    }
    else if (realCity == '"Los Angeles"'){
        location1 = locationLa1
        location2 = locationLa2
        location3 = locationLa3
        location4 = locationLa4
        location5 = locationLa5        
    }
    else if (realCity == '"San Francisco"'){
        location1 = locationSf1
        location2 = locationSf2
        location3 = locationSf3
        location4 = locationSf4
        location5 = locationSf5       
    }    
    else if (realCity == '"Chicago"'){
        location1 = locationCh1
        location2 = locationCh2
        location3 = locationCh3
        location4 = locationCh4
        location5 = locationCh5      
    } 
    else if (realCity == '"Pheonix"'){
        location1 = locationPh1
        location2 = locationPh2
        location3 = locationPh3
        location4 = locationPh4
        location5 = locationPh5      
    } 
    else if (realCity == '"Seattle"'){
        location1 = locationSe1
        location2 = locationSe2
        location3 = locationSe3
        location4 = locationSe4
        location5 = locationSe5       
    } 
    else if (realCity == '"Vancouver"'){
        location1 = locationVa1
        location2 = locationVa2
        location3 = locationVa3
        location4 = locationVa4
        location5 = locationVa5       
    }
    else if (realCity == '"Miami"'){
        location1 = locationMi1
        location2 = locationMi2
        location3 = locationMi3
        location4 = locationMi4
        location5 = locationMi5       
    }     
    else if (realCity == '"Houston"'){
        location1 = locationHo1
        location2 = locationHo2
        location3 = locationHo3
        location4 = locationHo4
        location5 = locationHo5     
    }
    else{
        $.ajax(settingsHOSP).done(function (response) {
            location1 = response.searchResults[0].name;
            location2 = response.searchResults[1].name;
            location3 = response.searchResults[2].name;
            location4 = response.searchResults[3].name;
            location5 = response.searchResults[4].name;
        });
    }
}

function printStuffHosp() {
    document.getElementById("location1").innerHTML = location1;
    document.getElementById("location2").innerHTML = location2;
    document.getElementById("location3").innerHTML = location3;
    document.getElementById("location4").innerHTML = location4;
    document.getElementById("location5").innerHTML = location5;
}