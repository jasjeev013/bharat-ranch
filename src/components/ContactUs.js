import React from 'react'

function ContactUs() {
    return (
        <div className="container text-center mt-5">
            <h1 className="display-4">Contact Us</h1>
            <p className="lead">We would love to hear from you.</p>
            <div className="d-flex justify-content-center mt-4">
                <form className="w-50">
                    <div className="form-row mb-3 d-flex justify-content-between">
                        <div className="col ">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="First Name"
                            />
                        </div>
                        <div className="col mx-1">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Last Name"
                            />
                        </div>
                    </div>
                    <div className="form-group mb-3">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                        />
                    </div>
                    <div className="form-group mb-3">
                        <textarea
                            className="form-control"
                            placeholder="Message"
                            rows="4"
                        ></textarea>
                    </div>
                    <div className="form-group mb-3">
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
