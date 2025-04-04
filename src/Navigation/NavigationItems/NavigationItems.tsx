import React from 'react';
import {Link} from "react-router-dom";
import cl from './NavigationItems.module.scss'

type Props = {
    name: string,
    svg: string,
    additions: string,
    url: string,
}

const NavigationItems = ({name, svg, additions, url}: Props) => {
    return (
        <li className={cl.container}>
            <div>
                <img src={svg} alt={name}/>
            </div>
            <Link className={[cl.link, 'link', 'big', 'reg', 'black'].join(' ')} to={url}>{name}</Link>
            {additions
                ?
                <p className={[cl.addition, 'reg', 'white'].join(' ')}>{additions}</p>
                :
                null}
        </li>
    );
};

export default NavigationItems;