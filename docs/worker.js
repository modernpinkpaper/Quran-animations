// Runs the speech-to-text model inside the phone's browser (nothing is uploaded; your voice stays on your phone).
import { pipeline } from 'https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.5.1';
let asr = null, loaded = '', device = '';
async function load(model, forceWasm) {
  let gpu = false; if (!forceWasm && self.navigator.gpu) { try { gpu = !!(await self.navigator.gpu.requestAdapter()); } catch { gpu = false; } }   // only use the graphics chip if the phone really offers it
  asr = await pipeline('automatic-speech-recognition', model, {
    device: gpu ? 'webgpu' : 'wasm',
    dtype: gpu ? { encoder_model: 'fp32', decoder_model_merged: 'q4' } : 'q8',
    progress_callback: p => postMessage({ type: 'progress', p }),
  });
  loaded = model; device = gpu ? 'webgpu' : 'wasm';
}
self.onmessage = async e => {
  const m = e.data;
  try {
    if (m.type === 'load') {
      if (loaded !== m.model) { try { await load(m.model, false); } catch (err) { await load(m.model, true); } }
      postMessage({ type: 'ready', device });
    } else if (m.type === 'transcribe') {
      const out = await asr(m.audio, { language: 'arabic', task: 'transcribe', chunk_length_s: 30 });
      postMessage({ type: 'result', id: m.id, text: (out.text || '').trim() });
    }
  } catch (err) { postMessage({ type: 'error', message: String(err && err.message || err), id: m.id }); }
};
