var e=document.querySelector(".field"),l=e.rows,t=document.querySelector(".append-row"),n=document.querySelector(".remove-row"),r=document.querySelector(".append-column"),o=document.querySelector(".remove-column"),c=function(){t.disabled=l.length>=10,n.disabled=l.length<=2,r.disabled=l[0].cells.length>=10,o.disabled=l[0].cells.length<=2};t.addEventListener("click",function(){if(l.length<10){for(var t=e.insertRow(),n=0;n<l[0].cells.length;n++)t.insertCell();c()}}),n.addEventListener("click",function(){l.length>2&&(e.deleteRow(l.length-1),c())}),r.addEventListener("click",function(){if(l[0].cells.length<10){var e=!0,t=!1,n=void 0;try{for(var r,o=l[Symbol.iterator]();!(e=(r=o.next()).done);e=!0)r.value.insertCell()}catch(e){t=!0,n=e}finally{try{e||null==o.return||o.return()}finally{if(t)throw n}}c()}}),o.addEventListener("click",function(){if(l[0].cells.length>2){var e=!0,t=!1,n=void 0;try{for(var r,o=l[Symbol.iterator]();!(e=(r=o.next()).done);e=!0){var i=r.value;i.deleteCell(i.cells.length-1)}}catch(e){t=!0,n=e}finally{try{e||null==o.return||o.return()}finally{if(t)throw n}}c()}}),c();
//# sourceMappingURL=index.18f462db.js.map