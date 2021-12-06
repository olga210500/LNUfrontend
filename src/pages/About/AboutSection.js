import '../../styles/style.css'
import image from '../../styles/img/gerb.jpg'
import 'react-bootstrap'
 const AboutSection=()=>{
     
return(
<>
 
  <section className="about">

  <div className="container">

    <div className="row">
      <div className="col-lg-6">
        <img src={image} className="img-fluid" alt="Університет імені Івана Франка"/>
      </div>
      <div className="col-lg-6 pt-4 pt-lg-0">
        <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
        <p className="fst-italic">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
        <p>
          Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>
    </div>

  </div>
</section>
</>)
 }

 
 export default AboutSection