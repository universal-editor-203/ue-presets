# UE Presets

**Ready FFmpeg.wasm presets** for [Universal Editor](https://universal-editor-203.github.io/).

Trim · GIF · compress · mute · extract audio — copy-paste recipes for the browser timeline.

By [FoxPhantom203](https://github.com/FoxPhantom203).  
Not affiliated with Adobe.

## Install / use

These are plain argument arrays for `@ffmpeg/ffmpeg`. Load FFmpeg in the browser, write the input file, then `exec()` a preset.

```js
import { PRESETS } from './presets.js';

await ffmpeg.writeFile('input', await fetchFile(file));
await ffmpeg.exec(PRESETS.trim({ start: 0, duration: 5 }));
const data = await ffmpeg.readFile('out.mp4');
```

## Presets

| ID | What it does |
|----|----------------|
| `trim` | Cut a segment (`-ss` / `-t`, stream copy) |
| `gif` | First N seconds → animated GIF |
| `compress` | Smaller MP4 (CRF + scale) |
| `mute` | Strip audio, keep video |
| `extractAudio` | Audio-only export |
| `webm` | Convert to WebM |

## Files

- `presets.js` — ESM preset factory
- `presets.umd.js` — browser global `UEPresets`
- `examples.html` — minimal demo page

## License

MIT
