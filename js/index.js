// 드롭다운 메뉴
let menuList = document.querySelectorAll('.top-list');
function dropDown(){
    menuList.forEach(li => {
        li.addEventListener('mouseover',function(e){
            e.preventDefault();
            li.classList.add('down');
        })
        li.addEventListener('mouseout',function(e){
            e.preventDefault();
            li.classList.remove('down');
        })
    });
};
dropDown();



// 스크롤 이벤트
window.addEventListener("scroll",function(){

let scrollTop = window.pageYOffset || document.documentElement.scrollTop || window.scrollY,
    card = document.getElementById('card'),
    eve = document.getElementById('event'),
    spaceculture = document.getElementById('space-culture'),
    cardScroll = card.offsetTop,
    eveScroll = eve.offsetTop,
    spacecultureScroll = spaceculture.offsetTop;


    // 배경색 변환
    if( scrollTop >= cardScroll - 550 ){
        card.classList.add('color');
    }else if ( scrollTop >= eveScroll - 300){
        card.classList.remove('color');
    }else{
        card.classList.remove('color');
    }

    // 헤더 높이 
    if( scrollTop >= 100){
        this.document.querySelector('header').classList.add('scroll');
    }else{
        this.document.querySelector('header').classList.remove('scroll');
    }

    // 공지사항탭 active
    if( scrollTop >= eveScroll - 300 ){
        document.querySelector("#event .bottom").classList.add('active');
    }   

    //  스페이스-컬쳐 active
    if( scrollTop >= spacecultureScroll - 400){
        spaceculture.classList.add('active');
    }

});



//탭 메뉴
function tapClick(){
    var tabs = document.querySelectorAll('.card-wrap > ul > li');

    tabs[0].classList.add('show');
    tabs[0].classList.add('on');


    document.querySelectorAll('.card-wrap > ul > li').forEach(li => {
        li.addEventListener('click', function(e){
        e.preventDefault();

        if(li.classList.contains('show') == false){

            let $children = li.parentNode.children;

            Array.prototype.forEach.call($children,(el) => {
                el.classList.remove('show');
                el.classList.remove('on');
            });
            li.classList.add('show');
            li.classList.add('on');
        }
        });
    });
}
tapClick();



// 비쥬얼 슬라이드 //
let container = document.getElementsByClassName('slide-container'),
    slide = document.querySelectorAll('.slide-container > div'),
    slideIndex = slide.index,
    slideLength = slide.length,
    currentIndex = 0,
    vprev = document.querySelector('#visual .prev'),
    vnext = document.querySelector('#visual .next');


// slide-container 가로 길이 지정
container[0].style.width = (slideLength * 100) + 'vw';

// 페이저 생성하기
let pagerwrap = document.getElementsByClassName('pager'),
    pagerwrapHTML = '';

for( var x=0; x < slideLength; x++){     

    pagerwrapHTML += "<div class='slide"+(x+1)+"' title=''>0"+(x+1)+"</=>";
    pagerwrap[0].innerHTML = pagerwrapHTML;
}

let pager = document.querySelectorAll('.pager div');
pager[0].classList.add('now');

// 슬라이드 이동 함수
function goToVisualSlide(idx){
    container[0].classList.add('soft');
    container[0].style.left = idx * -100 + 'vw';
    currentIndex = idx;
    // 페이저 작동
    if(pager[idx].classList.contains('now') == false){    

        let $child = document.querySelectorAll('.pager div');

        Array.prototype.forEach.call($child,(el) => {
            el.classList.remove('now');
        });
        pager[idx].classList.add('now');
    }
};

goToVisualSlide(0);

// 이전, 다음으로
vprev.addEventListener('click',function(e){
    e.preventDefault();
    if( currentIndex > 0 ){
        stop();
        goToVisualSlide(currentIndex -1);
    }else{
        stop();
        goToVisualSlide(slideLength-1);
    }
});
vnext.addEventListener('click',function(e){
    e.preventDefault();
    if( currentIndex < slideLength-1 ){
        stop();
        goToVisualSlide(currentIndex + 1);
    }else{
        stop();
        goToVisualSlide(0);
    }
});

