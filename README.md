# Password Checker

This is a react component that checks the strength of a password 
and displays a password strength bar based on it.
It checks password strength by ensuring that all
password have at least:

**8 characters, 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character**

**Please note that this package is in development, has not been fully tested or deemed fit for for use. Testing is currently ongoing and this message will be removed when done.**

## Install

```bash
npm install password-checker
```


## Usage

By default, the `<PasswordChecker/>` component will have a width of 100%.
To change this behaviour, wrap in a parent div and assign a width.

Pass data into the password checker using the password prop.


```javascript
import PasswordChecker from 'password-checker'

function App() {

    const [password, setPassword] = useState('')

    const handlePasswordInput = (password) => {
        setPassword(password)
    }

    return (
        <div className='w-full'>
            <input type={text} onChange={handlePasswordInput}/>
            <PasswordChecker password={password} />
        </div>
    );
}

```

### Getting Password Checker Data + Custom Strength Bar


If you would like to create your own password strength bar UI, you can use the checker function instead.
This is the function that powers the password strength bar. It returns an object with the following properties:
`state, message, password and an array of errors`


```javascript
import Check from 'password-checker/function/checker'

let result = Check('password')

//returns:
// {
//     "state": "weak",
//     "message": "Password is weak",
//     "password": "password",
//     "errors": [
//         "Password must contain at least one uppercase letter",
//         "Password must contain at least one number",
//         "Password must contain at least one special character"
//     ]
// }

```
### Getting Password Checker Data + Password Checker Strength bar

If you would like to use the password checker strength bar and also get the data, 
pass in a function to the `checkerData` prop.


```javascript
function App() {

    const [password, setPassword] = useState('')

    const handlePasswordInput = (password) => {
        setPassword(password)
    }

    const getCheckerData = (data) => {
        console.log(data)
    }

    return (
        <div className='w-full'>
            <input type={text} onChange={handlePasswordInput}/>
            <PasswordChecker password={password} checkerData={getCheckerData} />
        </div>
    );
}
```

## Contributions / Feedback
Please open an issue if you have any feedback, suggestions or encounter any issues, I
would love to hear from you.