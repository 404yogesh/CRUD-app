import axios from "axios"
import { useEffect, useState } from "react"
import {Link, useNavigate} from "react-router-dom"


const List=(props)=>{
    const [data, setData]= useState([])
    // const [isloding, setLoding]= useState(true)
    const navigate=useNavigate()
    
   
    const func=async()=>{
        //  setLoding(true)
    await axios.get("http://localhost:3333/studentInfo")
        .then((apiData)=>{
                setData(apiData.data)
        })
        // setLoding(false)

    }
    const handleDelete =async(deleteItem)=>{
        await axios.delete(`http://localhost:3333/studentInfo/${deleteItem}`)
        .then(()=>{
                func()
        })
          props.Alertfunc("deleted","success")
          
    }
    const handleEdit =()=>{
        // console.log("hgello")
    }

        useEffect(()=>{
                func()  
        },[])
    
    return(
            <>
            
            <div className="container ">
              <h3 className="text-white m-3"> <span className="bg-warning p-1 rounded shadow-lg"> Students</span><span className='text-dark ms-1'>  - record Table  </span> <span className="ms-5 "><button className=" ms-5 border shadow bg-info mybutton rounded" onClick={()=>navigate(-1)}>&larr;back</button></span></h3>
              
                       <div className="container col-12"> <table className=" shadow text-center fs-5 ">
                            <thead>
                            <tr className=" bg-dark text-white">
                                <th className="border border-bottom-0  border-white p-3">Id</th>
                                <th className="border border-bottom-0  border-white p-3">Name</th>
                                <th className="border  border-bottom-0 border-white p-3">Email</th>
                                <th className="border border-bottom-0  border-white p-3" colSpan={3}>Operations</th>
                                
                                
                            </tr>
                            </thead>

                            <tbody>
                              { data.map((RowData)=>{
                                    return <tr  className="" key={RowData.id}>
                                    <td  className="border border-dark   p-2 pink myfont" >{RowData.id}</td>
                                    <td className="border border-dark p-2 lightgreen myfont ">{RowData.studentName}</td>
                                    <td className="border border-dark p-2">{RowData.studentEmail}</td>

                                    <td className="border border-dark "><button className="p-1 border-0 bg-white rounded" ><Link className=" text-decoration-none"to={`/view/${RowData.id}`}>View</Link></button></td>
                                    <td className="border border-dark "><button className="p-1 border-0 bg-white  rounded" onClick={()=>handleEdit(RowData.id)}><Link className=" text-success text-decoration-none"to={`/edit/${RowData.id}`}>Edit</Link></button></td>
                                    <td className="border  border-dark"><button className="p-1 border-0 bg-white text-danger rounded" onClick={()=>handleDelete(RowData.id)}>Delete</button></td>
                                </tr>
                                    
                          
                                })
                            }
                            </tbody>
                        </table>
                        </div>
                        
                        </div>
                        </>
        )
}

export default List