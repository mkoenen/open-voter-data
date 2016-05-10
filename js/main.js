/* Events -----------------------------------------*/
function init(){
    document.addEventListener("deviceready", initializeMap, false);
    document.addEventListener("online", onOnline, true);
    document.addEventListener("deviceready", onOnline, true); 
    document.addEventListener("deviceready", showResults, false);
    document.addEventListener("deviceready", setbuttons, false);
    document.addEventListener("deviceready", initPushwoosh, true);
    document.addEventListener("deviceready", showResultsButtons, false);
    document.addEventListener("deviceready", hideKeyboard, false);
}


function initializeMap() {
   
    var map = L.map('map');

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
        maxZoom: 21,
        maxNativeZoom: 18,
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
            '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="http://mapbox.com">Mapbox</a>',
        id: 'mapbox.streets'
    }).addTo(map);

    function onLocationFound(e) {
                var radius = e.accuracy / 6;
                L.circle(e.latlng, radius).addTo(map);  
            }
    function onLocationError(e) {
                alert(e.message);
            }

    map.on('locationfound', onLocationFound);
    map.on('locationerror', onLocationError);

    map.locate({setView: true, maxZoom: 18});

    var mkIcon = L.Icon.extend({
        options: {
            iconSize:     [40, 40],
            iconAnchor:   [0, 0],
            popupAnchor:  [0, -20]
        }
    });
    var redIcon = new mkIcon({iconUrl: 'img/red-marker.png', iconRetinaUrl: 'img/red-marker@2x.png'}),
        blueIcon = new mkIcon({iconUrl: 'img/blue-marker.png', iconRetinaUrl: 'img/blue-marker@2x.png'}),
        yellowIcon = new mkIcon({iconUrl: 'img/yellow-marker.png', iconRetinaUrl: 'img/yellow-marker@2x.png'});
        /*this needs a gray icon*/
        grayIcon = new mkIcon({iconUrl: 'img/yellow-marker.png', iconRetinaUrl: 'img/yellow-marker@2x.png'});
        

    var people = [ { name: "Margarete", 
                    address: "35 Cooper St, Brooklyn, NY",
                    lat : '40.684474',
                    lon: '-73.910977',
                    status: "supporter"
                },
                { name: "Michael", 
                    address: "35 Cooper St, Brooklyn, NY",
                    lat : '40.684474',
                    lon: '-73.910977',
                    status: ""
                },
                {   name: "green House",
                    address: "31 Cooper St, Brooklyn, NY",
                    lat : '40.684388',
                    lon: '-73.911062',
                    status: "notasupporter"
                },
                {   name: "Hipsters",
                    address: "23 Cooper St, Brooklyn, NY",
                    lat : '40.684214',
                    lon: '-73.911235',
                    status: "undecided"
                }
            ];
    function createMarker(person) {

        var whichIcon, toAddressLink, editLink;

        switch(person.status) {
          case "supporter":
            whichIcon = blueIcon;
            break;
          case "notasupporter":
            whichIcon = redIcon;
            break;
          case "undecided":
            whichIcon = yellowIcon;
            break;
          default:
            whichIcon = grayIcon;
        }

        toAddressLink = '<a href="#add-to-address" class="ui-btn-active ui-state-persist" id="add-to-address-link">Add a New Voter to this Address</a>';
        editLink = '<a href="#edit-voter" class="ui-btn-active ui-state-persist" id="edit-link">Add a New Voter to this Address</a>';

        L.marker([person.lat,person.lon], {icon:whichIcon}).addTo(map)
          .bindPopup(person.name + ", " + person.address + editLink + toAddressLink);
    }

    for (i = 0; i < people.length; i++) {
        createMarker(people[i]);
    }
}

//listen for click events      
function setbuttons() {
    document.getElementById('addperson').addEventListener('click', validate, false);
    
}

/* Local Storage ----------------------------------*/
Storage.prototype.setObject = function(key, value) {
    this.setItem(key, JSON.stringify(value));
}

Storage.prototype.getObject = function(key) {
    var value = this.getItem(key);
    return value && JSON.parse(value);
}
        



/* Form Validation -------------------------------------*/

