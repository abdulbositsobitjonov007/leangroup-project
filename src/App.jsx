import './App.css'
import Certificates from './components/certificatesCarousel/certificates';
import Footer from './components/footer/Footer';


import Header from './components/header/Header';
import HeroCarousel from './components/heroCarousel/Hero-carousel';

import OurTeam from './components/ourTeam/OurTeam';
import ReactTabs from './components/react-tabs/ReactTabs';

// const certificates = [
//   {
//     images: "",
//   },
//   {
//     images: "/images/image 8.png",
//   },
//   {
//     images: "/images/image 9.png",
//   },
//   {
//     images: "/images/image 10.png",
//   },
//   {
//     images: "/images/image 11.png",
//   }
// ];

const teamMembers = [
  {
    photo: "/images/m-1.png",
    fullName: "Войнич Дарья",
    status: "Заместитель директора по продажам",
    telNumber: "+375 (17) 270-53-77 (317)",
    persNumb: "",
    email: "",
  },
  {
    photo: "/images/m-2.png",
    fullName: "Мисько Екатерина",
    status: "Начальник отдела сопровождения",
    telNumber: "+375 (17) 270-53-77 (115)",
    persNumb: " +375 29 112-73-48",
    email: "k.melnichenko@leangroup.by",
  },
  {
    photo: "/images/m-3.png",
    fullName: "Дмитроченко Дмитрий",
    status: "Начальник отдела допечатной подготовки",
    telNumber: "+375 (17) 270-53-77 (333)",
    persNumb: " +375 29 360-32-26",
    email: "dmitrochenko@leangroup.by",
  },
  {
    photo: "/images/m-4.png",
    fullName: "Антух Евгений",
    status: "Начальник отдела снабжения",
    telNumber: "+375 (17) 270-53-77 (148)",
    persNumb: " +375 44 764-16-28",
    email: "j.antuh@leangroup.by",
  },
  {
    photo: "/images/m-5.png",
    fullName: "Мисник Елена",
    status: "Специалист по работе с клиентами",
    telNumber: "+375 (17) 270-53-77 (322)",
    persNumb: " +375 29 329-34-03",
    email: "e.misnik@leangroup.by",
  },
]

