/* Events -----------------------------------------*/
function init(){
    document.addEventListener("online", onOnline, true);
    document.addEventListener("deviceready", onOnline, true);
    document.addEventListener("deviceready", checkLanguage, false); 
    document.addEventListener("deviceready", showResults, false);
    document.addEventListener("deviceready", setbuttons, false);
    document.addEventListener("deviceready", initPushwoosh, true);
    document.addEventListener("deviceready", showResultsButtons, false);
    document.addEventListener("deviceready", hideKeyboard, false);
}

//listen for click events      
function setbuttons() {
    document.getElementById('btnStore').addEventListener('click', validate, false);
    document.getElementById('ag1Store').addEventListener('click', function(){ adv_validate(ag1data, 24, 0, ag1savelocal); });
    document.getElementById('ag2Store').addEventListener('click', function(){ adv_validate(ag2data, 24, 24, ag2savelocal); });
    document.getElementById('ag3Store').addEventListener('click', function(){ adv_validate(ag3data, 12, 48, ag3savelocal); });
    document.getElementById('ag4Store').addEventListener('click', function(){ adv_validate(ag4data, 24, 60, ag4savelocal); });
    document.getElementById('ag5Store').addEventListener('click', function(){ adv_validate(ag5data, 16, 84, ag5savelocal); });
}

/* Local Storage ----------------------------------*/
Storage.prototype.setObject = function(key, value) {
    this.setItem(key, JSON.stringify(value));
}

Storage.prototype.getObject = function(key) {
    var value = this.getItem(key);
    return value && JSON.parse(value);
}

/* hide Keyboard -----------------------------------*/
function hideKeyboard(){
    $('#1none').click(function(){
             $('#email2').blur();
        });
    $('#1minimally').click(function(){
             $('#email2').blur();
        });
    $('#1partly').click(function(){
             $('#email2').blur();
        });
    $('#1mostly').click(function(){
             $('#email2').blur();
        });
    $('#1completely').click(function(){
             $('#email2').blur();
        });
}
        

/* Language ----------------------------------------*/
function checkLanguage() {
  navigator.globalization.getPreferredLanguage(
    function (language) {
        var mylang = language.value;
        mylang = mylang.slice(0, 2);
        translatenow(mylang);
        localStorage.setObject('mylang', mylang);
    },
    function () {alert('Error getting language\n');}
  );
}
var mylang = localStorage.getItem('mylang');  

