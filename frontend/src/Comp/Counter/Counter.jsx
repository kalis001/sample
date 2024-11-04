import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/Counterslice'

export default function Counter() {
    const selector = useSelector((state)=> state.Count.value)

    const dispatch = useDispatch()

    function plus() {
        dispatch(increment())
    }
    function minus() {
        dispatch(decrement())

    }
    function zero() {
        dispatch(reset())
    }
    return (
        <div>
            <h1>counter {selector}</h1>
            <button onClick={plus}>+</button>
            <button onClick={zero}>reset</button>
            <button onClick={minus}>-</button>
            <div>
                <h1 className='text-'>name</h1>
            </div>
        </div>
    )
}
