import './conceptArea.scss'

const ConceptArea = () => {
    return (
        <section className="concept">
            <h2 className="concept__title">Screenshots</h2>
            {/* <p className="concept__text">For (16+) players who enjoy emergent mechanics and dynamic combat</p> */}
            <div className="concept__picture-grid">
                {Array.from({ length: 25 }).map((_, index) =>  
                <img key={index} className='concept__picture-grid__item' src={`/CleanScreenshots/${index}.png`} alt="yep" width={400} height={200} />)}
            </div>
        </section>
    )
}

export default ConceptArea;