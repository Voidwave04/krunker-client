const {ipcRenderer} = require('electron');
let versionNum = 0.1.0
	window.prompt = function importSettings() {
    var tempHTML = '<div class="setHed">Import Settings</div>';
    tempHTML += '<div class="settName" id="importSettings_div" style="display:block">Settings String<input type="url" placeholder="Paste Settings String Here" name="url" class="inputGrey2" id="settingString"></div>';
    tempHTML += '<a class="+" id="importBtn">Import</a>';
    menuWindow.innerHTML = tempHTML;
    importBtn.addEventListener('click', () => { parseSettings(settingString.value); });
}

function parseSettings(string) { 
    if(string && string != '') {
        try {
            var json = JSON.parse(string);
            for(var setting in json) {
                setSetting(setting, json[setting]);
                showWindow(1);
            }
        } catch(err) {
            console.error(err);
            alert('Failed to import settings');
        }
    }
}
window.removebanner = function () {
    var banner1 = document.getElementById('aHolder');
    var banner2 = document.getElementById('gameNameHolder');
    var banner3 = document.getElementById('merchHolder');
    banner1.style.visibility = 'hidden';
    banner2.style.visibility = 'hidden';
    banner3.style.visibility = 'hidden';
};

window.showbanner = function () {
    var banner1 = document.getElementById('aHolder');
    var banner2 = document.getElementById('gameNameHolder');
    var banner3 = document.getElementById('merchHolder');
    banner1.style.visibility = 'visible';
    banner2.style.visibility = 'visible';
    banner3.style.visibility = 'visible';
};

window.showelements = function () {
    window.alert("Things that can be moved : chatwindow, roundtimer in top left, ammo counter bottom right, the speedometer, and your avatar and health bottom left");

    var banner1 = document.getElementById('inGameUI');
    var banner2 = document.getElementById('menuItemContainer');
    banner1.style.display = 'block';
    banner2.style.display = 'none';




};



window.hideelements = function () {
    var banner1 = document.getElementById('inGameUI');
    var banner2 = document.getElementById('menuItemContainer');
    banner1.style.display = 'none';
    banner2.style.display = '';
};



