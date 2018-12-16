// professional0单位名称模糊搜索
(function() {
  $(function() {
    $('#professional0').typeahead({
      source: proListDWMC
      // itemSelected: displayResult
    })
  });
})();
// professional2职位名称模糊搜索
(function() {
  $(function() {
    $('#professional2').typeahead({
      source: proListZWMC
      // itemSelected: displayResult
    })
  });
})();
// professional3职位代码模糊搜索
(function() {
  $(function() {
    $('#professional3').typeahead({
      source: proListZWDM
      // itemSelected: displayResult
    })
  });
})();
// professional4专业模糊搜索
(function() {
  $(function() {
    $('#professional4').typeahead({
      source: proList
      // itemSelected: displayResult
    })
  });
})();
(function(){
       $('.bd_nav').find('span').click(function(){
           $('.bd_nav').find('span').removeClass('active').eq($(this).index()).addClass('active');
           $('.container').find('.agileits').hide().eq($(this).index()).show()
       })
})()
;(function(){
       $('.a1').click().click(function(){
           $('.zg_direction').show();
           $('.zg_cover').show();
       })
       $('.direction_close').click(function(){
           $('.zg_direction').hide();
           $('.zg_cover').hide();
       })
})()
$(function(){
    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        $('.databack').addClass('scrollfixed');
        if(scrollTop == 0){
          $('.databack').removeClass('scrollfixed')
        }
      })
})





