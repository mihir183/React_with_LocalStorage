import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

const Home = () => {

  const [post,setPost] = useState([])
  const {register,handleSubmit,reset} = useForm()

  useEffect(()=>{
    const PostList = JSON.parse(localStorage.getItem("Post")) || []
    setPost(PostList)
  },[])

  function addPost(data){
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
  return (
    <>
      <div className='col-lg-8 m-auto my-5 bg-light rounded-2'>
        <button className='w-100 btn fs-4 text-capitalize' data-bs-toggle="modal" data-bs-target="#staticBackdrop">add new post </button>
      </div>

      <div className="container">
        <div className="row">
          {
            post.map(ele =>
              <div className="col-lg-4">              
                <div className="card p-5" style={{backgroundImage: `url(${ele.profile})`, height:'500px', backgroundSize: "cover" , backgroundPosition:'center'}}>
                  <div className="row w-100 p-5">
                    <div className="col text-center justify-content-end rounded-5">
                      <h1 className='text-light '>{ele.title}</h1>
                    </div>
                  </div>
                  <div className="row w-100 h-50 ">
                    <div className="col bg-light h-50 text-center align-content-center rounded-5">
                      <p>{ele.desc}</p>
                    </div>
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
                  <button type="submit" className="btn btn-primary text-capitalize">add</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
