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