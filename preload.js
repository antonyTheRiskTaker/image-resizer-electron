const os = require('os');
const path = require('path');
const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('os', {
  homedir: () => os.homedir()
  // We can also expose variables, not jist functions.
});

contextBridge.exposeInMainWorld('path', {
  join: (...args) => path.join(...args),
});