// 스크롤 이벤트
window.addEventListener("scroll",function(){

    
    
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || window.scrollY;

        // 헤더 높이 
        if( scrollTop >= 100){
            this.document.querySelector('header').classList.add('scroll');
        }else{
            this.document.querySelector('header').classList.remove('scroll');
        }
    
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
