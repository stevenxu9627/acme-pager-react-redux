import axios from 'axios'

import store from './store.js'

const fetchData = employees => {
    axios
        .get(`/api/employees/${employees}`)
        .then(response => {
            store.dispatch({ type: 'SET_EMPLOYEES', employees: data.rows })
            // store.dispatch({type: 'SET_TOTAL', total: data.total})
        })
}

const newPages = createPages => {
    store.dispatch({ type: 'SET_PAGES', page: createPages })
}

export { fetchData, newPages };