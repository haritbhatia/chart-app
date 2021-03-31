import React, { useState } from "react";


export const context = React.createContext()

const Provider = (props) => {
    const resetQueries = () => {
        setFromDate("")
        setToDate("")
    };
    const [authToken, setAuthToken] = useState("");
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [fromMinDate, setFromMinDate] = useState("");
    const [toMinDate, setToMinDate] = useState("");

    return (
        <context.Provider value={{
            authToken,
            setAuthToken,
            toDate,
            setFromDate,
            fromDate,
            setToDate,
            resetQueries,
            fromMinDate,
            setFromMinDate,
            toMinDate,
            setToMinDate
        }}>
            {props.children}
        </context.Provider>
    )
}

export default Provider;