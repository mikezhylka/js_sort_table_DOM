function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(t,r){if(t){if("string"==typeof t)return e(t,void 0);var n=Object.prototype.toString.call(t).slice(8,-1);if("Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return e(t,void 0)}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var r=t(document.querySelectorAll("thead tr th")),n=r[0],o=r[1],c=r[2],l=r[3],u=function(e,t){t.innerHTML="",e.forEach(function(e){return t.append(e)})},i=function(e,t){e.sort(function(e,r){var n=e.cells[t].innerText.toLowerCase(),o=r.cells[t].innerText.toLowerCase();return n.localeCompare(o)})};n.addEventListener("click",function(){var e=document.querySelector("tbody"),r=t(document.querySelectorAll("tbody tr"));i(r,0),u(r,e)}),o.addEventListener("click",function(){var e=t(document.querySelectorAll("tbody tr")),r=document.querySelector("tbody");i(e,1),u(e,r)}),c.addEventListener("click",function(){var e=t(document.querySelectorAll("tbody tr")),r=document.querySelector("tbody");e.sort(function(e,t){return parseInt(e.cells[2].innerText)-parseInt(t.cells[2].innerText)}),u(e,r)}),l.addEventListener("click",function(){var e=t(document.querySelectorAll("tbody tr")),r=document.querySelector("tbody");e.sort(function(e,t){return parseInt(e.cells[3].innerText.replace("$","").replace(",",""))-parseInt(t.cells[3].innerText.replace("$","").replace(",",""))}),u(e,r)});
//# sourceMappingURL=index.c98883c3.js.map
