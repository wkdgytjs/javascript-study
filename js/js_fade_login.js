// 배열을 이용해서 .gallery-con>ul>li*5 배경이미지를 설정
// 배열, for, .push, style.background
// model0~model4까지 배열에 저장한 후에 .gallery-con>ul>li*5 배경이미지를 설정

const gallery = document.querySelector(".gallery-con");
const galleryConUlLi = document.querySelectorAll(".gallery-con>ul>li");

const arrBg = [];
//li의 갯수
for (let i = 0; i < galleryConUlLi.length; i++) {
	// console.log("background:url(model$[i].jpg)no-repeat 50%/cover");
	arrBg.push("url(img/model" + i + ".jpg) no-repeat 50%/cover");
	galleryConUlLi[i].style.background = arrBg[i];
}

let i = -1;

function autoGallery() {
	// if (i >= galleryConUlLi.length - 1) i = -1;
	i++;
	console.log(i);
	// galleryConUlLi
	galleryConUlLi.forEach((element, index) => {
		if (i === index) {
			element.classList.add("fadeLi");
		} else {
			element.classList.remove("fadeLi");
			// element.style.visibility = "hidden";
		}
	});
	//itemConUlLi;
	itemConUlLi.forEach((element, index) => {
		if (i === index) {
			element.classList.add("fadeLi");
		} else {
			element.classList.remove("fadeLi");
		}
	});

	if (i >= galleryConUlLi.length - 1) i = -1;
}
// 시후마다
let setIn = setInterval(autoGallery, 3000);

// span.arrow mousover -> setInterval 중지
// span.arrow mousout -> setInterval 재시작
const arrow = document.querySelectorAll("span.arrow");

arrow[0].addEventListener("click", (e) => {
	if (i <= 0) i = galleryConUlLi.length;

	i--;
	galleryConUlLi.forEach((element, index) => {
		if (i == index) {
			element.classList.add("fadeLi");
		} else {
			element.classList.remove("fadeLi");
		}
	});
});
arrow[1].addEventListener("click", (e) => {});

const itemConUl = document.querySelector(".item-con>ul");
const itemConUlLi = document.querySelectorAll(".item-con>ul>li");

itemConUl.addEventListener("mouseover", itemConUlFn);
itemConUl.addEventListener("mouseover", itemConUlFn);

function itemConUlFn(e) {
	const eTarget = e.target;
	itemConUlLi.forEach((el, idx) => {
		if (eTarget == el) {
			if (e.Type == "mousover") {
				clearInterval(setIn);
			} else if (e.Type == "mouseout") {
				setIn = setInterval(autoGallery, 3000);
			}
		}
	});
}
//이벤트 위임 -> 실제 이벤트 적용리스트의 부모요소에 이벤트를 위임
//이벤트를 한번만 적용 -> gallery-con>ul클릭할때
//gallery-con>ul>li index와 일치하는 li만 fadeLi 적용

itemConUl.addEventListener("click", (e) => {
	itemConUlLi.forEach((el, idx) => {
		if (e.target == el) {
			el.classList.add("on");
			// itemConUlLi -> index와 같은 galleryConUlLi -> fadeLi 실행
			galleryConUlLi.forEach((el2, idx2) => {
				if (idx == idx2) {
					el2.classList.add("fadeLi");
				} else {
					// itemConUlLi -> index와 같은 galleryConUlLi -> fadeLi 삭제
					el2.classList.remove("fadeLi");
				}
			});
		} else {
			el.classList.remove("on");
		}
		i = idx;
	});
});

// 즉시 실행
(() => {
	autoGallery();
})();