function translatenow(mylang) { 

    //alert('language: ' + mylang + ' again\n');

    if(mylang == "fr" ) {
      $.getScript("js/i18n/translation_fr.js", function(){
        $.i18n.load(i18n_dict_fr);
        map_all();
      });
    }else if(mylang == "es") {
      $.getScript("js/i18n/translation_es.js", function(){
        $.i18n.load(i18n_dict_es);
        map_all();
      });
    }else if(mylang == "pt" ) {
      $.getScript("js/i18n/translation_pt.js", function(){
        $.i18n.load(i18n_dict_pt);
        map_all();
      });
    }else{
        //just load the normal page
      // $.getScript("js/i18n/translation_en.js", function(){
      //   $.i18n.load(i18n_dict);
      //   map_all();
        
      // });
    }

function map_all(){
    /* Home Page */
    $('h2#about')._t('about');
    $('p#about-text')._t('about-text');
    $('#steps')._t('steps');
    $('li#step1')._t('step1');
    $('li#step2')._t('step2');
    $('li#step3')._t('step3');
    $('li#step4')._t('step4');
    $('li#step5')._t('step5');
    $('li#step6')._t('step6');
    $('li#step7')._t('step7');
    $('li#step8')._t('step8');
    $('p#step-last')._t('step-last');
    $('#disclaimer')._t('disclaimer')
    /* Govscore */
    $('#name-input')._t('name-input');
    $('#email')._t('email');
    $('#email2')._t('email2');
    $('#select-org')._t('select-org');
    $('#gs1')._t('gs1');
    $('#gs2')._t('gs2');
    $('#gs3')._t('gs3');
    $('#gs4')._t('gs4');
    $('#gs5')._t('gs5');
    $('#gs6')._t('gs6');
    $('#gs7')._t('gs7');
    $('#gs8')._t('gs8');
    $('#gs9')._t('gs9');
    $('#gs10')._t('gs10');
    $('#gs11')._t('gs11');
    $('#gs12')._t('gs12');
    $('#gs13')._t('gs13');
    $('#gs14')._t('gs14');
    $('#gs15')._t('gs15');
    $('#gs16')._t('gs16');
    $('#gs17')._t('gs17');
    $('#gs18')._t('gs18');
    $('#gs19')._t('gs19');
    $('#gs20')._t('gs20');
    $('#gs21')._t('gs21');
    $('#gs22')._t('gs22');
    $('#gs23')._t('gs23');
    $('#gs24')._t('gs24');
    $('#gs25')._t('gs25');
    /* Advanced Govscore */
    $('#pick-area')._t('pick-area');
    $('#pick-area-adv')._t('pick-area-adv');
    $('#ag1')._t('ag1');
    $('#ag2')._t('ag2');
    $('#ag3')._t('ag3');
    $('#ag4')._t('ag4');
    $('#ag5')._t('ag5');
    $('#ag6')._t('ag6');
    $('#ag7')._t('ag7');
    $('#ag8')._t('ag8');
    $('#ag9')._t('ag9');
    $('#ag10')._t('ag10');
    $('#ag11')._t('ag11');
    $('#ag12')._t('ag12');
    $('#ag13')._t('ag13');
    $('#ag14')._t('ag14');
    $('#ag15')._t('ag15');
    $('#ag16')._t('ag16');
    $('#ag17')._t('ag17');
    $('#ag18')._t('ag18');
    $('#ag19')._t('ag19');
    $('#ag20')._t('ag20');
    $('#ag21')._t('ag21');
    $('#ag22')._t('ag22');
    $('#ag23')._t('ag23');
    $('#ag24')._t('ag24');
    $('#ag25')._t('ag25');
    $('#ag26')._t('ag26');
    $('#ag27')._t('ag27');
    $('#ag28')._t('ag28');
    $('#ag29')._t('ag29');
    $('#ag30')._t('ag30');
    $('#ag31')._t('ag31');
    $('#ag32')._t('ag32');
    $('#ag33')._t('ag33');
    $('#ag34')._t('ag34');
    $('#ag35')._t('ag35');
    $('#ag36')._t('ag36');
    $('#ag37')._t('ag37');
    $('#ag38')._t('ag38');
    $('#ag39')._t('ag39');
    $('#ag40')._t('ag40');
    $('#ag41')._t('ag41');
    $('#ag42')._t('ag42');
    $('#ag43')._t('ag43');
    $('#ag44')._t('ag44');
    $('#ag45')._t('ag45');
    $('#ag46')._t('ag46');
    $('#ag47')._t('ag47');
    $('#ag48')._t('ag48');
    $('#ag49')._t('ag49');
    $('#ag50')._t('ag50');
    $('#ag51')._t('ag51');
    $('#ag52')._t('ag52');
    $('#ag53')._t('ag53');
    $('#ag54')._t('ag54');
    $('#ag55')._t('ag55');
    $('#ag56')._t('ag56');
    $('#ag57')._t('ag57');
    $('#ag58')._t('ag58');
    $('#ag59')._t('ag59');
    $('#ag60')._t('ag60');
    $('#ag61')._t('ag61');
    $('#ag62')._t('ag62');
    $('#ag63')._t('ag63');
    $('#ag64')._t('ag64');
    $('#ag65')._t('ag65');
    $('#ag66')._t('ag66');
    $('#ag67')._t('ag67');
    $('#ag68')._t('ag68');
    $('#ag69')._t('ag69');
    $('#ag70')._t('ag70');
    $('#ag71')._t('ag71');
    $('#ag72')._t('ag72');
    $('#ag73')._t('ag73');
    $('#ag74')._t('ag74');
    $('#ag75')._t('ag75');
    $('#ag76')._t('ag76');
    $('#ag77')._t('ag77');
    $('#ag78')._t('ag78');
    $('#ag79')._t('ag79');
    $('#ag80')._t('ag80');
    $('#ag81')._t('ag81');
    $('#ag82')._t('ag82');
    $('#ag83')._t('ag83');
    $('#ag84')._t('ag84');
    $('#ag85')._t('ag85');
    $('#ag86')._t('ag86');
    $('#ag87')._t('ag87');
    $('#ag88')._t('ag88');
    $('#ag89')._t('ag89');
    $('#ag90')._t('ag90');
    $('#ag91')._t('ag91');
    $('#ag92')._t('ag92');
    $('#ag93')._t('ag93');
    $('#ag94')._t('ag94');
    $('#ag95')._t('ag95');
    $('#ag96')._t('ag96');
    $('#ag97')._t('ag97');
    $('#ag98')._t('ag98');
    $('#ag99')._t('ag99');
    $('#ag100')._t('ag100');
    /* Question Headers */
    $('#header-ca-1')._t('header-ca-1');
    $('#header-ca-2')._t('header-ca-2');
    $('#header-ca-3')._t('header-ca-3');
    $('#header-ca-4')._t('header-ca-4');
    $('#header-ca-5')._t('header-ca-5');
    $('#header-ca-6')._t('header-ca-6');
    $('#header-es-1')._t('header-es-1');
    $('#header-es-2')._t('header-es-2');
    $('#header-es-3')._t('header-es-3');
    $('#header-es-4')._t('header-es-4');
    $('#header-es-5')._t('header-es-5');
    $('#header-es-6')._t('header-es-6');
    $('#header-ssd-1')._t('header-ssd-1');
    $('#header-ssd-2')._t('header-ssd-2');
    $('#header-ssd-3')._t('header-ssd-3');
    $('#header-sr-1')._t('header-sr-1');
    $('#header-sr-2')._t('header-sr-2');
    $('#header-sr-3')._t('header-sr-3');
    $('#header-sr-4')._t('header-sr-4');
    $('#header-sr-5')._t('header-sr-5');
    $('#header-sr-6')._t('header-sr-6');
    $('#header-cce-1')._t('header-cce-1');
    $('#header-cce-2')._t('header-cce-2');
    $('#header-cce-3')._t('header-cce-3');
    $('#header-cce-4')._t('header-cce-4');
    /* Legend */
    $('#legend-header')._t('legend-header'); 
    $('#not-at-all')._t('not-at-all');
    $('#minimally')._t('minimally');
    $('#partly')._t('partly');
    $('#mostly')._t('mostly');
    $('#completely')._t('completely');
    /* Headers */
    $('#how-to')._t('how-to');
    $('#gs-header')._t('gs-header');
    $('#adv-header1')._t('adv-header');
    $('#accountability')._t('accountability');
    $('#stakeholders')._t('stakeholders');
    $('#direction')._t('direction');
    $('#resources')._t('resources');
    $('#enhancement')._t('enhancement');
    $('#gs-res-header')._t('gs-res-header');
    /* Bottom Nav */
    $('#gs')._t('gs');
    $('#adv1')._t('adv');
    $('#res1')._t('res');
    $('#adv2')._t('adv');
    $('#adv3')._t('adv');
    $('#adv4')._t('adv');
    $('#adv5')._t('adv');
    $('#adv6')._t('adv');
    $('#adv7')._t('adv');
    $('#adv8')._t('adv');
    $('#adv9')._t('adv');
    $('#res2')._t('res');
    $('#res3')._t('res');
    $('#res4')._t('res');
    $('#res5')._t('res');
    $('#res6')._t('res');
    $('#res7')._t('res');
    $('#res8')._t('res');
    $('#res9')._t('res');
    /* Buttons */
    $('#govscore-results2')._t('govscore-results');
    $('#btnStore')._t('submit');
    $('#ag1Store')._t('submit');
    $('#ag2Store')._t('submit');
    $('#ag3Store')._t('submit');
    $('#ag4Store')._t('submit');
    $('#ag5Store')._t('submit');
    /*Messages*/
    $('#check-answers1')._t('check-answers');
    $('#check-answers2')._t('check-answers');
    $('#check-answers3')._t('check-answers');
    $('#check-answers4')._t('check-answers');
    $('#check-answers5')._t('check-answers');
    $('#check-answers6')._t('check-answers');
    $('#acc-btn')._t('accountability');
    $('#stake-btn')._t('stakeholders');
    $('#dir-btn')._t('direction');
    $('#res-btn')._t('resources');
    $('#enh-btn')._t('enhancement');
    $('#ag1-results')._t('govscore-results');
    $('#ag2-results')._t('govscore-results');
    $('#ag3-results')._t('govscore-results');
    $('#ag4-results')._t('govscore-results');
    $('#ag5-results')._t('govscore-results');
    $('#no-results')._t('no-results');
  }
}

