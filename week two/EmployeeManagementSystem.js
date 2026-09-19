// Employee management system
let employees = [
  { name: "Sara",   dept: "IT",    salary: 80000 },
  { name: "Ali",    dept: "Sales", salary: 45000 },
  { name: "Fatima", dept: "IT",    salary: 95000 },
  { name: "Ahmed",  dept: "HR",    salary: 60000 },
  { name: "Zara",   dept: "Sales", salary: 55000 },
  { name: "Usman",  dept: "IT",    salary: 70000 }
];

let itEmployees = employees.filter (val=>val.dept==="IT")
console.log("IT Employees: ",itEmployees);

let salary60k = employees.filter (val=>val.salary>=60000)
console.log("60k+ salary employees",salary60k);

let raiseSalary = employees.map(val=>{
     let newSalary =  val.salary*1.1
      return {...val, salary:newSalary}
})
console.log(raiseSalary);

let highestSalary = employees.reduce((acc , curr)=>{
     return acc.salary > curr.salary ? acc : curr
},employees[0])
console.log(`Highest Salary: `, highestSalary );

let totalSalary = 0
let itDeptTotalSalary =  itEmployees.forEach(val=>{
 totalSalary+= val.salary
})
let itDeptAvgSalary = totalSalary / itEmployees.length
console.log(Math.floor(itDeptAvgSalary));

let getSalaryLevel =(val)=>{
      if (val>=80000) {
            return 'Senior'
      }
      else if (val>=60000) {
            return 'Mid'
      }
      else{
            return 'Junior'
      }
}

let employeeWithSalaryLevel = employees.map((val)=>{
      return {
            ...val, 
            Level : getSalaryLevel(val.salary)
      }
})
console.log(employeeWithSalaryLevel);

let summaryOfEmployeesManagement = employeeWithSalaryLevel.forEach((val)=>{
      console.log(`${val.name} | ${val.dept} |  ${val.salary} | ${val.Level}`);
})