function dragElement(draggableF) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(draggableF.id + "header")) {

        document.getElementById(draggableF.id + "header").onmousedown = dragMouseDown;
    } else {

        draggableF.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();

        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;

        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();

        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        draggableF.style.top = (draggableF.offsetTop - pos2) + "px";
        draggableF.style.left = (draggableF.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {

        document.onmouseup = null;
        document.onmousemove = null;
    }
};
window.fakeFPS = function(){
	window['\x72\x65\x71\x75\x65\x73\x74\x41\x6e\x69\x6d\x46\x72\x61\x6d\x65']=setInterval;
}
document.addEventListener('DOMContentLoaded', function() {

document.body.innerHTML += '<link rel="stylesheet" href="https://voidwave04.github.io/krunker-client/mainMenu.css">';
    var menubuttons = document.getElementById('subLogoButtons');
dragElement(document.getElementById("topLeftHolder"));
dragElement(document.getElementById("chatHolder"));
dragElement(document.getElementById("bottomLeftHolder"));
dragElement(document.getElementById("bottomRight"));
dragElement(document.getElementById("speedDisplay"));
dragElement(document.getElementById("menuClassContainer"));
menubuttons.innerHTML +='<div class="button small buttonP" id="morebttn" onmouseenter="playTick()" onclick="window.showmoreoptions1()">Next</div>'
	
window.hidemoreoptions1 = function() {
    $("#morebttn1").show();
    menubuttons.innerHTML =
    '<div class="button small buttonP" id="menuBtnHost" onmouseenter="playTick()" onclick="openHostWindow()">Host Game</div>'
    +'<div class="button small buttonR" id="menuBtnBrowser" onmouseenter="playTick()" onclick="showWindow(2)">Server Browser</div>'
    +'<div id="inviteButton" class="button small" onmouseenter="playTick()" onclick="copyInviteLink()">Invite</div>'
    +'<div class="button small" id="menuBtnJoin" onmouseenter="playTick()" onclick="showWindow(24)">Join</div>'
    +'<div class="button small buttonP" id="morebttn1" onmouseenter="playTick()" onclick="window.showmoreoptions1()">Next</div>'
}
window.hidemoreoptions2 = function() {
    $("#morebttn1").show();
    menubuttons.innerHTML =
			 '<div class="button small buttonP" id="menuBtnHost" onmouseenter="playTick()" onclick="window.hidemoreoptions1()">Back</div>'
       + '<div class="button small buttonP" id="menuBtnHost" onmouseenter="playTick()" onclick="window.showelements()">Show movables</div>'
		+ '<div class="button small buttonP" id="menuBtnHost" onmouseenter="playTick()" onclick="window.hideelements();">Hide movables</div>'
        +'<div class="button small buttonP" id="morebttn1" onmouseenter="playTick()" onclick="window.showmoreoptions2()">Next</div>'
}
        window.showmoreoptions1 = function() {
            $("#morebttn1").hide();
			menubuttons.innerHTML =
        '<div class="button small buttonP" id="menuBtnHost" onmouseenter="playTick()" onclick="window.showelements()">Show movables</div>'
		+ '<div class="button small buttonP" id="menuBtnHost" onmouseenter="playTick()" onclick="window.hideelements();">Hide movables</div>'
                    +'<div class="button small buttonP" id="morebttn1" onmouseenter="playTick()" onclick="window.showmoreoptions2()">Next</div>'
		}

          window.showmoreoptions2 = function() {
            $("#morebttn1").hide();
			menubuttons.innerHTML =
       '<div class="button small buttonP" id="menuBtnHost" onmouseenter="playTick()" onclick="window.fakeFPS()">Fake FPS</div>'
		 +'<div class="button small buttonP" id="morebttn1" onmouseenter="playTick()" onclick="window.showmoreoptions3()">Next</div>'
		}
             window.showmoreoptions3 = function() {
            $("#morebttn1").hide();
			menubuttons.innerHTML =
        '<div class="button small buttonP" id="menuBtnHost" onmouseenter="playTick()" onclick="showWindow(5)">Profile</div>'
                  + '<div class="button small buttonP" id="menuBtnHost" onmouseenter="playTick()" onclick="showWindow(27)">Ranked</div>'
		 +'<div class="button small buttonP" id="morebttn1" onmouseenter="playTick()" onclick="window.showmoreoptions4()">Next</div>'
		}
                         window.showmoreoptions4 = function() {
            $("#morebttn1").hide();
			menubuttons.innerHTML =
        '<div class="button small buttonP" id="menuBtnHost" onmouseenter="playTick()" onclick="showWindow(14)">Shop</div>'
                  + '<div class="button small buttonP" id="menuBtnHost" onmouseenter="playTick()" onclick="window.open(`/social.html`)">Social</div>'
		 +'<div class="button small buttonP" id="morebttn1" onmouseenter="playTick()" onclick="window.showmoreoptions5()">Next</div>'
		}
                          window.showmoreoptions5 = function() {
            $("#morebttn1").hide();
			menubuttons.innerHTML =
        '<div class="button small buttonP" id="menuBtnHost" onmouseenter="playTick()" onclick="showWindow(10)">Maps</div>'
                  + '<div class="button small buttonP" id="menuBtnHost" onmouseenter="playTick()" onclick="showWindow(4)">Mods</div>'
		 +'<div class="button small buttonP" id="morebttn1" onmouseenter="playTick()" onclick="showWindow(1)">Settings</div>'
                              +'<div class="button small buttonP" id="menuBtnHost" onmouseenter="playTick()" onclick="window.hidemoreoptions1()">Next</div>'
		}
	           mapInfoHolder.insertAdjacentHTML("beforeend", '<div id="clientVersion" style="font-size: 15px; color: #000"></div>');
            clientVersion.innerHTML = '<a style="color: #6600CC">VoidClient v' + versionNum + '</a>';
	})
