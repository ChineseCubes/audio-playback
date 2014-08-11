noop = !(e) ->
  e
    ..preventDefault!
    ..stopPropagation!

$body = $ \body

play-with =
  audio: ($container, uri, rate) ->
    $audio = $ "<audio src=\"#uri\" controls preload=\"auto\" autoplay=\"true\">"
    $container.append $audio
    audio = $audio.get!0
      ..playbackRate = 0.5
  howler: ($container, uri, rate) ->
    console.log \howler
    play-with.howler.sound = new Howl do
      urls: [uri]
      autoplay: true
      rate: rate
  sound: ($container, uri, rate) ->
    createjs.Sound
      ..registerSound do
        src: uri
        id: \sound
      ..addEventListener \fileload (e) ->
        console.log e
        createjs.Sound.play \sound
  buzz: ($container, uri, rate) ->
    [path, ext] = uri.split '.'
    sound = new buzz.sound do
      path
      formats: [ext]
      autoplay: on
    sound.setSpeed rate

$dropbox = $ \#dropbox
  #.on \dragover noop
  #.on \dragenter noop
  #.on \drop (e) ->
  #  file = e.originalEvent.dataTransfer?files?0
  .click (e) ->
    noop e
    path = 'assets/recording.mp3'
    play-with['audio'] $body, path, 0.5
    console.log \play
