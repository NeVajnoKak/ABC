import React from 'react'

import logo from '../../assets/img/logo.png'
import profile from '../../assets/img/profile.png'
import globus from '../../assets/img/globus.png'
import cart from '../../assets/img/cart.png'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg mt-2">
                <div className="container">
                    <Link className="navbar-brand me-auto" href="#"><img src={logo} alt="" width="193.59px" height="29px"/> </Link>
                    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Logo</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <Link className="nav-link mx-lg-2 active text-uppercase" aria-current="page" href="#">Главная</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link mx-lg-2 text-uppercase" href="#">Цветы</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link mx-lg-2 text-uppercase" href="#">Торты</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link mx-lg-2 text-uppercase" href="#">Шарики</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link mx-lg-2 text-uppercase" href="#">Аниматоры</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link mx-lg-2 text-uppercase" href="#">Артисты</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img src={profile} alt="" className="me-2"/>
                        <Link href="#" className="login-button me-3 text-uppercase">Вход</Link>
                        <span className="me-3">/</span>
                        <Link href="#" className="login-button me-2 text-uppercase">Регистрация</Link>
                        <span className="me-3">|</span>

                        <Link href="#" className="cart-container me-3">
                            <img src={cart} alt="Cart" className="cart-icon"/>
                                <span className="cart-count">12</span>
                        </Link>
                        <span className="me-3">|</span>

                        <div href="#" className="globus-text">
                            <img src={globus} alt="" className="globus-icon"/>
                                <span className="text-uppercase">Rus</span>
                        </div>
                        <button className="navbar-toggler pe-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                            aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                </div>
            </nav>
        </>
    )
}

export default Header