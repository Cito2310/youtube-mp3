import "../styles/input-youtube-link.scss"

export const InputYoutubeLink = () => {
    return (
        <section className="section-input-youtube-link">
            <i className="fa-brands fa-youtube"></i>
            <input 
                type="text"
                placeholder="https://www.youtube.com/watch?v=jNQXAC9IVRw"
            />
            <button>
                <i className="fa-solid fa-arrow-down"></i>
            </button>
        </section>
    )
}