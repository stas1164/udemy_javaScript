let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц","");
    time = prompt("Введите дату в формате YYYY-MM-DD","");
    while(isNaN(money) || money == ""|| money == null) {
        money = +prompt("Ваш бюджет на месяц","");
    }
}
start();

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true,
    chooseExpenses: function(){
        for (let i=0; i<2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", "" ),
                b = prompt("Во сколько обойдется?", "" );   
            if ((typeof(a))==='string' && (typeof(a))!=null && (typeof(b))!=null 
                && a!='' && b!='' && a.length <50){
                console.log('done');     
                appData.expenses[a] = b;
        
            }else{
                i=i-1; 
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget /30).toFixed(1);
        alert('Ежедневный бюджет' + appData.moneyPerDay);
    },
    detectLevel: function () {
        if(appData.moneyPerDay <100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay<2000) {
            console.log("средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
        },
        checkSavings: function() {
            if (appData.savings ==true) {
                let save = +prompt("Какова сумма накоплений"),
                    persent = +prompt("Под какой процент");
                
                    appData.monthIncome = save/100/12*persent;
                    alert ("Доход в месяц с вашего депозита:" +appData.monthIncome);
            }
        },
        chooseOptExpenses: function() {
            for (let i=1; i<=3; i++) {
                let a = prompt("Статья необязательных расходов", "" );
                if ((typeof(a))==='string' && (typeof(a))!=null && a.length <50){
                    console.log('doneOptEx');     
                    appData.optionalExpenses [i] = a;
                }else{
                    i=0; 
                }
            }
        },
    chooseIncome: function() {
        for (let i=1; i<2; i++) {
            let items = prompt("Что принесёт доп доход? (Перечислите через запятую)","");
            if ((typeof(items))==='string' && (typeof(items))!=null && items!=''){
                console.log('done');     
                appData.income = items.split(', ');
                appData.income.push(prompt('Может что-то ещё?'));
                appData.income.sort();
                appData.income.forEach(function(item, i, mass){
                    alert(i+1 + '. Способы доп заработка: ' + item);
                });
            }else{
                i=i-1; 
            }
        }
    }
};
console.log('Наша программа включает в себя данные:');
for (let key in appData){
    console.log('Свойство ' + key + ' имеет значение ' + appData[key]);
}

