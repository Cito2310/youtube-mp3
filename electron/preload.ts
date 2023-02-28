import { ipcNames } from "../types/ipcNames"
import { IConfig } from '../types/config';

const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    // basicOnIpc: ( value: string ) => ipcRenderer.send('basic-on-ipc' as ipcNames, value),
    // basicHandleIpc: ( value: string ) => ipcRenderer.invoke('basic-handle-ipc' as ipcNames, value)
    onSetMusicFolder: () => ipcRenderer.invoke('on-set-music-folder' as ipcNames),
    onDownloadYoutube: ( url: string ) => ipcRenderer.invoke('on-download-youtube' as ipcNames, url)
})