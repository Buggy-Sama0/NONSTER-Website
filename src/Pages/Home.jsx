
import './Home.css'

import Shoe1 from '../Components/assets/home(shoe1).jpg'
import Shoe2 from '../Components/assets/home(shoe2).jpg'

function Home() {
    return (
        <div className="home">
            <div className="home-section1">
                <h2>MEN'S SHOES COLLECTION</h2>
                <p>Our biggest sale! 50% OFF all summer shoes</p>
                <button>Shop Collection</button>
            </div>

            <div className='home-section2'>
                <h1>NONSTER is a footwear brand dedicated to providing stylish, 
                        high-quality shoes that blend comfort and 
                    contemporary design for every occasion.</h1>
                    
                <img src={Shoe1}/>
                <img src={Shoe2}/>



            </div>
                  
        </div>
    )
}

export default Home