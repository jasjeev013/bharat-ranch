import React from 'react'
import ControlledCarousel from './ControlledCarousel';
import Cards from './Cards';
import NewsLetter from './NewsLetter';
import ContactUs from './ContactUs';


function Home() {
    return (
        <div>
            <div className="d-flex justify-content-between">
                <div className="container">
                    <ControlledCarousel />
                </div>

                <div className='container my-5 '>
                    <h1 className="text-center" >KrishiBot</h1>
                    <p className="text-center text-justify-center " >KrishiBot sees all,knows all</p>
                </div>
            </div>
            
            <Cards />
            <NewsLetter/>
            <ContactUs/>
        </div>
    )
}

export default Home
