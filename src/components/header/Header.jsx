
function Header() {
    return (
        <>
            <header className="py-[13px] fixed top-[0] w-full bg-[white] px-[20px] shadow-xl z-[3]">
                <div className="container mx-auto flex items-center justify-between ">
                    <img src="/images/logo.svg" alt="" />
                    <ul className="hidden lg:flex items-center gap-[16px]">
                        <li><a className="hover:text-[#EF7C00] duration-300 text-[17px]" href="">Продукция</a></li>
                        <li className="text-[lightgrey] text-[25px]">|</li>
                        <li><a className="hover:text-[#EF7C00] duration-300 text-[17px]" href="">Сертификаты</a></li>
                        <li className="text-[lightgrey] text-[25px]">|</li>
                        <li><a className="hover:text-[#EF7C00] duration-300 text-[17px]" href="">Наша команда</a></li>
                        <li className="text-[lightgrey] text-[25px]">|</li>
                        <li><a className="hover:text-[#EF7C00] duration-300 text-[17px]" href="">О нас</a></li>
                        <li className="text-[lightgrey] text-[25px]">|</li>
                        <li><a className="hover:text-[#EF7C00] duration-300 text-[17px]" href="">Новости</a></li>
                        <li className="text-[lightgrey] text-[25px]">|</li>
                        <li><a className="hover:text-[#EF7C00] duration-300 text-[17px]" href="">Вакансии</a></li>
                        <li className="text-[lightgrey] text-[25px]">|</li>
                        <li><a className="hover:text-[#EF7C00] duration-300 text-[17px]" href="">Контакты</a></li>

                    </ul>
                    <span className="flex items-center gap-[10px]">
                        <p className="hover:text-[#EF7C00] duration-300 text-[17px]">RU</p>
                        <p className="text-[lightgrey] text-[25px]">|</p>
                        <p className="hover:text-[#EF7C00] duration-300 text-[17px]">EN</p>
                    </span>
                </div>
            </header>
        </>
    )
}

export default Header;