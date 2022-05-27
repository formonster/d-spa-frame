import React from 'react'
import { RootState } from '@/store'
import { Button } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './index.store'

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="space-x-2 flex items-center">
      <Button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </Button>
      <span>{count}</span>
      <Button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </Button>
    </div>
  )
}
