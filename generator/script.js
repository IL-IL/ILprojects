//1 собираем генератор
const genDo = ['Сделать', 'Провести', 'Разработать','Решить','Продумать'];
const genWhat = ['программу','план','проблему','методологию','предложение'];
const genForWhom = ['руководства','компании','коллеги','клиента','общества'];
const genDate = ['сегодня','15 минут','два часа','пол дня','одно мгновение'];

const genDoLength = genDo.length-1;
const genWhatLength = genWhat.length-1;
const genForWhomLength = genForWhom.length-1;
const genDateLength = genDate.length-1;
console.log(genDoLength + genWhatLength + genForWhomLength + genDateLength);



//2 добавляем значения в массив

function genDoAdd () {
    const input = document.getElementById("input").value;
    genDo.push(input);
    console.log (genDo);
}

function genWhatAdd () {
    const input = document.getElementById("input").value;
    genWhat.push(input);
    console.log (genWhat);
}

function genForWhomAdd () {
    const input = document.getElementById("input").value;
    genForWhom.push(input);
    console.log (genForWhom);
}

function genDateAdd () {
    const input = document.getElementById("input").value;
    genDate.push(input);
    console.log (genDate);
}

//3 гененрируем тудушку

var genDoExample;

function generateToDo () {
    const i=Math.round(Math.random()*(genDo.length-1));
    const k=Math.round(Math.random()*(genWhat.length-1));
    const l=Math.round(Math.random()*(genForWhom.length-1));
    const m=Math.round(Math.random()*(genDate.length-1));
    genDoExample = genDo[i]+' '+ genWhat[k]+ ' для ' +genForWhom[l]+ ' за '+ genDate[m];
    // var genDoExample;
    document.getElementById("todayPlan").innerHTML="<br>"
    document.getElementById("todayPlan").append(genDoExample);
    localStorage.setItem('yesterday plan',genDoExample);

}

let genDoExampleSum = ' ';

function generateToDoList () {
    generateToDo();
    //let genDoExampleSum = ' ';
    genDoExampleSum = genDoExampleSum  + genDoExample;
    console.log('genDoExampleSum= ' + genDoExampleSum);

}


  

//задаем и забираем из LocalStorage

function loadMyDay(){
    const prevDay = localStorage.getItem('yesterday plan');
    document.getElementById("yesterdayPlan").innerHTML=" "
    document.getElementById("yesterdayPlan").append(prevDay);
    console.log(prevDay)
}

//сравнивать с текущими объектами массива, если уже было - писать об этом
