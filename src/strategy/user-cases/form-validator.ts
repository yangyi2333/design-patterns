// strategy pattern user case: form validator

const formData = {
    name: 'yangyi',
    password: '123333'
}

interface IValidatorConstructor {
    new (): IValidate
}

class Form {
    rules: Array<{value:any,validator:IValidate}>;

    constructor() {
        this.rules = []
    } 

    add<T>(value: T, strategy: IValidatorConstructor){
        this.rules.push({value, validator:new strategy()})
    }

    validate(){
        for(let i=0; i< this.rules.length; i++ ) {
            const data = this.rules[i].value;
            let res = this.rules[i].validator.validate(data)
            if(!res) {
                return res
            }
        }
        return true
    }
}


interface IValidate{
    validate<T>(value: T): boolean
}

class IsRequired implements IValidate {

    validate<T>(value:T)  {
        if(value !== null || value !== undefined) return true
        return false
    }
}

class IsNumber implements IValidate {

    validate<T>(value:T)  {
        if(typeof value === 'number') return true
        return false
    }
}

const FormObject = new Form();

FormObject.add(formData.name,IsRequired)
FormObject.add(formData.password,IsRequired)
FormObject.add(formData.password,IsNumber)
console.log(FormObject.validate())
