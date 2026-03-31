const { google } = require("googleapis");
const fs = require("fs");

const auth = new google.auth.GoogleAuth({
  keyFile: "cred1.json",
  scopes: ["https://www.googleapis.com/auth/youtube.upload"]
});
const youtube = google.youtube({ version: "v3", auth });

async function uploadVideo(i) {
  await youtube.videos.insert({
    part: "snippet,status",
    requestBody: {
      snippet: {
        title: `🔥 Viral Shorts ${Math.floor(Math.random() * 1000)} #shorts`,
        description: "AI otomatik video",
        tags: ["shorts", "viral"],
        categoryId: "22"
      },
      status: { privacyStatus: "public" }
    },
    media: { body: fs.createReadStream(`videos/video_${i}.mp4`) }
  });

  console.log("Yüklendi:", i);
}

module.exports = { uploadVideo };