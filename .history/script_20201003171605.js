const questionsBase=[
    {
        qusestion: "Skrot GOT oznacza:",
        a: "Game of Thrones",
        b: "Game of Technology",
        c: "Game of Time",
        d: "Game of Transfer",
        correct: "a"
    },
    {
        qusestion: "W role Denerys Targeryan wcielila sie:",
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
let current;
let score=0;

function getQuiz(){
    current = questionsBase[counter];
    qusestion.innerHTML=current.qusestion;
    answearA.innerHTML=current.a;
    answearB.innerHTML=current.b;
    answearC.innerHTML=current.c;
    answearD.innerHTML=current.d;

}
getQuiz();

function next(){

    const elements= document.getElementsByName('answ');
    for(i=0;i<elements.length;i++){
        if(elements[i].checked)
        {console.log(current.correct);
            if(elements[i].value==current.correct){
                score++;
            }
        }
    }
    counter++;
    getQuiz();
    //console.log(elements.length);
}