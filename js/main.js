(function(){
  var noop, $dropbox;
  noop = function(e){
    var x$;
    x$ = e;
    x$.preventDefault();
    x$.stopPropagation();
  };
  $dropbox = $('#dropbox').on('dragover', noop).on('dragenter', noop).on('drop', function(e){
    var file, ref$, ref1$, x$, reader;
    noop(e);
    file = (ref$ = e.originalEvent.dataTransfer) != null ? (ref1$ = ref$.files) != null ? ref1$[0] : void 8 : void 8;
    x$ = reader = new FileReader;
    x$.readAsDataURL(file);
    x$.onload = function(e){
      var $audio, audio;
      $audio = $("<audio src=\"" + e.target.result + "\" controls preload=\"auto\" autoplay=\"true\">");
      $dropbox.html($audio);
      return audio = $audio.get()[0].playbackRate = 0.5;
    };
    return x$;
  });
}).call(this);
