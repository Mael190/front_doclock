import Card from "../components/Card";
import credit1 from  "../img/credit-1.png";
import credit2 from  "../img/credit-2.png";
import credit3 from  "../img/credit-3.png";
import Modal from "../components/Modal";
import {useEffect, useState} from "react";


const Credit = () => {
    useEffect(() => {
        document.title = 'Demande de crédit';
    }, []);

    return (
        <main>
            <img src={credit1} alt="" className="fullsize" />
            <div className="container">
                <img src={credit2} alt=""  />
                <Card context="credit" />
            </div>
            <img src={credit3} className="fullsize" alt=""/>
        </main>
    )

}

export default Credit