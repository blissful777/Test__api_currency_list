import React, { Component } from 'react';
import '../nav/Nav.css';

export default class Nav extends Component {

    render() {
        
        return (
            <header className='header'>
                <div className='header__nav'>
                <ul className='header__nav_list'>
                    <li><a href='/'>Главная страница</a></li>
                    <li><a href='https://quote.rbc.ru/?utm_source=topline' target='_blank' rel="noreferrer">Новости</a></li>
                    <li><a href='/pay'>Купить криптовалюту</a></li>
                    <li><a href='/trade'>Торговля</a></li>
                    <li><a href='/earn'>Обучение</a></li>
                    <li><a href='/help'>Служба поддержки</a></li>
                    <li><a href='/nft'>NFT</a></li>
                </ul>  
                </div>
                <div >
                <ul className='header__nav_sign_up'>
                <li><a href='sign_in' >Войти</a></li>
                <li><a href='sign_up' >Регистрация</a></li>
                </ul>  
            </div>
                </header>
                     
        )
    }
}


