import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

export default function Todo() {
    const todos = useSelector(state => state.todos)
  return (
    <h1>heloo</h1>
  );
}
