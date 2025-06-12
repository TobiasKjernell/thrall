import './storylineSection.scss'

const StorylineSection = () => {
    return(
        <div className="about__storyline">
            <h2>Storyline</h2>
            <div className="about__storyline-itemsContainer">
               <div className="about__storyline-itemsContainer__items">
                    <p>Your the king in the great empire</p>
                    <p>Unfortunally you are not liked by everyone! </p>
                    <p>One day you are striked by a possession and die.</p>
                    <img src="storyline1.png" alt="" />
               </div>
               <div className="about__storyline-itemsContainer__items">
                    <p>You wake up in a forign land and somehow</p>
                    <p>manage to come back in the shape of a ghost. </p>
                    <p>Seking revenge of those who harmed you. </p>
                    <img src="storyline2.png" alt="" />
               </div>
               <div className="about__storyline-itemsContainer__items">
                    <p>Dive inte the world of Thrall in order to </p>
                    <p>revenge your former enemies. </p>
                    <p>Be aware of what lays in the shadow.</p>
                    <img src="storyline3.png" alt="" />
               </div>
               <div className="about__storyline-itemsContainer__items">
                    <p>Use strategy to win the game and become the</p>
                    <p>king of the shadows and try not to be posessed</p>
                    <p>when leavind the game.</p>
                    <img src="storyline4.png" alt="" />
               </div>
            </div>
        </div>
    )
}

export default StorylineSection