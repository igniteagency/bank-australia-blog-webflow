"use strict";(()=>{var i="data-duplicate-check-slug";function l(){let e=[];document.querySelectorAll(`[${i}]`).forEach(c=>{let t=c.getAttribute(i);!t||t===""||(e.includes(t)?c.remove():e.push(t))})}})();