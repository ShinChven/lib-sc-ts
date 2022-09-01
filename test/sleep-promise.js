(async () => {
  const sleep = require('../lib').sleep.default;
  console.log('start')
  await sleep(1000)
  console.log('end')
})().then(() => {
  process.exit(0);
}).catch((err) => {
  console.error(err);
  process.exit(1);
});
