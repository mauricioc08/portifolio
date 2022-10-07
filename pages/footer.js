import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Footer(props) {
  return (
    
    <footer className="footer" id="contato">
      <div className="footer-container">
        <p className="footer-texto">
          Estou disponível para novos projetos no momento. Entre em contato comigo e marcamos uma conversa 👋
        </p>
        <ul className="footer-contato">
          <li> mauricio-cassiano@hotmail.com</li>
          <li><a href="https://api.whatsapp.com/send?1=pt_BR&phone=5511945396825" target="_blank">Whatsapp</a></li>
          <li><a href="https://www.linkedin.com/in/mauricio-cassiano-4186b0164/" target="_blank">Linkedin</a></li>
          <li><a href="https://github.com/mauricioc08" target="_blank">GitHub</a></li>
        </ul>
        <p className="footer-copy">
          Mauricio Cassiano © Alguns direitos reservados.
        </p>
      </div>
    </footer>

  )
}
