import React from 'react'

const Card = (props) => {
    // console.log(props);
  return (
    <div className='m-4 ml-8 bg-white text-black inline-block p-6 text-center rounded'>
        <img className="h-32 w-32 rounded-full mb-3 " src={props.photo}></img>
      <h1 className='2xl font-semibold mb-4'>{props.username}</h1>
      
      <h2 className='text-blue-700'>{props.profession}</h2>
      <h2 >{props.city},{props.age}</h2>
      <button className='mt-4 bg-emerald-800 text-white px-4 py-2 rounded font-medium '>Add Friend</button>
    </div>
  )
}

export default Card

// import React from 'react'

// const Card = (props) => {
//     console.log(props.user);
//   return (
//     <div>
//       <div>
//         <h1 className='text-3xl'>Username is {props.user} </h1>
//       </div>
//     </div>
//   )
// }

// export default Card
