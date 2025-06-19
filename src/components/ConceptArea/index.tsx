import './conceptArea.scss'

const ConceptArea = () => {
    return (
        <section className="concept">
            <h2 className="concept__title">Screenshots</h2>
            <div className="concept__picture-grid">
                {Array.from({ length: 14 }).map((_, index) => <img key={index} className='concept__picture-grid__item' src={`/FrameScreenshoot/${index}.png`} alt="yep" width={400} height={200} />)}
            </div>
        </section>
    )
}

export default ConceptArea;