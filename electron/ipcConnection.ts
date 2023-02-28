import { dialog, ipcMain } from 'electron';
import { existsSync, readFileSync, writeFileSync, mkdirSync, createWriteStream } from 'fs';
import * as path from 'path';
import * as ytdl from "ytdl-core"

import { IConfig } from '../types/config';
import { ipcNames } from '../types/ipcNames';

export const ipConnection = () => {

    // ipcMain.on("basic-on-ipc" as ipcNames, (e, args)=>{
    //     console.log(args)
    // })

    // ipcMain.handle("basic-handle-ipc" as ipcNames, async(e, args)=>{
    //     return args
    // })

    ipcMain.handle("on-dowload-youtube" as ipcNames, async(e, url)=>{
        const config: IConfig = JSON.parse( readFileSync("./data/config.json", {encoding: "utf-8"}) );

        const info: ytdl.videoInfo = await ytdl.getBasicInfo(url);
        const titleVideo = info.videoDetails.title;
        const parseTitleVideo = titleVideo.slice(0, 32).split(" ").join("_");
        
        const routeFolder = path.join( config.musicFolder, `${parseTitleVideo}.mp3` )

        ytdl(url, { filter: 'audioonly' })
            .pipe(createWriteStream(routeFolder))
    })

    ipcMain.handle("on-set-music-folder" as ipcNames, async (e, args) => {
        const { canceled, filePaths } = await dialog.showOpenDialog({ 
            properties: [
                'openDirectory',
                'createDirectory'
            ]
        })
        if ( canceled ) return;

        // modify exist config.json file
        if ( existsSync("./data/config.json") ) {
            // read file config.json
            let config: IConfig = JSON.parse( readFileSync("./data/config.json", { encoding: "utf-8" }) );

            // modify config musicFolder
            config.musicFolder = filePaths[0];

            // save config file
            writeFileSync("./data/config.json", JSON.stringify( config ));
        }

        // create new config.json file
        if ( !existsSync("./data/config.json") ) {
            // new object config
            let config: IConfig = {
                musicFolder: filePaths[0]
            }

            // check exist directory data
            if ( !existsSync("./data") ) mkdirSync("./data");

            // save config file
            writeFileSync("./data/config.json", JSON.stringify( config ));
        }

        // return path folder
        return filePaths[0];
    })

}