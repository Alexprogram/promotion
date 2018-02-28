   setTimeout(function () {
       $('.formstyler').styler();
   }, 100)

   var swiper = new Swiper('.swiper-container1', {
       nextButton: '.swiper-button-next1',
       prevButton: '.swiper-button-prev1',
       spaceBetween: 30,
       slidesPerView: 4,
       loop: true,
       breakpoints: {
           1097: {
               slidesPerView: 3
           },
           880: {
               slidesPerView: 2
           }
       }
   });

   function setEqualHeight(columns) {
       var tallestcolumn = 0;
       columns.each(
           function () {
               currentHeight = $(this).height();
               if (currentHeight > tallestcolumn) {
                   tallestcolumn = currentHeight;
               }
           }
       );
       columns.height(tallestcolumn);
   }
   $(window).resize(function () {
       $('.blog_item_text').css('height', 'auto'); //solve for all you browser stretchers out there!
       setEqualHeight($('.blog_item_text'));

   });
   $(window).load(function () {
       setEqualHeight($(".blog_item_text"));
   });


   $('.blog_filter_item').click(function () {
       var $parent = $(this).parent();

       $(this).toggleClass('active_filter');
       return false;
   });


   function setEqualHeight(columns) {
       var tallestcolumn = 0;
       columns.each(
           function () {
               currentHeight = $(this).height();
               if (currentHeight > tallestcolumn) {
                   tallestcolumn = currentHeight;
               }
           }
       );
       columns.height(tallestcolumn);
   }
   $(window).resize(function () {
       $('.member').css('height', 'auto'); //solve for all you browser stretchers out there!
       setEqualHeight($('.member'));

   });
   $(window).load(function () {
       setEqualHeight($(".member"));
   });

   $(document).ready(function () {
       $('.member_pull_title').click(function () {
           $(this).parents('.member_pull_item').find('.pull_hidd_text').fadeToggle(500);
           $(this).parents('.member_pull_item').toggleClass('member_pull_item_is_open');
       });
   });