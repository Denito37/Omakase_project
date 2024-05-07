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
const result = document.querySelector('.Result')
const resultVideo = document.querySelector('.Result .video')
const conclusion = document.querySelector('.conclusion')

let Q1_1 = document.getElementsByClassName('adventourous') ;
let Q1_2 = document.getElementsByClassName('minimalist') ;
let Q1_3 = document.getElementsByClassName('laid_back') ;
let Q1_4 = document.getElementsByClassName('hurry') ;
let Q2_1 = document.getElementsByClassName('driving') ;
let Q2_2 = document.getElementsByClassName('biking') ;
let Q2_3 = document.getElementsByClassName('ferry') ;
let Q2_4 = document.getElementsByClassName('walking') ;

function scroll_to(section){
    section.scrollIntoView({behavior:"smooth"});
}
function retry(){
    Q1.scrollIntoView({behavior:"smooth"});
    answer = [];
    videoResult();
}

function myfunction(value) { // checks if section is visible
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
        scroll_to(intro)
    }
    else if(myfunction(intro) && key == 's'){
        scroll_to(Q1)
    }
    else if(myfunction(result) && key == 's'){
        scroll_to(conclusion)
    }
    else if(myfunction(conclusion) && key == 's'){ 
        retry()
    }
}
window.addEventListener('keydown', keyListener)

function adventure(){
    answer =[]
    answer.push(adv)
}
function minimalist(){
    answer = []
    answer.push(min)
}
function slow(){
    answer = []
    answer.push(LB)
}
function hurry(){
    answer = []
    answer.push(InH)
}
function drive(){
    if(answer.length > 1){
        answer.pop()
    }
    answer.push(drv);
    videoResult();
}
function bike(){
    if(answer.length > 1){
        answer.pop()
    }
    answer.push(bkg);
    videoResult();
}
function ferry(){
    if(answer.length > 1){
        answer.pop()
    }
    answer.push(frr);
    videoResult();
}
function walk(){
    if(answer.length > 1){
        answer.pop()
    }
    answer.push(wlk);
    videoResult();
}
function videoResult(){
    resultVideo.load()
    if(answer.includes(adv) && answer.includes(drv)){
        resultVideo.innerHTML = ('<source src="videos/AdvDriving.mkv" type="video/mp4">')
    }
    else if(answer.includes(adv) && answer.includes(bkg)){
        resultVideo.innerHTML = ('<source src="videos/AdvBiking.mkv" type="video/mp4">')
    }
    else if(answer.includes(adv) && answer.includes(frr)){
        resultVideo.innerHTML = ('<source src="videos/AdvFerry.mkv" type="video/mp4">')
    }
    else if(answer.includes(adv) && answer.includes(wlk)){
        resultVideo.innerHTML = ('<source src="videos/AdvWalking.mkv" type="video/mp4">')
    }
    else if(answer.includes(min) && answer.includes(drv)){
        resultVideo.innerHTML = ('<source src="videos/MinimalistDriving.mkv" type="video/mp4">')
    }
    else if(answer.includes(min) && answer.includes(bkg)){
        resultVideo.innerHTML = ('<source src="videos/MinimalistBiking.mkv" type="video/mp4">')
    }
    else if(answer.includes(min) && answer.includes(frr)){
        resultVideo.innerHTML = ('<source src="videos/MinimalistFerry.mkv" type="video/mp4">')
    }
    else if(answer.includes(min) && answer.includes(wlk)){
        resultVideo.innerHTML = ('<source src="videos/MinimalistWalking.mp4" type="video/mp4">')
    }
    else if(answer.includes(LB) && answer.includes(drv)){
        resultVideo.innerHTML = ('<source src="videos/SlowDriving.mkv" type="video/mp4">')
    }
    else if(answer.includes(LB) && answer.includes(bkg)){
        resultVideo.innerHTML = ('<source src="videos/SlowBiking.mkv" type="video/mp4">')
    }
    else if(answer.includes(LB) && answer.includes(frr)){
        resultVideo.innerHTML = ('<source src="videos/SlowFerry.mkv" type="video/mp4">')
    }
    else if(answer.includes(LB) && answer.includes(wlk)){
        resultVideo.innerHTML = ('<source src="videos/SlowWalking.mkv" type="video/mp4">')
    }
    else if(answer.includes(InH) && answer.includes(drv)){
        resultVideo.innerHTML = ('<source src="videos/FastDriving.mkv" type="video/mp4">')
    }
    else if(answer.includes(InH) && answer.includes(bkg)){
        resultVideo.innerHTML = ('<source src="videos/FastBiking.mkv" type="video/mp4">')
    }
    else if(answer.includes(InH) && answer.includes(frr)){
        resultVideo.innerHTML = ('<source src="videos/FastFerry.mkv" type="video/mp4">')
    }
    else if(answer.includes(InH) && answer.includes(wlk)){
        resultVideo.innerHTML = ('<source src="videos/FastWalking.mkv" type="video/mp4">')
    }
    else if (answer.length == 0) {
        resultVideo.innerHTML= ('')
    }
}