import React from 'react'
import './counter.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement } from '../Redux/Reducer'


function Counter() {

    const count = useSelector((state)=>state.counter.value)

    const dispatch = useDispatch()

  return (
    <>
      <div className="counter-container">
        <h2 className='title'>React js Redux Example</h2>
        <p className="value"> {count}</p>
        <div className="counter-buttons">
            <button className="counter-btn" onClick={()=>dispatch(increment())}>Increment</button>
            <button className="counter-btn" onClick={()=>dispatch(decrement())}>Decrement</button>
        </div>
      </div>
    </>
  )
}

export default Counter
