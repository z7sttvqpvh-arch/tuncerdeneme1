const cron = require("node-cron");
const { runPipeline } = require("./pipeline");

// Her gün saat 10:00’da çalıştır
cron.schedule("0 10 * * *", async () => {
  console.log("Bot başladı");
  await runPipeline();
});