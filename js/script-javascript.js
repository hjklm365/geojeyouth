let allMenu = document.querySelector(".all-menu"),
    allMenuWrapper = document.querySelector(".all-menu-wrapper"),
    allMenuMask = document.querySelector(".all-menu-mask");
    // console.log(allMenu)
    // console.log(allMenuWrapper)
    // console.log(allMenuMask)
let allMenuClose = document.querySelector(".all-menu-close");


//all-menu 버튼이 클릭되면
// 전체메뉴 모달창과 mask-layer가 나타난다- class명으로 mask를 줫는걸 가져온다

allMenu.addEventListener("click", function () {
    allMenuWrapper.classList.add("active")
    // class 라는 명칭이 있으면 .active가 아니라 그냥 active
    allMenuMask.classList.add("active")
})

allMenuClose.addEventListener(`click`, function () {
    allMenuWrapper.classList.remove(`active`);
    allMenuMask.classList.remove(`active`);
})

//모바일버튼이 클릭되면
// 1. 모바일 메뉴가 생기고
// 2. 모바일 버튼이 x로  - 변환됨마스크, 서브메뉴


let mbBtn = document.querySelector(".mb-bt"),
    mbNav = document.querySelector(".mb-nav"),
    mbMask = document.querySelector(".mb-menu-mask");

console.log(mbBtn)
console.log(mbNav)
console.log(mbMask)

//(e)라고 적는건 event 익명함수라 
mbBtn.addEventListener(`click`, function (event) {
    event.preventDefault(); // a태그에 링크를 못쓰게 막아준다
    mbNav.classList.toggle("active")
    // toggle : "토글(Toggle)"은 어떤 상태를 번갈아가며 전환하는 동작을 의미
    // add와 remove를 동시에 해줌
    mbMask.classList.toggle("active")
    mbBtn.classList.toggle("active")
    mbMenuList.forEach(function (list, index) {
        //전체 다를 55주려고 forEach
        list.style.height = `55px`
        mbMainMenu[index].classList.remove("open");
        // 닫았을때 열었던곳에 open을 지워줌
    })
})

// 모바일 서브메뉴 펼치기 (아코디언 기능)
// mb-menu li, mb-mainMenu, mb-submenu
const mbMenuList = document.querySelectorAll(".mb-menu > li"),
    mbSubMenu = document.querySelectorAll(".mb-subMenu"),
    mbMainMenu = document.querySelectorAll(".mb-mainMenu");

//펼쳐질 서브메뉴의 높이값 저장
let mbSubMenuHeight = [];   //배열선언

//서브메뉴의 높이값을 계산하여 배열값으로 저장한다
mbSubMenu.forEach(function (list, index) {
    // ul이 차례대로 들어가서 li
    let count = list.querySelectorAll(`li`).length;
    console.log(list.querySelectorAll(`li`));
    console.log(count);
    mbSubMenuHeight[index] = 52 * count + 22
    //padding값 22 추가
})
console.log(mbSubMenuHeight)

//모바일메뉴(li>a(.mb-mainMenu)) 클릭했을때
mbMainMenu.forEach(function (mainList, index) {
    //각각을 돌면서 뭐가 클릭되어있는지 확인
    mainList.addEventListener('click', function (event) {
        event.preventDefault();  // a 눌렀을때 링크가 안걸리게
        mainList.classList.toggle("open");
        let isOpen = mainList.classList.contains("open")
        // contains :포함하다 , open이라는 class가 포함되어있는지 묻는것 , 있으면 true/ 없으면 false
        if (isOpen) {
            let subMenuHeight = mbSubMenuHeight[index]
            // 클릭된 높이값을 가져온다
            console.log(subMenuHeight)
            mbMenuList[index].style.height=`${subMenuHeight+55}px`
            //클릭된 a에 펼쳐지니까 크기를 줘야한다
        } else {
            // a 태그만 보이도록 해준다
            mbMenuList[index].style.height = `55px`
        }

    })
})
 
// 화면사이즈 체크, 1220이 초과할때 사라져야한다
window.addEventListener("resize", function () {
    let temp = window.innerWidth;
    console.log(temp)
    if (temp > 1220) {
        mbNav.classList.remove("active")
        mbMask.classList.remove("active")
        mbBtn.classList.remove("active")
        mbMenuList.forEach(function (list, index) {
            list.style.height="55px"
        })
    } else {
        allMenuWrapper.classList.remove("active")
        allMenuMask.classList.remove("active")
    }
})

// 화면을 맨 위로 이동
// 변화가 없어서 const를 사용
// let은 협업을하거나 하다보면 일반적으로 값을 바꿀 수 있어서 const를 사용
// 요소 가지고 오는 변수만 , 초기값을 셋팅해둔것만
// true 같이 왓다갓다하는건 하면안됨
// scrollTo : 스크롤이 top의 0지점으로간다
const goTop = document.querySelector(".gotop")
goTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior:"smooth"
    })
})
// javascript:void(0)는 링크가 작동하지않게 하기 위해 적용



let swVisual=new Swiper('.sw-visual', {
    loop: true,
    autoplay: {
        delay:5000,
    },
    effect: "fade",
    speed: 2500,
    pagination: {
        el: '.swiper-pagination',
        clicklab:true,
    }
})
// 클릭된 정보가 e로 이벤트 정보가 있는 객체
//객체가 제공해줘서 불러다 쓴거 (a안에)
const swiperStart=document.querySelector(".swiper-start")
swiperStart.addEventListener("click", function (e) {
  e.preventDefault();
  this.classList.toggle("play");
  let isPlay = this.classList.contains("play");
    // play가 포함되어 있으면 true, contains메서드 함수를 통해 isplay에 저장
    //true면 실행 .swiperStart요소에 play class가 존재한다
    if (isPlay) {
        swVisual.autoplay.stop();        
        //play 모양일땐 멈춤        
    } else {
        //슬라이드 재생
        swVisual.autoplay.start();
    }
})

// 저장된걸 가져옴
// 배너 슬라이드 일시멈춤 버튼
const bannerPlay = document.querySelector(".banner-play")
bannerPlay.addEventListener("click", function () {
    let spanEl = this.querySelector("span")
    // console.log(spanEl)
    let textContent = spanEl.textContent;
    // textContent = 속성/키의 값을 가져옴
    // 변수형태의 키, 
    // class명이 뭔지까지 다 키값으로저장되서 text값이 뭔지 불러올 수 있음
    console.log(textContent)
    // 이벤트를 실행하는 대상이 this, 
    if (textContent == "play_arrow") {
        spanEl.textContent = "pause"
        swBanner.autoplay.stop(); //할일이라 ()로 
    } else {
        // pause
        spanEl.textContent = "play_arrow"
        swBanner.autoplay.start();
    }
})



let swBanner=new Swiper(".sw-banner", {
    slidesPerView: 'auto',
    // spaceBetween: 13,
     navigation: {
        prevEl: ".banner-back",
        nextEl: ".banner-forward",
        },
        autoplay: true,
        rewind: true,
});

