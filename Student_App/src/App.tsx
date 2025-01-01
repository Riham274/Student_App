
import { useState } from 'react';
import './App.css'
import Student from './components/student/student.component'
import { IStudent } from './components/types';
import Addform from './components/add-form/add_form.component';



const COURSES_LIST : string [] = ['react' , 'html' , 'css'];
const INITIAL_LIST : Array<IStudent> = [
  {
    id : "2401" ,
    name : "ahmed" ,
     age : 50 ,
     isGraduated : true ,
     CoursesList : ['math' , 'english'] ,

  } ,
  {
    id : "2402" ,
    name : "mohammad" ,
     age : 5 ,
     isGraduated : true ,
    CoursesList : ['web','science','html','science','react'] ,
  } ,
  { 
    id : "2403",
    name : "mahmoud" , 
    age : 76 ,
    isGraduated : false , 
    CoursesList : COURSES_LIST ,
  } ,
  { 
    id : "2404" ,
    name : "ali" ,
    age : 12 ,
    isGraduated : true ,
    CoursesList : COURSES_LIST ,
  } ,
  { 
    id :"2405",
    name : "omer" ,
    age : 20,
    isGraduated : false,
    CoursesList : COURSES_LIST , 

  }

] ; 

function App() {
  const [studentsList , setStudentsList] = useState<IStudent[]>(INITIAL_LIST);
  const [totalAbsents ,setTotalAbsents] = useState(0) ;
  
  const removeLast = () => {
    const newList =[...studentsList];
    newList.shift();
    setStudentsList(newList);
  }

  const handleAbsentChange =( name : string , change : number) => {
       console.log("change");
       console.log(` ${name} : ${change} ` )
       
       setTotalAbsents(totalAbsents + change)

  }
  const handleAddStudent = (newStudent : IStudent) => {
    console.log(newStudent)
    setStudentsList([newStudent , ...studentsList])

  }

  return (
   
  <div className='main wrapper'>
     <h1 style = {{color : '#69247C' , fontSize : '24px' }}>Welcome to GSG React\next.js </h1>
     <Addform className="addForm" onSubmit={handleAddStudent}/>
    <div className='stats'>
     <button onClick={removeLast}>Remove First Student </button>
     <b style={{fontSize : '12px' , fontWeight : 100 , color : 'gray'}}>Total Absents : </b> {totalAbsents} 
    </div>
    {
      studentsList.map(student => (
        <Student 
         key={student.id}
         name = {student.name} 
         age = {student.age}
         isGraduated ={student.isGraduated}
         CoursesList = {student.CoursesList}
         // this is the event (الاب بحكي مع الابن)
         onAbsentChange = {handleAbsentChange} // ممكن اكتب الفنكشن جوا هاي مباشرة
         
         />
      ))
    }
   
   </div>
  
  )
}

export default App
