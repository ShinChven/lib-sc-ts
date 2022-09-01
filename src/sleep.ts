/**
 * await the sleep
 * @param timeout
 */
const sleep = (timeout: number) => new Promise<void>(resolve => {
    setTimeout(() => resolve(), timeout);
});

export default sleep;

if (typeof module !== 'undefined') {
    module.exports = Object.assign(sleep, module.exports)
}
