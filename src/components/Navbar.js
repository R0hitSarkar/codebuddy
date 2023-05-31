import React from 'react';
import { setCountValue } from './PageCount/counterSlice';
import { useSelector, useDispatch } from 'react-redux';

export default function Navbar() {
  const count = useSelector((state)=>state.counter.count);
  const dispatch = useDispatch();
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Registration Form</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" onClick={() => {dispatch(setCountValue(1))}}>Form 1</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={() => {dispatch(setCountValue(2))}}>Form 2</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={() => {dispatch(setCountValue(3))}}>Form 3</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}
