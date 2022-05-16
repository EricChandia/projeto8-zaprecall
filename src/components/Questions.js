import React from "react";
import image1 from "../assets/img/image1.png"
import setinha from "../assets/img/setinha.png"
import party from "../assets/img/party.png"
import sad from "../assets/img/sad.png"

function carregarFlashcards(){
    return([
        {id: 1, question: "O que é JSX?", answer: "JSX é uma sintaxe para escrever HTML dentro do JS"}, 
        {id: 2, question: "O React é __?", answer: "uma biblioteca JavaScript para construção de interfaces"}, 
        {id: 3, question: "Componentes devem iniciar com", answer: "maiúscula"},
        {id: 4, question: "Podemos colocar __ dentro do JSX", answer: "expressões"},
        {id: 5, question: "ReactDOM nos ajuda __ ", answer: "interagindo com a DOM para colocar componentes React na mesma"},
        {id: 6, question: "Usamos o npm para __", answer: "gerenciar os pacotes necessários e suas dependências"},
        {id: 7, question: "Usamos props para __ ", answer: "passar diferentes informações para componentes"},
        {id: 8, question: "estado (state) para __ ", answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"},
    ]);
}


function Flashcard(props){
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

function Acertos(props){
    //console.log(props.escolha);
    if(props.escolha === "naoLembrei")
    {
        return(<ion-icon name="close-circle" color="danger"></ion-icon>);
    }else if(props.escolha === "quaseNaoLembrei"){
        return(<ion-icon name="help-circle" color="warning"></ion-icon>);
    }else{
        return(<ion-icon name="checkmark-circle" color="success"></ion-icon>);
    }
}

function Concluido(props){


    for(let i=0;i<props.zaps.length;i++){
        if(props.zaps[i] === "naoLembrei"){
            return(
                <div className="concluido">
                    <span><img src={sad} alt=""/><strong>Puts...</strong></span>
                    Ainda faltam alguns... Mas não desanime!
                </div>
                ); 

        }else{
            return(
                <div className="concluido">
                    <span><img src={party} alt=""/><strong>Parabéns!</strong></span>
                    Você não esqueceu de nenhum flashcard!
                </div>
                );
        }
    }




    

}

export default function Questions(){
    const flashcards = carregarFlashcards();
    const zapsLenght = flashcards.length;

    const [zaps, setZaps] = React.useState([]);
    const [qtdZaps, setQtdZaps] = React.useState(0);

    const [completed, setCompleted] = React.useState(false);
    

    function addNaoLembrei(){
        zapsIncrement();
        const novosZaps = [...zaps, 'naoLembrei'];
        setZaps(novosZaps);
    }
    
    function addQuaseNaoLembrei(){
        zapsIncrement();
        const novosZaps = [...zaps, "quaseNaoLembrei"];
        setZaps(novosZaps);
    }
    
    function addZap(){
        zapsIncrement();
        const novosZaps = [...zaps, "zap"];
        setZaps(novosZaps);
    }

    function zapsIncrement(){
        setQtdZaps(qtdZaps + 1);
    }

    function zapsCompleted(){
        setCompleted(true);
    }

   

    return(
        <div className="questions">
        <span className="banner">
            <img src={image1} alt="banner_image" />
            <div className="tittle">ZapRecall</div>
        </span>
        <div className="flashcards">
            {flashcards.map((flashcard, index) => <Flashcard question={flashcard.question} answer={flashcard.answer} addnaolembrei={addNaoLembrei} addquasenaolembrei={addQuaseNaoLembrei} addzap={addZap} card={index}/>)}
            <div className="espaco"></div>
        </div>

        <div className={qtdZaps !== zapsLenght ? "footer" : "footer footer-a"}>
            {qtdZaps === zapsLenght ? <Concluido zaps={zaps} /> : ""}
            
            {qtdZaps}/{zapsLenght} CONCLUÍDOS
            <div className="acertos">
                {
                zaps.map
                    (
                    zap => 
                        (<Acertos escolha={zap}/>)
                    )
                }
            </div>
        </div>
    </div>);
}