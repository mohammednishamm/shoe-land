const Validation =(values)=>{
    let errors={}
    if(!values.name){
        errors.name="name reqiured"
    }
    else if(values.name.length<5){
        errors.name="name must be more then 5 character"
    }
    if(!values.password){
        errors.name="password reqiured"
    }
    else if(values.password.length<8){
        errors.name="password must be more then 8 character"
    }
    return errors;
}
export default Validation;