import React from "react";
import Flashcard from "./Flashcards";
import Concluido from "./Concluido";
import Acertos from "./Acertos";

import image1 from "../assets/img/image1.png"

function carregarFlashcards(){
    let flashcards = [
        {id: 1, question: "O que é JSX?", answer: "JSX é uma sintaxe para escrever HTML dentro do JS"}, 
        {id: 2, question: "O React é __?", answer: "uma biblioteca JavaScript para construção de interfaces"}, 
        {id: 3, question: "Componentes devem iniciar com", answer: "maiúscula"},
        {id: 4, question: "Podemos colocar __ dentro do JSX", answer: "expressões"},
        {id: 5, question: "ReactDOM nos ajuda __ ", answer: "interagindo com a DOM para colocar componentes React na mesma"},
        {id: 6, question: "Usamos o npm para __", answer: "gerenciar os pacotes necessários e suas dependências"},
        {id: 7, question: "Usamos props para __ ", answer: "passar diferentes informações para componentes"},
        {id: 8, question: "a forma correta de atualizar o estado de um tipo de dado não primitivo no React", answer: "[...objeto, NovoItem]"}
    ];

    flashcards = flashcards.sort( () => Math.random() - 0.5);
    console.log(flashcards);
    return(flashcards);
}


const flashcards = carregarFlashcards();
export default function Questions(){
    
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