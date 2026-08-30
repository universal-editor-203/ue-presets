/**
 * UE Presets — FFmpeg.wasm argument factories for Universal Editor
 * @module ue-presets
 */

/**
 * @param {{ start?: number, duration?: number, input?: string, output?: string }} opts
 * @returns {string[]}
 */
export function trim(opts = {}) {
  const start = opts.start ?? 0;
  const duration = opts.duration ?? 5;
  const input = opts.input ?? 'input';
  const output = opts.output ?? 'out.mp4';
  return ['-i', input, '-ss', String(start), '-t', String(duration), '-c', 'copy', output];
}

/**
 * @param {{ duration?: number, fps?: number, width?: number, input?: string, output?: string }} opts
 * @returns {string[]}
 */
export function gif(opts = {}) {
  const duration = opts.duration ?? 3;
  const fps = opts.fps ?? 10;
  const width = opts.width ?? 320;
  const input = opts.input ?? 'input';
  const output = opts.output ?? 'out.gif';
  return [
    '-i', input,
    '-t', String(duration),
    '-vf', `fps=${fps},scale=${width}:-1:flags=lanczos`,
    output,
  ];
}

/**
 * @param {{ crf?: number, width?: number, input?: string, output?: string }} opts
 * @returns {string[]}
 */
export function compress(opts = {}) {
  const crf = opts.crf ?? 28;
  const width = opts.width ?? 1280;
  const input = opts.input ?? 'input';
  const output = opts.output ?? 'out.mp4';
  return [
    '-i', input,
    '-vf', `scale=${width}:-2`,
    '-c:v', 'libx264',
    '-crf', String(crf),
    '-preset', 'fast',
    '-c:a', 'aac',
    '-b:a', '128k',
    output,
  ];
}

/**
 * @param {{ input?: string, output?: string }} opts
 * @returns {string[]}
 */
export function mute(opts = {}) {
  const input = opts.input ?? 'input';
  const output = opts.output ?? 'out.mp4';
  return ['-i', input, '-c', 'copy', '-an', output];
}

/**
 * @param {{ input?: string, output?: string }} opts
 * @returns {string[]}
 */
export function extractAudio(opts = {}) {
  const input = opts.input ?? 'input';
  const output = opts.output ?? 'out.mp3';
  return ['-i', input, '-vn', '-c:a', 'libmp3lame', '-q:a', '2', output];
}

/**
 * @param {{ input?: string, output?: string }} opts
 * @returns {string[]}
 */
export function webm(opts = {}) {
  const input = opts.input ?? 'input';
  const output = opts.output ?? 'out.webm';
  return [
    '-i', input,
    '-c:v', 'libvpx-vp9',
    '-crf', '35',
    '-b:v', '0',
    '-c:a', 'libopus',
    output,
  ];
}

export const PRESETS = {
  trim,
  gif,
  compress,
  mute,
  extractAudio,
  webm,
};

export default PRESETS;
