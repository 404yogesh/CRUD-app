import React, { useState } from 'react'
import axios from "axios";
import "./AddNew.css"
import { useNavigate } from 'react-router-dom';

export default function AddNew(props) {
    const[getData,setData]=useState({
        studentEmail:"",
        studentName:"",
        class:"",
        percentage:"",
        phone:""
    })
    // const [image,setImage]=useState("")
    const navigate=useNavigate()

    
    function imageUpload(e){
        //  setImage(e.target.files[0])
        console.log(e.target)
    }
    function myfunction(e){

        // console.log(e.target.value)
        setData({
            ...getData,
            // image:e.target.files[0],
            [e.target.name]:e.target.value

        })

        console.log(getData)

    }

    async function onSubmit(e){

      e.preventDefault()
      if(getData.studentEmail && getData.studentName){
      try{
        const postData = await axios.post("http://localhost:3333/studentInfo",getData)
        //  await axios.post("http://localhost:3333/studentInfo",image)
        console.log("postData : ",postData)
        props.Alertfunc("added","success")
        setData({
          studentEmail:"",
          studentName:"",
          class:"",
          percentage:"",
          phone:""
        })
        // setImage("")
        navigate("/list")
        


    }catch{
      console.log("error")
    }}
    else{
      alert("fill the fields")
    }
  }

  return (
      <>
      <div className=" col-8">
      <h3 className="text-white m-3"> <span className="bg-warning p-1 rounded"> CURD </span><span className='text-dark ms-1'>  - react js Project </span></h3>
      <div className="border shadow-sm rounded p-3 bg-light col-7  ">

    <div className='row container'>
   <label className='fw-bold col-md-3'>Enter Name:</label>
    <input className='ms-2 col' value={getData.studentName} name="studentName" onChange={myfunction} type="text" placeholder='eg: yogesh' />
    </div>
    
    <div className='row mt-3 container'>
    <label className='fw-bold col-md-3'>Enter Email:</label>
    <input className='ms-2 col' value={getData.studentEmail} name="studentEmail" onChange={myfunction} type="text" placeholder='eg: xyz@gmail.com' />
    </div>
    <div className='row mt-3 container'>
    <label className='fw-bold col-md-3'>Enter Class:</label>
    <input className='ms-2 col' value={getData.class} name="class" onChange={myfunction} type="number" placeholder='eg: 1,2,3....,12' />
    </div>
    <div className='row mt-3 container'>
    <label className='fw-bold col-md-3'>Last year %:</label>
    <input className='ms-2 col' value={getData.percentage} name="percentage" onChange={myfunction} type="text" placeholder='eg: 99%' />
    </div>
    <div className='row mt-3 container'>
    <label className='fw-bold col-md-3'>Phone:</label>
    <input className='ms-2 col' value={getData.phone} name="phone" onChange={myfunction} type="number" placeholder='eg: 9811100000' />
    </div>
    <div className='row mt-3 container'>
    <label className='fw-bold col-md-3'>Image:</label>
    <input className=' col' value={getData.image} onChange={imageUpload} type="file"  />
    </div>
    <button className='  mt-3  margin-10 border green mybutton  rounded' onClick={(e)=>onSubmit(e)} >submit</button>
    </div>
    <button className="mt-5 ms-5 border shadow-sm bg-info mybutton rounded" onClick={()=>navigate(-1)}>&larr;back</button>
    </div>
    </>
  )
}
