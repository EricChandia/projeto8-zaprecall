import React from "react";

export default function Acertos(props){
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