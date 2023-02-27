import { InputYoutubeLink } from "./components/InputYoutubeLink";
import { TitleApp } from "./components/TitleApp";

import "./styles/app-styles.scss"

function App() {
  const onSetMusicFolder = async() => {
    console.log( await window.electronAPI.onSetMusicFolder())
  }

  return (
    <div className="App">
      <TitleApp/>
      <InputYoutubeLink/>
      <button onClick={onSetMusicFolder}>Hola 231023</button>
    </div>
  );
}

export default App;
