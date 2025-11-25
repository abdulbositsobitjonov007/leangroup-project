

function Footer() {
    return (
        <footer className="bg-[#00103D0F] py-[30px] px-[20px]">
            <div className="container mx-auto">
                <div className="flex items-center justify-between pb-[10px]">
                    <a href=""><img src="/images/logo 2.svg" alt="" /></a>
                    <span className="flex items-center gap-[20px]">
                        <a href=""><img src="/images/vk.svg" alt="" /></a>
                        <a href=""><img src="/images/fb.svg" alt="" /></a>
                        <a href=""><img src="/images/linkedin.svg" alt="" /></a>
                    </span>
                </div>
                <hr />
                <div className="md:flex justify-between gap-[30px] pb-[50px] pt-[10px]">
                    <div className="flex gap-[80px] pb-[30px] md:pb-[0px]">
                        <ul className="flex flex-col gap-[10px]">
                            <li className="text-[24px] font-[600] pb-[10px]">Продукция</li>
                            <li><a href="">Ламинатные тубы</a></li>
                            <li><a href="">Экструзионные тубы</a></li>
                            <li><a href="">Другая упаковка</a></li>
                        </ul>
                        <ul className="flex flex-col gap-[10px]">
                            <li className="text-[24px] font-[600] pb-[10px]">Компания</li>
                            <li><a href="">О нас</a></li>
                            <li><a href="">Наша команда</a></li>
                            <li><a href="">Сертификаты</a></li>
                        </ul>
                        <ul className="flex flex-col gap-[10px]">
                            <li className="text-[24px] font-[600] pb-[10px]">Разделы</li>
                            <li><a href="">Контакты</a></li>
                            <li><a href="">Новости</a></li>
                            <li><a href="">Вакансии</a></li>
                        </ul>
                    </div>
                    <div className="grid grid-cols-2 gap-[50px]">
                        <ul className="flex flex-col gap-[10px]">
                            <li className="text-[#EF7C00] pb-[10px]">Беларусь</li>
                            <li>+375 (17) 270 53 77</li>
                            <li>+375 (17) 270 53 78</li>
                        </ul>
                        <ul className="flex flex-col gap-[10px]">
                            <li className="text-[#EF7C00] pb-[10px]">Европа</li>
                            <li>+48 73 1111 044</li>
                        </ul>
                        <ul className="flex flex-col gap-[10px]">
                            <li className="text-[#EF7C00] pb-[10px]">Москва</li>
                            <li>+7 (495) 280 73 44</li>
                            <li>+7 (495) 280 73 44</li>
                        </ul>
                        <ul className="flex flex-col gap-[10px]">
                            <li className="text-[#EF7C00] pb-[10px]">Екатеринбург</li>
                            <li>+7 (343) 346 82 06</li>
                        </ul>
                    </div>
                </div>
                <p>© 2022 Leangroup. All Rights Reserved. <br />
                Разработка и продвижение сайтов SkyWeb.by</p>
            </div>
        </footer>
    )
}

export default Footer