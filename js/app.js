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
  ajax: {
    getLoading: function (url, data, callback, dataType) {
      app.ajax.call('GET', url, data, callback, dataType);
    },
    postLoading: function (url, data, callback, dataType) {
      app.ajax.call('POST', url, data, callback, dataType);
    },
    call: function (type, url, data, callback, dataType) {
      callback.progress = function (e) {
        console.log('progress obj', e);
        if (e.lengthComputable) {  
          var percent = e.loaded / e.total * 100;
          console.log('Loading', percent);
          app.element.loadingbar.width([percent, '%'].join(''));
        } else {
          console.log('e length not computable');
        }
      };
      callback.beforeSend = function () {
        app.loadingbar.show();
      };
      callback.always = function () {
        setTimeout(function () {
          app.loadingbar.hide();
        }, 2000);
      };
      if (type === 'GET') {
        $.getLoading(url, data, callback, dataType);
      } else if (type === 'POST') {
        $.postLoading(url, data, callback, dataType);
      } else {
        console.log(['Type \'',type, '\' not supported'].join(''));
      }
    }
  },
  fn: {
    init: function () {
      app.fn.ajaxSetup();
      window.jsBootstrap = true;
      
      var search = location.search.substring(1);
      var pages = {
        home: 'home.html',
        p2: 'p2.html',
        error404: 'error404.html'
      };
      var page = pages.error404;
      
      try {
        search = search?JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g,'":"') + '"}',function(key, value) { return key===""?value:decodeURIComponent(value) }):{};
        //page = pages[search.page]
        page = search.page;
      } catch (e) {
        console.log(e);
        search = {};
      }
      
      delete search['page'];
      /*
      app.ajax.getLoading(page, search, {
      //app.ajax.postLoading(page, search, {
      //app.ajax.getLoading('http://upload.wikimedia.org/wikipedia/commons/2/2d/Snake_River_(5mb).jpg', search, {
        done: function (res, status, xhr) {
          // console.log('done');
          // console.log(res);
          // console.log(xhr.getResponseHeader("content-type"));
          var content = app.element.content.detach().empty();
          
          app.element.container.append(content.append(res));
        }
      }, 'html');
      */
      $.get(page, search, {
        success: function (res, status, xhr) {
        },
        progress: function (e) {
          if (e.lengthComputable) {  
            var percent = e.loaded / e.total * 100;
            console.log('Loading', percent);
            app.element.loadingbar.width([percent, '%'].join(''));
          } else {
            console.log('e length not computable');
          }
        }
      });
    },
    ajaxSetup: function () {
      $.ajaxSetup({
        beforeSend: function () {
          app.loadingbar.show();
        },
        complete: function () {
          setTimeout(function () {
            app.loadingbar.hide();
          }, 2000);
        }
      });
    }
  }
};
app.fn.init();