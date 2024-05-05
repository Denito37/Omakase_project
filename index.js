let adv = 'adventourous';
let min = 'minimalist';
let LB = 'laid back';
let InH ="in a hurry";
let drv = 'driving';
let bkg = 'biking';
let frr = 'ferry';
let wlk = 'walking';
let answer = []

const disclaimer = document.querySelector('.disclaimer')
const intro = document.querySelector('.intro')
const Q1 = document.getElementById('QU1');
const Q2 = document.querySelector('.Question_2')

let Q1_1 = document.getElementsByClassName('adventourous') ;
let Q1_2 = document.getElementsByClassName('minimalist') ;
let Q1_3 = document.getElementsByClassName('laid_back') ;
let Q1_4 = document.getElementsByClassName('hurry') ;
let Q2_1 = document.getElementsByClassName('driving') ;
let Q2_2 = document.getElementsByClassName('biking') ;
let Q2_3 = document.getElementsByClassName('ferry') ;
let Q2_4 = document.getElementsByClassName('walking') ;

const result = document.querySelector('.Result')
const conclusion = document.querySelector('.conclusion')

function intro_Q(){
    intro.scrollIntoView({behavior:"smooth"});
}
function scroll_to_Q1(){
    Q1.scrollIntoView({behavior:"smooth"});
}
function scroll_to_Q2(){
    Q2.scrollIntoView({behavior:"smooth"});
}
function scroll_to_Result(){
    result.scrollIntoView({behavior:"smooth"});
}
function scroll_to_Conclusion(){
    conclusion.scrollIntoView({behavior:"smooth"});
}
function retry(){
    Q1.scrollIntoView({behavior:"smooth"});
    answer = []
}

function myfunction(value) { 
    const item = value.getBoundingClientRect(); 
    return ( 
        item.top >= 0 && 
        item.left >= 0 && 
        item.bottom <= ( 
            window.innerHeight || 
            document.documentElement.clientHeight) && 
        item.right <= ( 
            window.innerWidth || 
            document.documentElement.clientWidth) 
    ); 
} 

function keyListener(event){ 
    event = event; //capture the event, and ensure we have an event
    let key = event.key || event.which || event.keyCode; //find the key that was pressed
    if(myfunction(disclaimer) && key == 's'){
        intro_Q()
    }
    else if(myfunction(intro) && key == 's'){// intro not visible on scroll
        scroll_to_Q1()
    }
    else if(myfunction(result) && key == 's'){
        scroll_to_Conclusion()
    }
    else if(myfunction(conclusion) && key == 's'){ // conclusion not visible due to footer
        retry()
    }
}

window.addEventListener('keydown', keyListener)

window.addEventListener('scroll', () => { 
    if (myfunction(conclusion)) { 
        console.log('Element is visible in viewport'); 
    } else { 
        console.log('Element is not visible in viewport'); 
    } 
}); 



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