
const qusestion= document.getElementById('question');
const answearA= document.getElementById('a');
const answearB= document.getElementById('b');
const answearC= document.getElementById('c');
const answearD= document.getElementById('d');
let counter=0;
let current;
let score=0;
const sizeBase=questionsBase.length;

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
    if(questionsBase.length!=counter+1)
    {
        const elements= document.getElementsByName('answ');
        for(i=0;i<elements.length;i++){
            if(elements[i].checked){
                if(elements[i].value==current.correct){
                    score++;
                }
            }
        }
        counter++;
        getQuiz();
    }
    else{
        alert("Uzyskałeś "+score+"/"+questionsBase.length+" punktów");
    }

}