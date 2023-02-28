import { IConfig } from './config';
import { IInfoYoutube } from './infoYoutube';

declare global {
    interface Window {
        electronAPI: {
            // basicOnIpc: ( value: string ) => unknown,
            // basicHandleIpc: ( value: string ) => unknown,
            onSetMusicFolder: () => Promise<string>,
            onGetConfig: () => Promise<IConfig>,
            onDownloadYoutube: (url: string) => unknown,
            onGetInfoYoutube: (url: string) => Promise<IInfoYoutube>,
        }
    }
}

export {}