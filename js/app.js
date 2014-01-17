var app = {
  element: {
    body: $('body'),
    loadingbar: $('#loadingbar'),
    container: $('#container'),
    content: $('#content')
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
        }
      });
    },
    bindEvent: function () {
      $('a:not[target]').on('tap click', function (e) {
        console.log(this);
        //$.get();
        e.preventDefault();
        return false;
      });
    },
    loadPage: function () {
      var search = location.search.substring(1);
      var pages = {
        home: 'home',
        error404: 'error404'
      };
      var page = pages.error404;
      try {
        search = search?JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g,'":"') + '"}',function(key, value) { return key===""?value:decodeURIComponent(value) }):{};
        console.log('search', search);
        page = search.page || pages.home;
      } catch (e) {
        console.log(e);
        page = search.page || pages.error404;
      }
      delete search['page'];
      $.get(page, search, {
        success: function (res, status, xhr) {
          var content = app.element.content.detach().empty();
          app.element.container.append(content.append(res));
        },
        progress: function (e) {
          if (e.lengthComputable) {  
            var percent = e.loaded / e.total * 100;
            app.element.loadingbar.width([percent, '%'].join(''));
          }
        }
      });
    },
    init: function () {
      window.console || (window.console = { log: function () {} });
      
      app.fn.ajaxSetup();
      app.fn.loadPage();
      app.fn.bindEvent();
    }
  }
};
app.fn.init();