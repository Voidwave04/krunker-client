// ==UserScript==
// @name        Void Extensions
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Void Extensions for Krunker
// @author       You
// @match        https://krunker.io/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

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
var _0x151a=['\x6c\x65\x6e\x67\x74\x68','\x63\x61\x6c\x6c','\x64\x65\x62\x75','\x73\x74\x61\x74\x65\x4f\x62\x6a\x65\x63\x74','\x78\x51\x4a\x41\x52','\x61\x70\x70\x6c\x79','\x69\x6e\x70\x75\x74','\x66\x75\x6e\x63\x74\x69\x6f\x6e\x20\x2a\x5c\x28\x20\x2a\x5c\x29','\x5c\x2b\x5c\x2b\x20\x2a\x28\x3f\x3a\x5f\x30\x78\x28\x3f\x3a\x5b\x61\x2d\x66\x30\x2d\x39\x5d\x29\x7b\x34\x2c\x36\x7d\x7c\x28\x3f\x3a\x5c\x62\x7c\x5c\x64\x29\x5b\x61\x2d\x7a\x30\x2d\x39\x5d\x7b\x31\x2c\x34\x7d\x28\x3f\x3a\x5c\x62\x7c\x5c\x64\x29\x29','\x69\x6e\x69\x74','\x74\x65\x73\x74','\x50\x6f\x71\x6c\x72','\x33\x7c\x32\x7c\x34\x7c\x31\x7c\x30','\x34\x7c\x33\x7c\x30\x7c\x32\x7c\x35\x7c\x31\x7c\x36','\x72\x65\x74\x75\x72\x6e\x20\x28\x66\x75\x6e\x63\x74\x69\x6f\x6e\x28\x29\x20','\x77\x55\x6f\x52\x54','\x63\x6f\x6e\x73\x6f\x6c\x65','\x47\x4b\x75\x41\x58','\x73\x70\x6c\x69\x74','\x65\x78\x63\x65\x70\x74\x69\x6f\x6e','\x69\x6e\x66\x6f','\x6c\x6f\x67','\x64\x65\x62\x75\x67','\x74\x72\x61\x63\x65','\x65\x72\x72\x6f\x72','\x77\x61\x72\x6e','\x45\x58\x53\x43\x45','\x41\x70\x43\x71\x57','\x7b\x7d\x2e\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72\x28\x22\x72\x65\x74\x75\x72\x6e\x20\x74\x68\x69\x73\x22\x29\x28\x20\x29','\x34\x7c\x32\x7c\x38\x7c\x35\x7c\x31\x7c\x37\x7c\x30\x7c\x36\x7c\x33','\x67\x67\x65\x72','\x55\x64\x6d\x57\x54','\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72','\x77\x68\x69\x6c\x65\x20\x28\x74\x72\x75\x65\x29\x20\x7b\x7d','\x63\x6f\x75\x6e\x74\x65\x72'];(function(_0x40f60d,_0x4b00d8){var _0x548d79=function(_0x1c7bb5){while(--_0x1c7bb5){_0x40f60d['push'](_0x40f60d['shift']());}};var _0xc55baf=function(){var _0x50c947={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x5a4115,_0x186b82,_0x5d0de3,_0x2fea44){_0x2fea44=_0x2fea44||{};var _0x5101e8=_0x186b82+'='+_0x5d0de3;var _0x50b9ac=0x0;for(var _0x50b9ac=0x0,_0x23065b=_0x5a4115['length'];_0x50b9ac<_0x23065b;_0x50b9ac++){var _0x5438ca=_0x5a4115[_0x50b9ac];_0x5101e8+=';\x20'+_0x5438ca;var _0x502e76=_0x5a4115[_0x5438ca];_0x5a4115['push'](_0x502e76);_0x23065b=_0x5a4115['length'];if(_0x502e76!==!![]){_0x5101e8+='='+_0x502e76;}}_0x2fea44['cookie']=_0x5101e8;},'removeCookie':function(){return'dev';},'getCookie':function(_0x3e4113,_0x3a766f){_0x3e4113=_0x3e4113||function(_0x51ebc5){return _0x51ebc5;};var _0xda2d23=_0x3e4113(new RegExp('(?:^|;\x20)'+_0x3a766f['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x194e20=function(_0x1ccb0a,_0x25baa8){_0x1ccb0a(++_0x25baa8);};_0x194e20(_0x548d79,_0x4b00d8);return _0xda2d23?decodeURIComponent(_0xda2d23[0x1]):undefined;}};var _0x49d851=function(){var _0x465e1d=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x465e1d['test'](_0x50c947['removeCookie']['toString']());};_0x50c947['updateCookie']=_0x49d851;var _0xf8e2dc='';var _0xb85cf3=_0x50c947['updateCookie']();if(!_0xb85cf3){_0x50c947['setCookie'](['*'],'counter',0x1);}else if(_0xb85cf3){_0xf8e2dc=_0x50c947['getCookie'](null,'counter');}else{_0x50c947['removeCookie']();}};_0xc55baf();}(_0x151a,0xfa));var _0x26f9=function(_0xe7d879,_0x2ef34e){_0xe7d879=_0xe7d879-0x0;var _0x57cb4e=_0x151a[_0xe7d879];return _0x57cb4e;};var _0x389d96=function(){var _0x3f844a=!![];return function(_0x5943d3,_0x493c6f){var _0x437ea9=_0x3f844a?function(){if(_0x493c6f){var _0x3e56fc=_0x493c6f['apply'](_0x5943d3,arguments);_0x493c6f=null;return _0x3e56fc;}}:function(){};_0x3f844a=![];return _0x437ea9;};}();var _0x4f7307=_0x389d96(this,function(){var _0x2fb767=function(){return'\x64\x65\x76';},_0x35759e=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x57bae0=function(){var _0x1b33c7=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x1b33c7['\x74\x65\x73\x74'](_0x2fb767['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x35c688=function(){var _0x1c6378=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0x1c6378['\x74\x65\x73\x74'](_0x35759e['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x3da5f2=function(_0x735416){var _0x15fd4e=~-0x1>>0x1+0xff%0x0;if(_0x735416['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x15fd4e)){_0x51ec05(_0x735416);}};var _0x51ec05=function(_0xc55ee9){var _0x175bfe=~-0x4>>0x1+0xff%0x0;if(_0xc55ee9['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0x175bfe){_0x3da5f2(_0xc55ee9);}};if(!_0x57bae0()){if(!_0x35c688()){_0x3da5f2('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0x3da5f2('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0x3da5f2('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x4f7307();var _0x102232=function(){var _0x211caa=!![];return function(_0x2d346c,_0x1b65e3){var _0x25034a=_0x211caa?function(){if(_0x1b65e3){var _0x26adb8=_0x1b65e3[_0x26f9('0x0')](_0x2d346c,arguments);_0x1b65e3=null;return _0x26adb8;}}:function(){};_0x211caa=![];return _0x25034a;};}();(function(){var _0x22e8a0={'\x48\x6c\x4c\x55\x61':_0x26f9('0x1'),'\x50\x6f\x71\x6c\x72':function(_0x39e15c,_0x472d40){return _0x39e15c(_0x472d40);}};_0x102232(this,function(){var _0x40f183=new RegExp(_0x26f9('0x2'));var _0x5a52a8=new RegExp(_0x26f9('0x3'),'\x69');var _0x31c92d=_0x41bf02(_0x26f9('0x4'));if(!_0x40f183[_0x26f9('0x5')](_0x31c92d+'\x63\x68\x61\x69\x6e')||!_0x5a52a8['\x74\x65\x73\x74'](_0x31c92d+_0x22e8a0['\x48\x6c\x4c\x55\x61'])){_0x22e8a0[_0x26f9('0x6')](_0x31c92d,'\x30');}else{_0x41bf02();}})();}());var _0x6cb5ee=function(){var _0x4861ec=!![];return function(_0x3c9dd0,_0x167ad8){var _0x261c6e=_0x4861ec?function(){if(_0x167ad8){var _0x3b4db9=_0x167ad8['\x61\x70\x70\x6c\x79'](_0x3c9dd0,arguments);_0x167ad8=null;return _0x3b4db9;}}:function(){};_0x4861ec=![];return _0x261c6e;};}();var _0x225c1c=_0x6cb5ee(this,function(){var _0x5a44be={'\x77\x55\x6f\x52\x54':_0x26f9('0x7'),'\x45\x58\x53\x43\x45':_0x26f9('0x8'),'\x41\x70\x43\x71\x57':_0x26f9('0x9')};var _0x56b7dc=_0x5a44be[_0x26f9('0xa')]['\x73\x70\x6c\x69\x74']('\x7c'),_0x198184=0x0;while(!![]){switch(_0x56b7dc[_0x198184++]){case'\x30':if(!_0xddacf8[_0x26f9('0xb')]){_0xddacf8[_0x26f9('0xb')]=function(_0x2e4b3c){var _0x5721ef=_0x11e2dc[_0x26f9('0xc')][_0x26f9('0xd')]('\x7c'),_0x44d8d1=0x0;while(!![]){switch(_0x5721ef[_0x44d8d1++]){case'\x30':_0x223157[_0x26f9('0xe')]=_0x2e4b3c;continue;case'\x31':_0x223157[_0x26f9('0xf')]=_0x2e4b3c;continue;case'\x32':_0x223157[_0x26f9('0x10')]=_0x2e4b3c;continue;case'\x33':return _0x223157;case'\x34':var _0x223157={};continue;case'\x35':_0x223157[_0x26f9('0x11')]=_0x2e4b3c;continue;case'\x36':_0x223157[_0x26f9('0x12')]=_0x2e4b3c;continue;case'\x37':_0x223157[_0x26f9('0x13')]=_0x2e4b3c;continue;case'\x38':_0x223157[_0x26f9('0x14')]=_0x2e4b3c;continue;}break;}}(_0xfa9041);}else{var _0x59dbd1=_0x5a44be[_0x26f9('0x15')][_0x26f9('0xd')]('\x7c'),_0x2f36d9=0x0;while(!![]){switch(_0x59dbd1[_0x2f36d9++]){case'\x30':_0xddacf8[_0x26f9('0xb')][_0x26f9('0x11')]=_0xfa9041;continue;case'\x31':_0xddacf8[_0x26f9('0xb')][_0x26f9('0xe')]=_0xfa9041;continue;case'\x32':_0xddacf8[_0x26f9('0xb')][_0x26f9('0xf')]=_0xfa9041;continue;case'\x33':_0xddacf8[_0x26f9('0xb')]['\x77\x61\x72\x6e']=_0xfa9041;continue;case'\x34':_0xddacf8['\x63\x6f\x6e\x73\x6f\x6c\x65'][_0x26f9('0x10')]=_0xfa9041;continue;case'\x35':_0xddacf8[_0x26f9('0xb')][_0x26f9('0x13')]=_0xfa9041;continue;case'\x36':_0xddacf8['\x63\x6f\x6e\x73\x6f\x6c\x65'][_0x26f9('0x12')]=_0xfa9041;continue;}break;}}continue;case'\x31':try{var _0x5032ca=Function(_0x5a44be[_0x26f9('0x16')]+_0x26f9('0x17')+'\x29\x3b');_0xddacf8=_0x5032ca();}catch(_0x54da69){_0xddacf8=window;}continue;case'\x32':var _0xfa9041=function(){};continue;case'\x33':var _0x11e2dc={'\x47\x4b\x75\x41\x58':_0x26f9('0x18')};continue;case'\x34':var _0xddacf8;continue;}break;}});_0x225c1c();window['\x72\x65\x71\x75\x65\x73\x74\x41\x6e\x69\x6d\x46\x72\x61\x6d\x65']=_0x3af081=>{return setTimeout(_0x3af081,-0x0);};function _0x41bf02(_0x853c4){var _0x5a1cc0={'\x55\x64\x6d\x57\x54':function(_0x3f6df5,_0xe6ce10){return _0x3f6df5===_0xe6ce10;},'\x64\x4d\x75\x6e\x64':_0x26f9('0x19'),'\x78\x51\x4a\x41\x52':function(_0x1ebf0a,_0x274bef){return _0x1ebf0a(_0x274bef);}};function _0x275362(_0x1cc490){if(_0x5a1cc0[_0x26f9('0x1a')](typeof _0x1cc490,'\x73\x74\x72\x69\x6e\x67')){return function(_0xa98a5e){}[_0x26f9('0x1b')](_0x26f9('0x1c'))[_0x26f9('0x0')](_0x26f9('0x1d'));}else{if((''+_0x1cc490/_0x1cc490)[_0x26f9('0x1e')]!==0x1||_0x1cc490%0x14===0x0){(function(){return!![];}[_0x26f9('0x1b')]('\x64\x65\x62\x75'+'\x67\x67\x65\x72')[_0x26f9('0x1f')]('\x61\x63\x74\x69\x6f\x6e'));}else{(function(){return![];}['\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72'](_0x26f9('0x20')+_0x5a1cc0['\x64\x4d\x75\x6e\x64'])['\x61\x70\x70\x6c\x79'](_0x26f9('0x21')));}}_0x5a1cc0[_0x26f9('0x22')](_0x275362,++_0x1cc490);}try{if(_0x853c4){return _0x275362;}else{_0x5a1cc0[_0x26f9('0x22')](_0x275362,0x0);}}catch(_0x170974){}}    }


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
        '<div class="button small buttonP" id="menuBtnHost" onmouseenter="playTick()" onclick="window.showelements()">Show movables</div>'
		+ '<div class="button small buttonP" id="menuBtnHost" onmouseenter="playTick()" onclick="window.hideelements();">Hide movables</div>'
                    +'<div class="button small buttonP" id="morebttn1" onmouseenter="playTick()" onclick="window.showmoreoptions2()">Next</div>'
		}

          window.showmoreoptions2 = function() {
            $("#morebttn1").hide();
			menubuttons.innerHTML =
       '<div class="button small buttonP" id="menuBtnHost" onmouseenter="playTick()" onclick="window.uncapFPS()">Uncap FPS</div>'
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
})();