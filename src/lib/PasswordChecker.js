import React, { useState } from 'react'
import { AppContext } from './AppContext'
import PasswordCheckerComponent from './PasswordCheckerComponent'

function PasswordChecker({ password, strengthData }) {

    const [result, setresult] = useState()
    const data = {
        savePasswordCheckerResult : (result) => {
            setresult(result)
        },
        passwordCheckerResult: result
    }


    return (
        <AppContext.Provider value={data}>
            <PasswordCheckerComponent password={password} getData={strengthData} />
        </AppContext.Provider>
    )
}

export default PasswordChecker