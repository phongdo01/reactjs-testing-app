import React from 'react';
import context from '../Context'
import userContext from '../UserContext'
import Fourth from './Fourth';

export default () => (
    <context.Provider value={{ name: 'phong' }}>
        <userContext.Provider value={{username: 'liutiu', addres: 'BG'}}>
            <Fourth />
        </userContext.Provider>
    </context.Provider>
);