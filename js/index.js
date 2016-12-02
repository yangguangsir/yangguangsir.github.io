/**
 * Created by Jason on 2016/12/2.
 */
(function(win,doc){
    function change(){
        doc.documentElement.style.fontSize=doc.documentElement.clientWidth*20/320+'px';
    }
    change();
    win.addEventListener('resize',change,false);
})(window,document);

$(function(){
    $('#icon').on('click',function(){
        $('header').css('z-index','0');
        $('.mast_top').css('z-index','5');
        $('.mast_top').removeClass('hide');
        $('.mast_top').addClass('on');
    });
    $('.close').on('click',function(){
        $('header').css('z-index','5');
        $('.mast_top').css('z-index','3');
        $('.mast_top').addClass('hide');
        $('.mast_top').removeClass('on');
    });
    $('.mast_top a').click(function(){
        $('header').css('z-index','5');
        $('.mast_top').css('z-index','3');
        $('.mast_top').addClass('hide');
        $('.mast_top').removeClass('on');
    });
});
