// 返回顶部 显示网页阅读进度
window.onscroll = percent; // 执行函数
// 页面百分比
function percent() {
  let a = document.documentElement.scrollTop || window.pageYOffset, // 卷去高度
    b =
      Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      ) - document.documentElement.clientHeight, // 整个网页高度 减去 可视高度
    result = Math.round((a / b) * 100), // 计算百分比
    btn = document.querySelector("#percent"); // 获取图标

  result <= 99 || (result = 99), (btn.innerHTML = result);
}

document.getElementById("page-name").innerText = document.title.split(" | 安知鱼")[0];

//分类栏
if (true) {
	const leftArrowTip = document.querySelector(".left-arrow-tip");
	const rightArrowTip = document.querySelector(".right-arrow-tip");
	const xscroll = document.getElementById("homeTopGroup");
	leftArrowTip.addEventListener("click",
	function() {
		xscroll.scrollTo({
			left: 0,
			behavior: "smooth"
		})
	});
	rightArrowTip.addEventListener("click",
	function() {
		xscroll.scrollTo({
			left: xscroll.scrollWidth,
			behavior: "smooth"
		})
	});
	function toggleArrowVisibility() {
		const scrollDiff = xscroll.scrollWidth - xscroll.scrollLeft - xscroll.clientWidth;
		if (xscroll.scrollLeft === 0) {
			leftArrowTip.style.opacity = "0";
			rightArrowTip.style.opacity = "1";
			rightArrowTip.style.zIndex = "1";
			leftArrowTip.style.zIndex = "-1"
		} else if (scrollDiff <= 1) {
			rightArrowTip.style.opacity = "0";
			leftArrowTip.style.opacity = "1";
			leftArrowTip.style.zIndex = "1";
			rightArrowTip.style.zIndex = "-1"
		} else {
			leftArrowTip.style.opacity = "1";
			rightArrowTip.style.opacity = "1";
			leftArrowTip.style.zIndex = "1";
			rightArrowTip.style.zIndex = "1"
		}
	}
	function topPostScroll() {
		if (document.getElementById("homeTopGroup")) {
			xscroll.addEventListener("mousewheel",
			function(e) {
				let v = -e.wheelDelta / 2;
				xscroll.scrollLeft += v;
				e.preventDefault()
			},
			false);
			let isScrolling = false;
			xscroll.addEventListener("scroll",
			function scrollHandler() {
				if (!isScrolling) {
					isScrolling = true;
					setTimeout(function() {
						isScrolling = false;
						toggleArrowVisibility()
					},
					100)
				}
			})
		}
	}
	toggleArrowVisibility();
	topPostScroll()
}
try {
	document.removeEventListener('pjax:complete', catalogActive);
	document.addEventListener('pjax:complete', catalogActive)
} catch(e) {}
//- if(true){
//-   const leftArrowTip = document.querySelector(".left-arrow-tip");
//-   const rightArrowTip = document.querySelector(".right-arrow-tip");
//-   const xscroll = document.getElementById("homeTopGroup");
//-   leftArrowTip.addEventListener("click", function () {
//-     xscroll.scrollTo({ left: 0, behavior: "smooth" }); // 回到最左边
//-   });
//-   rightArrowTip.addEventListener("click", function () {
//-     xscroll.scrollTo({ left: xscroll.scrollWidth, behavior: "smooth" }); // 回到最右边
//-   });
//-   function toggleArrowVisibility() {
//-     // 计算滚动位置与容器宽度的差值
//-     const scrollDiff = xscroll.scrollWidth - xscroll.scrollLeft - xscroll.clientWidth;
//-     if (xscroll.scrollLeft === 0) {
//-       // 在最左边，隐藏左箭头，显示右箭头
//-       leftArrowTip.style.opacity = "0";
//-       rightArrowTip.style.opacity = "1";
//-       rightArrowTip.style.zIndex = "1";
//-       leftArrowTip.style.zIndex = "-1";
//-     } else if (scrollDiff <= 1) {
//-       // 在最右边，隐藏右箭头，显示左箭头
//-       rightArrowTip.style.opacity = "0";
//-       leftArrowTip.style.opacity = "1";
//-       leftArrowTip.style.zIndex = "1";
//-       rightArrowTip.style.zIndex = "-1";
//-     } else {
//-       // 既不在最右边又不在最左边，显示两个箭头
//-       leftArrowTip.style.opacity = "1";
//-       rightArrowTip.style.opacity = "1";
//-       leftArrowTip.style.zIndex = "1";
//-       rightArrowTip.style.zIndex = "1";
//-     }
//-   }
//-   function topPostScroll() {
//-     if (document.getElementById("homeTopGroup")) {
//-       xscroll.addEventListener("mousewheel", function (e) {
//-         let v = -e.wheelDelta / 2;
//-         xscroll.scrollLeft += v;
//-         e.preventDefault();
//-       }, false);
//-       let isScrolling = false;
//-       xscroll.addEventListener("scroll", function scrollHandler() {
//-         if (!isScrolling) {
//-           isScrolling = true;
//-           setTimeout(function () {
//-             isScrolling = false;
//-             toggleArrowVisibility();
//-           }, 100);
//-         }
//-       });
//-     }
//-   }
//-   toggleArrowVisibility();
//-   topPostScroll();
//- }
//- try{
//-   document.removeEventListener('pjax:complete', catalogActive);
//-   document.addEventListener('pjax:complete', catalogActive);
//- }catch(e){}