/* Import de Icones */
import { FaLinkedin, FaGithub, FaSquareInstagram  } from "react-icons/fa6";

/* Estilos */
import '../styles/components/redesSocias.sass'

const redes = [
    {name: 'linkedin', icon: <FaLinkedin />, redeUrl: 'https://www.linkedin.com/in/wlidemberg-sousa-465367101/'},
    {name: 'github', icon: <FaGithub />, redeUrl: 'https://github.com/wlidemberg'},
    {name: 'instagram', icon: <FaSquareInstagram />, redeUrl: 'https://www.instagram.com/sousa.berg.80/'}
]



const RedesSocias = () => {
  return (
    <div id="redes-container">
        {redes.map((social) => (
            <a href={social.redeUrl} className="social-btn" id={social.name} key={social.name} target="_blank">{social.icon}</a>
        ))}
    </div>
  )
}

export default RedesSocias