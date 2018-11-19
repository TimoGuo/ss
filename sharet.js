(function($){
    $(function(){
// (function(){
        
        //倒计时
//         var countDown = $('#times').text();
//         $('.countdown').downCount({
//             date: countDown,
//             offset: +10
//         }, function () {
//             //alert('倒计时结束!');
//         });
       
        
       $('.history').html('<p>liii1</p><p>liii3</p>');
//     cli();
       
      // 选择地址
    $(document).on('click', '.history li', function () {
        $('.history li').removeClass('active');
        $(this).addClass('active');
    });
    
    $("#buyA").click(function () {
        alert('buyAA');
    });

    $('#buyB').click(function () {
        alert('buyBB');
    });  
// })();
              });
})(jQuery);

// function cli() {
//       $('.history li').click(function(){
//         $('.history li').removeClass('active');
//         $(this).addClass('active');
//     })
// }
