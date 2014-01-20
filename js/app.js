var app = {
  animation: {
    setAnimation: function (animation) {
      var outClass = 'pt-page-moveToBottomFade';
      var inClass = 'pt-page-moveFromTopFade';
      
      switch (animation) {
        case 1:
          outClass = 'pt-page-moveToLeft';
          inClass = 'pt-page-moveFromRight';
          break;
        case 2:
          outClass = 'pt-page-moveToRight';
          inClass = 'pt-page-moveFromLeft';
          break;
        case 3:
          outClass = 'pt-page-moveToTop';
          inClass = 'pt-page-moveFromBottom';
          break;
        case 4:
          outClass = 'pt-page-moveToBottom';
          inClass = 'pt-page-moveFromTop';
          break;
        case 5:
          outClass = 'pt-page-fade';
          inClass = 'pt-page-moveFromRight pt-page-ontop';
          break;
        case 6:
          outClass = 'pt-page-fade';
          inClass = 'pt-page-moveFromLeft pt-page-ontop';
          break;
        case 7:
          outClass = 'pt-page-fade';
          inClass = 'pt-page-moveFromBottom pt-page-ontop';
          break;
        case 8:
          outClass = 'pt-page-fade';
          inClass = 'pt-page-moveFromTop pt-page-ontop';
          break;
        case 9:
          outClass = 'pt-page-moveToLeftFade';
          inClass = 'pt-page-moveFromRightFade';
          break;
        case 10:
          outClass = 'pt-page-moveToRightFade';
          inClass = 'pt-page-moveFromLeftFade';
          break;
        case 11:
          outClass = 'pt-page-moveToTopFade';
          inClass = 'pt-page-moveFromBottomFade';
          break;
        case 12:
          outClass = 'pt-page-moveToBottomFade';
          inClass = 'pt-page-moveFromTopFade';
          break;
        case 13:
          outClass = 'pt-page-moveToLeftEasing pt-page-ontop';
          inClass = 'pt-page-moveFromRight';
          break;
        case 14:
          outClass = 'pt-page-moveToRightEasing pt-page-ontop';
          inClass = 'pt-page-moveFromLeft';
          break;
        case 15:
          outClass = 'pt-page-moveToTopEasing pt-page-ontop';
          inClass = 'pt-page-moveFromBottom';
          break;
        case 16:
          outClass = 'pt-page-moveToBottomEasing pt-page-ontop';
          inClass = 'pt-page-moveFromTop';
          break;
        case 17:
          outClass = 'pt-page-scaleDown';
          inClass = 'pt-page-moveFromRight pt-page-ontop';
          break;
        case 18:
          outClass = 'pt-page-scaleDown';
          inClass = 'pt-page-moveFromLeft pt-page-ontop';
          break;
        case 19:
          outClass = 'pt-page-scaleDown';
          inClass = 'pt-page-moveFromBottom pt-page-ontop';
          break;
        case 20:
          outClass = 'pt-page-scaleDown';
          inClass = 'pt-page-moveFromTop pt-page-ontop';
          break;
        case 21:
          outClass = 'pt-page-scaleDown';
          inClass = 'pt-page-scaleUpDown pt-page-delay300';
          break;
        case 22:
          outClass = 'pt-page-scaleDownUp';
          inClass = 'pt-page-scaleUp pt-page-delay300';
          break;
        case 23:
          outClass = 'pt-page-moveToLeft pt-page-ontop';
          inClass = 'pt-page-scaleUp';
          break;
        case 24:
          outClass = 'pt-page-moveToRight pt-page-ontop';
          inClass = 'pt-page-scaleUp';
          break;
        case 25:
          outClass = 'pt-page-moveToTop pt-page-ontop';
          inClass = 'pt-page-scaleUp';
          break;
        case 26:
          outClass = 'pt-page-moveToBottom pt-page-ontop';
          inClass = 'pt-page-scaleUp';
          break;
        case 27:
          outClass = 'pt-page-scaleDownCenter';
          inClass = 'pt-page-scaleUpCenter pt-page-delay400';
          break;
        case 28:
          outClass = 'pt-page-rotateRightSideFirst';
          inClass = 'pt-page-moveFromRight pt-page-delay200 pt-page-ontop';
          break;
        case 29:
          outClass = 'pt-page-rotateLeftSideFirst';
          inClass = 'pt-page-moveFromLeft pt-page-delay200 pt-page-ontop';
          break;
        case 30:
          outClass = 'pt-page-rotateTopSideFirst';
          inClass = 'pt-page-moveFromTop pt-page-delay200 pt-page-ontop';
          break;
        case 31:
          outClass = 'pt-page-rotateBottomSideFirst';
          inClass = 'pt-page-moveFromBottom pt-page-delay200 pt-page-ontop';
          break;
        case 32:
          outClass = 'pt-page-flipOutRight';
          inClass = 'pt-page-flipInLeft pt-page-delay500';
          break;
        case 33:
          outClass = 'pt-page-flipOutLeft';
          inClass = 'pt-page-flipInRight pt-page-delay500';
          break;
        case 34:
          outClass = 'pt-page-flipOutTop';
          inClass = 'pt-page-flipInBottom pt-page-delay500';
          break;
        case 35:
          outClass = 'pt-page-flipOutBottom';
          inClass = 'pt-page-flipInTop pt-page-delay500';
          break;
        case 36:
          outClass = 'pt-page-rotateFall pt-page-ontop';
          inClass = 'pt-page-scaleUp';
          break;
        case 37:
          outClass = 'pt-page-rotateOutNewspaper';
          inClass = 'pt-page-rotateInNewspaper pt-page-delay500';
          break;
        case 38:
          outClass = 'pt-page-rotatePushLeft';
          inClass = 'pt-page-moveFromRight';
          break;
        case 39:
          outClass = 'pt-page-rotatePushRight';
          inClass = 'pt-page-moveFromLeft';
          break;
        case 40:
          outClass = 'pt-page-rotatePushTop';
          inClass = 'pt-page-moveFromBottom';
          break;
        case 41:
          outClass = 'pt-page-rotatePushBottom';
          inClass = 'pt-page-moveFromTop';
          break;
        case 42:
          outClass = 'pt-page-rotatePushLeft';
          inClass = 'pt-page-rotatePullRight pt-page-delay180';
          break;
        case 43:
          outClass = 'pt-page-rotatePushRight';
          inClass = 'pt-page-rotatePullLeft pt-page-delay180';
          break;
        case 44:
          outClass = 'pt-page-rotatePushTop';
          inClass = 'pt-page-rotatePullBottom pt-page-delay180';
          break;
        case 45:
          outClass = 'pt-page-rotatePushBottom';
          inClass = 'pt-page-rotatePullTop pt-page-delay180';
          break;
        case 46:
          outClass = 'pt-page-rotateFoldLeft';
          inClass = 'pt-page-moveFromRightFade';
          break;
        case 47:
          outClass = 'pt-page-rotateFoldRight';
          inClass = 'pt-page-moveFromLeftFade';
          break;
        case 48:
          outClass = 'pt-page-rotateFoldTop';
          inClass = 'pt-page-moveFromBottomFade';
          break;
        case 49:
          outClass = 'pt-page-rotateFoldBottom';
          inClass = 'pt-page-moveFromTopFade';
          break;
        case 50:
          outClass = 'pt-page-moveToRightFade';
          inClass = 'pt-page-rotateUnfoldLeft';
          break;
        case 51:
          outClass = 'pt-page-moveToLeftFade';
          inClass = 'pt-page-rotateUnfoldRight';
          break;
        case 52:
          outClass = 'pt-page-moveToBottomFade';
          inClass = 'pt-page-rotateUnfoldTop';
          break;
        case 53:
          outClass = 'pt-page-moveToTopFade';
          inClass = 'pt-page-rotateUnfoldBottom';
          break;
        case 54:
          outClass = 'pt-page-rotateRoomLeftOut pt-page-ontop';
          inClass = 'pt-page-rotateRoomLeftIn';
          break;
        case 55:
          outClass = 'pt-page-rotateRoomRightOut pt-page-ontop';
          inClass = 'pt-page-rotateRoomRightIn';
          break;
        case 56:
          outClass = 'pt-page-rotateRoomTopOut pt-page-ontop';
          inClass = 'pt-page-rotateRoomTopIn';
          break;
        case 57:
          outClass = 'pt-page-rotateRoomBottomOut pt-page-ontop';
          inClass = 'pt-page-rotateRoomBottomIn';
          break;
        case 58:
          outClass = 'pt-page-rotateCubeLeftOut pt-page-ontop';
          inClass = 'pt-page-rotateCubeLeftIn';
          break;
        case 59:
          outClass = 'pt-page-rotateCubeRightOut pt-page-ontop';
          inClass = 'pt-page-rotateCubeRightIn';
          break;
        case 60:
          outClass = 'pt-page-rotateCubeTopOut pt-page-ontop';
          inClass = 'pt-page-rotateCubeTopIn';
          break;
        case 61:
          outClass = 'pt-page-rotateCubeBottomOut pt-page-ontop';
          inClass = 'pt-page-rotateCubeBottomIn';
          break;
        case 62:
          outClass = 'pt-page-rotateCarouselLeftOut pt-page-ontop';
          inClass = 'pt-page-rotateCarouselLeftIn';
          break;
        case 63:
          outClass = 'pt-page-rotateCarouselRightOut pt-page-ontop';
          inClass = 'pt-page-rotateCarouselRightIn';
          break;
        case 64:
          outClass = 'pt-page-rotateCarouselTopOut pt-page-ontop';
          inClass = 'pt-page-rotateCarouselTopIn';
          break;
        case 65:
          outClass = 'pt-page-rotateCarouselBottomOut pt-page-ontop';
          inClass = 'pt-page-rotateCarouselBottomIn';
          break;
        case 66:
          outClass = 'pt-page-rotateSidesOut';
          inClass = 'pt-page-rotateSidesIn pt-page-delay200';
          break;
        case 67:
          outClass = 'pt-page-rotateSlideOut';
          inClass = 'pt-page-rotateSlideIn';
          break;
      }
      app.animation.outClass = outClass;
      app.animation.inClass = inClass;
    }
  },
  element: {
    body: $('body'),
    loadingbar: $('#loadingbar'),
    wrap: $('#wrap'),
    content: $('#content')
  },
  support: {
    historyPushState: true
  },
  url: {
    getParam: function (url) {
      var search = url? url.toString().replace(location.origin, '').replace(location.pathname, '').substring(1) : location.search.substring(1);
      try {
        search = search?JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g,'":"') + '"}',function(key, value) { return key===""?value:decodeURIComponent(value) }):{};
      } catch (e) {
        search = {};
      }
      return search;
    }
  },
  loadingbar: {
    show: function () {
      app.element.loadingbar.addClass('isloading');
    },
    hide: function () {
      app.element.loadingbar.removeClass('isloading');
    },
    toggle: function () {
      app.element.loadingbar.toggleClass('isloading');
    }
  },
  fn: {
    ajaxSetup: function () {
      $.ajaxSetup({
        beforeSend: function () {
          app.loadingbar.show();
        },
        complete: function () {
          setTimeout(function () {
            app.loadingbar.hide();
          }, 500);
        },
        error: function (xhr, status, error) {
          app.fn.loadPage('error404', {}, true);
        },
        progress: function (e) {
          if (e.lengthComputable) {  
            var percent = e.loaded / e.total * 100;
            app.element.loadingbar.width([percent, '%'].join(''));
          }
        }
      });
    },
    bindEvent: function () {
      // Anchor loading effect
      
      $('a[href]').not('[target]').unbind('click').click(function (e) {
        app.animation.setAnimation($(this).data('animation'));
        
        if (app.support.historyPushState) {
          var search = (app.url.getParam(this.href)).page ? app.url.getParam(this.href) : {page:'error404'};
          var page = search.page;
          delete search['page'];
          
          app.fn.loadPage(page, search, true);
        } else {
          location.href = [location.origin,location.pathname,'?page=',(this.href).toString().replace(location.origin,'').replace(location.pathname,'')].join('');
        }
        e.preventDefault();
        return false;
      });
      
      // #content perfectScrollbar
      app.element.body.perfectScrollbar({
        suppressScrollX: true,
        minScrollbarLength: 50,
        wheelSpeed: 50
      });
    },
    historyInit: function () {
      if (typeof history.pushState === "undefined") {
        app.support.historyPushState = false;
        return;
      }
      window.onpopstate = function (e) {
        if (e.state == null) {
          return;
        }
        app.fn.loadPage(e.state.page, e.state.search, false);
      };
    },
    loadInitialPage: function () {
      var search = (app.url.getParam()).page ? app.url.getParam() : {page:'home'};
      var page = search.page;
      
      delete search['page'];
      app.fn.loadPage(page, search, false);
    },
    loadPage: function (page, search, push) {
      page = (page.replace(location.origin,'').replace(location.pathname,''));
      $.get(page, search, {
        success: function (res, status, xhr) {
          push || (push = false);
          if (push) {
            page = (page.replace(location.origin,'').replace(location.pathname,''));
            history.pushState({page: page, search: search}, page, ['?page=', page].join(''));
          }
          /*
          var content = app.element.content.detach().empty();
          app.element.wrap.append(content.append(res));
          app.fn.bindEvent();
          */
          var content = app.element.content;
          var newContent = $('<div>').attr('id', 'content').append(res);
          
          if (app.animation.outClass && app.animation.inClass) {
            content.addClass(app.animation.outClass)
              .on('animationend webkitAnimationEnd oAnimateEnd', function () {
                $(this).detach();
                app.element.wrap.append(newContent);
                app.element.content = newContent;
                app.element.content.addClass(app.animation.inClass).on('animationend webkitAnimationEnd oAnimateEnd', function () {
                  $(this).removeClass();
                  app.fn.bindEvent();
                  app.element.body.perfectScrollbar('update');
                });
              });
          } else {
            var content = app.element.content.detach().empty();
            app.element.wrap.append(content.append(res));
            content.removeClass();
            app.fn.bindEvent();
            app.element.body.perfectScrollbar('update');
          }
        }
      }, 'html');
    },
    init: function () {
      window.console || (window.console = { log: function () {} });
      app.fn.historyInit();
      
      app.fn.ajaxSetup();
      app.fn.bindEvent();
      app.animation.setAnimation(12);
      app.fn.loadInitialPage();
    }
  }
};
app.fn.init();