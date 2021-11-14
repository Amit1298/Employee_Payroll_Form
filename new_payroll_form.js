class EmployeePayrollData{
    get id(){return this._id;}
    set id(id){
        this._id = id;
    }
    get name(){return this._name;}
    set name(name){
        let nameRegex = RegExp["^[A-Z]{1}[a-zA-Z\\s]{2,}$"]
        if(nameRegex.test(name))
        this._name = name;
        else throw 'Name is Incorrect';
    }
    get profilePic(){return this._profilePic ;}
    set profilePic(profilePic){
        this._profilePic = profilePic;
    }
    get gender(){return this._gender ;}
    set gender(gender){
        this._gender = gender;
    }
    get department(){return this._department;}
    set department(department){
        this._department = department;
    }
    get salary(){return this._salary;}
    set salary(salary){
        this._salary = salary;
    }
    get note(){return this._note;}
    set note(note){
        this._note = note;
    }
    get startDate(){return this._startDate;}
    set startDate(startDate){
        this._startDate = startDate;
    }

    //methord
    toString(){
        const options = {year: 'numeric', month: 'long', day: 'numeric'};
        const empDate = !this.startDate ? "undefined" :
        this.startDate.toLocaleDateString("en-US",option);
        return "id=" +this.id + ", name="+this.name + ", gender=" +this.gender+ ", profilepic= "+ this.profilePic+", department= "+ this.department+ ", salary="+this.salary + ", startDate= "+ empDate+ ", note="+this.note;
    }
}


// UC2
window.addEventListener('DOMContentLoaded',(event)=>{
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input',function(){
        if(name.value.length == 0){
            textError.textContent = "";
            return;
        }
        try{
            (new EmployeePayrollData()).name = name.value;;
            textError.textContent = "";
        }
        catch(e){
            textError.textContent = e;
        }
    });
    const salary = document.querySelector("#salary");
    const output = document.querySelector(".salary-output");
    output.textContent = salary.value;
    salary.addEventListener('input',function(){
        output.textContent = salary.value;
    });
});

// UC3

const save = () =>{
    try{
        let employeePayrollData = createEmployeePayroll();
    }
    catch(e){
        return ;
    }
}

const createEmployeePayroll = () =>{
    let EmployeePayrollData = new EmployeePayrollData();
    try{
        EmployeePayrollData.name = getInputValueById('#name');
    }
    catch(e){
        setTextValue('.text-error',e);
        throw e;
    }
    EmployeePayrollData.profilePic = getSelectedValues('[name=profile]').pop();
    EmployeePayrollData.gender = getSelectedValues('[name=gender]').pop();
    EmployeePayrollData.department = getSelectedValues('[name=department]');
    EmployeePayrollData.salary = getInputValueById('#salary');
    EmployeePayrollData.note = getInputValueById('#notes');
    let date = getInputValueById('#day')+" "+ getInputValueById('#month')+" "+getInputValueById('#year');
    EmployeePayrollData.date = Date.parse(day);
    alert(employeePayrollData.toString());
    return employeePayrollData;
}

const getSelectedValues = (propertyValue) =>{
    let allItems = document.querySelectorAll(propertyValue);
    let selItems = [];
    allItems.forEach(item =>{
        if(item.checked) selItems.push(item.value);
    });
    return selItems;
}

const getInputValueById = (id) =>{
    let value = document.querySelector(id).value;
    return value;
}


const getInputElementValue = (id) => {
    let value = document.getElementById(id).value;
    return value;
}