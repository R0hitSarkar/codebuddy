import React, {useState, useEffect, useCallback} from 'react';
import FormItem from './FormItem';
import { useDispatch, useSelector } from 'react-redux';
import { updateAnswer } from './Answers/answerSlice';
import {addUser} from './Answers/answerSlice';
import { decrement, increment } from './PageCount/counterSlice';
import {useNavigate} from "react-router-dom";

export default function Forms(props) {
  const [answers, setAnswers] = useState(() => {return {
    1: {1:'', 2:''},
    2: {3: '', 4: '', 5:''},
    3: {6: '',7: '', 8 : false}
  }});
  let navigate = useNavigate();
  const [validationFlag, setValidationFlag] = useState({1:false, 2:false, 3:false, msg:''});
  const [saveFlag, setSaveFlag] = useState(false);
  const answerList = useSelector((state) => state.answerList.answer)
  const dispatch = useDispatch();

  const validateData = (answers, flag) => {
    let validationFlag = flag;
    const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const passwReg = /^(?=.*[A-Z].*[A-Z])(?=.*[a-z].*[a-z])(?=.*\d.*\d)(?=.*[!@#$%^&*()].*[!@#$%^&*()])[\w!@#$%^&*()]{8,}$/;
    const nameRegex = /^[A-Za-z]{2,50}$/;
    const alphabetRegex = /^[A-Za-z]+$/;
    const mobileNumberRegex = /^\d{10}$/;
    if(props.pageCount == 1){
      if(!emailReg.test(answers[1][1])){
        validationFlag.msg = "email validation fail";
        validationFlag[1] = false;
      }else if(!passwReg.test(answers[1][2])){
        validationFlag.msg ="password validation fail";
        validationFlag[1] = false;
      }else{
        validationFlag.msg ="page 1 validated sucessfully";
        validationFlag[1] = true;
      }

    }else if(props.pageCount == 2){
      if(!nameRegex.test(answers[2][3])){
        validationFlag.msg ="First Name validation fail";
        validationFlag[2] = false;
      }else if((answers[2][4]!='') && !alphabetRegex.test(answers[2][4])){
        validationFlag.msg ="Last Name validation fail";
        validationFlag[2] = false;
      }else if(answers[2][5].length <=9){
        validationFlag.msg ="Address validation fail";
        validationFlag[2] = false;
      }else{
        validationFlag.msg ="page 2 validated sucessfully";
        validationFlag[2] = true;
      }
    }else{
      if(answers[3][6] == ''){
        validationFlag.msg ="country code validation fail";
        validationFlag[3] = false;
      } else if(!mobileNumberRegex.test(answers[3][7])){
        validationFlag.msg ="mobile number validation fail";
        validationFlag[3] = false;
      }else if(answers[3][8] == false){
        validationFlag.msg ="checkbox validation fail";
        validationFlag[3] = false;
      }else{
        validationFlag.msg ="page 3 validated sucessfully";
        validationFlag[3] = true;
      }
    }
    return validationFlag;
  }

  useEffect(() => {
      dispatch(updateAnswer(answers));
    if(props.pageCount == 3 && validationFlag[1] && validationFlag[2] && validationFlag[3]){
      dispatch(addUser(answers));
      navigate("/posts");
    }
  },[saveFlag])

  const handleChange = (id, value) => {
    if(id == '8'){
      setAnswers({...answers, [props.pageCount] : {...answers[props.pageCount], [id]: value=='false' ? true : false}});
    }else{
      setAnswers({...answers, [props.pageCount] : {...answers[props.pageCount], [id]: value}});
    }
  }
  const handleSave = () => {
    let Flag = validateData(answers,validationFlag);
    alert(Flag.msg);
    setValidationFlag({...validationFlag, [props.pageCount]: Flag[props.pageCount], msg: Flag.msg})
    if(validationFlag[props.pageCount] == true){
      setSaveFlag((prevState => {return (!prevState)}));
    }
  }
  const handleBack =() =>{
    dispatch(decrement())
  }
  const handleNext =() => {
    let Flag = validateData(answers,validationFlag);
    alert(Flag.msg);
    setValidationFlag({...validationFlag, [props.pageCount]: Flag[props.pageCount], msg: Flag.msg})
    if(validationFlag[props.pageCount] == true){
      setSaveFlag((prevState => {return (!prevState)}));
      dispatch(increment())
    }
  }
  
  return (
    <>
      <form className='container my-3'>
        {
          props.questions[props.pageCount - 1].items.map(item => <FormItem item={item} key={item.id} handleChange={handleChange} answer={answers[props.pageCount] ? answers[props.pageCount][item.id] : null} />)
        }
      </form>
      <div className="d-grid gap-2 col-6 mx-auto">
        <button className="btn btn-primary" type="button" disabled={props.pageCount == 1} onClick={handleBack}>Back</button>
        <button className="btn btn-primary" type="button" onClick={handleSave}>Save</button>
        <button className="btn btn-primary" type="button" disabled={props.pageCount == 3} onClick={handleNext}>Save and Next</button>
      </div>
    </>
  );
}
