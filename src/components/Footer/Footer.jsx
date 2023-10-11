import logoFooter from './../../assets/logoFooter.png'
import './Footer.css';
import FooterLink from './FooterLink/FooterLink';
function Footer() {

  return (
    <>
      <div className='bg-[#001A29]'>
        <div className='footer w-full h-500 flex flex-row gap-2 px-6 py-2 bg-[#001A29]'>
          <div className='flex flex-wrap justify-evenly gap-y-6 m-auto w-full md:w-2/3'>
            {/* Lista de contacto */}
            <FooterLink title={"Contacto"} links={["serviar@gmail.com", "11-1234-5678"]} />
            {/* Lista de redes sociales */}
            <FooterLink title={"Redes sociales"} links={["Instagram", "Facebook", "Twitter"]} a={true} />
          </div>
          <div className='logofooter w-1/3'>
            <img src={logoFooter} alt="logo de zonaeduca" />
          </div>
        </div>
        <p className='copi'>©2023 Serviar. Conocé los términos de uso y nuestra política de privacidad.</p>
      </div>
    </>
  );
}

export default Footer;
