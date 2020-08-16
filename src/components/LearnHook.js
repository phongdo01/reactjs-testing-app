import React, { useState, useEffect } from 'react';
import axios from 'axios'
const ShowAction = (props, key, del) => {
  const k = key
  return (
    <div className='row align-content-start mt-1' key={key}>
      <div className='col-sm-3'></div>
      <div className='col-sm-6 align-content-start'>
        <h4 className='text-left'>{props}</h4>
      </div>
      <div className='col-sm-3 justify-content-end'>
        <button className='btn btn-danger' onClick={() => del(k)} >Delete</button>
      </div>
    </div>
  )
}
let val = ''
const StatelessComponent = () => {
  const [_action, setAction] = useState('')
  const [listAction, setListAction] = useState([])
  const getOnChange = (e) => {
    setAction(e.target.value)
  }
  const setClick = () => {
    setAction(val)
    // if (!_action) {
    //   return
    // }
    const oldAction = [...listAction]
    oldAction.push(_action)
    setListAction(oldAction)
    setAction('')
  }
  const del = (id) => {
    const newList = [...listAction]
    newList.splice(id, 1)
    setListAction(newList)
  };
  useEffect(()=>{
    console.log('ahihi')
    return function() {
      console.log('liu tiu')
    }
  })
  return (
    <div>
      <div className='col-sm-6'>
        <form className=''>
          <div className='row form-group'>
            <label className='col-sm-3'>Todos</label>
            <input className='form-control col-sm-6' name='action' onChange={getOnChange.bind(this)} value={_action} />
            <div className='col-sm-1'></div>
            <input type='button' className='btn btn-success col-sm-2' value='Add' onClick={setClick.bind(this)} />
          </div>
        </form>
      </div>
      <div className='col-sm-6 align-content-start'>
        
        {
          listAction.map((e, id) => ShowAction(e, id, del))
        }
      </div>
    </div>
  );
}

export default StatelessComponent