function validate(event) {
    if( document.voterForm.firstname.value === "" ) {

        notification(  "Please enter a first name." );
        document.voterForm.firstname.focus();
        event.preventDefault();
        return false;      
    }
    if( document.voterForm.lastname.value === "" ) {

        notification(  "Please enter a last name." );
        document.voterForm.lastname.focus();
        event.preventDefault();
        return false;      
    }
    if( document.gsForm.addressline1.value === "" ) {

        notification(  "Please enter an address!" );
        document.gsForm.ddressline1.focus();
        event.preventDefault();
        return false;
    }
    if( document.voterForm.city.value === "" ) {

        notification(  "Please enter a city or town!" );
        document.voterForm.city.focus();
        event.preventDefault();
        return false;
    }
    if( document.voterForm.state.value === "" ) {

        notification(  "Please select a state!" );
        document.voterForm.state.focus();
        event.preventDefault();
        return false;
    }
    if( document.voterForm.state.value === "" ) {

        notification(  "Please select a state!" );
        document.voterForm.state.focus();
        event.preventDefault();
        return false;
    }
    if( document.voterForm.gender.value !== "female" &&
        document.voterForm.gender.value !== "male" &&
        document.voterForm.gender.value !== "other") 
    {

        notification(  "Please indicate the voter's gender!" );
        document.voterForm.state.focus();
        event.preventDefault();
        return false;
    }
    if( document.voterForm.voterstatus.value !== "supporter" &&
        document.voterForm.voterstatus.value !== "leaning" &&
        document.voterForm.voterstatus.value !== "undecided" &&
        document.voterForm.voterstatus.value !== "notasupporter" &&
        document.voterForm.voterstatus.value !== "not-home" &&
        document.voterForm.voterstatus.value !== "deceased-moved" &&
        document.voterForm.voterstatus.value !== "not-party-member") 
    {

        notification(  "Please indicate the voter's status!" );
        document.voterForm.voterstatus.focus();
        event.preventDefault();
        return false;
    }
           
    savelocal();
}




/* Notifications ----------------------------------*/

function notification(message,callbk,title,btname) {
          navigator.notification.alert(
              message,      // message
              callbk,       // callback
              title,        // title
              btname        // buttonName
          );
}


/* Switch Page -----------------------------------------------*/

function goTo(){
    window.location.hash = "govscore-results";
}

function goToGs() {
    window.location.hash = "govscore";
}


/* Get Date --------------------------------------------------*/

function formatDate(date) {
    date = date.getUTCFullYear() + '-' +
            ('00' + (date.getUTCMonth() + 1)).slice(-2) + '-' +
            ('00' + date.getUTCDate()).slice(-2) + ' ' +
            ('00' + date.getUTCHours()).slice(-2) + ':' +
            ('00' + date.getUTCMinutes()).slice(-2) + ':' +
            ('00' + date.getUTCSeconds()).slice(-2); 
    return date;   
}


/*------------check network connection --------------*/

function checkConnection(whichfunction) {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.NONE]     = 'No network connection';

    if( states[networkState] !== 'No network connection'){
        switch(whichfunction) {
            case "cgovscore":
                saveServer();
                break;
            case "cag1":
                ag1saveServer();
                break;
            case "cag2":
                ag2saveServer();
                break;
            case "cag3":
                ag3saveServer();
                break;
            case "cag4":
                ag4saveServer();
                break;
            case "cag5":
                ag5saveServer();
                break;
        }
    }else{
        if(mylang == "fr" ) {
                    notification(" Vos réponses ont été conservées sur votre appareil. Elles seront sauvegardées sur notre serveur lorsque vous serez à nouveau connectés à l’Internet.", goTo(), "Pas de connexion à l’Internet", "OK");
                }else if(mylang == "es" ) {
                    notification(" Sus respuestas han sido guardadas en su dispositivo. Éstas serán almacenadas en su servidor cuando usted vuelva a ingresar al Internet.", goTo(), "No hay conexión a Internet.", "OK");
                }else if(mylang == "pt" ) {
                    notification("Suas respostas foram armazenadas no seu dispositivo. Serão guardadas em nosso servidor quando se reconectar à Internet.", goTo(), "Sem conexão com Internet", "OK");
                }else{
                    notification("Your answers have been stored on your device. They will be saved to our server when you get reconnected to the internet.", goTo(), "No Internet Connection", "OK");
                }
             
    }
}


/* App Comes Online ------------------------------------------*/

//check if online according to the above interval
function onOnline(event) {
    //there must be locally saved data and the saved flag must be false
    gsSaved = localStorage.getItem("gsSaved");
    ag1Saved = localStorage.getItem("ag1Saved");
    ag2Saved = localStorage.getItem("ag2Saved");
    ag3Saved = localStorage.getItem("ag3Saved");
    ag4Saved = localStorage.getItem("ag4Saved");
    ag5Saved = localStorage.getItem("ag5Saved");

    if( gsdata && gsSaved === null){
        saveServer();
    }
    if( ag1data && ag1Saved === null){
        ag1saveServer();
    } 
    if( ag2data && ag2Saved === null){
        ag2saveServer();
    }
    if( ag3data && ag3Saved === null){
        ag3saveServer(); 
    }
    if( ag4data && ag4Saved === null) {
        ag4saveServer();
    }
    if( ag5data && ag5Saved === null){
        ag5saveServer();
    }else{
        return false;
    }
}

/* Functions for processing data -----------------------------------------------*/


