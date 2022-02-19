import React from 'react';
import {LOGIN, PASSWORD} from '../../const/Const';

const initialState = {
    login: '',
    password: ''
}

export const authReducer = (state = initialState, action) =>{
    switch (action.type){
        case LOGIN:
            return{...state, login: action.payload};
        case PASSWORD:
            return{...state, password:action.payload};
        default:
            return console.log(state)        
    }
}
