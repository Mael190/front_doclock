import logo from "../img/logo-txt.png";
import "../styles/agence.css";

const Agence = () => {


    return (
        <>
            <div className="side-bar">
                <div className="logo-txt">
                    <p></p>
                </div>
                <img src={logo} alt=""/>
                <div className="side-bar-content">
                    <a href="">Accueil</a>
                    <a href="">Gestion de dossiers</a>
                    <a href="">Annonces</a>
                    <a href="">Candidatures</a>
                    <a href="">RGPD</a>
                    <a href="">Contact</a>
                </div>
            </div>
        </>
    )
}

export default Agence