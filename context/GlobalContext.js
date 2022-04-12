import { useState, useContext, createContext } from 'react'


export const GlobalContext = createContext();


export const GlobalProvider = ({ children })=>{


    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        password: ""
    })

    const handleChange = (e)=>{
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    return(
        <GlobalContext.Provider value={{
            values,
            setValues,
            handleChange
        }}>
            {children}
        </GlobalContext.Provider>
    )
}