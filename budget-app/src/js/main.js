let budget = document.querySelectorAll("div[class*=-value]"),
    input = document.querySelectorAll('.expenses-item'),
    btn_arr = document.getElementsByTagName('button'),
    optional_exp = document.querySelectorAll('.optionalexpenses-item');
    choose_inc = document.querySelector('.choose-income');
    check = document.querySelector("div.checksavings input[id=savings]");
    sum = document.querySelector('.choose-sum');
    per = document.querySelector('.choose-percent');
    year = document.querySelector('.year-value');
    month = document.querySelector('.month-value');
    day = document.querySelector('.day-value');

let expenses_item_btn = btn_arr[0],
    optionalexpenses_btn = btn_arr[1],
    count_budget_btn  = btn_arr[2];

console.clear();
console.log(budget);
console.log(input);
console.log(btn_arr);
console.log(expenses_item_btn);
console.log(optionalexpenses_btn);
console.log(count_budget_btn);
console.log(optional_exp);
console.log(choose_inc);
console.log(check);
console.log(sum);
console.log(per);
console.log(year);
console.log(month);
console.log(day);

