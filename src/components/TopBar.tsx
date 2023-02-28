import "../styles/section-topbar.scss"

export const TopBar = () => {
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
                    type="text"
                    placeholder="https://www.youtube.com/watch?v=jNQXAC9IVRw"
                />
                <button>
                    <i className="fa-solid fa-arrow-down"></i>
                </button>
            </div>

        </nav>
    )
}