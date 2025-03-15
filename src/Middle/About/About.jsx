import React, {useState} from 'react';
import cl from './About.module.scss'

const About = () => {
    const [showRect, setShowRect] = useState(true)
    return (
        <div className={cl.container}>
            <div className={[cl.info, !showRect && cl.show].join(' ')}><h3 className='big bold grey'>Заказать суши в Москве</h3>
                <p className='mid reg grey'><br/>Ресторан “Суши и Лапша” предлагаем своим клиентам самые вкусные суши с
                    доставкой
                    на дом, приготовленные по классическим и адаптированным к европейской аудитории рецептам, а также
                    собственным наработкам наших поваров. Мы ценим время наших клиентов, поэтому вы можете заказать суши
                    в
                    Москве с доставкой на дом или в офис.
                    <br/><br/>В нашем меню более 20 видов суши:
                    <ul>
                        <li>Классические с сырым лососем, тунцом, окунем.</li>
                        <li>Экзотические с тигровой креветкой, морским гребешком.</li>
                        <li>Пикантные с копченым лососем, угрем.</li>
                    </ul>
                    В меню также представлены гунканы: с начинкой из красной икры и тобико, а также феликсы, где
                    японский
                    майонез сочетается с рыбой, морепродуктами, угрем. Любители острых блюд могут купить суши с соусом
                    спайси. Популярные начинки — копченая курица, снежный краб, креветки, гребешки, тунец, лосось и
                    окунь.
                </p>
            </div>
            <button className={[cl.more, !showRect && cl.show].join(' ')} onClick={() => setShowRect(prev => !prev)}>
                <div className={cl.buttonWrapper}>
                    <p className='big reg redOrange'>Подробнее</p>
                    <svg className={[cl.svg, !showRect && cl.show].join(' ')} width="17" height="9" viewBox="0 0 17 9"
                         fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 1L8.5 8L1 0.999999" stroke="#F46D40" strokeLinecap="round"/>
                    </svg>
                </div>
            </button>
        </div>
    );
};

export default About;