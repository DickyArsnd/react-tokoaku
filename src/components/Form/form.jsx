import React from "react";
import './form.css'

const Form = ({children}) => {
    return (
        <div className="form-login">
      <div className="form ">
        <img src="../assets/img/float.png" alt="" className="img"/>
        <form action="" className="border">
        <h3>Tokoku</h3>
        <div className="wrapper">
          <div className="input-data">
            <input type="text" required/>
            <label>Username</label>
          </div>
        </div>

        <div className="wrapper">
          <div className="input-data">
            <input type="text" required/>
            <label>Password</label>
          </div>
        </div>
         <button className="bg-sky-300 px-[90px] py-[5px] text-white">Masuk</button> <br /> <br />
         <p>Lupa Password?</p> <br /> <br />
        
      </form>
        <div className="daftar">
          <h2>Belum Punya Akun? <span><a href="#" className="text-sky-300">Daftar</a></span></h2>
        </div>
      </div> 
      </div>
    )
}

export default Form;