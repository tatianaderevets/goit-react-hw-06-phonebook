import { combineReducers } from "redux";
import { createReducer } from '@reduxjs/toolkit';
import actions from './contacts-actions'

const items = createReducer(
    [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    {
        [actions.addContact]: (state, action) => [...state, action.payload],
        [actions.deleteContac]: (state, action) =>
            state.filter(contact => contact.id !== action.payload),
    }
);

// const items = (state = [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ],
//     { type, payload }
//     ) => {
//     switch (type) {
//         case types.ADD:
//             return [...state, payload];
        
//         case types.DELETE:
//             return state.filter(contact => contact.id !== payload)
            
//     default:
//             return state;
//     }
// }

const filter = createReducer('', {
    [actions.changeFilter]: (_, action) => action.payload,
})

// const filter = (state = '', {type, payload}) => {
//     switch (type) {
//         case 'contacts/changeFilter':
//             return payload;

//         default:
//             return state;

//     }
    
// }


export default combineReducers({
    items,
    filter,
});