
import React from "react"
import './css/SignupPage.css';
import axios from 'axios';
class SignupPage extends React.Component {

    constructor(){
        super()
        this.state = {
            fullName: "",
            email: "",
            password: "",
            mobileNumber: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    handleChange(event){
        const {name, value} = event.target
        this.setState({[name] : value})
    }

    

    onSubmit(event){
        event.preventDefault()
        const registered = {
            fullName : this.state.fullName,
            email : this.state.email,
            mobileNumber : this.state.mobileNumber,
            password : this.state.password
        }

        axios.post('http://localhost:4000/app/signup', registered)
            .then(response => console.log(response.data))


        window.location.href = "/successfulregistration"
    }

    render(){
        return(
    <div className="container">
        <div className="greeting-div">
            <h1>Hello !</h1>
        </div>

        <div className="form-div">
            <form onSubmit = {this.onSubmit}>
                <div className="registertitle">
                    <h1>Sign Up</h1>
                    <hr id="registerhr"/>
                </div>

                <div className="labels-inputs">
                    <div className="input-box">

                        <label>Name</label>
                        <input className="box" type="text" name="fullName" placeholder=" 🤖Enter Full Name" onChange={this.handleChange} value = {this.state.fullName}/>

                    </div>

                    <div className="input-box">
                        <label>Email</label>
                        <input className="box" type="email" name="email" placeholder=" ✉️Enter Email Id" onChange={this.handleChange} value = {this.state.email}/>
                    </div>

                    <div className="input-box">

                        <label>Mobile</label>
                        <input className="box" type="number" name="mobileNumber" placeholder=" 📱Enter Mobile Number" onChange={this.handleChange} value = {this.state.mobileNumber}/>

                    </div>

                    <div className="input-box">
                        <label>Password</label>
                        <input className="box" type="password" name="password" placeholder=" 🔒Enter Password" onChange={this.handleChange} value = {this.state.password}/>
                    </div>
                </div>

                <div className="register-button">
                    <button>Register</button>
                </div>

            </form>
        </div>
    </div>
)
    }
}

export default SignupPage;