function App() {
  return (
    <>
      <Header />

      <main>

        <section className='pt-[81px]'>
          <div className=''>
            <HeroCarousel />
          </div>
        </section>

        <section className='py-[40px] px-[20px]'>
          <div className='container mx-auto'>
            <h1 className='text-[32px] font-[600] text-center pb-[35px]'>О компании <span className='text-[#EF7C00]'>LEANGROUP</span></h1>
            <div className='xl:flex items-center justify-center gap-[30px]'>
              <div className='max-w-[1300px] w-full h-full pb-[30px]'>
                <iframe className='w-full max-w-[1300px] xl:w-[600px] 2xl:w-[750px]' height={300} src="https://www.youtube.com/embed/19u4NDOHE9w?si=PS4FCn_yT1ewLZ6Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <div>
                <p className='text-[#2C2D2E]'>Компания ООО «ЛеанГрупп» начала свою деятельность в 1999 году и на сегодняшний день является ведущей компанией по производству ламинатных и экструзионных туб.
                  <br /><br />
                  Имея две технологии – для производства ламинатных и экструзионных туб, мы предлагаем вам широкий спектр возможностей. Большим преимуществом является собственный печатный цех в ламинате и in-line печать в экструзии с возможностью различных дополнительных опций декора. Особое внимание уделяется работе с поставщиками для контроля и поддержания качества производимой нами продукции.
                  <br /><br />
                  С января 2018 года компания стала членом Европейской Ассоциации производителей туб (ETMA), что подтверждает сильную позицию бренда и на рынке Европы. </p>
              </div>
            </div>
          </div>
        </section>

        <section className='py-[40px] px-[20px]'>
          <div className='container mx-auto'>
            <h1 className='text-[32px] font-[600] text-center pb-[35px]'>Качество продукции подтверждают  <span className='text-[#EF7C00]'>сертификаты</span></h1>
            <Certificates />
          </div>
        </section>

        <section className='py-[40px] px-[20px]'>
          <div className='container mx-auto flex flex-col items-center'>
            <h1 className='text-[32px] font-[600] text-center pb-[35px]'>Наша <span className='text-[#EF7C00]'>продукция</span></h1>
            <ReactTabs/>

            <a className='py-[10px] px-[20px] bg-transparent border-[1px] border-[#EF7C00] text-[#EF7C00] hover:bg-[#EF7C00] hover:text-[white] duration-300 rounded-[5px] mt-[40px]' href="">Перейти в каталог</a>
          </div>
        </section>

        <section className=' py-[40px] px-[20px]'>
          <div className='container mx-auto relative h-[400px] rounded-[14px] object-cover overflow-hidden shadow-grey shadow-2xl'>
            <img className='w-full h-full bg-center bg-no-repeat object-cover' src="/images/form_banner 1.png" alt="" />
            <div className='absolute top-[24px] left-[20px]'>
              <h1 className='text-[32px] font-[600] text-center pb-[20px] leading-[35px]'>Получить подробную <span className='text-[#EF7C00]'>информацию</span></h1>
              <p className='max-w-[400px]'>Просто заполните форму, наш менеджер свяжетсяс вами в ближайшее время</p>
              <form className='py-[35px] flex flex-col gap-[12px]' action="">
                <div className='flex items-center gap-[12px]'><span className='flex items-center bg-[white]'><img className='p-[13px] border-[1px] border-[#00103D1F] rounded-l-[8px] rounded-r-[0px]' src="/images/Vector.svg" alt="" /><input required className='max-w-[178px] border-[1px] border-[#00103D1F] bg-[#ffffff] h-[42px] pl-[15px] rounded-r-[8px]' placeholder='Ваше имя' type="text" /></span><span className='flex items-center bg-[white]'><img className='p-[13px] border-[1px] border-[#00103D1F] rounded-l-[8px] rounded-r-[0px]' src="/images/Vector (1).svg" alt="" /><input required className='max-w-[178px] bg-[#ffffff] border-[1px] border-[#00103D1F] h-[42px] pl-[15px] rounded-r-[8px]' placeholder='+375 (29) 0000000' type="tel" /></span></div>
                <div className=''><input required placeholder='Комментарий' className='pl-[15px] pb-[40px] bg-[white] max-w-[453px] w-full h-[80px] border-[1px] border-[#00103D1F] rounded-[8px]' type="textarea" /></div>
                <span><button className='bg-[#EF7C00] text-[white] py-[10px] px-[40px] rounded-[8px] hover:bg-[orangered] duration-300 cursor-pointer' >Получить информацию</button></span>
              </form>
            </div>
          </div>
        </section>

        <section className='py-[50px] px-[20px]'>
          <div className='container mx-auto'>
            <h1 className='text-[32px] font-[600] text-center pb-[20px]'>Наша <span className='text-[#EF7C00]'>команда</span></h1>
            <div className='grid grid-cols-5 gap-[20px]'>
              {
                teamMembers.map((el) => (
                  <OurTeam photo={el.photo} fullName={el.fullName} status={el.status} telNumber={el.telNumber} persNumb={el.persNumb} email={el.email}/>
                ))
              }
            </div>
            <div className='flex justify-center pt-[10px]'>
              <a className=' py-[10px] px-[20px] bg-transparent border-[1px] border-[#EF7C00] text-[#EF7C00] hover:bg-[#EF7C00] hover:text-[white] duration-300 rounded-[5px] mt-[40px]' href="">Перейти в каталог</a>
            </div>
          </div>
        </section>

        <section className='pt-[40px] pb-[60px] px-[20px]'>
          <div className='container mx-auto'>
            <h1 className='text-[32px] font-[600] text-center pb-[20px]'>Новости</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]'>
              <div className='flex flex-col gap-[10px]'>
                <div className='max-w-[650px]'>
                  <img className='h-[250px] object-cover w-full' src="/images/Leangroup-media-pic-2048x2048_04a-январь 1.png" alt="" />
                </div>
                <p className='text-[13px] text-[#919399]'>28.01.2022</p>
                <h4>"ЛеанГрупп" серебряный призер EcoVadis!</h4>
              </div>
              <div className='flex flex-col gap-[10px]'>
                <div className='350px'>
                  <img className='h-[250px] object-cover w-full' src="/images/Leangroup-media-pic-2048x2048_04a-январь 1 (1).png" alt="" />
                </div>
                <p className='text-[13px] text-[#919399]'>21.01.2022</p>
                <h4>"ЛеанГрупп" серебряный призер EcoVadis!</h4>
              </div>
              <div className='flex flex-col gap-[10px]'>
                <img className='h-[250px] w-full' src="/images/Leangroup-media-pic-2048x2048_04a-январь 1 (3).png" alt="" />
                <p className='text-[13px] text-[#919399]'>16.12.2021</p>
                <h4>Туба, как вид упаковки</h4>
              </div>
            </div>
            <div className='flex justify-center pt-[10px]'>
              <a className=' py-[10px] px-[20px] bg-transparent border-[1px] border-[#EF7C00] text-[#EF7C00] hover:bg-[#EF7C00] hover:text-[white] duration-300 rounded-[5px] mt-[40px]' href="">Все новости</a>
            </div>
          </div>
        </section>

      </main>

<Footer/>

    </>
  )
}

export default App;

