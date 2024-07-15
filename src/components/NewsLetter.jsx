import React from 'react'

import Button from '@mui/material/Button';
function NewsLetter() {
    return (
        <div className="text-center mt-5" style={{
            backgroundColor: '#11181F',

            padding: '100px'
        }}>
            <h1 className="display-4" style={{
                fontFamily: 'Roboto Slab',
                fontWeight: '900',
                fontStyle: 'bold',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                fontSize: '50px',
                color: '#FEFEFE',

                marginBottom: '-4px'
            }}>Don't Miss Out</h1>
            <p className="lead" style={{
                color: '#FEFEFE',
                fontSize: '18px',
                fontFamily: 'Roboto Slab',

            }}>Subscribe to our newsletter for cool tips,articles & offers</p>
            <div className="d-flex justify-content-center mt-5" style={{
                backgroundColor: '#11181F',
                padding: '20px'
            }}>
                <form className="form-inline">
                    <div className="form-group mb-2 d-flex justify-content-center">
                        <input
                            type="email"
                            className="form-control rounded-pill placeholdrers"
                            id="inputEmail"
                            placeholder="Enter Email Id"
                            style={{
                                width: '700px',
                                border: '5px solid #888C8F',
                                height: '50px',
                                fontSize: '18px',
                                paddingLeft: "30px",
                                backgroundColor: '#888C8F',
                                // color:'white'
                            }}

                        />
                        <Button type="submit" style={{
                            backgroundColor: 'white',
                            color: 'black',
                            borderRadius: '10px',
                            padding: '10px 20px',
                            border: 'none',
                            marginLeft: '10px',
                            fontSize: '18px',

                            fontWeight: 'bold',
                            textTransform: 'none',
                            letterSpacing: '2px'
                        }} className="btn btn-primary rounded-pill mb-2 ml-2 mx-3 " variant="contained">Submit</Button>

                    </div>

                </form>
            </div>
        </div>
    )
}

export default NewsLetter
