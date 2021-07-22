const content = "안녕하세요.\n제 이름은 김영현 입니다.\n소통하는 개발자가 되고 싶어요!"
const text = document.getElementById("dynamic");
let index = 0;
let txt = "";

function typing(){
    if(index < content.length){
    txt += content[index];
    text.innerText = txt;
    index++
    }
}
setInterval(typing,320)


// function typing(){
//     text.textContent += content[index++];
//     if(index > content.length){
//         text.textContent = ""
//         index=0;
//     }
// }

// setInterval(typing,800);

