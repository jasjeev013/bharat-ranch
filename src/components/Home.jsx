import React, { useEffect } from 'react'
import ControlledCarousel from './ControlledCarousel';
import Cards from './Cards';
import NewsLetter from './NewsLetter';
import ContactUs from './ContactUs';
import botLogo from '../images/botLogo.png'
import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from 'recoil';
import { isLoggedIn, userDetails } from '../state/atoms/atoms';
import { fetchuserDetails } from '../state/selectors/selectors';

function Home() {
    const isLoggedin = useRecoilValue(isLoggedIn);
    const [user, setUser] = useRecoilState(userDetails);
    const userDetailsloadable = useRecoilValueLoadable(fetchuserDetails);

    useEffect(() => {
        if (userDetailsloadable.state === 'hasValue') {

            const {name,email,contact,description,role,image,address} = userDetailsloadable.contents;
             setUser({name,email,contact,description,role,image,address});
            
        }
        
    }, [userDetailsloadable,setUser]);

    if (userDetailsloadable.state === 'loading') {
        return <div>Loading...</div>;
    }

    if (userDetailsloadable.state === 'hasError') {
        return <div>Error loading categories.</div>;
    }




    return (
        
        <div className='addMargin'>
            {console.log(isLoggedin)}
            {console.log(user)}
            <div className="d-flex justify-content-between" style={{
                backgroundColor: '#C1DAF9',
                // margin: '10px',
                color: '#8C644D',
                fontSize: '20px',
                fontWeight: 'bold',
                // borderRadius: '10px'
            }}>
                <div className="container">
                    <ControlledCarousel />
                </div>

                <div className='container my-5 '>
                    <img className='text-center my-1' style={{
                        width: '100px',
                        height: '130px',
                        margin: 'auto',
                        display: 'block'

                    }} src={botLogo} alt="" />
                    <h1 className="text-center" style={{
                        color: '#8C644D',
                        fontSize: '60px',

                        fontFamily: 'Rowdies',
                        fontWeight: '900',
                        fontStyle: 'normal'


                    }} >Krishi Bot</h1>
                    <p className="text-center text-justify-center" > <i>KrishiBot sees all,knows all</i> </p>
                    <div className='my-4' style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '70px'

                    }}>
                        <button style={{
                            backgroundColor: 'rgb(140, 100, 77,0.8)',
                            color: 'white',
                            padding: '10px 20px',
                            border: 'none',
                            borderRadius: '10px'

                        }}>Explore</button>
                        <button style={{
                            backgroundColor: 'rgb(140, 100, 77,0.8)',
                            color: 'white',
                            padding: '10px 20px',
                            border: 'none',
                            borderRadius: '10px'


                        }}>Know More</button>
                    </div>
                </div>
            </div>

            <Cards />
            <NewsLetter />
            <ContactUs />
        </div>
    )
}

export default Home
