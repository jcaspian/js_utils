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
        if (e.lengthComputable) {  
          var percent = e.loaded / e.total * 100;
          app.element.loadingbar.width([percent, '%'].join(''));
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
      }
    }
  },
  fn: {
    init: function () {
      window.jsBootstrap = true;
      
      var search = location.search.substring(1);
      search = search?JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g,'":"') + '"}',function(key, value) { return key===""?value:decodeURIComponent(value) }):{};
      
      console.log(search);
      
      var pages = {
        home: 'home.html',
        p2: 'p2.html',
        error404: 'error404.html'
      };
      
      var page = pages[search.page] || pages.error404;
      
      delete search[page];
      
      app.ajax.getLoading(page, search, {
      //app.ajax.getLoading('http://upload.wikimedia.org/wikipedia/commons/2/2d/Snake_River_(5mb).jpg', {foo:'bar'}, {
        done: function (res, status, xhr) {
          console.log('done');
          console.log(res);
          console.log(xhr.getResponseHeader("content-type"));
          var content = app.element.content.detach();
          
          //app.element.container.append(content.empty().append(res));
          app.element.container.append(res);
        }
      });
    }
  }
};
app.fn.init();