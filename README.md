# devtools-watcher

# devtools-watcher [![devtools-watcher](https://img.shields.io/npm/v/devtools-watcher.svg?colorB=green&label=devtools-watcher)](https://www.npmjs.com/package/devtools-watcher)

## Install

`npm install devtools-watcher --save`

## Usage

**[DEMO](./index.html)**

```javascript
import devToolsDetector from 'devtools-watcher';

devToolsWatcher((open) => {
    if (open) {
        //DevTools Status: open
    } else {
        //DevTools Status: close
    }
});
```

## Support

- Chrome
- Safari

## License

MIT
