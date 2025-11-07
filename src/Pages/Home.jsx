import React, { useEffect, useState } from 'react'
import { set, useForm } from 'react-hook-form'
import '../assets/css/home.css'
import { v4 as uuidv4 } from 'uuid';
import Footer from './Footer';
// import SweetAlert2 from 'react-sweetalert2';

const Home = () => {

  const [post,setPost] = useState([])
  const {register,handleSubmit,reset} = useForm()

  useEffect(()=>{
    const PostList = JSON.parse(localStorage.getItem("Post")) || []
    setPost(PostList)
  },[])
  
  function addPost(data){
    const id = uuidv4();
    data.id = id
    console.log(data)
      if(post.length === 0){
        const newData = [data]
        setPost(newData)
        localStorage.setItem("Post",JSON.stringify(newData))
        reset()
      }else{
        const newData = [...post,data]
        setPost(newData)
        localStorage.setItem("Post",JSON.stringify(newData))
        reset()
      }

  }

  function trashPost(id){
    if(confirm("Do You Delete This Post...?")){
      const newData = post.filter((ele)=>{
        return ele.id !== id
      })
      setPost(newData)
      localStorage.setItem("Post",JSON.stringify(newData))
    }

  }
  return (
    <>
    {/* Background */}
    <section className="home"></section>
    {/* Background */}

    <div className='pt-5'>
      <div className='col-lg-8 m-auto mb-5 bg-light rounded-2'>
        <button className='w-100 btn fs-4 text-capitalize' data-bs-toggle="modal" data-bs-target="#staticBackdrop">add new post </button>
      </div>

      <div className="container">
        <div className="row g-4">
          {
            post.map(ele =>
              <div className="col col-sm-5 col-md-4 col-lg-3 mb-3">              
                <div className="card" style={{backgroundImage: `url(${ele.profile})`, height:'500px', backgroundSize: "cover" , backgroundPosition:'center'}}>
                  <button className='btn bg-danger btn-close position-absolute' onClick={()=>{trashPost(ele.id)}} style={{right:'10px',top:"10px"}}></button>
                  <div className='position-absolute bottom-0 px-3 text-center w-100'>
                    <h2 className='text-center w-100 text-light bg-gradient d-block text-capitalize'>{ele.title}</h2>
                    <p className='text-light bg-gradient text-capitalize'>{ele.desc}</p>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>


      {/* Modal */}
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5 text-capitalize" id="staticBackdropLabel">post form</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit(addPost)}>
                <label htmlFor="image" className='form-label text-capitalize'>post image</label>
                <input type="url" {...register("profile")} className='form-control mb-2' placeholder='Enter Post Image/URl' id='image' />
                <label htmlFor="title" className='form-label text-capitalize'>post title</label>
                <input type="text" {...register("title")} className='form-control mb-2' placeholder='Enter Post Title' id='title' />
                <label htmlFor="desc" className='form-label text-capitalize'>post description</label>
                <textarea type="text" {...register("desc")} className='form-control mb-2' placeholder='Enter Post desc' id='desc' />
                <div className="text-end">
                  <button type="submit" className="btn btn-primary text-capitalize" data-bs-dismiss="modal">add</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* End Model */}
    </div>
    <Footer/>
    </>

  )
}

export default Home
