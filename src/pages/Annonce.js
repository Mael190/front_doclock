import Header from "../components/Header";
import annonce from "../img/annonce.png"
import '../styles/annonce.css'
import Card from "../components/Card";
import annonce1 from "../img/annonce-1.png";
import annonce2 from "../img/annonce-2.png";
import {useEffect} from "react";


const Annonce = () => {

    useEffect(() => {
        document.title = 'Studio meublé à louer';
    }, []);
    return (
        <>
            <Header />
            <main className="main-annonce">
                <div className="annonce">
                    <img src={annonce1} width={700} alt=""/>
                    <img src={annonce2} width={700} alt=""/>
                </div>
                <Card context="agency"/>
            </main>
        </>
    )
}

export default Annonce