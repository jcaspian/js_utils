(function($) {
	$.support.cors = true;
  
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
      obj.done = callback;
    }
    $.ajax(obj).done(callback.done)
               .fail(callback.fail)
               .always(callback.always);
    console.log('ajax obj', obj);
  }
  
	$.getLoading = function (url, data, callback, dataType) {
		if (xhr2) {
      //$._ajax('GET', url, data, callback, dataType);
      $._ajax('HEAD', url, data, {complete:function(e){console.log(e)}}, dataType);
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
})(jQuery);