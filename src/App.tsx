import { useLayoutEffect, useState } from "react";
import { InputYoutubeLink } from "./components/InputYoutubeLink";
import { TopBar } from "./components/TopBar";

import "./styles/app-styles.scss"

function App() {
  const [config, setConfig] = useState({})

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
  
  const onGetInfoYoutube = async() => {
    console.log( config )
    // console.log( await window.electronAPI.onDowloadYoutube(["https://www.youtube.com/watch?v=X523mel6aIo", config]))
    console.log( await window.electronAPI.onGetInfoYoutube("https://www.youtube.com/watch?v=jo4tUr-zUmU"))
    // console.log( await window.electronAPI.onDowloadYoutube("https://www.youtube.com/watch?v=vg2OAbOA79M"))
    // console.log( await window.electronAPI.onDowloadYoutube("https://www.youtube.com/watch?v=Cd67Is0qXNE"))
  }

  return (
    <div className="App">
      <TopBar/>
      {/* <TitleApp/> */}
      {/* <InputYoutubeLink/> */}
      <button onClick={onSetMusicFolder}>Set Music Folder</button>
      <hr/>
      <button onClick={onDowloadYoutube}>Dowload video</button>
      <hr/>
      <button onClick={onGetInfoYoutube}>Get Info</button>
    </div>
  );
}

export default App;
