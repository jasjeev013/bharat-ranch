import React from 'react'

function NewsLetter() {
    return (
        <div className="container text-center mt-5">
            <h1 className="display-4">Don't Miss Out</h1>
            <p className="lead">Subscribe to our newsletter</p>
            <div className="d-flex justify-content-center mt-4">
                <form className="form-inline">
                    <div className="form-group mb-2 d-flex justify-content-center">
                        <input
                            type="email"
                            className="form-control rounded-pill"
                            id="inputEmail"
                            placeholder="Enter Email Id"
                            style={{ width: '300px' }}
                        />
                        <button type="submit" className="btn btn-primary rounded-pill mb-2 ml-2 mx-3 " >
                            Submit
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default NewsLetter
