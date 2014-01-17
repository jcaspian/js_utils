(function($, window, undefined) {
	$.support.cors = true;
  
  var hasOnProgress = ('onprogress' in $.ajaxSettings.xhr());
  var $._get = $.get;
  var $._post = $.post;
  
  hasOnProgress || return;
  
  var oXHR = $.ajaxSettings.xhr;
  $.ajaxSettings.xhr = function () {
    var xhr = oXHR();
    !xhr instanceof window.XMLHttpRequest || xhr.addEventListener('progress', this.progress, false);
    !xhr.upload || xhr.upload.addEventListener('progress', this.progress, false);
    
    return xhr;
  };
  
  $._ajax = function (type, url, data, callback, dataType) {
    var o = { method: type, url: url, data: data, dataType: dataType };
    'function' == typeof callback? o.success = callback: o.success = callback.success && o.error = callback.error && o.complete = callback.complete && o.progress = callback.progress;
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
  /*
  var originalXhr = $.ajaxSettings.xhr,
      xhr2 = window.XMLHttpRequest && ('upload' in new XMLHttpRequest());
  
  $.ajaxSetup({
    progress: function() { console.log("standard progress callback"); },
    xhr: function() {
      var req = originalXhr(), that = this;
      if (req) {
        if (typeof req.addEventListener == "function") {
          req.addEventListener("progress", function (e) {
            that.progress(e);
          }, false);
        }
      }
      return req;
    }
  });
  
  $._ajax = function (type, url, data, callback, dataType) {
    var obj = {
      type: type,
      url: url,
      data: data,
      dataType: dataType,
      crossDomain : true
    };
    if ('object' == typeof callback) {
      obj.progress = callback.progress;
      obj.beforeSend = callback.beforeSend;
      obj.complete = callback.complete;
    } else {
      obj.complete = callback;
    }
    $.ajax(obj).done(callback.done)
               .fail(callback.fail)
               .always(callback.always);
    console.log('ajax obj', obj);
  }
  
	$.getLoading = function (url, data, callback, dataType) {
		if (xhr2) {
      //$._ajax('GET', url, data, callback, dataType);
      $._ajax('HEAD', url, data, callback, dataType);
		} else {
			$.get(url, data, ('object' == typeof callback) ? callback.done:callback, dataType);
		}
	}
	$.postLoading = function (url, data, callback, dataType) {
		
		if (xhr2) {
			$._ajax('POST', url, data, callback, dataType);
		} else {
			$.post(url, data, ('object' == typeof callback) ? callback.done:callback, dataType);
		}
	}
  */
})(jQuery, window);