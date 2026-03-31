const { getTrending } = require("./trend");
const { generateScript } = require("./generator");
const { createVideo } = require("./video");
const { uploadVideo } = require("./uploader");
const { analyzeBestVideo } = require("./brain");

const DAILY_LIMIT = 5;

async function runPipeline() {
  const trends = await getTrending();
  let counter = 0;
  for (let t of trends) {
    if (counter >= DAILY_LIMIT) break;

    const script = await generateScript(t);
    await createVideo(counter, script);
    await uploadVideo(counter);

    counter++;
  }

  // Self-learning
  await analyzeBestVideo();
}

module.exports = { runPipeline };