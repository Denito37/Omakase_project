let adv = 'adventourous';
let min = 'minimalist';
let LB = 'laid back';
let InH ="in a hurry";
let drv = 'driving';
let bkg = 'biking';
let frr = 'ferry';
let wlk = 'walking';
let answer = []

let Q1 = document.getElementsByClassName('Question_1');
let Q2 = document.getElementsByClassName('Question_2')

let Q1_1 = document.getElementsByClassName('adventourous') ;
let Q1_2 = document.getElementsByClassName('minimalist') ;
let Q1_3 = document.getElementsByClassName('laid_back') ;
let Q1_4 = document.getElementsByClassName('hurry') ;
let Q2_1 = document.getElementsByClassName('driving') ;
let Q2_2 = document.getElementsByClassName('biking') ;
let Q2_3 = document.getElementsByClassName('ferry') ;
let Q2_4 = document.getElementsByClassName('walking') ;

console.log(Q1)

function scroll_to_Q1(){
    Q1.scrollIntoView();
}


function adventure(){
    answer =[]
    answer.push(adv)
    console.log(answer)
}
function minimalist(){
    answer = []
    answer.push(min)
    console.log(answer)
}
function slow(){
    answer = []
    answer.push(LB)
    console.log(answer)
}
function hurry(){
    answer = []
    answer.push(InH)
    console.log(answer)
}
function drive(){
    if(answer.length > 1){
        answer.pop()
    }
    answer.push(drv);
    console.log(answer)
    console.log(`you like ${answer[0]} & ${answer[1]}.`)
}
function bike(){
    if(answer.length > 1){
        answer.pop()
    }
    answer.push(bkg);
    console.log(answer)
    console.log(`you like ${answer[0]} & ${answer[1]}.`)
}
function ferry(){
    if(answer.length > 1){
        answer.pop()
    }
    answer.push(frr);
    console.log(answer)
    console.log(`you like ${answer[0]} & ${answer[1]}.`)
}
function walk(){
    if(answer.length > 1){
        answer.pop()
    }
    answer.push(wlk);
    console.log(answer)
    console.log(`you like ${answer[0]} & ${answer[1]}.`)
}

if(answer.includes(adv) && answer.includes(drv)){
    console.log(`you like ${adv} & ${drv}.`)
}
