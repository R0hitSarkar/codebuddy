import React, { useState } from 'react';

export default function FormItem({item, handleChange, answer}) {
    
    switch(item.type){
        case 'email':
            return (
                <>
                    <div className="mb-3 my-3">
                        <label htmlFor={item.id} className="form-label">{item.label}</label>
                        <input type="email" className="form-control" id={item.id} aria-describedby="emailHelp" onChange={(e)=>handleChange(item.id, e.target.value)} value={answer} />
                    </div>
                </>
            )
            break;
        case 'password':
            return (
                <>
                    <div className="mb-3 my-3">
                        <label htmlFor={item.id} className="form-label">{item.label}</label>
                        <input type="password" className="form-control" id={item.id} onChange={(e)=>handleChange(item.id, e.target.value)} value={answer} />
                    </div>
                </>
            )
            break;
        case 'text':
            return (
                <>
                    <div className="mb-3 my-3">
                        <label htmlFor={item.id} className="form-label">{item.label}</label>
                        <input type="text" className="form-control" id={item.id} onChange={(e)=>handleChange(item.id, e.target.value)} value={answer} />
                    </div>
                </>
            )
            break;
        case 'checkBox':
            return (
                <>
                    <div className="mb-3 form-check my-3">
                        <input type="checkbox" className="form-check-input" id={item.id} onChange={(e)=>handleChange(item.id, e.target.value)} value={answer} checked={answer==true? true: false}/>
                            <label className="form-check-label" htmlFor={item.id}>{item.label}</label>
                    </div>
                </>
            )
            break;
        case 'select':
            return(
                <>
                    <select className="form-select form-select-sm my-3" aria-label=".form-select-sm example" onChange={(e)=>handleChange(item.id, e.target.value)} value={answer} >
                        <option>Select Country Code</option>
                        {item.options.map(option => <option key = {option}>{option}</option>)}
                    </select>
                </>
            )
    }
  return (
    <>
      
    </>
  );
}
