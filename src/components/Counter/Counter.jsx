import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from '../../slices/counterSlice'


const Counter = () => {
    const {counter} = useSelector(state => state)
    const dispatch = useDispatch()

    return (
        <div>
            <h2>Counter</h2>
      <div>

        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{counter.value}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
        onClick={() => dispatch(incrementByAmount(5))}>
          By5
        </button>
      </div>
    </div>
    )
}

export default Counter