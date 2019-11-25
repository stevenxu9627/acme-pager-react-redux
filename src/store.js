import { createStore } from 'redux'

const SET_EMPLOYEES = 'SET_EMPLOYEES'
const SET_TOTAL = 'SET_TOTAL'
const SET_PAGES = 'SET_PAGES'
const DELETE_EMPLOYEES = 'DELETE'


const initialState = {
    employees: [],
    total: 0,
    pages: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_EMPLOYEES': return { ...state, employees: action.employees };
        case 'SET_TOTAL': return { ...state, employees: action.employees };
        case 'SET_PAGES': return { ...state, pages: action.pages };
        case 'DELETE': return { ...state, employees: action.employees };
        default: return state;
    }
};

const store = createStore(reducer);

export {
    store,
    SET_EMPLOYEES,
    SET_PAGES,
    SET_TOTAL,
    DELETE
}