// 자동 슬라이드
function autoSlide(){
    var nextIdx = (currentIndex +1) % slideLength;
        goToVisualSlide(nextIdx);
}
let visualAutoSlide = setInterval(autoSlide, 4000);

// 재생, 일시정지 버튼
let play = document.querySelector('.auto .play'),
    pause = document.querySelector('.auto .pause'),
    controler = document.querySelectorAll('.auto a');

play.classList.add('on');

play.addEventListener('click',function(e){
    e.preventDefault();
    if( play.classList.contains('on')==false){
        stop();
        play.classList.add('on');
        pause.classList.remove('on');
        visualAutoSlide = setInterval(autoSlide, 5000);
    }
});
pause.addEventListener('click',function(e){
    e.preventDefault();
    if( pause.classList.contains('on')==false){
        stop();
        pause.classList.add('on');
        play.classList.remove('on');
        clearInterval(visualAutoSlide);
    }
});




// 이벤트 슬라이드 //
let eventwrap = document.getElementsByClassName('eventwrap'),
    eventcontents = document.querySelectorAll('.eventwrap li'),
    contentsLength = eventcontents.length,
    currentI = 0;
    evprev = document.querySelector('#event .top .prev'),
    evnext = document.querySelector('#event .top .next');

// eventwrap 가로길이 지정
eventwrap[0].style.width = (contentsLength * 300) - 20 + 'px';

// 이동하기
function goToEventSlide(idx){
    eventwrap[0].classList.add('soft');
    eventwrap[0].style.left = idx * -300 + 'px';
    currentI = idx; 

};

// 이전으로, 다음으로
evprev.addEventListener('click',function(e){
    e.preventDefault();
    if( currentI > 0 ){
        stop();
        goToEventSlide(currentI -1);
    }else{
        stop();
        goToEventSlide(0);
    }
});
evnext.addEventListener('click',function(e){
    e.preventDefault();
    if( currentI < contentsLength-4 ){
        stop();
        goToEventSlide(currentI + 1);
    }else if( currentI == contentsLength-4 ){
        stop();
        goToEventSlide(contentsLength-4);
    }
});



//스페이스, 컬쳐쳐 슬라이드 (무한 슬라이드)
let spwrap = document.querySelectorAll('.space-culture'),
    spcontents = document.querySelectorAll('.space-culture > div'),
    spcontentsLength = spcontents.length,
    conWidth = 300,
    conMargin = 20,
    spprev = document.querySelector('.spprev'),
    spnext = document.querySelector('.spnext'),
    currentInd = 0;



// 슬라이드 복사하기
makeSPClone();

function makeSPClone(){
    for( var i=0; i<spcontentsLength; i++){
        var cloneSlide = spcontents[i].cloneNode(true);
        cloneSlide.classList.add('clone');
        spwrap[0].appendChild(cloneSlide);        
    }
    for( var i=spcontentsLength-1; i>=0; i--){
        var cloneSlide = spcontents[i].cloneNode(true);
        cloneSlide.classList.add('clone');
        spwrap[0].prepend(cloneSlide);    
    }
    updateWidth();
    setStartPosition()
    setTimeout(function(){
        spwrap[0].classList.add('soft');
    })
}

// 부모요소 가로길이 정정하기
function updateWidth(){
    var currentSlide = document.querySelectorAll('.space-culture > div');
    var newSlideCount =  currentSlide.length;

    spwrap[0].style.width = (conWidth + conMargin) * newSlideCount - conMargin + 'px';
}

// 시작점으로 이동하기
function setStartPosition(){
    var startTranslateVal = -(conWidth + conMargin) * spcontentsLength;
    spwrap[0].style.transform = 'translateX('+startTranslateVal+'px)';
}

