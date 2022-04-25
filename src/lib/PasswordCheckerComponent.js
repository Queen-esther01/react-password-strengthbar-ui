import { useContext, useEffect } from 'react';
import { AppContext } from './AppContext';
import Check from './checker';
import '../App.css';

function PasswordCheckerComponent({ password, getData }) {

    const { savePasswordCheckerResult, passwordCheckerResult } = useContext(AppContext);
    //console.log(passwordCheckerResult)

    useEffect(() => {
        let result = Check(password);
        savePasswordCheckerResult(result)
        console.log(result)
        getData(result)
    }, [password])

    //console.log(getData)
    

    const emptyPassword = passwordCheckerResult?.state === 'empty' && 'bg-gray-200'
    const veryWeakPassword = passwordCheckerResult?.errors.length === 4 && 'bg-red-500'
    const weakPassword = passwordCheckerResult?.errors.length === 3 && 'bg-orange-500'
    const weakGreyPassword = passwordCheckerResult?.errors.length === 3 && 'bg-gray-200'
    const fairPassword = passwordCheckerResult?.errors.length === 2 && 'bg-orange-500'
    const fairGreyPassword = passwordCheckerResult?.errors.length === 2 && 'bg-gray-200'
    const strongPassword = passwordCheckerResult?.errors.length === 1 && passwordCheckerResult.state !== 'empty' && 'bg-green-500'
    const strongGreyPassword = passwordCheckerResult?.errors.length === 1 && passwordCheckerResult.state !== 'empty' && 'bg-gray-200'
    const veryStrongPassword = passwordCheckerResult?.errors.length === 0 && passwordCheckerResult.state !== 'empty' && 'bg-green-500'
    // const veryStrongPassword = passwordCheckerResult?.errors.length === 1 && 'bg-blue-500'


    const emptyPasswordTextColor = passwordCheckerResult?.state === 'empty' && 'text-gray-500'
    const emptyPasswordText = passwordCheckerResult?.state === 'empty' && 'Password is empty'
    const veryWeakPasswordTextColor = passwordCheckerResult?.errors.length === 4 && 'text-red-500'
    const veryWeakPasswordText = passwordCheckerResult?.errors.length === 4 && 'Password is very weak'
    const weakPasswordTextColor = passwordCheckerResult?.errors.length === 3 && 'text-orange-500'
    const weakPasswordText = passwordCheckerResult?.errors.length === 3 && 'Password is weak'
    const fairPasswordTextColor = passwordCheckerResult?.errors.length === 2 && 'text-orange-500'
    const fairPasswordText = passwordCheckerResult?.errors.length === 2 && 'Password is fair'
    const strongPasswordTextColor = passwordCheckerResult?.errors.length === 1 && passwordCheckerResult.state !== 'empty' && 'text-green-500'
    const strongPasswordText = passwordCheckerResult?.errors.length === 1 &&  passwordCheckerResult.state !== 'empty' && 'Password is strong'
    const veryStrongPasswordTextColor = passwordCheckerResult?.errors.length === 0 && passwordCheckerResult.state !== 'empty' && 'text-green-500'
    const veryStrongPasswordText = passwordCheckerResult?.errors.length === 0 && passwordCheckerResult.state !== 'empty' && 'Password is very strong'
    

    return (
        <>
            <div className='my-4'>
                <div className='flex gap-5 justify-between my-2'>
                    <div className={`h-1 basis-full ${emptyPassword} ${veryWeakPassword} ${weakPassword} ${fairPassword} ${strongPassword} ${veryStrongPassword}`}></div>
                    <div className={`h-1 basis-full ${emptyPassword} ${veryWeakPassword} ${weakPassword} ${fairPassword} ${strongPassword} ${veryStrongPassword}`} ></div>
                    <div className={`h-1 basis-full ${emptyPassword} ${veryWeakPassword} ${weakGreyPassword} ${fairPassword} ${strongPassword} ${veryStrongPassword}`}></div>
                    <div className={`h-1 basis-full ${emptyPassword} ${veryWeakPassword} ${weakGreyPassword} ${fairGreyPassword} ${strongPassword} ${veryStrongPassword}`}></div>
                    <div className={`h-1 basis-full ${emptyPassword} ${veryWeakPassword} ${weakGreyPassword} ${fairGreyPassword} ${strongGreyPassword} ${veryStrongPassword}`}></div>
                </div>
                <div className='flex flex-wrap justify-between my-2'>
                        <p className={`flex items-center ${emptyPasswordTextColor} ${veryWeakPasswordTextColor} ${weakPasswordTextColor} ${fairPasswordTextColor} ${strongPasswordTextColor} ${veryStrongPasswordTextColor} text-sm ml-auto`}>
                        {/* <span className="material-icons text-md"> close </span> */}
                        { emptyPasswordText } { veryWeakPasswordText } { weakPasswordText } { fairPasswordText } { strongPasswordText } { veryStrongPasswordText }
                    </p>
                </div>
            </div>
        </>
    );
}

export default PasswordCheckerComponent;
