# React Password Strengthbar UI

This is a react component that checks the strength of a password 
and displays a password strength bar based on input.
It checks password strength by ensuring that all
password have at least:

**8 characters, 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character**


### View demo [here](https://react-strengthbar.vercel.app/)


## Install

```bash
npm install react-password-strengthbar-ui
```
## Usage

The `<PasswordChecker/>` component will take up width of it's parent, always wrap in a parent div. You can pass data into the password checker using the password prop.


```javascript
import { PasswordChecker } from 'react-password-strengthbar-ui';

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

### Getting Password Strength Data + Custom Strength Bar


If you would like to create your own password strength bar UI, you can use the checker function instead.
This is the function that powers the password strength bar. It returns an object with the following properties:
`state, message, password and an array of errors`


```javascript
import { Strength } from 'react-password-strengthbar-ui';

let result = Strength('password')

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
### Getting Password Strength Data + Password Checker Strength bar

If you would like to use the password checker strength bar and also get the data, 
pass in a function to the `strengthData` prop.


```javascript
import { PasswordChecker } from 'react-password-strengthbar-ui';

function App() {

    const [password, setPassword] = useState('')

    const handlePasswordInput = (password) => {
        setPassword(password)
    }

    const getPasswordData = (data) => {
        console.log(data)
    }

    return (
        <div className='w-full'>
            <input type={text} onChange={handlePasswordInput}/>
            <PasswordChecker password={password} strengthData={getPasswordData} />
        </div>
    );
}
```

## Contributions / Feedback
Please open an issue if you have any feedback, suggestions or encounter any issues, I
would love to hear from you.