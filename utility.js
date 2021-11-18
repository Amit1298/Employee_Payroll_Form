const stringifyDate = (date) =>{
    const option = {day: 'numeric', month: 'short',year: 'numeric'};
    const newDate = !date ? "undefined": new Date(Date.parse(date)).toLocaleDateString('en-GB', option);
    return newDate;
}

const update = (node) =>{
    let empPayrollData = empPayrollList.find(empData => empData._id == node.id)
    if(!empPayrollData) return;
    localStorage.setItem('editEmp', JSON.stringify(empPayrollData))
    window.location.replace(site_properties.add_emp_payroll_page);
}