import {useParams} from "react-router-dom";
import {useState} from "react";
import axios from "axios";


const Upload = () => {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        document: ""
    });
    const [identityCard, setIdentityCard] = useState("")

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.type === 'file' ? e.target.files[0]: e.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const url = "https://doclock.cleverapps.io/applications/"

        console.log('doooooooc' + inputs.document)

        const formData = new FormData();
        formData.append("identityCard", identityCard);
        formData.append("name", inputs.name)
        formData.append("identityCard", inputs.email)
        formData.append("context", "agency")

        axios.post(url , formData)
            .then(response => {

            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <h1>Demande de </h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nom</label>
                <input type="text" name="name" value={inputs.name} onChange={handleChange} />
                <label htmlFor="email">Adresse mail</label>
                <input type="text" name="email" value={inputs.email} onChange={handleChange}/>
                <label htmlFor="identityCard">Document</label>
                <input type="file" name="identityCard"  onChange={(e) => setIdentityCard(e.target.files[0])}/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default Upload