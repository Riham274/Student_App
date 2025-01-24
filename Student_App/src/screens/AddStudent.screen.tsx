import { useContext } from "react";
import Addform from "../components/add-form/add_form.component";
import { StateContext } from "../providers/stateProvider";


const AddStudent = () => {
  const { dispatch } = useContext(StateContext);
  
  return (
    <div className="add-screen">
      <h2>Add New Student</h2>
      <Addform className="addForm" onSubmit={newStudent => dispatch({ type: "ADD_STUDENT", payload: newStudent })} />
    </div>
  )
}
export default AddStudent;