//get answers from form and build json array
function getinputs(answerset,num1,num2,prefix){
    var i, key, value;
    //loop through the entries, grab value and store in array
    for(i=num1; i<=num2; i++) {
        key = "'" + prefix + i +"'";
        value = $('input[name = ' + key + ']:checked').val();
        answerset.answers[i] = value;
    }
    
    return answerset;
}

var gsSaved = "false", ag1Saved = "false", ag2Saved = "false", ag3Saved = "false", ag4Saved = "false", ag5Saved = "false";

//save the json data array to the server via ajax call
function saveToServer(address,dataset,datasaved){
    $.ajax({
    type       : "GET",
    url        : address,
    crossDomain: true,
    data       : dataset,
    contentType: 'application/json; charset=utf-8',
    ////dataType   : 'json',
    success    : function(responseData) {
                notification(responseData, goTo(), "Update", "OK");
                localStorage.setItem(datasaved, "true");
                showResultsButtons();
                },
    error      : function(responseData) {
                notification(responseData); 
                } 
    });
}


/* Saving -----------------------------------------------*/

var gsdata = localStorage.getObject('gsdata'); 
var ag1data = localStorage.getObject('ag1data');
var ag2data = localStorage.getObject('ag2data');
var ag3data = localStorage.getObject('ag3data');
var ag4data = localStorage.getObject('ag4data');
var ag5data = localStorage.getObject('ag5data');


/* Saving Govscore --------------------------------------*/
 
/* store locally */
function savelocal() {

    var userdata, email, gsdate, username, mylang;

    username = document.getElementById("username").value;
    email = document.getElementById("email").value;
    gsdate  = formatDate(new Date());
    mylang = localStorage.getObject('mylang');

    //construct the json array for user data and add to local storage
    gsdata = {'username': username, 'email': email, 'gsdate': gsdate, 'mylang': mylang, 'answers':[-1]};
    gsdata = getinputs(gsdata,1,25,"g");
    localStorage.setObject('gsdata', gsdata);   
    calcResults();
    //now that everything is saved, check the connection
    checkConnection( "cgovscore");
}

/* save to server */
function saveServer() {
    var ggsdata;
    //get the data from local storage
    ggsdata = localStorage.getObject('gsdata');
    saveToServer("http://mshlmg.wpengine.com/store-gg-initial.php", ggsdata, "gsSaved");
}

/* Saving Advanced Govscore Data ----------------------------------------*/

/* store locally */

function ag1savelocal() {
    gsdata = localStorage.getObject('gsdata');
    var ag1date = formatDate(new Date());
    ag1data = { 'ag1date':ag1date, 'email': gsdata.email, 'mylang': gsdata.mylang, 'answers': [-1]};
    ag1data = getinputs(ag1data,1,24,"ag");
    localStorage.setObject('ag1data', ag1data);
    calcResults();
    checkConnection("cag1");   
}
function ag2savelocal() {
    gsdata = localStorage.getObject('gsdata');
    var ag2date = formatDate(new Date());
    ag2data = { 'ag2date':ag2date, 'email': gsdata.email, 'mylang': gsdata.mylang, 'answers': [-1]};
    ag2data = getinputs(ag2data,25,48,"ag");
    localStorage.setObject('ag2data', ag2data);
    calcResults();
    checkConnection("cag2");
}
function ag3savelocal() {
    gsdata = localStorage.getObject('gsdata');
    var ag3date = formatDate(new Date());
    ag3data = { 'ag3date':ag3date, 'email': gsdata.email, 'mylang': gsdata.mylang, 'answers': [-1]};
    ag3data = getinputs(ag3data,49,60,"ag");
    localStorage.setObject('ag3data', ag3data);
    calcResults();
    checkConnection("cag3");
}
function ag4savelocal() {
    gsdata = localStorage.getObject('gsdata');
    var ag4date = formatDate(new Date());
    ag4data = { 'ag4date':ag4date, 'email': gsdata.email, 'mylang': gsdata.mylang, 'answers': [-1]};
    ag4data = getinputs(ag4data,61,84,"ag");
    localStorage.setObject('ag4data', ag4data);
    calcResults();
    checkConnection("cag4");   
}
function ag5savelocal() {
    gsdata = localStorage.getObject('gsdata');
    var ag5date = formatDate(new Date());
    ag5data = { 'ag5date':ag5date, 'email': gsdata.email, 'mylang': gsdata.mylang, 'answers': [-1]};
    ag5data = getinputs(ag5data,85,100,"ag");  
    localStorage.setObject('ag5data', ag5data);
    calcResults();
    checkConnection("cag5");  
}

/* Save on Server */

