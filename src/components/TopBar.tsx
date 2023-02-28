import "../styles/section-topbar.scss";

import { IConfig } from '../../types/config';
import { useForm } from '../hooks/useForm';

interface props {
    config: IConfig | {},
    onGetInfoYoutube: (url: string) => void
}

export const TopBar = ({ config, onGetInfoYoutube }: props) => {
    // useForm || url
    const { url, onInputChange } = useForm({ url: "" })

    return (
        <nav className="section-topbar">
            <div className="container-title-config">

                <div className="container-title">
                    <i className="fa-solid fa-circle-down"></i>
                    <h1 className="title-app">Youtube MP3</h1>
                </div>

                <div className="container-btn-config">
                    <i className="fa-solid fa-bars"></i>
                </div>

            </div>

            <div className="container-input-link">
                <input 
                    name="url"
                    onChange={onInputChange}
                    placeholder="https://www.youtube.com/watch?v=jNQXAC9IVRw"
                    type="text"
                    value={url}
                />
                <button onClick={()=>{onGetInfoYoutube(url)}} >
                    <i className="fa-solid fa-arrow-down"></i>
                </button>
            </div>

        </nav>
    )
}