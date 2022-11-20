import imgError from "../img/error.png";
import imgGood from "../img/good.png";
import logo from "../img/logo.png";


const Modal = ({show, setShow, error}) => {
    if(!show) return

    return (
        <div className="modal" onClick={setShow}>
            <div className="modal-content">
                <img width={25} src={error ? imgError : imgGood} alt=""/>
                <div className="modal-content-right">
                        {error ?
                        "Ces documents ne sont pas valides et sont protégés par":
                        "Vos documents ont été envoyés en toute sécurité à votre agence immobilière et protégés par  "}

                    <img width={100} src={logo} alt=""/>
                </div>

            </div>
        </div>
    )
}

export default Modal