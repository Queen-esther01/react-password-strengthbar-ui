import React, { useState } from 'react'
import PasswordChecker from './component/PasswordChecker'

function Input() {
    const [password, setPassword] = useState('')

    const getPassword = (e) =>{
        console.log(e.target.value)
        setPassword(e.target.value)
    }

    const getCheckerData = (data) =>{
        //console.log(data)
    }

    return (
        <>
            <div className='w-80'>
                <input onChange={getPassword} className='border w-full'/>
                <PasswordChecker password={password} checkerData={getCheckerData} />
            </div>
        </>
    )
}

export default Input