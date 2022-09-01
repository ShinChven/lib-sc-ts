import sleep from '../../lib/sleep';

(async () => {
    console.log(new Date())
    await sleep(1000);
    console.log(new Date())
})().then(() => {
  process.exit(0);
}).catch((err)=>{
  console.error(err);
  process.exit(1);
});

