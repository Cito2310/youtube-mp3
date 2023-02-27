import { dialog, ipcMain } from 'electron';
import { existsSync, readFileSync, writeFileSync } from "fs";
import path = require('path');

import { ipcNames } from '../types/ipcNames';
import { IConfig } from '../types/config';

export const ipConnection = () => {

    // ipcMain.on("basic-on-ipc" as ipcNames, (e, args)=>{
    //     console.log(args)
    // })

    // ipcMain.handle("basic-handle-ipc" as ipcNames, async(e, args)=>{
    //     return args
    // })

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

            // save config file
            writeFileSync("./data/config.json", JSON.stringify( config ));
        }

        // return path folder
        return filePaths[0];
    })

}