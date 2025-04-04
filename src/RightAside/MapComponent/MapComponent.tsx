import cl from './MapComponent.module.scss';
import React from 'react';

const MapComponent = () => {
    return (
        <div className={cl.container}>
            <iframe className={cl.map}
                    src="https://www.google.com/maps?q=Москва&output=embed&z=12&controls=0&disableDefaultUI=1"
                    width="100%"
                    height="100%"
                    style={{border: 0}}
                    allowFullScreen
                    aria-hidden="false"
                    tabIndex={0}>
            </iframe>
            <div className={cl.mapDescription}>
                <div className={cl.circleMarker}>
                    <svg width="26" height="38" viewBox="0 0 26 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M13 0C5.88891 0 0.103516 5.78532 0.103516 12.8964C0.103516 15.754 1.7859 20.0999 5.39812 26.5731C7.86304 30.9899 10.3166 34.7206 10.4201 34.8778L12.1935 37.5658C12.3723 37.8369 12.6752 38 13 38C13.3248 38 13.6278 37.8369 13.8066 37.5658L15.5799 34.8779C15.6824 34.7226 18.1181 31.0241 20.6019 26.5731C24.2141 20.1002 25.8965 15.7543 25.8965 12.8964C25.8965 5.78532 20.1111 0 13 0ZM18.9144 25.6313C16.4651 30.0201 14.0679 33.6605 13.9669 33.8135L13 35.2791L12.0335 33.8139C11.9319 33.6597 9.51628 29.9866 7.08562 25.6313C3.73498 19.6268 2.03605 15.3422 2.03605 12.8964C2.03605 6.85092 6.95443 1.93254 13 1.93254C19.0456 1.93254 23.964 6.85092 23.964 12.8964C23.964 15.3425 22.2651 19.627 18.9144 25.6313Z"
                            fill="#F2F2F2"/>
                        <path
                            d="M13 5.6655C9.05723 5.6655 5.84961 8.8732 5.84961 12.8159C5.84961 16.7586 9.05723 19.9663 13 19.9663C16.9428 19.9663 20.1504 16.7586 20.1504 12.8159C20.1504 8.8732 16.9428 5.6655 13 5.6655ZM13 18.0337C10.1228 18.0337 7.78215 15.693 7.78215 12.8159C7.78215 9.93872 10.1228 7.59803 13 7.59803C15.8772 7.59803 18.2178 9.93872 18.2178 12.8159C18.2178 15.693 15.8772 18.0337 13 18.0337Z"
                            fill="#F2F2F2"/>
                    </svg>
                </div>
                <div className={cl.text}>
                    <h3 className='big medium black'>Укажите адрес</h3>
                    <p className='mid reg grey'>И узнайте время доставки</p>
                </div>
            </div>
        </div>
    );
};

export default MapComponent;