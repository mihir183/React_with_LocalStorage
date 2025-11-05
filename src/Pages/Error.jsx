import error from '../assets/images/Error.png'

const Error = () => {
  return (
    <>
        <div style={{height:'100vh'}}>
            <img src={error} alt="" className='w-100 h-100 object-fit-contain' />
        </div>
    </>
  )
}

export default Error