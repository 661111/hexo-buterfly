let selectTextNow="";const selectText=()=>{selectTextNow=document.selection?document.selection.createRange().text:window.getSelection()+""||""};document.onmouseup=document.ondbclick=selectText;const rm={mask:document.getElementById("rightmenu-mask"),menu:document.getElementById("rightMenu"),width:0,height:0,domhref:"",domsrc:"",globalEvent:null,menuItems:{other:document.getElementsByClassName("rightMenuOther"),plugin:document.getElementsByClassName("rightMenuPlugin"),back:document.getElementById("menu-backward"),forward:document.getElementById("menu-forward"),refresh:document.getElementById("menu-refresh"),top:document.getElementById("menu-top"),copy:document.getElementById("menu-copytext"),paste:document.getElementById("menu-pastetext"),comment:document.getElementById("menu-commenttext"),new:document.getElementById("menu-newwindow"),copyLink:document.getElementById("menu-copylink"),copyImg:document.getElementById("menu-copyimg"),downloadImg:document.getElementById("menu-downloadimg"),search:document.getElementById("menu-search"),barrage:document.getElementById("menu-commentBarrage"),mode:document.getElementById("menu-darkmode"),translate:document.getElementById("menu-translate"),music:[document.getElementById("menu-music-toggle"),document.getElementById("menu-music-back"),document.getElementById("menu-music-forward"),document.getElementById("menu-music-copyMusicName")]},showRightMenu(e,t=0,m=0){this.menu.style.top=m+"px",this.menu.style.left=t+"px",this.menu.style.display=e?"block":"none",e?stopMaskScroll():this.mask.style.display="none"},hideRightMenu(){rm.showRightMenu(!1),rm.mask.style.display="none"},reLoadSize(){rm.menu.style.display="block",rm.width=rm.menu.offsetWidth,rm.height=rm.menu.offsetHeight,rm.menu.style.display="none"},copyText(e){navigator.clipboard&&navigator.clipboard.writeText(e),utils.snackbarShow(GLOBAL_CONFIG.lang.copy.success,!1,2e3),this.hideRightMenu()},async downloadImage(e=this.domsrc,t="photo"){try{const m=await fetch(e),n=await m.blob(),o=URL.createObjectURL(n),r=document.createElement("a");r.href=o,r.download=t||"image.jpg",r.style.display="none",document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(o)}catch(e){utils.snackbarShow(GLOBAL_CONFIG.right_menu.img_error,!1,2e3)}},copyImage(e=this.domsrc){window.open(e)},mode(e){document.querySelector(".menu-darkmode-text").textContent=e?GLOBAL_CONFIG.right_menu.mode.light:GLOBAL_CONFIG.right_menu.mode.dark,this.hideRightMenu()},barrage(e){document.querySelector(".menu-commentBarrage-text").textContent=e?GLOBAL_CONFIG.right_menu.barrage.open:GLOBAL_CONFIG.right_menu.barrage.close,this.hideRightMenu()}};function stopMaskScroll(){utils.addEventListenerPjax(rm.menu,"mousewheel",rm.hideRightMenu,{passive:!0}),utils.addEventListenerPjax(rm.mask,"mousewheel",rm.hideRightMenu,{passive:!0}),utils.addEventListenerPjax(rm.mask,"click",rm.hideRightMenu,{passive:!0})}window.oncontextmenu=e=>{if(document.body.clientWidth<=768)return;let t=e.clientX+10,m=e.clientY;Array.from(rm.menuItems.other).forEach((e=>e.style.display="block")),rm.globalEvent=e;let n=!1,o=e.target.href,r=e.target.currentSrc;selectTextNow&&window.getSelection()?(n=!0,rm.menuItems.copy.style.display="block",GLOBAL_CONFIG.comment&&(rm.menuItems.comment.style.display="block"),rm.menuItems.search&&(rm.menuItems.search.style.display="block")):(rm.menuItems.copy.style.display="none",GLOBAL_CONFIG.comment&&(rm.menuItems.comment.style.display="none"),rm.menuItems.search&&(rm.menuItems.search.style.display="none")),o?(n=!0,rm.menuItems.new.style.display="block",rm.menuItems.copyLink.style.display="block",rm.domhref=o):(rm.menuItems.new.style.display="none",rm.menuItems.copyLink.style.display="none"),r?(n=!0,rm.menuItems.copyImg.style.display="block",rm.menuItems.downloadImg.style.display="block",rm.domsrc=r):(rm.menuItems.copyImg.style.display="none",rm.menuItems.downloadImg.style.display="none");let s=e.target.tagName.toLowerCase();return"input"===s||"textarea"===s?(n=!0,rm.menuItems.paste.style.display="block"):rm.menuItems.paste.style.display="none","meting-js"===s?(n=!0,rm.menuItems.music.forEach((e=>e.style.display="block"))):rm.menuItems.music[0]&&rm.menuItems.music.forEach((e=>e.style.display="none")),Array.from(n?rm.menuItems.other:rm.menuItems.plugin).forEach((e=>e.style.display="none")),Array.from(n?rm.menuItems.plugin:rm.menuItems.other).forEach((e=>e.style.display="block")),rm.reLoadSize(),t+rm.width>window.innerWidth&&(t-=rm.width+10),m+rm.height>window.innerHeight&&(m-=m+rm.height-window.innerHeight),rm.mask.style.display="flex",rm.showRightMenu(!0,t,m),!1},function(){const e=(e,t,m)=>e.addEventListener(t,m);e(rm.menuItems.back,"click",(()=>window.history.back()||rm.hideRightMenu())),e(rm.menuItems.forward,"click",(()=>window.history.forward()||rm.hideRightMenu())),e(rm.menuItems.refresh,"click",(()=>window.location.reload())),e(rm.menuItems.top,"click",(()=>sco.toTop()||rm.hideRightMenu())),GLOBAL_CONFIG.right_menu.music&&(e(rm.menuItems.music[0],"click",(()=>{sco.musicToggle(),rm.hideRightMenu()})),e(rm.menuItems.music[1],"click",(()=>{document.querySelector("meting-js").aplayer.skipBack(),rm.hideRightMenu()})),e(rm.menuItems.music[2],"click",(()=>{document.querySelector("meting-js").aplayer.skipForward(),rm.hideRightMenu()})),e(rm.menuItems.music[3],"click",(()=>{const e=Array.from(document.querySelectorAll(".aplayer-title")).map((e=>e.innerText))[0];rm.copyText(e)}))),e(rm.menuItems.copy,"click",(()=>{if(GLOBAL_CONFIG.copyright){const{limit:e,author:t,link:m,source:n,info:o}=GLOBAL_CONFIG.right_menu;selectTextNow.length>e&&(selectTextNow=`${selectTextNow}\n\n${t}\n${m}${window.location.href}\n${n}\n${o}`)}rm.copyText(selectTextNow),rm.hideRightMenu()})),null!==utils.saveToLocal.get("commentBarrageSwitch")&&rm.menuItems.barrage&&rm.barrage(!utils.saveToLocal.get("commentBarrageSwitch")),e(rm.menuItems.paste,"click",(()=>rm.pasteText()&&rm.hideRightMenu())),GLOBAL_CONFIG.comment&&e(rm.menuItems.comment,"click",(()=>rm.hideRightMenu()||sco.toTalk(selectTextNow))),e(rm.menuItems.new,"click",(()=>window.open(rm.domhref)&&rm.hideRightMenu())),e(rm.menuItems.downloadImg,"click",(()=>rm.downloadImage()&&rm.hideRightMenu())),e(rm.menuItems.copyImg,"click",(()=>rm.copyImage()&&rm.hideRightMenu())),e(rm.menuItems.copyLink,"click",(()=>rm.copyText(rm.domhref)&&rm.hideRightMenu()))}();