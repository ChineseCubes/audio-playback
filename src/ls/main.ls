noop = !(e) ->
  e
    ..preventDefault!
    ..stopPropagation!

$dropbox = $ \#dropbox
  .on \dragover noop
  .on \dragenter noop
  .on \drop (e) ->
    noop e
    file = e.originalEvent.dataTransfer?files?0
    reader = new FileReader
      ..readAsDataURL file
      ..onload = (e) ->
        $audio = $ "<audio src=\"#{e.target.result}\" controls preload=\"auto\" autoplay=\"true\">"
        $dropbox.html $audio
        audio = $audio.get!0
          .playbackRate = 0.5
