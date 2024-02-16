let row = 6;
let col = 8;

let seatNumList = []

let booking = (event, i,j)=>{
   if (event.target.classList.contains("seat")){
    event.target.classList.replace("seat","occupied")
    seatNumList.push(i*8+j+1)
   }else{
    event.target.classList.replace("occupied","seat")
    let seatNumber = i*8+j+1
    let index = seatNumList.indexOf(seatNumber)
    if(index > -1){
        seatNumList.splice(index, 1)
    }


    // seatNumList.push(i*8+j+1)
    }
    getMovie();
}

//같은 기능이지만 표기법이 다른 호출법 // get이 더 빨라 //클래스 가져올땐 All 쓰기
let seatContainer = document.querySelectorAll('.seatContainer');
let screen = document.querySelectorAll('.screen');
// let screen = document.getElementsByClassName("screen")

for(let i=0; i<row; i++){
    let div = document.createElement("div"); //div생성
    div.classList.add("row") //클래스 넣어줌

    for(let j=0; j<col; j++){
        let span = document.createElement("span") //span생성
        span.classList.add("seat")//클래스 넣어줌

        div.appendChild(span) //디브 안에 스팬 넣어줌

        span.addEventListener('click', (event)=>booking(event, i, j))
    }

    seatContainer[0].insertBefore(div, screen[0].nextSibling) 

        //div seatContainer이 부모 div screen이 형제
        //<div class="seatContainer">
        //<div class="screen">(안보이는 text가 있어)</div>
        //여기에 넣고 싶어서 이런 내용을 쓰는것~_~
        //</div> 

        // let seatContainer = document.querySelectorAll('seatContainer')선언을 안할땐 밑의 구문 사용
        // screen[0].parentNode.insertBefore(div, screen[0].nextSibling)

}


let movie = document.getElementById('movie') //movie 가져오기
let count = document.getElementById('count') //id count 가져오기 (sapn 태그에 있음)
let coust = document.getElementById('coust') //id coust 가져오기

//영화가 바뀔때 일어나는 함수(?)
let getMovie = (event)=>{
    let movieTittle = movie.value
    // console.log(movieTittle)
    count.innerHTML=seatNumList.length
    coust.innerHTML=seatNumList.length*movieTittle
}

movie.addEventListener('change', getMovie)


// 선택한 자리의 수 만큼 보여주고
// 자리의 수 * 영화의 값을 보여준다
// 그리고 html의 스팬태그에 해당값을 위치하게 해준다

