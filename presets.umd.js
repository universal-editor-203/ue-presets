/**
 * UE Presets — UMD build for <script> tags
 * Exposes window.UEPresets
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.UEPresets = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  function trim(opts) {
    opts = opts || {};
    var start = opts.start != null ? opts.start : 0;
    var duration = opts.duration != null ? opts.duration : 5;
    var input = opts.input || 'input';
    var output = opts.output || 'out.mp4';
    return ['-i', input, '-ss', String(start), '-t', String(duration), '-c', 'copy', output];
  }

  function gif(opts) {
    opts = opts || {};
    var duration = opts.duration != null ? opts.duration : 3;
    var fps = opts.fps != null ? opts.fps : 10;
    var width = opts.width != null ? opts.width : 320;
    var input = opts.input || 'input';
    var output = opts.output || 'out.gif';
    return ['-i', input, '-t', String(duration), '-vf', 'fps=' + fps + ',scale=' + width + ':-1:flags=lanczos', output];
  }

  function compress(opts) {
    opts = opts || {};
    var crf = opts.crf != null ? opts.crf : 28;
    var width = opts.width != null ? opts.width : 1280;
    var input = opts.input || 'input';
    var output = opts.output || 'out.mp4';
    return ['-i', input, '-vf', 'scale=' + width + ':-2', '-c:v', 'libx264', '-crf', String(crf), '-preset', 'fast', '-c:a', 'aac', '-b:a', '128k', output];
  }

  function mute(opts) {
    opts = opts || {};
    return ['-i', opts.input || 'input', '-c', 'copy', '-an', opts.output || 'out.mp4'];
  }

  function extractAudio(opts) {
    opts = opts || {};
    return ['-i', opts.input || 'input', '-vn', '-c:a', 'libmp3lame', '-q:a', '2', opts.output || 'out.mp3'];
  }

  function webm(opts) {
    opts = opts || {};
    return ['-i', opts.input || 'input', '-c:v', 'libvpx-vp9', '-crf', '35', '-b:v', '0', '-c:a', 'libopus', opts.output || 'out.webm'];
  }

  return {
    trim: trim,
    gif: gif,
    compress: compress,
    mute: mute,
    extractAudio: extractAudio,
    webm: webm,
    PRESETS: { trim: trim, gif: gif, compress: compress, mute: mute, extractAudio: extractAudio, webm: webm },
  };
});
