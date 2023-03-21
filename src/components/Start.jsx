import React, { useRef } from 'react'

const Start = ({setUsername}) => {
    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.value === "" ? alert("please enter your name") :
        setUsername(inputRef.current.value)
    }

  return (
    <div className='start'>
        <h1>Welcome to KBC</h1>
        <input placeholder='Enter Your Name' className='startInput' ref={inputRef}/>
        <button className='startButton' onClick={handleClick}>Start</button>
    </div>
  )
}

export default Start
