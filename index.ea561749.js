const e=document.querySelector("button"),t=document.querySelector("#value"),a=document.querySelector("#add"),o={value:100500,followSpan:"FOLLOW",add(){this.value+=1},change(){this.followSpan="FOLLOWING"}};e.addEventListener("click",(()=>{const l=!0===e.getAttribute("aria-expanded")||!1;l||(e.classList.add("is-active"),e.setAttribute("aria-expanded",!l)),o.add(),o.change(),t.textContent=o.value,a.textContent=o.followSpan,localStorage.setItem("STORAGE_KEY",JSON.stringify(o.value));const n=localStorage.getItem("STORAGE_KEY"),c=JSON.parse(n);console.log(c)}));
//# sourceMappingURL=index.ea561749.js.map