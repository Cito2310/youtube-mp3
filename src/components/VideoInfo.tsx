import { IInfoYoutube } from '../../types/infoYoutube';

import "../styles/section-video-info.scss"

interface props {
    info: IInfoYoutube
}

export const VideoInfo = ({ info }: props) => {
    return (
        <section className='section-video'>
            <div className='container-video-info'>

                <img src={info.thumbnails} />

                <div className='container-info flex-column'>
                        <h2>{info.title}</h2>
                        <h3>{info.author}</h3>
                        <br/>
                        <p><b>Tamaño:</b> {info.bytes}</p>
                        <p><b>Duracion:</b> {info.lengthSeconds}</p>
                        <p><b>Fecha de publicacion:</b> {info.uploadDate}</p>
                </div>

            </div>

            <button className='btn-download'>
                Descargar {"\n"}
                <i className="fa-solid fa-arrow-down"/>
            </button>

        </section>
    )
}