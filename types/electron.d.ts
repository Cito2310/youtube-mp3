declare global {
    interface Window {
        electronAPI: {
            // basicOnIpc: ( value: string ) => unknown,
            // basicHandleIpc: ( value: string ) => unknown,
            onSetMusicFolder: () => string,
        }
    }
}

export {}