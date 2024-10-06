// Importação de Imagens
import assescor from '../imgs/assescor.webp'
import audioBook from '../imgs/audioBook.webp'
import cariocaImoveis from '../imgs/cariocaImoveis.webp'
import irrf2024 from '../imgs/irrf2024.webp'
import secretWord from '../imgs/secretWord.webp'
import siteContadora from '../imgs/siteContadora.webp'

// Importação de Icones
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoReact } from "react-icons/io5";

// Importação sass
import '../styles/components/projetos.sass'

// Objeto de Projetos
const projetos = [
    
    {
        nome: 'Assescor',
        link: 'https://wlidemberg.github.io/html-css/',
        imagem: assescor,
        tecnologias:[
            {
                nome: 'HTML 5',
                icon: <IoLogoHtml5 />
            },
            {
                nome: 'CSS 3',
                icon: <IoLogoCss3 />
            }
        ]
    },
    {
        nome: 'Carioca Imoveis',
        link: 'https://wlidemberg.github.io/cariocaImoveis/',
        imagem: cariocaImoveis,
        tecnologias:[
            {
                nome: 'HTML 5',
                icon: <IoLogoHtml5 />
            },
            {
                nome: 'CSS 3',
                icon: <IoLogoCss3 />
            }
        ]
    },
    {
        nome: 'Audio Book', 
        link:'https://wlidemberg.github.io/audioBook/',
        imagem: audioBook,
        tecnologias: [
            {
                nome: 'HTML 5',
                icon: <IoLogoHtml5 />
            },
            {
                nome: 'CSS 3',
                icon: <IoLogoCss3 />
            },
            {
                nome: 'Javascript',
                icon: <IoLogoJavascript />
            }
           
        ]
    },
    {
        nome: 'Thamires Ferreira',
        link: 'https://wlidemberg.github.io/thamires-ferreira/',
        imagem: siteContadora,
        tecnologias: [
            {
                nome: 'HTML 5',
                icon: <IoLogoHtml5 />
            },
            {
                nome: 'CSS 3',
                icon: <IoLogoCss3 />
            }
        ]
    },
    {
        nome: 'Caculadora IRRF 2024',
        link: 'https://wlidemberg.github.io/calcirrf2024/',
        imagem: irrf2024,
        tecnologias:  [
            {
                nome: 'HTML 5',
                icon: <IoLogoHtml5 />
            },
            {
                nome: 'CSS 3',
                icon: <IoLogoCss3 />
            },
            {
                nome: 'Javascript',
                icon: <IoLogoJavascript />
            }
        ]
    },
    {
        nome: 'secret word',
        link: 'https://wlidemberg.github.io/react_secret_word/',
        imagem: secretWord,
        tecnologias: [
            {
                nome: 'HTML 5',
                icon: <IoLogoHtml5 />
            },
            {
                nome: 'CSS 3',
                icon: <IoLogoCss3 />
            },
            {
                nome: 'Javascript',
                icon: <IoLogoJavascript />
            },
            {
                nome: 'React',
                icon: <IoLogoReact />   
            }
        ]
    }
]

const Projetos = () => {
  return (
    <div className='cards'>
        {projetos.map((projeto) => (
           <div key={projeto.nome} className='cards-card'>
                <h3>{projeto.nome}</h3>
                <img src={projeto.imagem} alt={"Imagem do Projeto " + projeto.nome} className='cards-card-img' />
                <div className='cards-card-tecnologias'>
                   {projeto.tecnologias.map((tecnologia) => (
                    <div key={tecnologia.nome} className='cards-card-tecnologias-tecnologia'>

                        <p>{tecnologia.nome}</p>
                        <p>{tecnologia.icon}</p>
                    </div>
                   ))} 
                </div>
                <a href={projeto.link} target="_blank" className='cards-card-btn'>Ver Projeto</a>
           </div>
        ))}

    </div>
  )
}

export default Projetos