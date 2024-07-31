document.addEventListener("DOMContentLoaded",(function(){let t,e,n=!1;const o=n=>{const o=t=>Array.from(t).reduce(((t,e)=>t+e.offsetWidth),0);if(n){const n=o(document.querySelector("#blog-info > a").children),i=o(document.getElementById("menus").children);t=n+i,e=document.getElementById("nav")}const i=window.innerWidth<=768||t>e.offsetWidth-120;e.classList.toggle("hide-menu",i)},i=()=>{btf.sidebarPaddingR(),document.body.style.overflow="hidden",btf.animateIn(document.getElementById("menu-mask"),"to_show 0.5s"),document.getElementById("sidebar-menus").classList.add("open"),n=!0},s=()=>{const t=document.body;t.style.overflow="",t.style.paddingRight="",btf.animateOut(document.getElementById("menu-mask"),"to_hide 0.5s"),document.getElementById("sidebar-menus").classList.remove("open"),n=!1},a=()=>{const t=GLOBAL_CONFIG.highlight;if(!t)return;const{highlightCopy:e,highlightLang:n,highlightHeightLimit:o,highlightFullpage:i,highlightMacStyle:s,plugin:a}=t,c=GLOBAL_CONFIG_SITE.isHighlightShrink,l=e||n||void 0!==c||i||s,d="highlight.js"===a?document.querySelectorAll("figure.highlight"):document.querySelectorAll('pre[class*="language-"]');if(!l&&!o||!d.length)return;const r="prismjs"===a,u=!0===c?"closed":"",m=void 0!==c?'<div><i class="fas fa-angle-down expand"></i></div>':"",g=e?'<div class="copy-notice"></div><i class="fas fa-paste copy-button"></i>':"",f=i?'<i class="fa-solid fa-up-right-and-down-left-from-center fullpage-button"></i>':"",h=(t,e)=>{void 0!==GLOBAL_CONFIG.Snackbar?btf.snackbarShow(e):(t.textContent=e,t.style.opacity=1,setTimeout((()=>{t.style.opacity=0}),800))},p=(t,e)=>{const n=t.parentNode;n.classList.add("copy-true");const o=window.getSelection(),i=document.createRange(),s=r?"pre code":"table .code pre";var a;i.selectNodeContents(n.querySelector(`${s}`)),o.removeAllRanges(),o.addRange(i),a=e.previousElementSibling,document.queryCommandSupported&&document.queryCommandSupported("copy")?(document.execCommand("copy"),h(a,GLOBAL_CONFIG.copy.success)):h(a,GLOBAL_CONFIG.copy.noSupport),o.removeAllRanges(),n.classList.remove("copy-true")},b=function(t){const e=t.target.classList;e.contains("expand")?this.classList.toggle("closed"):e.contains("copy-button")?p(this,t.target):e.contains("fullpage-button")&&((t,e)=>{const n=t.closest("figure.highlight").classList.toggle("code-fullpage");document.body.style.overflow=n?"hidden":"",e.classList.toggle("fa-down-left-and-up-right-to-center",n),e.classList.toggle("fa-up-right-and-down-left-from-center",!n)})(this,t.target)},L=function(){this.classList.toggle("expand-done")},y=(t,e)=>{const n=document.createDocumentFragment();if(l){const e=document.createElement("div");e.className=`highlight-tools ${u}`,e.innerHTML='<div class="macStyle"><div class="mac-close"></div><div class="mac-minimize"></div><div class="mac-maximize"></div></div>'+m+t+g+f,btf.addEventListenerPjax(e,"click",b),n.appendChild(e)}if(o&&function(t){let e=[],n=[];!function(){let o=t;for(;o!==document.body&&null!=o;)"none"===window.getComputedStyle(o).display&&n.push(o),o=o.parentNode;let i="visibility: hidden !important; display: block !important; ";n.forEach((function(t){var n=t.getAttribute("style")||"";e.push(n),t.setAttribute("style",n?n+";"+i:i)}))}();let o=t.offsetHeight;return n.forEach(((t,n)=>{let o=e[n];""===o?t.removeAttribute("style"):t.setAttribute("style",o)})),o}(e)>o+30){const t=document.createElement("div");t.className="code-expand-btn",t.innerHTML='<i class="fas fa-angle-double-down"></i>',btf.addEventListenerPjax(t,"click",L),n.appendChild(t)}r?e.parentNode.insertBefore(n,e):e.insertBefore(n,e.firstChild)};d.forEach((t=>{let e="";r&&btf.wrap(t,"figure",{class:"highlight"}),n?(r?e=t.getAttribute("data-language")||"Code":(e=t.getAttribute("class").split(" ")[1],"plain"!==e&&void 0!==e||(e="Code")),y(`<div class="code-lang">${e}</div>`,t)):y("",t)}))},c=async t=>{const e=await fetch(t);return await e.json()},l=(t,e,n=!1,o)=>{const i=e.length,s=new InfiniteGrid.JustifiedInfiniteGrid(t,{gap:5,isConstantSize:!0,sizeRange:[150,600],useResizeObserver:!0,observeChildren:!0,useTransform:!0});o&&btf.addGlobalFn("igOfTabs",(()=>{s.destroy()}),!1,o);const a=t=>t.replace(/"/g,"&quot;"),c=GLOBAL_CONFIG.infinitegrid.buttonText,l=(t,n)=>{s.append(((t,n)=>{const o=[],s=(t-1)*n;for(let t=0;t<n;++t){const n=s+t;if(n>=i)break;const c=e[n],l=c.alt?`alt="${a(c.alt)}"`:"",d=c.title?`title="${a(c.title)}"`:"";o.push(`<div class="item ">\n            <img src="${c.url}" data-grid-maintained-target="true" ${l+d} />\n          </div>`)}return o})(t,n),t)},d=Math.ceil(i/10),r=e=>{const{updated:o,isResize:i,mounted:a}=e;if(o.length&&a.length&&!i){if(btf.loadLightbox(t.querySelectorAll("img:not(.medium-zoom-image)")),s.getGroups().length===d)return btf.setLoading.remove(t),void s.off("renderComplete",r);n&&(btf.setLoading.remove(t),(t=>{const e=document.createElement("button");e.textContent=c;const n=e=>{e.target.removeEventListener("click",n),e.target.remove(),btf.setLoading.add(t),l(s.getGroups().length+1,10)};e.addEventListener("click",n),t.insertAdjacentElement("afterend",e)})(t))}},u=btf.debounce((t=>{const e=(+t.groupKey||0)+1;l(e,10),e===d&&s.off("requestAppend",u)}),300);btf.setLoading.add(t),s.on("renderComplete",r),n?l(1,10):(s.on("requestAppend",u),s.renderItems()),btf.addGlobalFn("justifiedGallery",(()=>{s.destroy()}))},d=async(t,e=!1)=>{const n=async()=>{for(const n of t){if(btf.isHidden(n))continue;if(e&&n.classList.contains("loaded")){n.querySelector(".gallery-items").innerHTML="";const t=n.querySelector(":scope > button"),e=n.querySelector(":scope > .loading-container");t&&t.remove(),e&&e.remove()}const t="true"===n.getAttribute("data-button"),o=n.firstElementChild.textContent;n.classList.add("loaded");const i="url"===n.getAttribute("data-type")?await c(o):JSON.parse(o);l(n.lastElementChild,i,t,e)}};"function"==typeof InfiniteGrid||await btf.getScript(`${GLOBAL_CONFIG.infinitegrid.js}`),n()},r=()=>{const t=document.getElementById("rightside"),e=window.innerHeight+56;let n=0;const o=document.getElementById("page-header"),i="undefined"!=typeof chatBtn,s=GLOBAL_CONFIG.percent.rightside;if(document.body.scrollHeight<=e)return void t.classList.add("rightside-show");let a="";const c=btf.throttle((()=>{const c=window.scrollY||document.documentElement.scrollTop,l=(t=>{const e=t>n;return n=t,e})(c);c>56?(o.classList.add("is-top-bar"),""===a&&(o.classList.add("nav-fixed"),t.classList.add("rightside-show")),l?"down"!==a&&(o.classList.remove("nav-visible"),i&&window.chatBtn.hide(),a="down"):"up"!==a&&(o.classList.add("nav-visible"),i&&window.chatBtn.show(),a="up")):(a="",0===c&&o.classList.remove("nav-fixed","nav-visible"),t.classList.remove("rightside-show")),s&&(t=>{const e=btf.getScrollPercent(t,document.body),n=document.getElementById("go-up");e<95?(n.classList.add("show-percent"),n.querySelector(".scroll-percent").textContent=e):n.classList.remove("show-percent")})(c),document.body.scrollHeight<=e&&t.classList.add("rightside-show")}),300);btf.addEventListenerPjax(window,"scroll",c,{passive:!0})},u=()=>{const t=GLOBAL_CONFIG_SITE.isToc,e=GLOBAL_CONFIG.isAnchor,n=document.getElementById("article-container");if(!n||!t&&!e)return;let o,i,s,a,c;if(t){const t=document.getElementById("card-toc");i=t.querySelector(".toc-content"),o=i.querySelectorAll(".toc-link"),a=t.querySelector(".toc-percentage"),c=i.classList.contains("is-expand");const e=e=>{const n=e.target.closest(".toc-link");n&&(e.preventDefault(),btf.scrollToDest(btf.getEleTop(document.getElementById(decodeURI(n.getAttribute("href")).replace("#",""))),300),window.innerWidth<900&&t.classList.remove("open"))};btf.addEventListenerPjax(i,"click",e),s=t=>{const e=t.getBoundingClientRect().top,n=i.scrollTop;e>document.documentElement.clientHeight-100&&(i.scrollTop=n+150),e<100&&(i.scrollTop=n-150)},i.style.display="block"}const l=n.querySelectorAll("h1,h2,h3,h4,h5,h6");let d="";const r=btf.throttle((()=>{const r=window.scrollY||document.documentElement.scrollTop;t&&GLOBAL_CONFIG.percent.toc&&(a.textContent=btf.getScrollPercent(r,n)),(n=>{if(0===n)return!1;let a="",r="";if(l.forEach(((t,e)=>{if(n>btf.getEleTop(t)-80){const n=t.id;a=n?"#"+encodeURI(n):"",r=e}})),d!==r&&(e&&btf.updateAnchor(a),d=r,t)){if(i.querySelectorAll(".active").forEach((t=>{t.classList.remove("active")})),""===a)return;const t=o[r];if(t.classList.add("active"),setTimeout((()=>{s(t)}),0),c)return;let e=t.parentNode;for(;!e.matches(".toc");e=e.parentNode)e.matches("li")&&e.classList.add("active")}})(r)}),100);btf.addEventListenerPjax(window,"scroll",r,{passive:!0})},m=t=>{const e=(window.globalFn||{}).themeChange||{};e&&Object.keys(e).forEach((n=>{const o=e[n];["disqus","disqusjs"].includes(n)?setTimeout((()=>o(t)),300):o(t)}))},g={readmode:()=>{const t=document.body;t.classList.add("read-mode");const e=document.createElement("button");e.type="button",e.className="fas fa-sign-out-alt exit-readmode",t.appendChild(e);const n=()=>{t.classList.remove("read-mode"),e.remove(),e.removeEventListener("click",n)};e.addEventListener("click",n)},darkmode:()=>{const t="dark"===document.documentElement.getAttribute("data-theme")?"light":"dark";"dark"===t?(btf.activateDarkMode(),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)):(btf.activateLightMode(),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)),btf.saveToLocal.set("theme",t,2),m(t)},"rightside-config":t=>{const e=t.firstElementChild;e.classList.contains("show")&&(e.classList.add("status"),setTimeout((()=>{e.classList.remove("status")}),300)),e.classList.toggle("show")},"go-up":()=>{btf.scrollToDest(0,500)},"hide-aside-btn":()=>{const t=document.documentElement.classList,e=t.contains("hide-aside")?"show":"hide";btf.saveToLocal.set("aside-status",e,2),t.toggle("hide-aside")},"mobile-toc-button":function(t,e){const n=document.getElementById("card-toc");n.style.transition="transform 0.3s ease-in-out";const o=n.clientHeight,i=e.getBoundingClientRect(),s=window.innerHeight-i.bottom-30;o>s&&(n.style.transformOrigin=`right ${o-s-i.height/2}px`),n.classList.toggle("open"),n.addEventListener("transitionend",(()=>{n.style.cssText=""}),{once:!0})},"chat-btn":()=>{window.chatBtnFn()},translateLink:()=>{window.translateFn.translatePage()}};document.getElementById("rightside").addEventListener("click",(function(t){const e=t.target.closest("[id]");e&&g[e.id]&&g[e.id](this,e)}));const f=()=>{const t=document.querySelectorAll("#article-container .hide-button");if(!t.length)return;const e=function(t){this.classList.add("open");const e=this.nextElementSibling.querySelectorAll(".gallery-container");e.length&&d(e)};t.forEach((t=>{t.addEventListener("click",e,{once:!0})}))},h=()=>{const t=document.querySelectorAll("#article-container .tabs");if(!t.length)return;const e=(t,e)=>{Array.from(t).forEach((t=>{t.classList.remove("active"),t!==e&&t.id!==e||t.classList.add("active")}))},n=(t,n)=>{btf.addEventListenerPjax(t.firstElementChild,"click",(function(t){const o=t.target.closest("button");if(o.classList.contains("active"))return;e(this.children,o),this.classList.remove("no-default");const i=o.getAttribute("data-href"),s=this.nextElementSibling;if(e(s.children,i),n){btf.removeGlobalFnEvent("igOfTabs",this);const t=s.querySelectorAll(`:scope > #${i} .gallery-container`);t.length&&d(t,this)}}))};t.forEach((t=>{const e=!!t.querySelectorAll(".gallery-container");n(t,e),(t=>{btf.addEventListenerPjax(t.lastElementChild,"click",(e=>{e.target.closest("button")&&btf.scrollToDest(btf.getEleTop(t),300)}))})(t)}))},p=function(t){t.forEach((t=>{const e=t.getAttribute("datetime");t.textContent=btf.diffDate(e,!0),t.style.display="inline"}))},b=()=>{a(),GLOBAL_CONFIG.isPhotoFigcaption&&document.querySelectorAll("#article-container img").forEach((t=>{const e=t.title||t.alt;if(!e)return;const n=document.createElement("div");n.className="img-alt is-center",n.textContent=e,t.insertAdjacentElement("afterend",n)})),btf.removeGlobalFnEvent("justifiedGallery");const t=document.querySelectorAll("#article-container .gallery-container");t.length&&d(t),btf.loadLightbox(document.querySelectorAll("#article-container img:not(.no-lightbox)")),u(),(()=>{const t=document.querySelectorAll("#article-container table");t.length&&t.forEach((t=>{t.closest(".highlight")||btf.wrap(t,"div",{class:"table-wrap"})}))})(),f(),h()},L=()=>{o(!0),e.classList.add("show"),GLOBAL_CONFIG_SITE.isPost?(void 0!==GLOBAL_CONFIG.noticeOutdate&&(()=>{const{limitDay:t,messagePrev:e,messageNext:n,position:o}=GLOBAL_CONFIG.noticeOutdate,i=btf.diffDate(GLOBAL_CONFIG_SITE.postUpdate);if(i>=t){const t=document.createElement("div");t.className="post-outdate-notice",t.textContent=`${e} ${i} ${n}`;const s=document.getElementById("article-container");"top"===o?s.insertBefore(t,s.firstChild):s.appendChild(t)}})(),GLOBAL_CONFIG.relativeDate.post&&p(document.querySelectorAll("#post-meta time"))):(GLOBAL_CONFIG.relativeDate.homepage&&p(document.querySelectorAll("#recent-posts time")),GLOBAL_CONFIG.runtime&&(()=>{const t=document.getElementById("runtimeshow");if(t){const e=t.getAttribute("data-publishDate");t.textContent=`${btf.diffDate(e)} ${GLOBAL_CONFIG.runtime}`}})(),(()=>{const t=document.getElementById("last-push-date");if(t){const e=t.getAttribute("data-lastPushDate");t.textContent=btf.diffDate(e,!0)}})(),(()=>{const t=document.querySelector("#aside-cat-list.expandBtn");if(!t)return;btf.addEventListenerPjax(t,"click",(t=>{const e=t.target;"I"===e.nodeName&&(t.preventDefault(),e.parentNode.classList.toggle("expand"))}),!0)})()),GLOBAL_CONFIG_SITE.isHome&&(()=>{const t=document.getElementById("scroll-down");t&&btf.addEventListenerPjax(t,"click",(()=>{btf.scrollToDest(document.getElementById("content-inner").offsetTop,300)}))})(),r(),b(),(()=>{const t=document.getElementById("switch-btn");if(!t)return;let e=!1;const n=document.getElementById("post-comment");btf.addEventListenerPjax(t,"click",(()=>{n.classList.toggle("move"),e||"function"!=typeof loadOtherComment||(e=!0,loadOtherComment())}))})(),btf.addEventListenerPjax(document.getElementById("toggle-menu"),"click",(()=>{i()}))};btf.addGlobalFn("pjaxComplete",L,"refreshFn"),L(),window.addEventListener("resize",(()=>{o(!1),n&&btf.isHidden(document.getElementById("toggle-menu"))&&s()})),document.getElementById("menu-mask").addEventListener("click",(t=>{s()})),document.querySelector("#sidebar-menus .menus_items").addEventListener("click",(t=>{const e=t.target.closest(".site-page.group");e&&e.classList.toggle("hide")})),GLOBAL_CONFIG.islazyload&&(window.lazyLoadInstance=new LazyLoad({elements_selector:"img",threshold:0,data_src:"lazy-src"}),btf.addGlobalFn("pjaxComplete",(()=>{window.lazyLoadInstance.update()}),"lazyload")),void 0!==GLOBAL_CONFIG.copyright&&(()=>{const{limitCount:t,languages:e}=GLOBAL_CONFIG.copyright;document.body.addEventListener("copy",(n=>{n.preventDefault();const o=window.getSelection(0).toString();let i=o;return o.length>t&&(i=`${o}\n\n\n${e.author}\n${e.link}${window.location.href}\n${e.source}\n${e.info}`),n.clipboardData?n.clipboardData.setData("text",i):window.clipboardData.setData("text",i)}))})(),GLOBAL_CONFIG.autoDarkmode&&window.matchMedia("(prefers-color-scheme: dark)").addListener((t=>{void 0===btf.saveToLocal.get("theme")&&(t.matches?m("dark"):m("light"))})),window.addEventListener("hexo-blog-decrypt",(t=>{b(),window.translateFn.translateInitialization(),Object.values(window.globalFn.encrypt).forEach((t=>{t()}))}))}));