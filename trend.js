const { google } = require("googleapis");
const auth = new google.auth.GoogleAuth({
  keyFile: "cred1.json",
  scopes: ["https://www.googleapis.com/auth/youtube.readonly"]
});
const youtube = google.youtube({ version: "v3", auth });

async function getTrending() {
  const res = await youtube.videos.list({
    part: "snippet",
    chart: "mostPopular",
    regionCode: "US",
    maxResults: 5
  });

  return res.data.items.map(v => v.snippet.title);
}

module.exports = { getTrending };