function ag1saveServer() {        
    agg1data = localStorage.getObject('ag1data');
    saveToServer("http://mshlmg.wpengine.com/store-gg-adv.php", agg1data, "ag1Saved");        
}
function ag2saveServer() {
    agg2data = localStorage.getObject('ag2data');
    saveToServer("http://mshlmg.wpengine.com/store-gg-adv.php", agg2data, "ag2Saved");       
}
function ag3saveServer() {

    agg3data = localStorage.getObject('ag3data');
    saveToServer("http://mshlmg.wpengine.com/store-gg-adv.php", agg3data, "ag3Saved");

}
function ag4saveServer() {    
    agg4data = localStorage.getObject('ag4data');
    saveToServer("http://mshlmg.wpengine.com/store-gg-adv.php", agg4data, "ag4Saved");
}
function ag5saveServer() {
    agg5data = localStorage.getObject('ag5data');
    saveToServer("http://mshlmg.wpengine.com/store-gg-adv.php", agg5data, "ag5Saved");   
} 


/* Interface changes -----------------------------------------*/ 

//show results btns AND gray out links to quizzes already taken
function showResultsButtons() {
    gsdata = localStorage.getObject('gsdata');
    if( gsdata){
        var resultButton2 = document.getElementById('govscore-results2');
        resultButton2.className = resultButton2.className + " see";
    }
    ag1data = localStorage.getObject('ag1data');
    if(ag1data){
        var ag1resultButton = document.getElementById('ag1-results');
        ag1resultButton.className = ag1resultButton.className + " see";
        var accBtn = document.getElementById('acc-btn');
        accBtn.className = accBtn.className + " gray";
    }
    ag2data = localStorage.getObject('ag2data');
    if(ag2data) {
        var ag2resultButton = document.getElementById('ag2-results');
        ag2resultButton.className = ag2resultButton.className + " see";
        var stakeBtn = document.getElementById('stake-btn');
        stakeBtn.className = stakeBtn.className + " gray";
    }
    ag3data = localStorage.getObject('ag3data');
    if(ag3data){
        var ag3resultButton = document.getElementById('ag3-results');
        ag3resultButton.className = ag3resultButton.className + " see";
        var dirBtn = document.getElementById('dir-btn');
        dirBtn.className = dirBtn.className + " gray";
    }
    ag4data = localStorage.getObject('ag4data'); 
    if( ag4data) {
        var ag4resultButton = document.getElementById('ag4-results');
        ag4resultButton.className = ag4resultButton.className + " see";
        var resBtn = document.getElementById('res-btn');
        resBtn.className = resBtn.className + " gray";
    }
    ag5data = localStorage.getObject('ag5data');
    if( ag5data){
        var ag5resultButton = document.getElementById('ag5-results');
        ag5resultButton.className = ag5resultButton.className + " see";
        var enhBtn = document.getElementById('enh-btn');
        enhBtn.className = enhBtn.className + " gray";
    }
}

/* Results -----------------*/
//display previous results saved in local storage
function showResults(){

    var storedResult = localStorage.getItem("result");
    var mylang = localStorage.getObject('mylang');

    if(storedResult){
        document.getElementById('gs-results').innerHTML = storedResult;
    }else{
        if(mylang == "fr" ) {
            document.getElementById('gs-results').innerHTML = "Aucun résultat disponible à l’heure actuelle.";
        }else if(mylang == "es" ) {
            document.getElementById('gs-results').innerHTML = "No hay resultados disponibles en el momento.";
        }else if(mylang == "pt" ) {
            document.getElementById('gs-results').innerHTML = "Nenhum resultado disponível ainda.";
        }else{
            document.getElementById('gs-results').innerHTML = "No Results Available Yet.";
        } 
    }
} 

/*Questions 1, 2, 5, 8, 10 and 13 are based on the practice of cultivating accountability.
Questions 11, 14 and 22 are based on the practice of engaging stakeholders.
Questions 6, 7, 12 and 16 are based on the practice of setting shared strategic direction.
Questions 3, 4, 17, 21, 23 and 25 are based on the practice of stewarding resources.
Questions 9, 15, 18, 19, 20 and 24 are based on the practice of continuous governance enhancement.*/

