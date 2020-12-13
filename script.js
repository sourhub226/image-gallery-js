var x=0;
var offset=0
var totalPics=$(".scroll-gallery > img").length;
console.log(totalPics);

leftScroll=()=>{
    if (offset<0){
        x+=1;
        offset=200*x;
        console.log(offset);
        $(".scroll-gallery").css({"transform":`translateX(${offset}px)`});
    }
}

rightScroll=()=>{
    if (x>-(totalPics-4)){
        x-=1;
        offset=200*x;
        console.log(offset);
        $(".scroll-gallery").css({"transform":`translateX(${offset}px)`});
    }
}