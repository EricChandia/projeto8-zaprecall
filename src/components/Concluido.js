import React from "react";
import party from "../assets/img/party.png"
import sad from "../assets/img/sad.png"

export default function Concluido(props){


    for(let i=0;i<props.zaps.length;i++){
        console.log(props.zaps[i]);
        if(props.zaps[i] === "naoLembrei"){
            return(
                <div className="concluido">
                    <span><img src={sad} alt=""/><strong>Puts...</strong></span>
                    Ainda faltam alguns... Mas não desanime!
                </div>
                ); 

        }
    }
            return(
                <div className="concluido">
                    <span><img src={party} alt=""/><strong>Parabéns!</strong></span>
                    Você não esqueceu de nenhum flashcard!
                </div>
                ); 

}