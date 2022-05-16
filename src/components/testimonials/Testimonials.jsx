import './testimonials.css'
import 'swiper/css'
import 'swiper/css/pagination'

import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper";

const Testimonials = () => {

    const clients = [
        {
            clientImage: 'assets/avatar1.jpg',
            clientName: 'Rebecca Swan',
            clientReview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque beatae impedit ipsa minima ratione? Assumenda atque delectus magni perferendis rem sit ut? Amet, aperiam aspernatur illo impedit modi quam reprehenderit sequi sit sunt voluptate. Blanditiis esse ipsam maxime officia recusandae!'
        },
        {
            clientImage: 'assets/avatar2.jpg',
            clientName: 'Collin Qwant',
            clientReview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque beatae impedit ipsa minima ratione? Assumenda atque delectus magni perferendis rem sit ut? Amet, aperiam aspernatur illo impedit modi quam reprehenderit sequi sit sunt voluptate. Blanditiis esse ipsam maxime officia recusandae!'
        },
        {
            clientImage: 'assets/avatar3.jpg',
            clientName: 'Justin Somber',
            clientReview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque beatae impedit ipsa minima ratione? Assumenda atque delectus magni perferendis rem sit ut? Amet, aperiam aspernatur illo impedit modi quam reprehenderit sequi sit sunt voluptate. Blanditiis esse ipsam maxime officia recusandae!'
        },
        {
            clientImage: 'assets/avatar4.jpg',
            clientName: 'Patricia Bemelo',
            clientReview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque beatae impedit ipsa minima ratione? Assumenda atque delectus magni perferendis rem sit ut? Amet, aperiam aspernatur illo impedit modi quam reprehenderit sequi sit sunt voluptate. Blanditiis esse ipsam maxime officia recusandae!'
        },
    ]

    return (
        <section id="testimonials">
            <h5>Review From Clients</h5>
            <h2>Testimonials</h2>
            <Swiper
                pagination={{clickable: true}}
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                className="container testimonials__container">
                {
                    clients.map(({clientImage, clientName, clientReview}, index) => {
                        return (
                            <SwiperSlide key={index} className="testimonial">
                                <div className="client__avatar">
                                    <img src={clientImage} alt="Avatar"/>
                                </div>
                                <h5 className="client__name">{clientName}</h5>
                                <small className="client__review">{clientReview}</small>
                            </SwiperSlide>
                        );
                    })
                }
            </Swiper>
        </section>
    );
}

export default Testimonials