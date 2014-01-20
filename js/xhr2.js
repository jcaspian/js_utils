(function($, window, undefined) {
	$.support.cors = true;
  
  var hasOnProgress = ('onprogress' in $.ajaxSettings.xhr());
  $._get = $.get;
  $._post = $.post;
  
  if (!hasOnProgress) {
    return;
  }
  
  var oXHR = $.ajaxSettings.xhr;
  $.ajaxSettings.xhr = function () {
    var xhr = oXHR();
    !xhr instanceof window.XMLHttpRequest || xhr.addEventListener('progress', this.progress, false);
    !xhr.upload || xhr.upload.addEventListener('progress', this.progress, false);
    
    return xhr;
  };
  
  $._ajax = function (type, url, data, callback, dataType) {
    var o = { method: type, url: url, data: data, dataType: dataType };
    if ('function' == typeof callback) {
      o.success = callback;
    } else {
      o.success = callback.success;
      o.error = callback.error;
      o.complete = callback.complete;
      o.progress = callback.progress;
    }
    $.ajax(o);
  };
  
  $.get = function (url, data, callback, dataType) {
    try {
      $._ajax('GET', url, data, callback, dataType);
    } catch (e) {
      console.log(e);
      $._get(url, data, 'function' == typeof callback? callback:callback.success, dataType);
    }
  }
})(jQuery, window);