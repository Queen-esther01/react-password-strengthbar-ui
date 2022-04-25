import React, { useState } from 'react'
import { AppContext } from './utils/AppContext'
import PasswordCheckerComponent from './PasswordCheckerComponent'

function PasswordChecker({ password, checkerData }) {

    const [result, setresult] = useState()
    const data = {
        savePasswordCheckerResult : (result) => {
            setresult(result)
        },
        passwordCheckerResult: result
    }


    return (
        <AppContext.Provider value={data}>
            <PasswordCheckerComponent password={password} getData={checkerData} />
        </AppContext.Provider>
    )
}

export default PasswordChecker