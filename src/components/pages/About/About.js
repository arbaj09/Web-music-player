
import './About.css'
import { Link } from 'react-router-dom'


const About =()=>{
    return <>
    <div className="about">
        <div className='About-main'>
            <h1>Touching Heaven on Frequency</h1>
        
        </div>
        <div className='btn-container'>
        <Link to='/'><button>Back Home</button></Link>

    </div>

    </div>
   
    
    </>
}
export default About