//add up the numbers
function calcResults() {

    var ag1results,ag2results,ag3results,ag4results,ag5results,res,resag,ag1percent,ag2percent,ag3percent,ag4percent,ag5percent;

    function getPercent(score,possible){
        return Math.round(score/possible*100);
    }

    function findLevel(score){
        var mylang = localStorage.getObject('mylang');
        switch(true) {
            case( score <= 25 ):
                if(mylang == "fr"){
                    level = "Besoin évident de développement de la gouvernance (niveau 1)";
                }else if(mylang == "es") {
                    level = " Necesidad clara de desarrollo de la gobernanza (nivel 1)";
                }else if(mylang == "pt") {
                    level = "Necessidade clara de desenvolvimento da governação (nível 1)";
                }else{
                level = "Clear need of governance development (level 1)";
                }
                break;
            case( score > 25 && score <= 50 ):
                if(mylang == "fr"){
                    level = " Niveau de gouvernance élémentaire (niveau 2)";
                }else if(mylang == "es") {
                    level = " Nivel básico de gobernanza (nivel 2)";
                }else if(mylang == "pt") {
                    level = "Nível básico de governação (nível 2)";
                }else{
                    level = "Basic level of governance (level 2)";
                }
                break;
            case( score > 50 && score <= 75 ):
                if(mylang == "fr"){
                    level = " Gouvernance dynamique et guidée par des objectifs (niveau 3)";
                }else if(mylang == "es") {
                    level = " Gobernanza basada en metas y gobernanza dinámica (nivel 3)";
                }else if(mylang == "pt") {
                    level = "Governação dinâmica e voltada a metas (nível 3)";
                }else{
                    level = "Goal-Driven and dynamic governance (level 3)";
                }
                break;
            case( score > 75 ):
                if(mylang == "fr"){
                    level = " Gouvernance transformatrice (niveau 4)";
                }else if(mylang == "es") {
                    level = " Gobernanza transformadora (nivel 4)";
                }else if(mylang == "pt") {
                    level = "Governação transformadora (nível 4)";
                }else{ 
                    level = "Transformational governance (level 4)";
                }
                break;
        }
        return level;
    }

   if(gsdata){

        var percentArray = [], accScore, stakeScore, dirScore, resScore, enhScore, totalScore, mlevel, ag1level, ag2level, ag3level, ag4level, ag5level;
        

        accScore = parseInt(gsdata.answers[1],10) + parseInt(gsdata.answers[2],10) + parseInt(gsdata.answers[5],10) + parseInt(gsdata.answers[8],10) + parseInt(gsdata.answers[10],10) + parseInt(gsdata.answers[13],10);
        var accPercent = getPercent(accScore,24);
        percentArray.push(accPercent);

        stakeScore = parseInt(gsdata.answers[11],10) + parseInt(gsdata.answers[14],10) + parseInt(gsdata.answers[22],10);
        var stakePercent = getPercent(stakeScore,12);
        percentArray.push(stakePercent);

        dirScore = parseInt(gsdata.answers[6],10) +parseInt(gsdata.answers[7],10) +parseInt(gsdata.answers[12],10) +parseInt(gsdata.answers[16],10);
        var dirPercent = getPercent(dirScore,16);
        percentArray.push(dirPercent);

        resScore = parseInt(gsdata.answers[3],10) +parseInt(gsdata.answers[4],10) +parseInt(gsdata.answers[17],10) +parseInt(gsdata.answers[21],10) +parseInt(gsdata.answers[23],10) +parseInt(gsdata.answers[25],10);
        var resPercent = getPercent(resScore,24);
        percentArray.push(resPercent);

        enhScore = parseInt(gsdata.answers[9],10) +parseInt(gsdata.answers[15],10) +parseInt(gsdata.answers[18],10) +parseInt(gsdata.answers[19],10) +parseInt(gsdata.answers[20],10) +parseInt(gsdata.answers[24],10);
        var enhPercent = getPercent(enhScore,24);
        percentArray.push(enhPercent);

        totalScore = accScore+stakeScore+dirScore+resScore+enhScore;
        
        mlevel = findLevel(totalScore);

        //list each area with the score
        var res_en = "<h2>Govscore Assessment</h2><p>You assessed your organization as follows: </p>";
        res_en += "<div id=\"accountability\"><h3>Cultivating Accountability</h3><p>" + accScore + " <span>out of 24 points</span> - " + accPercent + "%.</p></div>";
        res_en += "<div id=\"stakeholders\"><h3>Engaging Stakeholders</h3><p>" + stakeScore + " <span>out of 12 points</span> - " + stakePercent + "%.</p></div>";
        res_en += "<div id=\"direction\"><h3>Shared Strategic Direction</h3><p>" + dirScore + " <span>out of 16 points</span> - " + dirPercent + "%.</p></div>";
        res_en += "<div id=\"resources\"><h3>Stewarding Resources</h3><p>" + resScore + " <span>out of 24 points</span> - " + resPercent + "%.</p></div>";
        res_en += "<div id=\"enhancement\"><h3>Continuous Governance Enhancement</h3><p>" + enhScore + " <span>out of 24 points</span> - " + enhPercent + "%.</p></div>";
        res_en += "<div id=\"total\"><h3>Total Score</h3><p>" + totalScore +" points out of 100</p><p>This places your organization at:</p><p>" + mlevel + "</p></div>";
        res_en += "<div id=\"link\"><p>See the complete results at <a href=\"http://govscoreglobal.org/your-govscore-results/\">govscoreglobal.org</a></p>";

        
        var res_fr = "<h2>Évaluation GovScore</h2><p>Vous avez évalué votre organisation de la manière suivante: </p>";
        res_fr += "<div id=\"accountability\"><h3>Cultiver le Respect des Engagements</h3><p>" + accScore + " <span> sur 24 points</span> - " + accPercent + "%.</p></div>";
        res_fr += "<div id=\"stakeholders\"><h3>Engagement des Parties Prenantes</h3><p>" + stakeScore + " <span> sur 12 points</span> - " + stakePercent + "%.</p></div>";
        res_fr += "<div id=\"direction\"><h3>Orientation Stratégique Commune</h3><p>" + dirScore + " <span> sur 16 points</span> - " + dirPercent + "%.</p></div>";
        res_fr += "<div id=\"resources\"><h3>Bonne Intendance des Ressources</h3><p>" + resScore + " <span>sur 24 points</span> - " + resPercent + "%.</p></div>";
        res_fr += "<div id=\"enhancement\"><h3>Amélioration Continue de la Gouvernance</h3><p>" + enhScore + " <span>sur 24 points</span> - " + enhPercent + "%.</p></div>";
        res_fr += "<div id=\"total\"><h3>Score Total</h3><p>" + totalScore +" points sur 100</p><p> Ces résultats placent votre organisation au: </p><p>" + mlevel + "</p></div>";
        res_fr += "<div id=\"link\"><p>Consultez <a href='http://govscoreglobal.org/your-govscore-results/'>govscoreglobal.org</a>pour en savoir plus.</p>";

        var res_es = "<h2>Evaluación Govscore</h2><p>Usted evaluó a su organización como sigue: </p>";
        res_es += "<div id=\"accountability\"><h3>Cultivar la Rendición de Cuentas</h3><p>" + accScore + " <span>de 24 puntos</span> - " + accPercent + "%.</p></div>";
        res_es += "<div id=\"stakeholders\"><h3>Involucrar a los Grupos de Interés </h3><p>" + stakeScore + " <span>de 12 puntos</span> - " + stakePercent + "%.</p></div>";
        res_es += "<div id=\"direction\"><h3>Dirección Estratégica Compartida</h3><p>" + dirScore + " <span>de 16 puntos</span> - " + dirPercent + "%.</p></div>";
        res_es += "<div id=\"resources\"><h3>Gestión de los Recursos</h3><p>" + resScore + " <span>de 24 puntos</span> - " + resPercent + "%.</p></div>";
        res_es += "<div id=\"enhancement\"><h3>Mejoramiento Continuo de la Gobernanza</h3><p>" + enhScore + " <span>de 24 puntos</span> - " + enhPercent + "%.</p></div>";
        res_es += "<div id=\"total\"><h3>Puntuación Total</h3><p>" + totalScore +" de 100 puntos</p><p>Esto coloca a su organización en el:</p><p class=\"level\">" + mlevel + "</p></div>";
        res_es += "<div id=\"link\"><p>Aprender más en <a href='http://govscoreglobal.org/your-govscore-results/'>govscoreglobal.org</a>.</p>";

        var res_pt = "<h2>Avaliação do Govscore</h2><p>Você avaliou sua organização da seguinte forma: </p>";
        res_pt += "<div id=\"accountability\"><h3>Cultivo da Responsabilidade de Prestação de Contas</h3><p>" + accScore + " <span>de um total de 24 pontos</span> - " + accPercent + "%.</p></div>";
        res_pt += "<div id=\"stakeholders\"><h3>Engajamento das Partes Interessadas</h3><p>" + stakeScore + " <span>de um total de 12 pontos</span> - " + stakePercent + "%.</p></div>";
        res_pt += "<div id=\"direction\"><h3>Direcção Estratégica Compartilhada</h3><p>" + dirScore + " <span>de um total de 16 pontos</span> - " + dirPercent + "%.</p></div>";
        res_pt += "<div id=\"resources\"><h3>Administração responsável dos recursos</h3><p>" + resScore + " <span>de um total de 24 pontos</span> - " + resPercent + "%.</p></div>";
        res_pt += "<div id=\"enhancement\"><h3>Melhoria contínua da governação</h3><p>" + enhScore + " <span>de um total de 24 pontos</span> - " + enhPercent + "%.</p></div>";
        res_pt += "<div id=\"total\"><h3>Pontuação total</h3><p>" + totalScore +" de um total de 100 pontos</p><p>Isto situa sua organização no: </p><p class=\"level\">" + mlevel + "</p></div>";
        res_pt += "<div id=\"link\"><p>Obtenha mais informações em <a href='http://govscoreglobal.org/your-govscore-results/'>govscoreglobal.org</a>.</p>";
    }

    if(ag1data || ag2data || ag3data || ag4data || ag5data ){
        res_en += "<h2>Advanced Govscore</h2>";
        res_fr += "<h2>Évaluation GovScore Approfondie</h2>";
        res_es += "<h2>Govscore Avançado</h2>";
        res_pt += "<h2>GovScore Avançada</h2>";

        function getAgResults(dataset,resSet,ansnums) {
            var resSet = 0;
            for(i=0; i<(dataset.answers.length - ansnums); i++){
                var ans = ansnums + i;
                resSet += parseInt(dataset.answers[ans], 10);
            }
            return resSet;
        }

        if(ag1data){ag1results = getAgResults(ag1data,ag1results,1);}
        if(ag2data){ag2results = getAgResults(ag2data,ag2results,25);}
        if(ag3data){ag3results = getAgResults(ag3data,ag3results,49);}
        if(ag4data){ag4results = getAgResults(ag4data,ag4results,61);}
        if(ag5data){ag5results = getAgResults(ag5data,ag5results,85);}

        ag1percent = getPercent(ag1results,24);
        ag2percent = getPercent(ag2results,24);
        ag3percent = getPercent(ag3results,12);
        ag4percent = getPercent(ag4results,24);
        ag5percent = getPercent(ag5results,16);

        ag1level = findLevel(ag1percent);
        ag2level = findLevel(ag2percent);
        ag3level = findLevel(ag3percent);
        ag4level = findLevel(ag4percent);
        ag5level = findLevel(ag5percent);
        
        if(ag1results >= 0){
            res_en += "<div id=\"adv-govscore\"><h3>Cultivating Accountability</h3><p>" + ag1results + " <span>out of 24</span> - " + ag1percent + "%</p><p>This places your organization at:</p><p>" + ag1level + "</p></div>";
            res_fr += "<div id=\"adv-govscore\"><h3>Cultiver le Respect des Engagements</h3><p>" + ag1results + " <span>sur 24</span> - " + ag1percent + "%</p><p>Ces résultats placent votre organisation au:</p><p>" + ag1level + "</p></div>";
            res_es += "<div id=\"adv-govscore\"><h3>Cultivar la Rendición de Cuentas</h3><p>" + ag1results + " <span> de 24</span> - " + ag1percent + "%</p><p>Esto coloca a su organización en el:</p><p>" + ag1level + "</p></div>";
            res_pt += "<div id=\"adv-govscore\"><h3>Cultivo da Responsabilidade de Prestação de Contas</h3><p>" + ag1results + " <span>de um total de 24</span> - " + ag1percent + "%</p><p>Isto situa sua organização no:</p><p>" + ag1level + "</p></div>";
        }
        if(ag2results >= 0){
            res_en += "<div id=\"adv-govscore\"><h3>Engaging Stakeholders</h3><p>" + ag2results + " <span>out of 24</span> - " + ag2percent + "%</p><p>This places your organization at:</p><p>" + ag2level + "</p></div>";
            res_fr += "<div id=\"adv-govscore\"><h3>Engagement des Parties Prenantes</h3><p>" + ag2results + " <span>sur 24</span> - " + ag2percent + "%</p><p>Ces résultats placent votre organisation au:</p><p>" + ag2level + "</p></div>";
            res_es += "<div id=\"adv-govscore\"><h3>Involucrar a los Grupos de Interés </h3><p>" + ag2results + " <span> de 24</span> - " + ag2percent + "%</p><p>Esto coloca a su organización en el:</p><p>" + ag2level + "</p></div>";
            res_pt += "<div id=\"adv-govscore\"><h3>Engajamento das Partes Interessadas</h3><p>" + ag2results + " <span>de um total de 24</span> - " + ag2percent + "%</p><p>Isto situa sua organização no:</p><p>" + ag2level + "</p></div>";
        }
        if(ag3results >= 0){
            res_en += "<div id=\"adv-govscore\"><h3>Shared Strategic Direction</h3><p>" + ag3results + " <span>out of 12</span> - " + ag3percent + "%</p><p>This places your organization at:</p><p>" + ag3level + "</p></div>";
            res_fr += "<div id=\"adv-govscore\"><h3>Orientation Stratégique Commune</h3><p>" + ag3results + " <span>sur 12</span> - " + ag3percent + "%</p><p>Ces résultats placent votre organisation au </p><p>" + ag3level + "</p></div>";
            res_es += "<div id=\"adv-govscore\"><h3>Dirección Estratégica Compartida</h3><p>" + ag3results + " <span> de 12</span> - " + ag3percent + "%</p><p>Esto coloca a su organización en el:</p><p>" + ag3level + "</p></div>";
            res_pt += "<div id=\"adv-govscore\"><h3>Direcção Estratégica Compartilhada</h3><p>" + ag3results + " <span>de um total de 12</span> - " + ag3percent + "%</p><p>Isto situa sua organização no:</p><p>" + ag3level + "</p></div>";
        }
        if(ag4results >= 0){
            res_en += "<div id=\"adv-govscore\"><h3>Stewarding Resources</h3><p>" + ag4results + " <span>out of 24</span> - " + ag4percent + "%</p><p>This places your organization at:</p><p>" + ag4level + "</p></div>";
            res_fr += "<div id=\"adv-govscore\"><h3>Bonne Intendance des Ressources</h3><p>" + ag4results + " <span>sur 24</span> - " + ag4percent + "%</p><p>Ces résultats placent votre organisation au:</p><p>" + ag4level + "</p></div>";
            res_es += "<div id=\"adv-govscore\"><h3>Gestión de los Recursos</h3><p>" + ag4results + " <span> de 24</span> - " + ag4percent + "%</p><p>Esto coloca a su organización en el:</p><p>" + ag4level + "</p></div>";
            res_pt += "<div id=\"adv-govscore\"><h3>Administração Responsável dos Recursos</h3><p>" + ag4results + " <span>e um total de 24</span> - " + ag4percent + "%</p><p>Isto situa sua organização no:</p><p>" + ag4level + "</p></div>";
        }
        if(ag5results >= 0){
            res_en += "<div id=\"adv-govscore\"><h3>Continuous Governance Enhancement</h3><p>" + ag5results + " <span>out of 16</span> - " + ag5percent + "%</p><p>This places your organization at:</p><p>" + ag5level + "</p></div>";
            res_fr += "<div id=\"adv-govscore\"><h3>Amélioration Continue de la Gouvernance</h3><p>" + ag5results + " <span>sur 16</span> - " + ag5percent + "%</p><p>Ces résultats placent votre organisation au:</p><p>" + ag5level + "</p></div>";
            res_es += "<div id=\"adv-govscore\"><h3>Mejoramiento Continuo de la Gobernanza</h3><p>" + ag5results + " <span>de 16</span> - " + ag5percent + "%</p><p>Esto coloca a su organización en el:</p><p>" + ag5level + "</p></div>";
            res_pt += "<div id=\"adv-govscore\"><h3>Melhoria Contínua da Governação</h3><p>" + ag5results + " <span>e um total de 16</span> - " + ag5percent + "%</p><p>Isto situa sua organização no:</p><p>" + ag5level + "</p></div>";
        }
    }
    var mylang = localStorage.getObject('mylang');
    if(mylang == "fr" ) {
        localStorage.setItem("result", res_fr);
        document.getElementById('gs-results').innerHTML = res_fr;
    }else if(mylang == "es" ) {
        localStorage.setItem("result", res_es);
        document.getElementById('gs-results').innerHTML = res_es;
    }else if(mylang == "pt" ) {
        localStorage.setItem("result", res_pt);
        document.getElementById('gs-results').innerHTML = res_pt;
    }else{
        localStorage.setItem("result", res_en);
        document.getElementById('gs-results').innerHTML = res_en;
    }

}



