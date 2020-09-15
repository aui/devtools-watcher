const devToolsWatcher = (callback) => {
    let timer;
    let open = false;
    const checker = new Image();
    const clear = console.clear;
    const run = new Function(`a`, `a()`);
    const opened = () => {
        open = true;
        if (!timer) {
            callback(true);
            timer = setInterval(() => {
                open = false;
                console.log('%c', checker);
                run(clear);
                if (!open) {
                    callback(false);
                    clearInterval(timer);
                    timer = null;
                    console.log('%c', checker);
                }
            }, 500);
        }
    };

    // chrome || safari
    Object.defineProperty(checker, 'nodeName', { get: opened });
    console.log('%c', checker);
};

module.exports = devToolsWatcher;
