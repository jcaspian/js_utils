(function () {
  window.jsBootstrap || (location.href = [location.origin,location.pathname.toString().substring(location.pathname.toString().indexOf('/'),location.pathname.toString().lastIndexOf('/')+1),'?page=',location.pathname.toString().substring(location.pathname.toString().lastIndexOf('/')+1,location.pathname.toString().lastIndexOf('.')),'&',location.search.substring(1)].join(''));
})();