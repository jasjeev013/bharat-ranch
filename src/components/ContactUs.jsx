import React from 'react'

function ContactUs() {
    return (
        <div className=" text-center mt-5" style={{
            backgroundColor: '#C1DAF9',
            padding: '20px',

        }}>
            <h1 className="display-4" style={{
                // fontFamily: 'Rowdies',
                fontWeight: '900',
                fontStyle: 'bold',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                fontSize: '50px',
                color: 'black',
                marginBottom: '-6px'
            }}>Contact Us</h1>
            <p className="lead" style={{
                color: 'black',
                fontSize: '18px',
                // fontFamily: 'Rowdies',
            }}>We would love to hear from our feedback.</p>
            <div className="d-flex justify-content-center mt-5" style={{
                backgroundColor: '#C1DAF9',
                padding: '40px'
            }}>
                <form className="w-50">
                    <div className="form-row mb-3 d-flex justify-content-between">
                        <div className="col mx-5">
                            <input
                                type="text"
                                className="form-control contact-input-box "
                                placeholder="First Name"

                            />
                        </div>
                        <div className="col mx-5">
                            <input
                                type="text"
                                className="form-control contact-input-box "
                                placeholder="Last Name"
                            />
                        </div>
                    </div>
                    <div className="form-group mb-4 mx-5">
                        <input
                            type="email"
                            className="form-control contact-input-box "
                            placeholder="Email"
                        />
                    </div>
                    <div className="form-group mb-5 mx-5">
                        <textarea
                            className="form-control contact-input-box "
                            placeholder="Message"
                            rows="4"
                            style={{
                                height: '160px'
                            }}
                        ></textarea>
                    </div>
                    <div className="form-group mb-4 mx-5" style={{
                        display: 'flex',
                        justifyContent: 'center',

                    }}>
                        <button type="submit" className="btn btn-primary" style={{
                            width: '100%'

                        }}>
                            Submit
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default ContactUs
