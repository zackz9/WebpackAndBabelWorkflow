(()=>{"use strict";console.log("DOM FILE");var e,n=document.querySelector("body"),o=[{brand:"Mercedes-Benz",color:"Gray",tunned:!0},{brand:"BMW",color:"White",tunned:!1},{brand:"Subaru",color:"Dark blue",tunned:!0},{brand:"Mitsubishi",color:"Blue",tunned:!1}];console.log("index file"),n.style.background="cadetblue",(e=document.createElement("h2")).textContent="Webpack example from index FILE",n.appendChild(e),console.log("WElcome to this world");var t=function(e){return e.filter((function(e){return e.tunned}))}(o);console.log(o,t),console.log("test")})();