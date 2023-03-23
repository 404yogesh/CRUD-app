import { useState, useEffect } from "react"
import axios from "axios"
import {useParams,useNavigate} from "react-router-dom"
// import image from "./image.png"




const View=()=>{
      const [data,setData]=useState([])
      const navigate=useNavigate()
      const {id} = useParams();
      console.log(id)
    //   const navigate= useNavigate();
    async function func(){

        try{
    
         await axios.get(`http://localhost:3333/studentInfo/${id}`).then((idData)=>{

             setData(idData.data)
         })
         
        }catch(error){
            console.log("error",error)
        }
        }
    
                useEffect(()=>{
                    func()
                },[])

    return(
        <>
        <div className="container ">
        <h3 className="text-white  m-3"> <span className="bg-warning p-1 rounded"> View  </span></h3>
        <div className="  viewbg shadow rounded-5 col-8">
          <div className="row">
           
           <img className="col-3 rounded-5 m-2 p-4" src="/images/image.png" alt="" />
            <div className="ms-5 p-2 fs-3 fw-bold col-3">
            <span className="row">Id</span>
            <span className="row">Name</span>
            <span className="row">Class</span>
            <span className="row">last year %</span>
            <span className="row">Contact</span>
            <span className="row">Email</span>
            </div>
            <div className=" p-2 fs-3 fw-bold col-5">
            
                        <span className="row">:&nbsp; {` ${data.id}`}</span>
                        <span className="row">:&nbsp; {` ${data.studentName}`}</span>
                        <span className="row">:&nbsp; {` ${data.class}`}</span>
                        <span className="row">:&nbsp; {`${data.percentage}`}</span>
                        <span className="row">:&nbsp; {` ${data.phone}`}</span>
                        <span className="row">:&nbsp; {` ${data.studentEmail}`}</span>
            </div>
          </div>

            
        </div>
                            <button className="mt-3 border-0 mybutton shadow-sm bg-info  rounded" onClick={()=>navigate(-1)}>&larr;back</button>
        </div>
        </>
    )
}


export default View
/* <table className="text-center shadow fs-5 border border-1 w-50 ">
                    <thead>
                    <tr className="border bg-success text-white">
                        <th className="border p-3">Id</th>
                        <th className="border p-3">Name</th>
                        <th className="border p-3">Email</th>
                        <th className="border p-3">Class</th>
                        <th className="border p-3">Last year %</th>
                        <th className="border p-3">Contact no.</th>
                        <th className="border p-3">Image</th>

                    </tr>
                    </thead>
                    <tbody>
                        <tr className=" fw-bold ">
                            <td className="border p-2">{data.id}</td>
                            <td className="border p-2">{data.studentName}</td>
                            <td className="border p-2">{data.studentEmail}</td>
                            <td className="border p-2">{data.class}</td>
                            <td className="border p-2">{data.percentage}</td>
                            <td className="border p-2">{data.phone}</td>
                            <td className="border p-2">{data.image}</td>
                        </tr>
                    </tbody>


                    </table> */