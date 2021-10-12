import ArrayQueue from '../src/ArrayQueue';
import sleep from '../src/sleep-promise';

type Task = {}

const queue = new ArrayQueue<Task>(async (task): Promise<void> => {
    await sleep(2000);
    console.log('remnant', queue._queue.length)
}, () => {
    console.log('queue stop', new Date())
});

queue.push({});
queue.push({});
queue.push({});
queue.push({});
queue.push({});
