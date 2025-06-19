import './conceptArea.scss'

const ConceptArea = () => {
    return (
        <section className="concept">
            <h2 className="concept__title">Concept</h2>
            <p className="concept__text">For (16+) players who enjoy emergent mechanics and dynamic combat</p>
            <div className="concept__picture-grid">
<<<<<<< HEAD
                {Array.from({ length: 14 }).map((_, index) =>  
                <img key={index} className='concept__picture-grid__item' src={`/FrameScreenshoot/${index}.png`} alt="yep" width={400} height={200} />)}
=======
                {Array.from({ length: 4 }).map((_, index) => <img className='concept__picture-grid__item' src={`concept${index}.png`} alt="yep" width={400} height={200} />)}
>>>>>>> parent of 6f1bd6b (Ready to merge into main)
            </div>
        </section>
    )
}

export default ConceptArea;