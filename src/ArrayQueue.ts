export type QueueTaskHandler<T> = (task: T) => Promise<void>


/**
 * An array queue that executes tasks in looping.
 */
class ArrayQueue<T> {

    _queue = new Array<T>()
    _taskHandler: QueueTaskHandler<T>
    _started = false
    _onStop

    /**
     * @param taskHandler handle to execute your tasks
     * @param onStop on queue stop callback
     */
    constructor(taskHandler: QueueTaskHandler<T>, onStop?: () => void) {
        this._taskHandler = taskHandler;
        this._onStop = onStop;
    }

    /**
     * push a task to the queue
     * @param task
     */
    push = (...task: T[]): void => {
        this._queue.push(...task);
        if (!this._started) {
            this._run().then();
        }
    }

    _run = async (): Promise<void> => {
        this._started = true;
        while (this._queue.length > 0) {
            const task = this._queue.shift();
            if (task != null) {
                try {
                    await this._taskHandler(task);
                } catch (e) {
                    console.error(e);
                }
            }
        }
        this._started = false;
        this._onStop && this._onStop();
    }
}

export default ArrayQueue;
