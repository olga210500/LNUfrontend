import Navibar from "../../components/Navibar"
import AboutSection from "./AboutSection"
// import AboutUsHeader from "./AboutUsHeader"
import OurSkills from './OurSkills'
import '../../styles/style.css'
 const About=()=>(
<>
 <Navibar/>

{/* <AboutUsHeader/> */}
<div className='aboutUs'>
<AboutSection/>
<OurSkills/>
</div>


</>
 )
 
 export default About