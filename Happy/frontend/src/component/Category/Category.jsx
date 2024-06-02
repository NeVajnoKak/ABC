import React, { useState } from 'react'

import flower from '../../assets/img/flower.jpeg'
import filter from '../../assets/img/filter.svg'
import chevronUp from '../../assets/img/chevron-compact-up.svg'
import chevronDown from '../../assets/img/chevron-compact-down.svg'


const Category = ({ title, color, hidden }) => {
    const isHidden = isEmpty(hidden)
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const handleToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    function isEmpty(str) {
        if (str === undefined || str === null) {
            return false;
        }
        return str.trim() !== '';
    }

    return (
        <>
            <section className="py-5">
                <div className="container px-4 mt-5 ps-0">
                    <div className="row">
                        <div className={`${isHidden ? '' : 'd-none'} col-3 ps-0' `} >
                            <div class="card" style={{ width: "18rem" }}>
                                <div class="card-body">
                                    <div className="row border-bottom pb-3">
                                        <div className="col-1 me-2">
                                            <img src={filter} alt="" width={20} height={20} />
                                        </div>
                                        <div className="col">
                                            <div className='filter-text'>Фильтр</div>
                                        </div>
                                    </div>

                                    <div className="row" onClick={handleToggle} data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                                        <div className="col">
                                            <p class="card-text pt-3" >
                                                Тип букета
                                            </p>
                                        </div>
                                        <div className="col d-flex justify-content-end mt-auto">
                                        <img src={isMenuOpen ? chevronUp : chevronDown} alt="" width={20} height={20} />

                                        </div>
                                    </div>


                                    <div class="collapse show mt-3" id="home-collapse" >
                                        <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                            <li>
                                                <div class="form-check">
                                                    <input class="form-check-custom checkbox" type="checkbox" value="" id="buketCheck" />
                                                    <label class="form-check-label gold-text" for="buketCheck">
                                                        Букеты
                                                    </label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="form-check">
                                                    <input class="form-check-custom checkbox" type="checkbox" value="" id="flowersCheck" />
                                                    <label class="form-check-label gold-text" for="flowersCheck">
                                                        Цветы в коробке
                                                    </label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">An item</li>
                                    <li class="list-group-item">A second item</li>
                                    <li class="list-group-item">A third item</li>
                                </ul>
                                <div class="card-body">
                                    <a href="#" class="card-link">Card link</a>
                                    <a href="#" class="card-link">Another link</a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="row mb-3">
                                <div className="col">
                                    <div className="category-name mb-2">{title}</div>
                                    <div className={`${color} category-line`}></div>
                                </div>
                                <div className="col d-flex justify-content-end">
                                    <button className={`${color}  ${isHidden ? 'd-none' : ''} custom-btn category-btn `}>Посмотреть все</button>
                                </div>
                            </div>

                            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                                <div className="col mb-5">
                                    <div className="card h-100">
                                        <img className="card-img-top border-bottom" src={flower} alt="..." />
                                        <div className="card-body p-4">
                                            <div className="text-center">
                                                <h5 className="">Эквадорские розы, кустовые хризантемы, альстромерии</h5>
                                                <span className="text-muted text-decoration-line-through muted ">от 120 000 т</span><br />
                                                <span className="price">от 100 000 т</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Category