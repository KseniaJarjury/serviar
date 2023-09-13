import logoFooter from './../../assets/logoFooter.png'
import './Footer.css';
import FooterLink from './FooterLink/FooterLink';
function Footer() {

  return (
    <>
    <div className='bg-[#001A29]'>
        <div className='footer w-full h-500 flex flex-row gap-8 px-10 py-5'>
            <div className='flex flex-wrap justify-evenly gap-y-6 m-auto w-full md:w-2/3'>
                {/* Lista de contacto */}
                <FooterLink title={"Contacto"} links={["serviar@gmail.com","11-1234-5678"]}/>
                {/* Lista de redes sociales */}
                <FooterLink title={"Redes sociales"} links={["Instagram","Facebook","Twitter"]} a={true}/>
            </div>
            <div className='w-full md:w-1/3 '>
                <img src={logoFooter} alt="logo de zonaeduca" className='max-w-[250px] w-1/2 md:w-full text-left'/>
            </div>
        </div>
        <p className='text-white text-center font-bold w-full m-auto mt-12'>©2023 Serviar. Conocé los términos de uso y nuestra política de privacidad.</p>
      </div>
    </>
  );
}

export default Footer;
