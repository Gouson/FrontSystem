parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
var n=document.querySelector("#demo"),r=document.querySelector("#style"),e="/*\nhi\n我要搞一个太极图\n我要加的样式是\n*/\n#div1{\n    width:200px;\n    height:200px;\n}\n/*\n把div变成一个八卦图\n注意看\n首先把变个圆圈\n*/\n#div1{\n    border-radius:50%;\n    box-shadow:0 0 3px rgba(0,0,0,0.5);\n    border:none;\n}\n/*\n八卦是阴阳\n一黑一白\n*/\n#div1{\n    background: linear-gradient(90deg,rgba(255,255,255,1)\n    0%, rgba(255,255,255,1) 50%, \n    rgba(0,0,0,1) 50%, \n    rgba(0,0,0,1) 100%);\n}\n/*加两个神秘的小球*/\n#div1::before{\n    width:50%;\n    height:50%;\n    left:0;\n    top:0;\n    left:50%;\n    transform:translateX(-50%);\n    background:#fff;\n    border-radius:50%;\n    background: radial-gradient(circle, \n        rgba(0,0,0,1) 0%, \n        rgba(0,0,0,1) 25%, \n        rgba(255,255,255,1) 25%, \n        rgba(255,255,255,1) 100%);\n}\n#div1::after{\n    width:50%;\n    height:50%;\n    left:0;\n    bottom:0;\n    left:50%;\n    transform:translateX(-50%);\n    background:#000;\n    border-radius:50%;\n    background: radial-gradient(circle, \n        rgba(255,255,255,1) 0%, \n        rgba(255,255,255,1) 25%, \n        rgba(0,0,0,1) 25%, \n        rgba(0,0,0,1) 100%);\n}\n/*\n接下来让他旋转\n*/\n@keyframes x {\n    from {\n        transform: rotate(0deg);\n    }\n\n    to {\n        transform: rotate(360deg);\n    }\n} \n#div1 {\n    animation: x 10s infinite linear;\n}\n",a="",t=0,i=function i(){setTimeout(function(){"\n"===e[t]?a+="<br>":" "===e[t]?a+="&nbsp":a+=e[t],n.innerHTML=a,r.innerHTML=e.substring(0,t),window.scrollTo(0,99999),n.scrollTo(0,99999),t<e.length-1&&(t+=1,i())},1)};i();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.c7d85499.js.map