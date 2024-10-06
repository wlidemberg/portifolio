// Importação de Icones
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoReact, IoLogoSass, IoLogoWordpress, IoLogoNodejs, IoLogoGithub,    } from "react-icons/io5";
import { SiAdobephotoshop, SiAdobeillustrator, SiCoreldraw, SiAdobeaftereffects  } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";


// Importação Sass
import '../styles/components/tecnologias.sass'

const skills = [
    { nome: 'HTML 5', icon: <IoLogoHtml5 /> },
    { nome: 'CSS 3', icon: <IoLogoCss3 /> },
    { nome: 'SASS', icon: <IoLogoSass /> },
    { nome: 'JS', icon: <IoLogoJavascript /> },
    { nome: 'REACT', icon: <IoLogoReact /> },
    { nome: 'NODE', icon: <IoLogoNodejs /> },
    { nome: 'GUTHUB', icon: <IoLogoGithub /> },
    { nome: 'WORDPRESS', icon: <IoLogoWordpress /> },
    { nome: 'FIGMA', icon: <IoLogoFigma /> },
    { nome: 'PHOTOSHOP', icon: <SiAdobephotoshop /> },
    { nome: 'ILLUSTRATOR', icon: <SiAdobeillustrator /> },
    { nome: 'AFTER EFFECTS', icon: <SiAdobeaftereffects /> },
    { nome: 'COREL DRAW', icon: <SiCoreldraw /> },
]

const Tecnologias = () => {
  return (
    <div className="skills">
        {skills.map((skill) => (
            <div key={skill.nome} className="skills-skill-item">
                <span>{skill.icon}</span>
                <p>{skill.nome}</p>
            </div>
        ))}
    </div>
  )
}

export default Tecnologias