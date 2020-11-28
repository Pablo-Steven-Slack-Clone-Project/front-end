import React, { useState, useEffect } from 'react';
import fireApp from '../base.js'

export const ChannelContext = React.createContext()

export const ChannelProvider = ({children}) => {
    const [currentChannel, setCurrentChannel] = useState('messages')

    useEffect( () => {

        setCurrentChannel()

    },[])

    return(
        <ChannelContext.Provider
        value={{currentChannel}}> 
        {children}
        </ChannelContext.Provider>
    )
}