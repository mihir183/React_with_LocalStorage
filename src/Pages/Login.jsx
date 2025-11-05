import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import '../assets/css/login.module.css'

const Login = () => {
    const navigate = useNavigate()
    const [user,setUser] = useState();
    const {register,handleSubmit,reset} = useForm();

    useEffect(()=>{
        const registerList = JSON.parse(localStorage.getItem("Register")) || [];
        setUser(registerList);
    },[])

    function checkUser(data){
        console.log(data)
        if(user && user.length > 0){
            user.find(ele=>{
                console.log(ele.email,data.email)
                if(ele.email == data.username && ele.pass == data.pass){
                    navigate('/home')
                }else{
                    alert("Username or Password not Valid....!")
                }
            })
        }
        else{
            alert("Username not Found.....!")
        }
    }
  return (
    <>
      <form onSubmit={handleSubmit(checkUser)} className="col-lg-3 my-5 p-5 m-auto rounded-5">
        <h1 className="text-center text-capitalize">login</h1>
        <label htmlFor="username" className="text-capitalize form-label">username</label>
        <input type="text" {...register("username")} className="form-control mb-3" placeholder="Enter Username" id="username" autoFocus />
        <label htmlFor="pass" className="text-capitalize form-label">password</label>
        <input type="password" {...register("pass")} className="form-control mb-3" placeholder="Enter pass" id="pass" />
        <p className="text-end text-capitalize">don't have account <a href='/register' >register</a> </p>
        <button className="btn btn-primary w-100 mb-3">submit</button>
      </form>
    </>
  )
}

export default Login
