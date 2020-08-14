import React, { useState } from 'react';
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
const StatelessComponent = () => {
  let val
  const [_action, setAction] = useState('')
  const [listAction, setListAction] = useState([])
  const getOnChange = (e) => {
    val = e.target.value
  }
  const setClick = () => {
    setAction(val)
    // if (!_action) {
    //   return
    // }
    const oldAction = [...listAction]
    oldAction.push(val)
    setListAction(oldAction)
    val = '1'
    setAction('')
  }
  const del = (id) => {
    const newList = [...listAction]
    newList.splice(id, 1)
    setListAction(newList)
  };
  console.log('listAction: ', listAction)
  return (
    <div>
      <div className='col-sm-6'>
        <form className=''>
          <div className='row form-group'>
            <label className='col-sm-3'>Todos</label>
            <input className='form-control col-sm-6' name='action' onChange={getOnChange.bind(this)} value={val} />
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