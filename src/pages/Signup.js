import React ,{Component} from 'react';
import Navibar2 from '../components/Navibar2';
import '../styles/style.css'
import {connect} from 'react-redux'
import {signUserUp} from '../actions/userActions'


class Signup extends Component {
    state = {
        name:'',
        surname:'',
        email:'',
        password:'',
        confirmPassword:""
    }

    handleOnChange = (e) => {
        e.persist();
        this.setState(() => ({
            [e.target.name]: e.target.value 
        }))
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.signUserUp(this.state)
    }

    render(){
      return(
                
            <>
            
            <Navibar2/>
            <section class="contact" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">
                <div className='containerSignup'> 
                <div className="col-lg-6">
                     
                            <form  class="php-email-form" onSubmit={this.onSubmit}>
                            <h2> Register</h2>
                                
                                    <div className="row-md-2 form-group mb-3">
                                        <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required 
                                        value={this.state.name}
                                        onChange={this.handleOnChange}
                                        />
                                    </div>
                                    <div class="row-md-2 form-group mb-3">
                                        <input type="text" name="surname" class="form-control" id="surname" placeholder="Your Name" required
                                        value={this.state.surname}
                                        onChange={this.handleOnChange} />
                                    </div>
                                    <div class="row-md-2 form-group mt-3 mt-md-0 mb-3">
                                        <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required
                                        value={this.state.email}
                                        onChange={this.handleOnChange}/>
                                    </div>

                                    <div class="row-md-2 form-group mt-3 mt-md-0 mb-3">
                                        <input type="password" class="form-control" name="password" id="password" placeholder="Password" required 
                                         value={this.state.password}
                                         onChange={this.handleOnChange}/>
                                    </div>
                                    <div class="row-md-2 form-group mt-3 mt-md-0 mb-3">
                                        <input type="password" class="form-control" name="confirmPassword" id="confirmPassword" placeholder="Confirm password" required 
                                         
                                         value={this.state.confirmPassword}
                                         onChange={this.handleOnChange}/>
                                    </div>
                                
                              
                              
                             
                              
                                <div className="text-center"><button type="submit">Sign up</button></div>
                            </form> 
                            </div>
                        </div>
                        </section>

            </>



      )
    
    
      
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signUserUp: (userInfo) => dispatch(signUserUp(userInfo))
    }
}

export default connect(null, mapDispatchToProps)(Signup)


