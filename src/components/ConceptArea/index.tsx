import './conceptArea.scss'

const ConceptArea = () => {
    return (
        <section className="concept">
            <img src="bloodhand.png" className='bloodhand' alt="" />
            <h2 className="concept__title">Concept</h2>
            <p className="concept__text">For (16+) players who enjoy emergent mechanics and dynamic combat</p>
            <div className="concept__picture-grid">
                {Array.from({ length: 4 }).map((_, index) => <img className='concept__picture-grid__item' src={`concept${index}.png`} alt="yep" width={400} height={200} />)}
            </div>
        </section>
    )
}

export default ConceptArea;