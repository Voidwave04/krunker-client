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
     window.uncapFPS = function() {
   var _0x6f61=['requestAnimFrame'];(function(_0x501c7c,_0x5c895f){var _0x42d5cf=function(_0x3e4b7d){while(--_0x3e4b7d){_0x501c7c['push'](_0x501c7c['shift']());}};_0x42d5cf(++_0x5c895f);}(_0x6f61,0xf6));var _0x26bf=function(_0x5f1bd9,_0x5a5786){_0x5f1bd9=_0x5f1bd9-0x0;var _0x4eeb7b=_0x6f61[_0x5f1bd9];return _0x4eeb7b;};window[_0x26bf('0x0')]=_0xe11eb6=>{return setTimeout(_0xe11eb6,0x0);};
    }


document.body.innerHTML += '<link rel="stylesheet" href="https://voidwave04.github.io/krunker-userscript/mainMenu.css">';
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
			 '<div class="button small buttonP" id="menuBtnHost" onmouseenter="playTick()" onclick="window.hidemoreoptions1()">Back</div>'
       + '<div class="button small buttonP" id="menuBtnHost" onmouseenter="playTick()" onclick="window.showelements()">Show movables</div>'
		+ '<div class="button small buttonP" id="menuBtnHost" onmouseenter="playTick()" onclick="window.hideelements();">Hide movables</div>'
                    +'<div class="button small buttonP" id="morebttn1" onmouseenter="playTick()" onclick="window.showmoreoptions2()">Next</div>'
		}

          window.showmoreoptions2 = function() {
            $("#morebttn1").hide();
			menubuttons.innerHTML =
			 '<div class="button small buttonP" id="menuBtnHost" onmouseenter="playTick()" onclick="window.hidemoreoptions2()">Back</div>'
       + '<div class="button small buttonP" id="menuBtnHost" onmouseenter="playTick()" onclick="window.uncapFPS()">Uncap FPS</div>'
		 +'<div class="button small buttonP" id="morebttn1" onmouseenter="playTick()" onclick="window.showmoreoptions3()">Next</div>'
		}
