$(document).ready(function(){


    $('.about').on('click', function () {
        $('.modal').css('display','block');
        $('.fade').addClass('in');
    });
//    $('.menu_mobile').hide();
    //menu and logo slide
    var menu_mobile=$('.menu_mobile');
    $('.menubuttom').on('click',function(){
        console.debug('success');
        console.debug($('.fa-times').length);
        if ($('.fa-times').length<=0){
            $('.menubuttom').css('background','#364C9F');
            menu_mobile.css('height', '80%')
                .slideDown();
            $('.menubuttom').removeClass('fa-bars').addClass('fa-times');
            console.debug('add');
        }
        else{
            $('.menubuttom').css('background','#fff');
            menu_mobile.css('height', '80%')
                .slideUp();
            $('.menubuttom').removeClass('fa-times').addClass('fa-bars');
            console.debug('remove');
        }

    });
//    default first tab_list is show
    $('.tab_list').children('div').hide().eq(0).show();

    $('.tab_title li').each(function(i){
        console.debug(i);
        $(this).on('click', function () {
            $(this).addClass('is_on').siblings('li').removeClass('is_on');
            $('.tab_list').children('div').hide().eq(i).show();
        });
    });

    //var time_table=$('.time_table');
    // time.html table silde
//    $('.time_subject').each(function(i){
//        $(this).find('.slide_buttom').on('click',function(){
//            console.debug($('.fa-plus').length);
//            if ($(this).find('.fa-plus').length<=0){
//                $(this).siblings('.time_table').css('height', '80%')
//                    .slideDown();
//                $(this).find('span').removeClass('fa-minus').addClass('fa-plus');
//                console.debug('add');
//            }
//            else{
//                $(this).siblings('.time_table').css('height', '80%')
//                    .slideUp();
//                $(this).find('span').removeClass('fa-plus').addClass('fa-minus');
//                console.debug('remove');
//            }
//        })
//    });



    $('.introduct_list').children('.context_slide').hide();
    $('.introduct_list').children('.context_slide:first-child').show();
    $('.total_subject').each(function(j){
            $(this).find('.introuduct_totaltab li').each(function(i){
            $(this).on('click', function () {
                $(this).addClass('is_on').siblings('li').removeClass('is_on');
                $(this).parent().parent().siblings('.introduct_list').children('.context_slide').hide().eq(i).show();
                console.debug(i+','+j);
            });
        });
    });

//scroll to特定位置
    $('.hereMap').on('click', function () {
        console.debug('ooo');
    $("html,body").animate({scrollTop:$(".map_block").offset().top},1000);
    });


});