// import React, {useState} from 'react';

/**
 * @Important
 * -@EventHandler as arrow functions
 * 
 * -@InittallStates as object, functions
 * 
 * -@RenderMechanism
 * -Mout -> run functions in useState -> render -> update DOM -> Update -> render ->update DOM
 * @returns 
 */

// function App() {
//   const [like, setLike] = useState(1);
//   const [blog, setBlog] = useState({
//     content:"xin chao",
//     count:0,
//   })
//   const handlerClick =()=>{
//     setLike(1 -like)
//     setBlog({...blog,count: blog.count+1})
//   }
//   return (
//     <div>
//       <p>{blog.content}</p>
//       <h1 onClick={handlerClick} >{like === 1 ?'👍':"👎"} {blog.count}</h1>
//     </div>
//   )
// }

// export default App
import React, { useState } from 'react'
import "./App.css"

function App() {
  const [count ,setCount] = useState(0)
  let color =(count > 0)? 'green': (count < 0) ?"red" : "black";
  // if (count > 0) {
  //   color = "green";
  // }
  // if (count < 0) {
  //   color = "red";
  // }
  // if (count === 0) {
  //   color =
  
  const increament =()=>setCount(count +1)
  const decreament =()=>setCount(count-1)
  const reset=()=>setCount(0)
  return (
    <div>
      <h1>Demo Counter</h1>
      <div className="container">
        <h1>Counter</h1>
        <span style={{color}} id="value">{count}</span>
        <div className="btn-group">
          <button onClick={decreament} className="btn btn-giam">GIAMXUONG</button>
          <button onClick={reset} className="btn btn-dlai">DATLAI</button>
          <button onClick={increament} className="btn btn-tang">TANGLEN +1</button>
        </div>
      </div>
    </div>
  )
}

export default App