/* Form Validation -------------------------------------*/

function validate(event) {
  if(gsdata){
        if(mylang == "fr" ) {
                notification('Vous avez déjà rempli cette évaluation. Veuillez consulter vos résultats.', goTo(), "Déjà complété", "OK");
            }else if(mylang == "es" ) {
                notification('Usted terminó esta evaluación previamente. Por favor verifique sus resultados.', goTo(), "Ya está completada", "OK");
            }else if(mylang == "pt" ) {
                notification('Você concluiu esta avaliação anteriormente. Favor verificar seus resultados.', goTo(), "Já concluído", "OK");
            }else{
                notification('You previously finished this assessment. Please check your results.', goTo(), "Already Completed", "OK");
            }
        
  }else{  
      if( document.gsForm.username.value === "" ) {
            if(mylang == "fr" ) {
                notification(  "Veuillez saisir votre nom complet." );
            }else if(mylang == "es" ) {
                notification(  "Por favor ingrese su nombre y apellido." );
            }else if(mylang == "pt" ) {
                notification(  "Favor digitar seu nome completo." );
            }else{
                notification(  "Please enter your full name." );
            }
             
             document.gsForm.username.focus();
             event.preventDefault();
             return false;      
      }
      if( document.gsForm.email.value !== document.gsForm.email2.value ) {
            if(mylang == "fr" ) {
                notification(  "Le courriel que vous avez saisi ne correspond pas. Veuillez réessayer." );
            }else if(mylang == "es" ) {
                notification(  "Los datos enviados por email no son compatibles. Por favor intente nuevamente. " );
            }else if(mylang == "pt" ) {
                notification(  "Os emails informados não coincidem. Favor tentar novamente." );
            }else{
                notification(  "Email entries don't match. Please try again." );
            }
            
            document.gsForm.email.focus();
            event.preventDefault();
            return false;    
      }
      if( document.gsForm.email.value === "" ) {
            if(mylang == "fr" ) {
                notification(  "Veuillez saisir votre adresse e-mail!" );
            }else if(mylang == "es" ) {
                notification(  " Por favor ingrese su dirección de email!" );
            }else if(mylang == "pt" ) {
                notification(  "Favor informar seu endereço de email!" );
            }else{
                notification(  "Please enter your email address!" );
            }
            document.gsForm.email.focus();
            event.preventDefault();
            return false;
      }else{
            // Put extra check for data format
            var ret = validateEmail();
            if( ret === false ) {
                event.preventDefault();
                return false;
             }
      }
      //check that all answers have been answered
      var i, key, value;
      //loop through the entries, grab value and store in array
      for(i=1; i<=25; i++) {
          key = "'g" + i +"'";
          value = $('input[name = ' + key + ']:checked').val();
          if(value === "" || value == undefined) {
                if(mylang == "fr" ) {
                    notification(  "Veuillez répondre à toutes les questions." );
                }else if(mylang == "es" ) {
                    notification(  " Por favor responda todas las preguntas." );
                }else if(mylang == "pt" ) {
                    notification(  "Favor responder a todas as perguntas." );
                }else{
                     notification(  "Please answer all questions.");
                }
             
              event.preventDefault();
              return false;
          }
      }       
      savelocal();
      }
}

