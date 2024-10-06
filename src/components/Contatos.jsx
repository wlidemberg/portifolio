// Importação de Icones
import { FaPhoneVolume, FaEnvelope, FaMapLocationDot } from "react-icons/fa6";


// importação de estilos
import './../styles/components/contatos.sass'

const contatos = [
    {name: 'telefone', icon: <FaPhoneVolume />, dado: '(21) 9999-9999'},
    {name: 'email', icon: <FaEnvelope />, dado: 'automatizei@gmail.com'},
    {name: 'cidade', icon: <FaMapLocationDot />, dado: 'Nova Iguaçu/RJ'},
]


const Contatos = () => {
  return (
    <section className="contato-container">
        {contatos.map((contato) => (
            <div key={contato.name} className="contato-container-card">
                <span className="contato-container-card-icon">{contato.icon}</span>
                <div>
                    <h4 className="contato-container-card-title">{contato.name}</h4>
                    <p className="contato-container-card-paragraph">{contato.dado}</p>
                </div>
            </div>
        ))}
    </section>
  )
}

export default Contatos