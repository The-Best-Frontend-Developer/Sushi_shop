import React from 'react';
import cl from './Navigation.module.scss'
import NavigationItems from "./NavigationItems/NavigationItems";
import {Link} from "react-router-dom";
import svg1 from './NavigationItems/images/1.svg';
import svg2 from './NavigationItems/images/2.svg';
import svg3 from './NavigationItems/images/3.svg';
import svg4 from './NavigationItems/images/4.svg';
import svg5 from './NavigationItems/images/5.svg';
import svg6 from './NavigationItems/images/6.svg';
import svg7 from './NavigationItems/images/7.svg';
import svg8 from './NavigationItems/images/8.svg';
import svg9 from './NavigationItems/images/9.svg';
import svg10 from './NavigationItems/images/10.svg';

const Navigation = () => {
    const navigationList = [
        {id: 1, name: 'Пицца', svg: svg1, additions: '', URL: '/pizza'},
        {id: 2, name: 'Сеты', svg: svg2, additions: '', URL: '/sets'},
        {id: 3, name: 'WOK', svg: svg3, additions: '', URL: '/WOK'},
        {id: 4, name: 'Роллы', svg: svg4, additions: '', URL: '/rolls'},
        {id: 5, name: 'Суши', svg: svg5, additions: '', URL: '/sushi'},
        {id: 6, name: 'Салаты', svg: svg6, additions: 'скоро', URL: '/salads'},
        {id: 7, name: 'Супы', svg: svg7, additions: 'скоро', URL: '/soaps'},
        {id: 8, name: 'Корн доги', svg: svg8, additions: '', URL: '/corn-dogs'},
        {id: 9, name: 'Напитки', svg: svg9, additions: '', URL: '/drinks'},
        {id: 10, name: 'Акции', svg: svg10, additions: '', URL: '/special-offers'},
    ]

    return (
        <div className={cl.container}>
            <Link className={cl.logo} to='/'>
                <img src="/src/Navigation/logo.png" alt="Romsem logo" style={{width: 100, aspectRatio: 1}}/>
                <h2 className={[cl.shopName, 'light', 'black'].join(' ')}>ROMSEM</h2>
            </Link>
            <div className={cl.line}></div>
            <nav>
                <ul className={cl.navigationList}>
                    {navigationList.map((el) => (
                        <NavigationItems
                            key={el.id}
                            name={el.name}
                            svg={el.svg}
                            additions={el.additions}
                            url={el.URL}
                        />
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;