import React from 'react';
import '../../pages/Project/ProjectPage.css'
import { Link } from 'react-router-dom';
import { ButtomGet } from '../ButtomGet/ButtomGet';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Swiper */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

/* Img */
const proyectImg = require.context('../../img', true);

const Project = () => {
    return (
        <section className="proyectos" id="proyectos">
            <h2 className="heading">
                <FormattedMessage
                    id='projects'
                    defaultMessage='Projects'
                />
            </h2>
            <div className="proyect-site" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <Swiper
                    spaceBetween={30}
                    loop={true}
                    grabCursor={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className='proyectos-slider mySwiper'
                >
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-5.png`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>Luxury Speedsters</h3>
                            <p>
                                Car rental
                            </p>
                            <p className="tecnologias">
                                HTML5
                                <span> -</span> Tailwind
                                <span> -</span> React
                                <span> -</span> Ruby
                                <span> -</span> RoR
                            </p>
                            <a href="https://rentals-app-egry.onrender.com/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/enmanuelbayen/futuristic-transportation" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-4.png`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>Recipe App</h3>
                            <p>
                              Public recipes website.
                            </p>
                            <p className="tecnologias">
                                HTML5
                                <span> -</span> Tailwind
                                <span> -</span> RoR
                                <span> -</span> Ruby
                            </p>
                            <a href="https://github.com/enmanuelbayen/Recipe-app" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/enmanuelbayen/Recipe-app" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-3.png`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>Budget App</h3>
                            <p>
                                Manage finances
                            </p>
                            <p className="tecnologias">
                                HTML5
                                <span> -</span> CSS
                                <span> -</span> JavaScript
                                <span> -</span> Ruby
                                <span> -</span> PostgreSQL
                            </p>
                            <a href="https://budget-app-owqv.onrender.com/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/enmanuelbayen/Budget-app-Capstone" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-2.png`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>Space Travelers Hub</h3>
                            <p>
                              Space missions and how to join them
                            </p>
                            <p className="tecnologias">
                                HTML5
                                <span> -</span> CSS
                                <span> -</span> JavaScript
                                <span> -</span> React
                                <span> -</span> Redux
                            </p>
                            <a href="https://space-travelers-hub-snowy.vercel.app/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/enmanuelbayen/space-Travelers-Hub" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-1.png`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>Air Pollution metric</h3>
                            <p>
                              Mobile version of SPA
                            </p>
                            <p className="tecnologias">
                                HTML5
                                <span> -</span> CSS
                                <span> -</span> JavaScript
                                <span> -</span> React
                                <span> -</span> Redux
                            </p>
                            <a href="https://loquacious-madeleine-868f45.netlify.app/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/enmanuelbayen/air-pollution-app" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="swiper-pagination"></div>
            </div>
            {/* <Link className="custom-btn btn-codigo portafolio-btn" to="/project">
                <FormattedMessage
                    id='btn-more-projects'
                    defaultMessage='More projects'
                />
            </Link> */}
            <div className='portafolio-btn'>
                <Link to="/project">
                    <ButtomGet/>
                </Link>
            </div>
        </section>

    )
};
export default React.memo(Project);