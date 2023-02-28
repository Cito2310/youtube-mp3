import { InputYoutubeLink } from "./components/InputYoutubeLink";
import { TitleApp } from "./components/TitleApp";

import "./styles/app-styles.scss"

function App() {
  const onSetMusicFolder = async() => {
    console.log( await window.electronAPI.onSetMusicFolder())
  }

  const onDowloadYoutube = async() => {
    // console.log( await window.electronAPI.onDowloadYoutube(["https://www.youtube.com/watch?v=X523mel6aIo", config]))
    console.log( await window.electronAPI.onDowloadYoutube("https://www.youtube.com/watch?v=jo4tUr-zUmU"))
    // console.log( await window.electronAPI.onDowloadYoutube("https://www.youtube.com/watch?v=vg2OAbOA79M"))
    // console.log( await window.electronAPI.onDowloadYoutube("https://www.youtube.com/watch?v=Cd67Is0qXNE"))
  }

  return (
    <div className="App">
      <TitleApp/>
      <InputYoutubeLink/>
      <button onClick={onSetMusicFolder}>Set Music Folder</button>
      <hr/>
      <button onClick={onDowloadYoutube}>Dowload video</button>
    </div>
  );
}

export default App;
