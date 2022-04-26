import { useContext, useEffect } from 'react';
import { AppContext } from './AppContext';
import Check from './checker';
import './App.css';

function PasswordCheckerComponent({ password, getData }) {

    const { savePasswordCheckerResult, passwordCheckerResult } = useContext(AppContext);
    //console.log(passwordCheckerResult)

    useEffect(() => {
        let result = Check(password);
        savePasswordCheckerResult(result)
        getData && getData(result)
    }, [password])

    //console.log(getData)
    

    const emptyPassword = passwordCheckerResult?.state === 'empty' && 'bg-gray'
    const veryWeakPassword = passwordCheckerResult?.errors.length === 4 && 'bg-red'
    const weakPassword = passwordCheckerResult?.errors.length === 3 && 'bg-orange'
    const weakGreyPassword = passwordCheckerResult?.errors.length === 3 && 'bg-gray'
    const fairPassword = passwordCheckerResult?.errors.length === 2 && 'bg-orange'
    const fairGreyPassword = passwordCheckerResult?.errors.length === 2 && 'bg-gray'
    const strongPassword = passwordCheckerResult?.errors.length === 1 && passwordCheckerResult.state !== 'empty' && 'bg-green'
    const strongGreyPassword = passwordCheckerResult?.errors.length === 1 && passwordCheckerResult.state !== 'empty' && 'bg-gray'
    const veryStrongPassword = passwordCheckerResult?.errors.length === 0 && passwordCheckerResult.state !== 'empty' && 'bg-green'
    // const veryStrongPassword = passwordCheckerResult?.errors.length === 1 && 'bg-blue-500'


    const emptyPasswordTextColor = passwordCheckerResult?.state === 'empty' && 'text-gray'
    const emptyPasswordText = passwordCheckerResult?.state === 'empty' && 'Password is empty'
    const veryWeakPasswordTextColor = passwordCheckerResult?.errors.length === 4 && 'text-red'
    const veryWeakPasswordText = passwordCheckerResult?.errors.length === 4 && 'Password is very weak'
    const weakPasswordTextColor = passwordCheckerResult?.errors.length === 3 && 'text-orange'
    const weakPasswordText = passwordCheckerResult?.errors.length === 3 && 'Password is weak'
    const fairPasswordTextColor = passwordCheckerResult?.errors.length === 2 && 'text-orange'
    const fairPasswordText = passwordCheckerResult?.errors.length === 2 && 'Password is fair'
    const strongPasswordTextColor = passwordCheckerResult?.errors.length === 1 && passwordCheckerResult.state !== 'empty' && 'text-green'
    const strongPasswordText = passwordCheckerResult?.errors.length === 1 &&  passwordCheckerResult.state !== 'empty' && 'Password is strong'
    const veryStrongPasswordTextColor = passwordCheckerResult?.errors.length === 0 && passwordCheckerResult.state !== 'empty' && 'text-green'
    const veryStrongPasswordText = passwordCheckerResult?.errors.length === 0 && passwordCheckerResult.state !== 'empty' && 'Password is very strong'
    

    return (
        <>
            <div className='wrapper'>
                <div className='lines-wrapper'>
                    <div className={`line ${emptyPassword} ${veryWeakPassword} ${weakPassword} ${fairPassword} ${strongPassword} ${veryStrongPassword}`}></div>
                    <div className={`line ${emptyPassword} ${veryWeakPassword} ${weakPassword} ${fairPassword} ${strongPassword} ${veryStrongPassword}`} ></div>
                    <div className={`line ${emptyPassword} ${veryWeakPassword} ${weakGreyPassword} ${fairPassword} ${strongPassword} ${veryStrongPassword}`}></div>
                    <div className={`line ${emptyPassword} ${veryWeakPassword} ${weakGreyPassword} ${fairGreyPassword} ${strongPassword} ${veryStrongPassword}`}></div>
                    <div className={`line ${emptyPassword} ${veryWeakPassword} ${weakGreyPassword} ${fairGreyPassword} ${strongGreyPassword} ${veryStrongPassword}`}></div>
                </div>
                <div className='message-wrapper'>
                        <p className={`message ${emptyPasswordTextColor} ${veryWeakPasswordTextColor} ${weakPasswordTextColor} ${fairPasswordTextColor} ${strongPasswordTextColor} ${veryStrongPasswordTextColor}`}>
                        {/* <span className="material-icons text-md"> close </span> */}
                        { emptyPasswordText } { veryWeakPasswordText } { weakPasswordText } { fairPasswordText } { strongPasswordText } { veryStrongPasswordText }
                    </p>
                </div>
            </div>
        </>
    );
}

export default PasswordCheckerComponent;
