import '../css/Pricing.css'
import '../css/Payment.css'

import React from 'react'

export const Pricing = () => {
    return (
            <div className="card pricing payment">
                <div className="card-body">
                    <h5 className="card-title text-left">Set up your pricing</h5>
                    <h6 className="card-subtitle mb-4 text-muted text-left">Please set up your hourly or fixed rate
                    so that the client is aware of your pricing</h6>
                    <div className="mt-4 mb-4 d-flex justify-content-between">
                        <a type="button" className="btn btn-outline-secondary pl-4 pr-4">Hourly</a>
                        <a type="button" className="btn btn-outline-secondary pl-4 pr-4">Fixed</a>
                    </div>
                    <h4 style={{ padding: "5px", float: "left" }}>
                        <sup style={{ color: "#C7CBCF" }}>$</sup>
            180
            <sub style={{ color: "#C7CBCF", fontSize: "15px" }}>/hour</sub>
                    </h4>
                    <input type="range" className="form-control" name="vol" min="0" max="50" />
                    <div className="d-flex justify-content-between">
                        <h6 className="text-muted">$20</h6>
                        <h6 className="text-muted">$300</h6>
                    </div>
                </div>
            </div>
    )
}
