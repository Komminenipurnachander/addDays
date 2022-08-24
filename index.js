const addDays = require("date-fns/addDays");
function func(days) {
  const result = addDays(new Date(22, 07, 2020), days);
  return result;
}

console.log(func(10));
