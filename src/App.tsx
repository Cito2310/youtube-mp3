import { InputYoutubeLink } from "./components/InputYoutubeLink";
import { TitleApp } from "./components/TitleApp";

import "./styles/app-styles.scss"

function App() {
  const onClickBasicIpcOn = () => {
    window.electronAPI.basicOnIpc("hello world")
  }

  const onClickBasicIpcHandle = async() => {
    console.log(await window.electronAPI.basicHandleIpc("hello world"))
  }

  return (
    <div className="App">
      <TitleApp/>
      <InputYoutubeLink/>
      <button onClick={onClickBasicIpcOn}>test basic ipc on</button>
      <button onClick={onClickBasicIpcHandle}>test basic ipc handle</button>
    </div>
  );
}

export default App;
