import React from 'react'

function Alert(props) {
    // const [data, setData]= useState("")

  return (
    <>
    <div style={{height:"50px"}}>
      {props.message &&
        <div className={` fs-2 fw-bold text-center text-white alert bg-${props.message.type} `}>{props.message.mess}</div>
}
</div>
    </>
  )
}

export default Alert
