import {useRef, useState} from "react";
import axios from "axios";
import '../styles/card.css';
import logo from '../img/logo.png'
import Modal from "./Modal";


const Card = ({context}) => {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        document: ""
    });
    const [file, setFile] = useState("");
    const [show, setShow] = useState(false);
    const [error, setError] = useState(null);


    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.type === 'file' ? e.target.files[0]: e.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const inputFile = useRef(null)

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!file || !inputs.name || inputs.email) return

        const url = process.env.API_URL

        const formData = new FormData();
        formData.append("identityCard", file);
        formData.append("name", inputs.name)
        formData.append("email", inputs.email)
        formData.append("context", context)

        axios.post(url , formData)
            .then(response => {
                setError(false)
                setShow(true)
            })
            .catch(error => {
                setError(true)
                setShow(true)
            })
    }

    return (
        <div className="card">
            <form  onSubmit={handleSubmit} autoComplete="off">
                <div className="card-input">
                    <label htmlFor="name">Nom</label>
                    <input required placeholder="Nom" type="text" name="name" value={inputs.name} onChange={handleChange} />
                </div>
                <div className="card-input">
                    <label htmlFor="email">Adresse mail</label>
                    <input required placeholder="Adresse mail" type="text" name="email" value={inputs.email} onChange={handleChange}/>
                </div>
                <div className="card-info">
                    <p>Veuillez nous transmettre un dossier complet :</p>
                    <ul>
                        <li>carte d’identité</li>
                        <li>fiche d’imposition de l’année en cours</li>
                        <li>3 derniers bulletins de salaire</li>
                        <li>justificatif de domicile</li>
                        <li>3 dernières quittances de loyer</li>
                    </ul>
                </div>
                <div className="card-input-file" onClick={() => {inputFile.current.click();}}>
                    <p>Déposer ou télécharger vos fichiers</p>
                    <button type="button">Télécharger</button>
                    <input required ref={inputFile} className="input-hidden" type="file" name="identityCard"  onChange={(e) => setFile(e.target.files[0])}/>
                </div>
                <div className="card-secure">
                    <p>Vos données sont protégées par</p>
                    <img src={logo} alt=""/>
                    <p style={{textDecoration: 'stroke'}}>En savoir plus</p>
                </div>
                <div className="card-right">
                    <input type="checkbox" name="checkbox-right" />
                    <label htmlFor="checkbox-right">Je ne souhaite pas recevoir les annonces similaires et les suggestions personnalisées de SeLoger.</label>
                </div>
                <input className="card-submit" type="submit"/>
                <p className="ref">Ref. GA3698OL</p>
            </form>
            <Modal error={error} show={show} setShow={() => setShow(false)}/>
        </div>
    )
}

export default Card