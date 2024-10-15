// 매번 불러오는게 아니라 한번 만들어두면 재사용
$(document).ready(function () {
  const mbBtn = $(".mb-bt"),
    mbNav = $(".mb-nav"),
    mbMenuMask = $(".mb-menu-mask");

    //모바일버튼이 클릭되면
    // 1. 모바일 메뉴가 생기고
    // 2. 모바일 버튼이 x로  - 변환됨마스크, 서브메뉴
    //event라는 매게변수도 넣어줌
    mbBtn.click(function (e) { 
        e.preventDefault()
        mbBtn.toggleClass("active")
        mbNav.toggleClass("active")
        mbMenuMask.toggleClass("active")
        mbMenuList.each(function (index, list) {
           // mbMainMenu.eq(index).removeClass("open")
             $(list).find(".mb-mainMenu").removeClass("open")
            //list에서 해당되는 a를 찾는다 , 찾아서 open된건 지움

            $(list).find(".mb-subMenu").slideUp()
            //mbSubMenu.eq(index).slideUp()
            //자식 요소중에 해당되는 메뉴에 slideUP을 해준다
        })
    })
    //모바일 서브메뉴 펼치기(아코디언)기능
    const mbMenuList = $(".mb-menu > li"),
        mbMainMenu = $(".mb-mainMenu"),
        mbSubMenu = $(".mb-subMenu");
    
    //모바일메뉴(li>a(.mb-mainMenu)클릭했을때) , $()를 적어줘야한다
    // this는 단수라 하나만 가능, 지금해당하는것만 
    mbMainMenu.each(function(index, menu){
        $(menu).click(function (e) {
          //$(this)도 가능 , mbMainMenu를 바로 당겨오는것 
          e.preventDefault();
          $(menu).toggleClass("open");
          let isOpen = $(menu).hasClass("open");
          //classList 와 같은 hasClass container를 대신한거
          //open이라는
          if (isOpen) {
            // mbSubMenu[index].slideDown() - 자바스크립트 방식
            mbSubMenu.eq(index).slideDown();
          } else {
              mbSubMenu.eq(index).slideUp();
          } //display block과 none를 준것과 같은 원리로 돌아감
        })
    })  
    
    //화면사이즈 체크
    //window나 documenut를 써줄때도 $()안에 넣어줌
    $(window).resize(function () {
        //let tmep = $(window).width();
        //선택된 요소의 너비(패딩/콘텐츠영역만 가져온ㄷ나)
        //let tmep = $(window).innerWidth(); 콘텐츠영역+패딩까지
    let temp = $(window).outerWidth(); //콘텐츠영역+패딩+테두리까지
    //let tmep = $(window).outerWidth(true); 콘텐츠영역+패딩+테두리+마진까지
        console.log(temp)
        if (temp > 1220) {
          mbBtn.removeClass("active");
          mbMenuMask.removeClass("active");
          mbNav.removeClass("active");
          //55px 준건 slideUP을 해준것과 같다
          mbMenuList.each(function (index, list) {
            // mbMainMenu.eq(index).removeClass("open")
            $(list).find(".mb-mainMenu").removeClass("open");
            //list에서 해당되는 a를 찾는다 , 찾아서 open된건 지움

            $(list).find(".mb-subMenu").slideUp();
            //mbSubMenu.eq(index).slideUp()
            //자식 요소중에 해당되는 메뉴에 slideUP을 해준다
          })
        } else {
            mbBtn.addClass("active");
            mbMenuMask.addClass("active");
            mbNav.addClass("active");  
        }
    })
    // 화면을 위로 이동
    $(".gotop").click(function () {
        $('html, body').animate({
            //html 요소의 스크롤을 top 0으로 옮겨라
            scrollTop:0, //키값 0
        },1000) // 뷰레이션타입
    })

})

