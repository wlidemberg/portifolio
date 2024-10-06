
import Contatos from '../Contatos'
import Projetos from '../Projetos'
import RedesSocias from '../RedesSocias'
import Sobre from '../Sobre'
import Tecnologias from '../Tecnologias'


const Hero = () => {
  return (
    <>
        <h1>Berg Sousa</h1>
        <section className='hero-content'>
            <div className='hero-content-descricao'>
                
                <div className='descricao-teste'>
                    <figure>
                    
                    </figure>
                    
                    <h2>Desenvolvedor Front-End | Designer de Interface | Gerente de Processos</h2>
                    <p>Olá, sou Berg, estudante do 5º período de Análise e Desenvolvimento de Sistemas e desenvolvedor com foco em front-end. Estudo tecnologias como HTML, CSS, JavaScript, React e Sass, trago uma abordagem centrada na criação de interfaces dinâmicas e otimizadas. Minha trajetória profissional inclui mais de 20 anos de atuação como gerente de processos e pessoal em escritório contábil, o que me proporciona uma visão estratégica e eficiente para o desenvolvimento e gestão de projetos.</p>
                    <h3>Desenvolvedor</h3>
                    <a href="" className='btn'>Download Currículo</a>
                    <div className='redes-sociais'>
                        <RedesSocias />
                    </div>
                    <Contatos />
                </div>
                
            </div>
            <div className='hero-content-sobreMim'>
                <section>
                    <Sobre />
                </section>
                <section>
                    <h2>Tecnologias</h2>
                    <Tecnologias />
                </section>
                <section>
                    <h2>Projetos</h2>
                    <Projetos />
                </section>
            </div>
            
        </section>
        <section>React + SASS</section>
    </>
  )
}

export default Hero