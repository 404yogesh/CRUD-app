import React, {useState, useEffect} from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import axios from "axios"


function Edit(props) {
    const navigate=useNavigate()
    const {id}=useParams()
    console.log("id :",id)
    const [data,setData]=useState({
        studentEmail:"",
        studentName:"",
        class:"",
        percentage:"",
        phone:""
    })

    function imageUpload(e){
        //  setImage(e.target.files[0])
        console.log(e.target)
    }
    const handleonChange=async(e)=>{
        setData({
            ...data,
            [e.target.name]:e.target.value
        })
        console.log(data)
    }

    const passData=async(e)=>{
        
        try{
            e.preventDefault()
        await axios.put(`http://localhost:3333/studentInfo/${id}`,data)
        props.Alertfunc("updated","success")
        setData({
            studentEmail:"",
            studentName:"",
            class:"",
            percentage:"",
            phone:""
        })
        console.log(data)
    }catch(error){
        console.log("error",error)
    }
    }

    useEffect(()=>{
        const fetchingIdData=async()=>{
            console.log("hello")
            // try{
         const detail=await axios.get(`http://localhost:3333/studentInfo/${id}`)
         console.log(detail.data)   
         setData(detail.data)
         
        // }catch(error){
        //     console.log("error")
        // }
    }
        fetchingIdData()
    },[id])

  return (
    <>
    <div className="col-8">
    <h3 className="text-white m-3"> <span className="bg-warning p-2 rounded"> Edit</span><span className='text-dark ms-1'>  - your entry  </span></h3>
<div className="border shadow-sm rounded p-3 col-md-7 ">
<div className='row container'>
   <label className='fw-bold col-md-3'>Enter Name:</label>
    <input className='ms-2 col' value={data.studentName} name="studentName" onChange={handleonChange} type="text" placeholder='eg: yogesh' />
    </div>
    
    <div className='row mt-3 container'>
    <label className='fw-bold col-md-3'>Enter Email:</label>
    <input className='ms-2 col' value={data.studentEmail} name="studentEmail" onChange={handleonChange} type="text" placeholder='eg: xyz@gmail.com' />
    </div>
    <div className='row mt-3 container'>
    <label className='fw-bold col-md-3'>Enter Class:</label>
    <input className='ms-2 col' value={data.class} name="class" onChange={handleonChange} type="number" placeholder='eg: 1,2,3....,12' />
    </div>
    <div className='row mt-3 container'>
    <label className='fw-bold col-md-3'>Last year %:</label>
    <input className='ms-2 col' value={data.percentage} name="percentage" onChange={handleonChange} type="text" placeholder='eg: 99%' />
    </div>
    <div className='row mt-3 container'>
    <label className='fw-bold col-md-3'>Phone:</label>
    <input className='ms-2 col' value={data.phone} name="phone" onChange={handleonChange} type="number" placeholder='eg: 9811100000' />
    </div>
  
    <div className='row mt-3 container'>
    <label className='fw-bold col-md-3'>Image:</label>
    <input className=' col' value={data.image} onChange={imageUpload} type="file"  />
    </div>

        <button className=' mt-3  margin-10 border rounded mybutton green' onClick={(e)=>passData(e)}>submit</button>
      
      </div>
      <button className="mt-5 ms-5 border shadow-sm bg-info mybutton rounded " onClick={()=>navigate(-1)}>&larr;back</button>
      </div>
    </>
  )
}

export default Edit
