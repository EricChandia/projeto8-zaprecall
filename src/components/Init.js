import React from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/img/image1.png"

export default function Init() {
    return (
    <div className="init">
    <img src={image1} alt="ZapRecall"/>
    <div className="tittle">ZapRecall</div>
    <Link
                  to="/questions"
                  className="botao-iniciar"
                >
                  Iniciar Recall!
                </Link>
    </div>
    );
}