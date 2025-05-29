const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electronApi', {

} satisfies Window['electron']);