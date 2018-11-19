
（function(){
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
})();

