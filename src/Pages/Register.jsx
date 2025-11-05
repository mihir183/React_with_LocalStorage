import { useEffect, useState } from "react"
import { set, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import '../assets/css/register.css'

const Register = () => {
    const [user,setUser] = useState([])
    const {register,handleSubmit,reset} = useForm()
    const navigate = useNavigate()

    useEffect(()=>{
        const registerList = JSON.parse(localStorage.getItem("Register")) || []
        setUser(registerList)
    },[])

    function addData(data){
        if(data.pass !== data.pass1){
            alert("password is not valid.......!")
            return;
        }

        if(!user || user.length === 0){
            const newData = [data]
            setUser(newData)
            localStorage.setItem("Register",JSON.stringify(newData))
            navigate('/')

        }else{
            const exitUser = user.find(ele => {
                return ele.email == data.email
            })

            if(exitUser){
                alert("User Already Existing.....!")
                return;
            }

            const newData = [...user,data]
            setUser(newData)
            localStorage.setItem("Register",JSON.stringify(newData))
            reset();
            navigate('/');
        }
    }
  return (
    <>
      <form onSubmit={handleSubmit(addData)} className="col-lg-3 my-5 p-5 m-auto rounded-5">
      <h1 className="text-center text-capitalize">Register</h1>
        <label htmlFor="username" className="text-capitalize form-label">username</label>
        <input type="text" {...register("username")} className="form-control mb-3" placeholder="Enter Username" id="username" />
        <label htmlFor="email" className="text-capitalize form-label">email</label>
        <input type="email" {...register("email")} className="form-control mb-3" placeholder="Enter email" id="email" />
        <label htmlFor="pass" className="text-capitalize form-label">password</label>
        <input type="password" {...register("pass")} className="form-control mb-3" placeholder="Enter pass" id="pass" />
        <label htmlFor="pass1" className="text-capitalize form-label">password</label>
        <input type="password" {...register("pass1")} className="form-control mb-3" placeholder="Enter pass" id="pass1" />
        <p className="text-end text-capitalize">have an account <a href="/">login</a></p>
        <button className="btn btn-primary w-100 mb-3">submit</button>
      </form>
    </>
  )
}

export default Register
