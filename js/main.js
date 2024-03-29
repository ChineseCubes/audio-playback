(function(){
  var noop, $body, playWith, $dropbox;
  noop = function(e){
    var x$;
    x$ = e;
    x$.preventDefault();
    x$.stopPropagation();
  };
  $body = $('body');
  playWith = {
    audio: function($container, uri, rate){
      var $audio, x$, audio;
      $audio = $("<audio src=\"" + uri + "\" controls preload=\"auto\" autoplay=\"true\">");
      $container.append($audio);
      x$ = audio = $audio.get()[0];
      x$.playbackRate = 0.5;
      return x$;
    },
    howler: function($container, uri, rate){
      console.log('howler');
      return playWith.howler.sound = new Howl({
        urls: [uri],
        autoplay: true,
        rate: rate
      });
    },
    sound: function($container, uri, rate){
      var x$;
      x$ = createjs.Sound;
      x$.registerSound({
        src: uri,
        id: 'sound'
      });
      x$.addEventListener('fileload', function(e){
        console.log(e);
        return createjs.Sound.play('sound');
      });
      return x$;
    },
    buzz: function($container, uri, rate){
      var ref$, path, ext, sound;
      ref$ = uri.split('.'), path = ref$[0], ext = ref$[1];
      sound = new buzz.sound(path, {
        formats: [ext],
        autoplay: true
      });
      return sound.setSpeed(rate);
    }
  };
  $dropbox = $('#dropbox').click(function(e){
    var path;
    noop(e);
    path = 'assets/recording.mp3';
    playWith['audio']($body, path, 0.5);
    return console.log('play');
  });
}).call(this);
