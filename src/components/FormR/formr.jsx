import React from "react";

const Form = ({children}) => {
    return (
        <div className="form-login">
      <div className="form ">
        <img src="../assets/img/loving.png" alt="" className="img"/>
        <form action="" className="border shadow-2xl h-96">
        <h3 className="text-2xl">Tokoku</h3>
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
         <button className="bg-sky-300 px-[90px] py-[5px] text-white shadow-md mt-10">Daftar</button> <br /> <br />
        
      </form>
        <div className="daftar shadow-2xl">
          <h2>Sudah Punya Akun? <span><a href="/login" className="text-sky-300">Login</a></span></h2>
        </div>
      </div> 
      </div>
    )
}

export default Form;