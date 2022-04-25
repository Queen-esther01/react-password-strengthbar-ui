

const Check = (password) =>{

    let result = {
        state : 'empty',
        message: 'Password is empty',
        password : password,
        errors : [],
    }

    if(password === ''){
        result.errors.push('Password is empty')
        return result
    }
    if(password.length < 8){
        result.errors.push('Password must be at least 8 characters long')
    }
    if(password.search(/[a-z]/) === -1){
        result.errors.push("Password must contain at least one lowercase letter");
    }
    if(password.search(/[A-Z]/) === -1){
        result.errors.push('Password must contain at least one uppercase letter');
    }
    if(password.search(/[0-9]/) === -1){
        result.errors.push('Password must contain at least one number');
    }
    if(password.search(/[!@#$%^&*()`'"|?></]/) === -1){
        result.errors.push('Password must contain at least one special character');
        result.state = 'very good'
    }
    // if(!(password.length < 8) && !(password.search(/[a-z]/) === -1) && !(password.search(/[A-Z]/) === -1) && !(password.search(/[0-9]/) === -1) && !(password.search(/[!@#$%^&*]/) === -1)){
    //     //result.message = 'Password is very strong'
    // }

    // HANDLING CHECKER STATE
    if(result.errors.length === 4){
        result.state = 'very weak'
        result.message = 'Password is very weak'
    }
    if(result.errors.length === 3){
        result.state = 'weak'
        result.message = 'Password is weak'
    }
    if(result.errors.length === 2){
        result.state = 'fair'
        result.message = 'Password is fair'
    }
    if(result.errors.length === 1){
        result.state = 'strong'
        result.message = 'Password is strong'
    }
    if(result.errors.length === 0){
        result.state = 'very strong'
        result.message = 'Password is very strong'
    }
    return result
}

module.exports = Check;