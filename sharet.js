
(function(){
      // 选择地址
   
    
    $('.history').html('<li>li1</li><li>li2</li><li>li3</li>');
//     cli();

    $("#buyA").click(function () {
        alert('buyAA');
    });

    $('#buyB').click(function () {
        alert('buyBB');
    });  
})();

// function cli() {
    $(document).on('click', '.history li', function () {
        $('.history li').removeClass('active');
        $(this).addClass('active');
    });
//       $('.history li').click(function(){
//         $('.history li').removeClass('active');
//         $(this).addClass('active');
//     })
// }
