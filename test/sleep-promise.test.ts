import sleep from '../src/sleep-promise';

(async () => {
    console.log(new Date())
    await sleep(1000);
    console.log(new Date())
})()
