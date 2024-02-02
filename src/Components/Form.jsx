import React, { useState } from "react";
import AllRouter from "./AllRouter";
import "../Styles/Form.css"
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const Forms =()=>{
    <Navbar/>

    const [formData, setFormData] = useState({
        firstname : "",
        lastname : "",
        email : "",
        phoneNumber : "",
        password: "",
        repeatpassword: ""
    })

    const navigate=useNavigate();

    const [formError, setFormError] = useState({})
    const [fSubmit, setFSubmit] = useState(false)

    const handleInput =(e)=>{
       let {name, value} =  e.target
       setFormData({
        ...formData, 
        [name] : value
       })
    }

    const formSubmit =(e)=>{
        e.preventDefault();
        let errors = validate(formData)
        console.log(errors)
        setFormError(errors);

        let errorKey = Object.keys(errors);
        if(errorKey.length == 0){
            setFSubmit(true)
        }else{
            setFSubmit(false)
        }

        
    }

    const validate =(data)=>{
        let error = {}
        if(data.firstname.trim() == ""){
           error.firstname = "Please enter the firstname"
        }else if (data.firstname.length > 30) {
            error.firstname = "First name should not exceed 30 characters";
        }
        if(data.lastname.trim() == ""){
            error.lastname = "Please enter the lastname"
        }
        
        if(data.email.trim() == ""){
            error.email = "Please enter the email"
        }else if (!data.email.includes('@')) {
            error.email = "Please enter a valid email address";
        }

        if(data.password.trim()==""){
            error.password="Please enter the password"
        }else if (data.password.length < 10) {
            error.password = "Password must be at least 10 characters long";
        } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(data.password)) {
            error.password = "Password must contain at least one special character";
        }

        if(data.repeatpassword.trim()==""){
            error.repeatpassword="Please enter the password again"
        }else if(data.repeatpassword!==data.password){
            error.repeatpassword="Enter the same password again correctly"
        }
        else{
            navigate("/")
        }
        
        return error;
    }
   

   
    return (
        <>
        <h2 id="head">Registration Form</h2>
        <div className="form-parent">
            
            
            <form onSubmit={formSubmit}>

                

                <div className="box1">
                <label htmlFor="firstname">Enter first name</label>
                <input type="text"id="text" name="firstname" placeholder="first name"
                onChange={handleInput}
                style={{ textAlign: "center" }}
                />
                {formError.firstname ? <p>{formError.firstname}</p> : ""}
                </div>

                

               <div className="box2">
               <label htmlFor="lastname">Enter last name</label>
                <input type="text" id="text" name="lastname" placeholder="last name"
                onChange={handleInput}
                style={{ textAlign: "center" }}
                />
                {formError.lastname ? <p>{formError.lastname}</p> : ""}
               </div>

               <div className="box3">
               <label htmlFor="email">Enter email</label>
                <input type="email" id="text"  name="email" placeholder="email"
                onChange={handleInput}
                style={{ textAlign: "center" }}
                />
                {formError.email ? <p>{formError.email}</p> : ""}

               </div>


               <div className="box5">
               <label htmlFor="password">Enter password</label>
                <input type="text" id="text" name="password" placeholder="password"
                onChange={handleInput}
                style={{ textAlign: "center" }}
                />
                {formError.password ? <p>{formError.password}</p> : ""}
               </div>

               <div className="box5">
               <label htmlFor="repeatpassword">Enter password again</label>
                <input type="text" id="text" name="repeatpassword" placeholder="repeatpassword"
                onChange={handleInput}
                style={{ textAlign: "center" }}
                />
                {formError.repeatpassword ? <p>{formError.repeatpassword}</p> : ""}
               </div>

                

                <input type="submit" id="text1" value={"Sumbit"} />
            </form>
        </div>

        </>
    )
}

export default Forms;