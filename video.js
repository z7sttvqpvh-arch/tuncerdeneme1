const fs = require("fs");
const { execSync } = require("child_process");

async function createVideo(i, script) {
  fs.writeFileSync(`videos/sub_${i}.txt`, script);

  // TTS mp3 (ElevenLabs veya başka TTS) varsayımı
  // execSync(`text_to_speech_command -o videos/voice_${i}.mp3 "${script}"`);

  // FFmpeg video oluşturma
  execSync(`
    ffmpeg -loop 1 -i bg.jpg -i videos/voice_${i}.mp3 \
    -vf "drawtext=textfile=videos/sub_${i}.txt:fontsize=40:fontcolor=white:x=(w-text_w)/2:y=(h-text_h)/2" \
    -shortest -y videos/video_${i}.mp4
  `);
}

module.exports = { createVideo };