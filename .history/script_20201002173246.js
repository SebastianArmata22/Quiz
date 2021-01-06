const questionsBase=[
    {
        qusestion: "Skrót GOT oznacza:",
        a: "Game of Thrones",
        b: "Game of Technology",
        c: "Game of Time",
        d: "Game of Transfer",
        correct: "a"
    },
    {
        qusestion: "W rolę Denerys Targeryan wcieliła się:",
        a: "Margot Robbie",
        b: "Sophie Turner",
        c: "Emilia Clarke",
        d: "Lena Headey",
        correct: "a"
    }
];

const qusestion= document.getElementById('question');
const answearA= document.getElementById('a');
const answearB= document.getElementById('b');
const answearC= document.getElementById('c');
const answearD= document.getElementById('d');
let counter=0;

function getQuiz(){
    qusestion.innerHTML=questionsBase.qusestion[0];
    answearA.innerHTML=questionsBase.a[counter];
    answearB.innerHTML=questionsBase.b[counter];
    answearC.innerHTML=questionsBase.c[counter];
    answearD.innerHTML=questionsBase.d[counter];

}
getQuiz();