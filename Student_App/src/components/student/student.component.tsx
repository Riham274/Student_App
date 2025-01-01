import { useState } from 'react';
import CoursesList from '../courses-list/courses-list.component';
import './student.css'

interface IProps {
    name : string;
    age  : number;
    isGraduated : boolean;
    CoursesList: string[];
    onAbsentChange : (name :string ,absent : number) => void; 

}

const Student = ( props : IProps) => {
    // let absent =0;
    
    const [absent,setAbsent] = useState<number>(0);

    const addAbsent = () => {
        //absent +=1;
        setAbsent(absent + 1);
        props.onAbsentChange(props.name , +1);
        //setAbsent(oldvalue => oldvalue + 1);
        //setAbsent(oldvalue => oldvalue + 1);
        //setAbsent(oldvalue => oldvalue + 1);
        //console.log(absent);
    }
    const removeAbsent = () => {
        if (absent - 1 >=0 )
           setAbsent(absent - 1);
        props.onAbsentChange( props.name , -1);
    }
    const resetAbsent = () => {
        setAbsent(0);
        props.onAbsentChange(props.name , - absent);
    }
       
    return (
        <div className='std-wrapper'>
            <div className='data-field'>
            <b> Student: </b> {props.name.toUpperCase() +'!'}  
            </div>
            <div className='data-field'>
            <b> Age: </b> {props.age}
            </div>
            <div className='data-field' style={{color : props.isGraduated ? 'green' : 'orange'}}>
                <b>Is graduated: </b>  {props.isGraduated ? 'Yes' : 'No'}
            </div>
            <div className='data-field'>
            <b>Courses List </b>
            <CoursesList list = {props.CoursesList} />
            </div>
            
            <div className='absents'>
                <b>Absents : </b> {absent}
                <button onClick={addAbsent}> + </button> 
                <button onClick={removeAbsent}> - </button> 
                <button onClick={resetAbsent}>Reset</button> 
            </div>
        </div>
    )
}

  export default Student;