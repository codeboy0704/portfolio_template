import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project? </p>
        <p>Contact me now for a Free consultation.</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:ianm2927@hotmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:ianm2927@hotmail.com">ianm2927@hotmail.com</a>
        </div>
        <div>
        <a href="tel:+50760568927"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+50760568927">(+507) 60568927</a>
        </div>  
      </div>
    </Container>
  )
}