function validateEmail() {
   var emailID = document.gsForm.email.value;
   var atpos = emailID.indexOf("@");
   var dotpos = emailID.lastIndexOf(".");
   if (atpos < 1 || ( dotpos - atpos < 2 )) {

        if(mylang == "fr" ) {
            notification(  "Veuillez saisir votre adresse e-mail exacte." );
        }else if(mylang == "es" ) {
            notification(  " Por favor ingrese su dirección de email correcta." );
        }else if(mylang == "pt" ) {
            notification(  "Favor informar seu endereço de email correto." );
        }else{
            notification( "Please enter a correct email address.");
        }
       
       document.gsForm.email.focus();
       event.preventDefault();
       return false;
   }
   return( true );
}

function adv_validate( savedData, length, keyaug, savefunc){
    if(savedData){
        if(mylang == "fr" ) {
            notification(  "Vous avez déjà rempli cette évaluation. Veuillez consulter vos résultats.", goTo()," Déjà complété", "OK" );
        }else if(mylang == "es" ) {
            notification(  " Usted terminó esta evaluación previamente. Por favor verifique sus resultados.", goTo(), "Ya está completada", "OK" );
        }else if(mylang == "pt" ) {
            notification(  "Você concluiu esta avaliação anteriormente. Favor verificar seus resultados.", goTo(), "Já concluído", "OK" );
        }else{
            notification("You previously finished this assessment. Please check your results.", goTo(), "Already Completed", "OK");
        }
        
    }else if(gsdata == null){
        if(mylang == "fr" ) {
            notification(  " Veuillez procéder à l’évaluation GovScore initiale avant d’accéder aux questionnaires d’évaluation approfondie.", goTo(),"Alert", "OK" );
        }else if(mylang == "es" ) {
            notification(  "Por favor complete la evaluación inicial de govscore antes de responder los cuestionarios de Advanced Govscore.", goToGs(), "Alert", "OK" );
        }else if(mylang == "pt" ) {
            notification(  "Favor concluir a avaliação Govscore inicial, antes de passar para os questionários do Govscore Avançado.", goToGs(), "Alert", "OK" );
        }else{
            notification('Please complete the initial Govscore assessment before moving on to the Advanced Govscore questionnaires.', goToGs(), "Alert", "OK");
        }
        
    }else{
      var i, key, value;
      //loop through the entries, grab value and store in array
      for(i=1; i<=length; i++) {
          key = "'ag" + (i+keyaug) +"'";
          value = $('input[name = ' + key + ']:checked').val();
          if(value === "" || value == undefined) {
                if(mylang == "fr" ) {
                    notification(  "Veuillez répondre à toutes les questions." );
                }else if(mylang == "es" ) {
                    notification(  "Por favor responda todas las preguntas." );
                }else if(mylang == "pt" ) {
                    notification(  "Favor responder a todas as perguntas." );
                }else{
                    notification( "Please answer all questions" );
                }
              
              event.preventDefault();
              return false;
          }
      }
      savefunc();
      } 
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
    var pushNotification = window.plugins.pushNotification;
 
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
