import ArrayQueue from './ArrayQueue';
import sleep from './sleep'

const LibSC = {
    ArrayQueue,
    sleep,
}

export default LibSC;

if (typeof module !== 'undefined') {
    module.exports = Object.assign(LibSC, module.exports)
}
