import React, { useState } from 'react'
import PasswordChecker from './lib/PasswordChecker'

function Input() {
    const [password, setPassword] = useState('')

    const getPassword = (e) =>{
        setPassword(e.target.value)
    }

    const getCheckerData = (data) =>{
        console.log(data)
    }

    return (
        <>
            <div className='w-80'>
                <input onChange={getPassword} className='border w-full'/>
                {/* <PasswordChecker password={password} checkerData={getCheckerData} /> */}
                <PasswordChecker password={password} />
            </div>
        </>
    )
}

export default Input