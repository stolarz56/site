$(function() {

    //Chrome Smooth Scroll
    try {
        $.browserSelector();
        if ($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch (err) {

    }

    $("img, a").on("dragstart", function(event) {
        event.preventDefault();
    });

    $("#scroll ul li a[href^='#']").click(function(e) {
        // prevent default anchor click behavior
        e.preventDefault();
        // store hash
        var hash = this.hash;
        // alert(hash);
        // animate
        $('html, body').animate({
            scrollTop: ($(hash).offset().top )
        }, 300, function() {

            // when done, add hash to url
            // (default click behaviour)
            window.location.hash = hash;
        });

    });

    // $('.fitness-widget-xs-days').on('click', 'span', function () {
    //     changeDayMobile($(this));
    // });


    var version = 'full';

    var curDate = new Date();
    var curDay = curDate.getDay()-1;
    if (curDay<0) curDay = 6;
    console.log(curDay);
    var timeCol = 1;
    var curDayAdaptNum = curDay;
    

    // function setDayMobile(day) {
    //     $('.fitness-widget-xs-days span').removeClass('fitness-widget-cell-today');
    //     $('.fitness-widget-xs-days').find('span').eq(day).addClass('fitness-widget-cell-today');
    //     $('.fitness-widget-table:first tbody tr').find('td:eq(' + (day + timeCol) + ')').each(function () {
    //         $(this).css({display: 'table-cell'});
    //     });
    //     $('.fitness-widget-table:first tbody tr').find('td:not(:eq(' + (day + timeCol) + '))').each(function () {
    //         $(this).css({display: 'none'});
    //     });
    //     // app.helpers.checkEmptyTableMobile();
    // }



    // function changeDayMobile(obj) {
    //     curDayAdaptNum = $(obj).prevAll().length;
    //     //console.log(curDayAdaptNum);
    //     $('.fitness-widget-xs-days span').removeClass('fitness-widget-cell-today');
    //     $(obj).addClass('fitness-widget-cell-today');
    //     $('.fitness-widget-table:first tbody tr').find('td:eq(' + (curDayAdaptNum + timeCol) + ')').each(function () {
    //         $(this).css({display: 'table-cell'});
    //     });
    //     $('.fitness-widget-table:first tbody tr').find('td:not(:eq(' + (curDayAdaptNum + timeCol) + '))').each(function () {
    //         $(this).css({display: 'none'});
    //     });
    //     // app.helpers.checkEmptyTableMobile();
    // }

    // function hideEmptyRows() {
    //             if (wrappers.table.length > 0) {
    //                 $('.fitness-widget-table table tbody tr').each(function () {
    //                     var hide = true;
    //                     $(this).find('td>div').each(function () {
    //                         if (!$(this).hasClass('dNoneFilter') && !$(this).hasClass('dNoneFilterM')) {
    //                             hide = false;
    //                         }
    //                     });
    //                     if (hide) {
    //                         $(this).fadeOut(250);
    //                     } else {
    //                         $(this).fadeIn(250);
    //                     }
    //                 });
    //             }
    //
    //           }

    // function checkVersion(width){
    //     if (width >= 992 ){
    //         // $('.fitness-widget-table tbody').html('');
    //         // app.helpers.getSchedule(false, "", "");
    //         $('.fitness-widget-table:first tbody tr').find('td').each(function () {
    //             $(this).css({display: 'table-cell'});
    //         });
    //         version = 'full';
    //     }
    //     if (width < 992 ) {
    //         $('.fitness-widget-table:first tbody tr').find('td:not(:eq(' + (curDayAdaptNum + timeCol) + '))').each(function () {
    //             $(this).css({display: 'none'});
    //         });
    //         version = 'mobile';
    //     }
    // }

    $(".toggle").click(function() {
        $( "#overlap-menu" ).animate({         
          top: [ "0", "swing" ]
        }, 500, "linear", function() {
          $("#home").hide();
        });
      });

      $( "#overlap-menu" ).click(function() {
        $("#home").show();
    });

    $(window).load(function() {
        checkVersion($(window).width());

        $("a[data-fancybox=group1]").fancybox({
            'transitionIn'		: 'none',
            'transitionOut'		: 'none',
            'titlePosition' 	: 'over',
            'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
                return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
            }
        });
        $("a[data-fancybox=group2]").fancybox({
            'transitionIn'		: 'none',
            'transitionOut'		: 'none',
            'titlePosition' 	: 'over',
            'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
                return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
            }
        });

    });

});
