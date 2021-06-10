// Write your solution in this file!
const employee = {
    name: "Sam",
    streetAddress: "11 Broadway",

};

function updateEmployeeWithKeyAndValue(employee, key, value ){
  return Object.assign({},employee,{[key]:value});
}


function  destructivelyUpdateEmployeeWithKeyAndValue(employee,streetAddress,value){
   return Object.assign(employee,{[streetAddress]: "12 Broadway"});
}



function deleteFromEmployeeByKey(employee,key,value) {
   delete employee.key;
    return Object.assign({},employee,{[key]:value});
    
}


function  destructivelyDeleteFromEmployeeByKey(employee, name){
    delete employee.name;
    return Object.assign(employee);

      

}
