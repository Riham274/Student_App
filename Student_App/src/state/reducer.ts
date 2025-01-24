import { IStudent } from "../components/types";


export type State = {
  studentsList: IStudent[];
  totalAbsents: number;
};


export type Action =
  | { type: "INIT"; payload: IStudent[] }
  | { type: "ADD_STUDENT"; payload: IStudent }
  | { type: "REMOVE_FIRST" }
  | { type: "UPDATE_ABSENTS"; payload: { id: string; change: number } };


export const stateReducer = (state: State, action: Action): State => {

  switch (action.type) {
    case "INIT": {
      const totalAbsents: number = action.payload.reduce(
        (prev, cur) => prev + cur.absents, 0);
      return { studentsList: action.payload, totalAbsents };
    }

    case "ADD_STUDENT":
      return {
        ...state,
        studentsList: [action.payload, ...state.studentsList],
      };

    case "REMOVE_FIRST":
      return {
        ...state,
        studentsList: state.studentsList.slice(1),
      };

    case "UPDATE_ABSENTS":
      return {
        studentsList: state.studentsList.map((student) =>
          student.id === action.payload.id
            ? { ...student, absents: student.absents + action.payload.change }
            : student
        ),
        totalAbsents: state.totalAbsents + action.payload.change,
      };

    default:
      return state;
  }

};

/*
import { IStudent } from "../components/types";

interface IState {
  studentsList: IStudent[];
  totalAbsents: number;
}


type Action =
  | { type: 'INITIALIZE'; payload: IStudent[] }
  | { type: 'ADD_STUDENT'; payload: IStudent }
  | { type: 'REMOVE_FIRST' }
  | { type: 'UPDATE_ABSENT'; payload: { id: string; change: number } };


const studentsReducer = (state: IState, action: Action): IState => {
  switch (action.type) {

    case 'INITIALIZE': {
      const totalAbsents = action.payload.reduce((prev, cur) => prev + cur.absents, 0);
      return { studentsList: action.payload, totalAbsents };
    }

    case 'ADD_STUDENT': {
      return {...state, studentsList: [action.payload, ...state.studentsList],};
    }

    case 'REMOVE_FIRST': {
      const newList = [...state.studentsList];
      newList.shift();
      const totalAbsents = newList.reduce((prev, cur) => prev + cur.absents, 0);
      return { studentsList: newList, totalAbsents };
    }

    case 'UPDATE_ABSENT': {
      const { id, change } = action.payload;
      const updatedStudentsList = state.studentsList.map((student) => student.id === id ? { ...student, absents: student.absents + change } : student);
      return {...state, studentsList: updatedStudentsList, totalAbsents: state.totalAbsents + change,};
    }

    default:
      return state;
  }
};

export default studentsReducer;

*/