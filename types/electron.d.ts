declare global {
    interface Window {
        electronAPI: {
            // basicOnIpc: ( value: string ) => unknown,
            // basicHandleIpc: ( value: string ) => unknown,
            onSetMusicFolder: () => string,
            onGetConfig: () => string,
            onDownloadYoutube: (url: string) => unknown,
            onGetInfoYoutube: (url: string) => unknown,
        }
    }
}

export {}