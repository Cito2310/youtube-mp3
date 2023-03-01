import { useLayoutEffect, useState } from "react";
import { TopBar } from "./components/TopBar";
import { VideoInfo } from "./components/VideoInfo";

import "./styles/app-styles.scss"

import { IInfoYoutube } from '../types/infoYoutube';

function App() {
  const [config, setConfig] = useState({});
  const [selectVideoInfo, setSelectVideoInfo] = useState<IInfoYoutube | {}>({})

  // add config app
  const asyncGetConfig = async() => { setConfig( await window.electronAPI.onGetConfig() )}
  useLayoutEffect(() => { asyncGetConfig() }, [])

  const onSetMusicFolder = async() => {
    console.log( await window.electronAPI.onSetMusicFolder())
  }

  const onDowloadYoutube = async() => {
    // console.log( await window.electronAPI.onDowloadYoutube(["https://www.youtube.com/watch?v=X523mel6aIo", config]))
    console.log( await window.electronAPI.onDownloadYoutube("https://www.youtube.com/watch?v=jo4tUr-zUmU"))
    // console.log( await window.electronAPI.onDowloadYoutube("https://www.youtube.com/watch?v=vg2OAbOA79M"))
    // console.log( await window.electronAPI.onDowloadYoutube("https://www.youtube.com/watch?v=Cd67Is0qXNE"))
  }
  
  const onGetInfoYoutube = async(url: string) => {
    const info = await window.electronAPI.onGetInfoYoutube( url );
    setSelectVideoInfo( info );
  }

  return (
    <div className="App">
      <p>https://www.youtube.com/watch?v=jo4tUr-zUmU</p>
      <p>https://www.youtube.com/watch?v=X523mel6aIo</p>
      <p>https://www.youtube.com/watch?v=vg2OAbOA79M</p>
      <p>https://www.youtube.com/watch?v=Cd67Is0qXNE</p>
      <TopBar 
        config={config}
        onGetInfoYoutube={onGetInfoYoutube}
      />

      { 
        Object.keys(selectVideoInfo).length === 0 ? null :
        <VideoInfo info={selectVideoInfo as IInfoYoutube}/>
      }
      {/* <TitleApp/> */}
      {/* <InputYoutubeLink/> */}
      {/* <button onClick={onSetMusicFolder}>Set Music Folder</button>
      <hr/>
      <button onClick={onDowloadYoutube}>Dowload video</button>
      <hr/> */}
      {/* <button onClick={onGetInfoYoutube}>Get Info</button> */}
      {/* <h2>{JSON.stringify(selectVideoInfo)}</h2> */}
    </div>
  );
}

export default App;