/* Pushwoosh ---------------------------------------------------*/
function initPushwoosh() {
      var pushNotification = window.plugins.pushNotification;

      if(device.platform == "Android")
      {
        registerPushwooshAndroid();
      }else if(device.platform == "iPhone" || device.platform == "iOS")
      {
        registerPushwooshIOS();
      }
    }

function registerPushwooshAndroid() {
     var pushNotification = cordova.require("com.pushwoosh.plugins.pushwoosh.PushNotification");
 
    //set push notifications handler
    document.addEventListener('push-notification', function(event) {
        var title = event.notification.title;
        var userData = event.notification.userdata;
                                 
        if(typeof(userData) != "undefined") {
            console.warn('user data: ' + JSON.stringify(userData));
        }
                                     
        alert(title);
    });
 
    //initialize Pushwoosh with projectid: "GOOGLE_PROJECT_ID", pw_appid : "PUSHWOOSH_APP_ID". This will trigger all pending push notifications on start.
    pushNotification.onDeviceReady({ projectid: "335672732764", pw_appid : "42686-7A1E3" });
 
    //register for pushes
    pushNotification.registerDevice(
        function(status) {
            var pushToken = status;
            console.warn('push token: ' + pushToken);
        },
        function(status) {
            console.warn(JSON.stringify(['failed to register ', status]));
        }
    );
}

function registerPushwooshIOS() {
    var pushNotification = cordova.require("pushwoosh-cordova-plugin.PushNotification");
 
    //set push notification callback before we initialize the plugin
    document.addEventListener('push-notification', function(event) {
                                //get the notification payload
                                var notification = event.notification;
 
                                //display alert to the user for example
                                alert(notification.aps.alert);
                               
                                //clear the app badge
                                pushNotification.setApplicationIconBadgeNumber(0);
                            });
 
    //initialize the plugin
    pushNotification.onDeviceReady({pw_appid:"42686-7A1E3"});
     
    //register for pushes
    pushNotification.registerDevice(
        function(status) {
            var deviceToken = status['deviceToken'];
            console.warn('registerDevice: ' + deviceToken);
        },
        function(status) {
            console.warn('failed to register : ' + JSON.stringify(status));
            alert(JSON.stringify(['failed to register ', status]));
        }
    );
     
    //reset badges on app start
    pushNotification.setApplicationIconBadgeNumber(0);
}