// 이동하기
function goToSpaceSlide(idx){
    console.log(idx);
    spwrap[0].style.left = -idx * (conWidth + conMargin) + 'px';
    currentInd = idx; 

    if(currentInd == spcontentsLength){
        setTimeout(function(){
            spwrap[0].classList.remove('soft');
            spwrap[0].style.left = '0px';
            currentInd = 0;
        },500);
    }
    spwrap[0].classList.add('soft');
};

// 이전으로, 다음으로
spprev.addEventListener('click',function(e){
    e.preventDefault();
    stop();
    goToSpaceSlide(currentInd -1);

});

spnext.addEventListener('click',function(a){
    a.preventDefault();
    stop();
    goToSpaceSlide(currentInd + 1);

});


// 컬쳐 슬라이드 (무한 슬라이드)
let culcontents = document.querySelectorAll('.culture-wrap .space-culture > div'),
    culcontentsLength = culcontents.length,
    culprev = document.querySelector('.culprev'),
    culnext = document.querySelector('.culnext'),
    currentInd2 = 0;

// 복제하기
makeCULClone();

function makeCULClone(){
    for( var i=0; i<culcontentsLength; i++){
        var cloneSlide = culcontents[i].cloneNode(true);
        cloneSlide.classList.add('clone');
        spwrap[1].appendChild(cloneSlide);        
    }
    for( var i=culcontentsLength-1; i>=0; i--){
        var cloneSlide = culcontents[i].cloneNode(true);
        cloneSlide.classList.add('clone');
        spwrap[1].prepend(cloneSlide);    
    }
    updateCulWidth();
    setStartCulPosition()
    setTimeout(function(){
        spwrap[1].classList.add('soft');
    })
}

// 부모요소 가로길이 정하기
function updateCulWidth(){
    var currentSlide = document.querySelectorAll('.culture-wrap .space-culture > div');
    var newSlideCount =  currentSlide.length;

    spwrap[1].style.width = (conWidth + conMargin) * newSlideCount - conMargin + 'px';
}

// 시작점으로 이동하기
function setStartCulPosition(){
    var startTranslateVal = -(conWidth + conMargin) * culcontentsLength;
    spwrap[1].style.transform = 'translateX('+startTranslateVal+'px)';
}

// 이동하기
function goToCultureSlide(idx){
    console.log(idx);
    spwrap[1].style.left = -idx * (conWidth + conMargin) + 'px';
    currentInd2 = idx; 

    if(currentInd2 == culcontentsLength){
        setTimeout(function(){
            spwrap[1].classList.remove('soft');
            spwrap[1].style.left = '0px';
            currentInd2 = 0;
        },500);
    }
    spwrap[1].classList.add('soft');
};

// 이전으로, 다음으로
culprev.addEventListener('click',function(e){
    e.preventDefault();
    stop();
    goToCultureSlide(currentInd2 -1);
});

culnext.addEventListener('click',function(a){
    a.preventDefault();
    stop();
    goToCultureSlide(currentInd2 + 1);

});


// 모바일 메뉴
let mobMenuBtn = document.querySelector('header #mob_menu .mob_menu_box'),
    overlay = document.querySelector('.overlay'),
    mobMenu = document.querySelector('.mob_lnb > ul'),
    mobMenuList = document.querySelectorAll('.mob_lnb > ul > li'),
    subMenuList = document.querySelectorAll('.mob_lnb > ul > li > ul');

// 모바일 버튼 토글
mobMenuBtn.addEventListener('click',function(e){
    e.preventDefault(e);
    stop();
    this.classList.toggle('open');
    overlay.style.display = 'block';
    mobMenu.classList.toggle('menu_show');
    
    for( var i=0; i <= mobMenuList.length; i++){
        mobMenuList[i].classList.remove('open');
    }
});

// 서브메뉴 나타나기
mobMenuList.forEach(li=>{
    li.addEventListener('click',function(e){

        if( li.classList.contains('open') == false){

            let $subChild = li.parentNode.children;
            
            Array.prototype.forEach.call($subChild,(el) => {
                el.classList.remove('open');
                });
            li.classList.add('open');
        }else if( li.classList.contains('open')==true){
            li.classList.remove('open');
        }
    });
});
