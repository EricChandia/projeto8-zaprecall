import React from "react";
import setinha from "../assets/img/setinha.png"




export default function Flashcard(props){
    const [flash, setFlash] = React.useState("flashcard");
    const [flashClicked, setFlashClicked] = React.useState("flashcard-clicked none");
    const [flashTurned, setFlashTurned] = React.useState("flashcard-turned none");
    const [flashAnswered, setFlashAnswered] = React.useState("flashcard-answered none");
    const [ionIcon, setIonIcon] = React.useState("");

    function showQuestion(){
        setFlash("flashcard none");
        setFlashClicked("flashcard-clicked");
    }

    function showAnswer(){
        setFlashClicked("flashcard-clicked none");
        setFlashTurned("flashcard-turned");
    }

    function showFlashcardAnswered(option){
        setFlashTurned("flashcard-turned none");
        setFlash("flashcard none");
        

        if(option === "naolembrei"){
            setFlashAnswered("flashcard-answered wrong");
            setIonIcon("close-circle");
            props.addnaolembrei();
            
        }else if(option === "quasenaolembrei"){
            setFlashAnswered("flashcard-answered almost");
            setIonIcon("help-circle");
            props.addquasenaolembrei();
        }else{
            setFlashAnswered("flashcard-answered right");
            setIonIcon("checkmark-circle");
            props.addzap();
        }
        
        
        
    }

    return(
        <div className="flashcard-container">
            <div className={flash} >
                <span className="question">Pergunta {props.card +1}</span>
                <ion-icon name="play-outline" onClick={showQuestion}></ion-icon>
            </div>
            <div className={flashClicked}>
                {props.question}
                <img src={setinha} alt="setinha" onClick={showAnswer}/>
            </div>
            <div className={flashTurned}>
                {props.answer}
                <span className="botoes">
                    <div className="nao-lembrei" onClick={() => showFlashcardAnswered("naolembrei")}>Não lembrei</div>
                    <div className="quase-nao-lembrei" onClick={() => showFlashcardAnswered("quasenaolembrei")}>Quase não lembrei</div>
                    <div className="zap" onClick={() => showFlashcardAnswered("zap")}>Zap!</div>
                </span>
            </div>
            <div className={flashAnswered}>
                    Pergunta {props.card +1}
                    <ion-icon name={ionIcon}></ion-icon>
            </div>
    </div>
    );
}
