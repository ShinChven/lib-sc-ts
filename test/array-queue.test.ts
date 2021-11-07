import ArrayQueue from '../src/ArrayQueue';
import sleep from '../src/sleep-promise';

type Task = { name: string }

const queue = new ArrayQueue<Task>(async (task): Promise<void> => {
    await sleep(2000);
    console.log('current', task.name);
    console.log('remnants', queue._queue.length);
}, () => {
    console.log('queue stop', new Date())
});

queue.push({ name: 'JSON' }, { name: 'JavaScript' });
queue.push({ name: 'golang' });
queue.push({ name: 'Swift' }, { name: 'Kotlin' });
queue.push({ name: 'Dart' });