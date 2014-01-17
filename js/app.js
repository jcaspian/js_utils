var app = {
  element: {
    body: $('body'),
    loadingbar: $('#loadingbar'),
    container: $('#container'),
    content: $('#content')
  },
  support: {
    historyPushState: true
  },
  url: {
    getParam: function () {
      var search = location.search.substring(1);
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
        progress: function (e) {
          if (e.lengthComputable) {  
            var percent = e.loaded / e.total * 100;
            app.element.loadingbar.width([percent, '%'].join(''));
          }
        }
      });
    },
    bindEvent: function () {
      $('a').not('[target]').click(function (e) {
        if (app.support.historyPushState) {
          app.fn.loadPage(this.href, {}, true);
        } else {
          location.href = [location.origin,location.pathname,'?page=',(this.href).toString().replace(location.origin,'').replace(location.pathname,'')].join('');
        }
        e.preventDefault();
        return false;
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
        app.fn.loadPage(e.state.page, e.state.search);
      };
    },
    loadInitialPage: function () {
      var pages = {
        home: 'home',
        error404: 'error404'
      };
      var page = pages.error404;
      try {
        search = app.url.getParam();
        page = search.page || pages.home;
      } catch (e) {
        console.log(e);
        page = search.page || pages.error404;
      }
      delete search['page'];
      
      app.fn.loadPage(page, search);
    },
    loadPage: function (page, search, push) {
      $.get(page, search, {
        success: function (res, status, xhr) {
          push || (push = false);
          if (push) {
            page = (page.replace(location.origin,'').replace(location.pathname,''));
            history.pushState({page: page, search: search}, page, ['?page=', page].join(''));
          }
          var content = app.element.content.detach().empty();
          app.element.container.append(content.append(res));
          app.fn.bindEvent();
        }
      }, 'html');
    },
    init: function () {
      window.console || (window.console = { log: function () {} });
      app.fn.historyInit();
      
      app.fn.ajaxSetup();
      app.fn.bindEvent();
      app.fn.loadInitialPage();
    }
  }
};
app.fn.init();