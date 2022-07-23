

//랜덤한 로또 숫자뽑기
const arr_num45 = Array(45).fill().map((v,i) => i +1);
//console.log(arr_num45);
const arr_shuffle = [];

while(arr_num45.length > 0){
    const random_index = Math.floor(Math.random()*arr_num45.length);
    const arr_spliced = arr_num45.splice(random_index, 1);
    arr_shuffle.push(arr_spliced[0]);
}
let arr_order6 = arr_shuffle.slice(0,6).sort((a,b) => a-b);
let bonus_number = arr_shuffle[6];
console.log(arr_order6, bonus_number);

for(let i = 0; i < arr_order6.length;i++) {
    setTimeout(() => {
        let $reslut = document.getElementById("result");
        // 로또 ball 만들기
        let $ball = document.createElement("div");
        $ball.className = 'ball';
        $ball.innerText = arr_order6[i];
        //console.log($ball);
        $reslut.appendChild($ball);
    },1000*(i+1));
}
//bonus
let $bonus = document.getElementById('bonus');
setTimeout(() => {
    let $reslut = document.getElementById("result");
    // 로또 ball 만들기
    let $ball = document.createElement("div");
    $ball.className = 'ball';
    $ball.innerText = bonus_number;
    //console.log($ball);
    $bonus.appendChild($ball);
},7000);
