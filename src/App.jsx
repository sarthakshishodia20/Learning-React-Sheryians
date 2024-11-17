import React, { useContext } from 'react'
import Header from './components/Header'
import Footer from './components/footer'
import Section from './components/Section'
import { DataContext } from './context/UserContext'

const App = () => {

  const data=useContext(DataContext)
  console.log(data)

  return (
    <div>
      <h1>This is aPP {data}</h1>
      <Header />
      <Section />
      <Footer/>
    </div>
  )
}

export default App


// import React from 'react'
// import { Link, Route, Routes } from 'react-router-dom'
// import About from './pages/About'
// import Product from './pages/Product'
// import Contact from './pages/Contact'
// import Home from './pages/Home'
// import Header from './pages/Header'

// const App = () => {
//   return (
//     <div>
//       <Header/>
//       <Routes>
//         <Route path='/about' element={<About/>}/>
//         <Route path='/contact' element={<Contact/>}/>
//         <Route path='/product' element={<Product/>}/>
//         <Route path='/' element={<Home/>}/>
//       </Routes>
//     </div>
//   )
// }
// export default App










// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// const App = () => {

//   const [data, setData] = useState([])

//   const getData=async()=>{
//     const response=await axios.get('https://picsum.photos/v2/list')
//     setData(response.data)
//     console.log(data)
//   }
//   useEffect(() => {
//     getData()
//   }, [])
  

//   return (
//     <div className="p-10">
//       <button onClick={getData} className="bg-teal-600 text-white font-semibold text-2xl px-6 py-3 rounded active:scale-90">Get Data</button>
//       <div className='p-5 m-4 bg-gray-500 text-white text-lg text-center font-serif'>{data.map(function(elem,idx){
//         return <div key={idx} className='bg-gray-50 text-black flex items-center justify-between w-full px-7 py-6 rounded mb-3'>
//           <img className="h-40" src={elem.download_url}/>
//           <h1>{elem.author}</h1>
//         </div>
//       })}</div>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import Ex from './components/Ex'

// const App = () => {
//   return (
//     <div>
//       <Ex name="Sarthak"/>
//     </div>
//   )
// }

// export default App

// import React from "react";
// import Card from "./components/Card";
// const App = () => {
//   const user="Sarthak"
//   const username="abc"
//   const number=20
//   const users=
//     [
//       {
//         "name": "Shaivya Gupta",
//         "city": "Firozabad",
//         "age": 23,
//         "profile_photo": "https://example.com/profile/tanyagupta.jpg",
//         "profession": "Content Writer"
//       },
//       {
//         "name": "Sarthak Shishodia",
//         "city": "Khurja",
//         "age": 25,
//         "profile_photo": "https://example.com/profile/sarthakshishodia.jpg",
//         "profession": "Software Engineer"
//       },
//       {
//         "name": "Aarav Sharma",
//         "city": "Mumbai",
//         "age": 27,
//         "profile_photo": "https://example.com/profile/aaravsharma.jpg",
//         "profession": "Software Developer"
//       },
//       {
//         "name": "Priya Gupta",
//         "city": "Delhi",
//         "age": 24,
//         "profile_photo": "https://example.com/profile/priyagupta.jpg",
//         "profession": "Marketing Analyst"
//       },
//       {
//         "name": "Rohan Verma",
//         "city": "Bangalore",
//         "age": 30,
//         "profile_photo": "https://example.com/profile/rohanverma.jpg",
//         "profession": "Product Manager"
//       }
//     ]
//     users.forEach(function(elem){
//       console.log("Hello",elem)
//     })

//   return (

//     <>
//     <div className="p-10">
//       {users.map(function(elem,idx){
//         return <Card key={idx}  username={elem.name} age={elem.age} city={elem.city} profession={elem.profession} photo={elem.profile_photo}/>
//       })}
//     </div>
//     </>
//   );
// };

// export default App;

// fragements are empty TAGS

// import React, { useState } from 'react'

// const App = () => {

//   const [username,Setusername] = useState('')
//   const SubmitHandler=(e)=>{
//     e.preventDefault()
//     console.log(username)
//     Setusername('')
//   }
//   return (
//     <div>
//       <form onSubmit={(e)=>{
//         SubmitHandler(e)
//       }}>
//         <input value={username} onChange={(e)=>{
//           Setusername(e.target.value)
//         }} className='px-4 rounded py-3 text-xl m-5' type="text" placeholder='Enter Your name'/>
//         <button className='px-4 py-3 m-5 text-xl font-semibold bg-emerald-50 rounded'>Submit</button>
//       </form>
//     </div>
//   )
// }

// export default App

// import React fr<form>om 'react'

// const App = () => {
//   return (
//     <div>
//       <h2 className="text-5xl bg-green-600 text-black">Hello Guyz</h2>
//       <h1>Hello Shreyaians</h1>
//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react'

// const App = () => {
//   const [num, setnum] = useState(0)
//   return (

//     <div>
//       <h2>Number is {num}</h2>
//       <button onClick={() => setnum(num + 1)}>Increment</button>
//       <br></br>
//       <br></br>
//       <button onClick={()=>setnum(num-1)}>decrement</button>

//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react'

// const App = () => {
//   // a-> readable
//   // A-> writable
//   const [a, setA] = useState(10)

//   const changeA=()=>{
//     console.log("Chal GYA");
//     setA(20)
//   }
//   return (
//     <div>
//       <h1>Value of a is {a}</h1>
//       <button onClick={changeA}>Changed Button</button>
//     </div>
//   )
// }

// export default App

// import React from 'react'

// const App = () => {
//   let user="Shreya"

//   const changeUser=()=>{
//     console.log(user);
//     user="Sarthak"
//     console.log(user);
//   }
//   return (
//     <div>
//       <h1>Username is {user}</h1>
//       <button onClick={changeUser}>Button</button>
//     </div>
//   )
// }

// export default App
