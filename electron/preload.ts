import { ipcNames } from "../types/ipcNames"
import { IConfig } from '../types/config';

const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    // basicOnIpc: ( value: string ) => ipcRenderer.send('basic-on-ipc' as ipcNames, value),
    // basicHandleIpc: ( value: string ) => ipcRenderer.invoke('basic-handle-ipc' as ipcNames, value)
    onSetMusicFolder: async() => ipcRenderer.invoke('on-set-music-folder' as ipcNames),
    onDownloadYoutube: async( url: string ) => ipcRenderer.invoke('on-download-youtube' as ipcNames, url),
    onGetInfoYoutube: async( url: string ) => ipcRenderer.invoke('on-get-info-youtube' as ipcNames, url),
    onGetConfig: async() => ipcRenderer.invoke('on-get-config' as ipcNames),
})