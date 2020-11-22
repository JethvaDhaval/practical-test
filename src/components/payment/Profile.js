import '../css/Profile.css'
import '../css/Payment.css'

import React from 'react'

export const Profile = () => {
    return (
            <div className="card profile payment">
                <img className="card-img-top p-1 proimg" src="https://live.staticflickr.com/1193/903860066_302cf914ba_b.jpg" alt="Card image cap" />
                <img
                    className="mx-auto rounded-circle"
                    style={{ marginTop: "-35px", border: "3px solid white", width: "70px", height: "70px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdX7wWCMOvGYD6_4-MthVKf-DjjgLF_GqQzg&usqp=CAU"
                    alt="image" />
                <div className="card-body">
                    <h5 className="card-title">Rechard Jonson</h5>
                    <h6 className="card-title" style={{ color: "#C7CBCF" }}>Los Angeles</h6>
                    <a href="#" className="btn btn-primary prolevel pl-3 pr-3">Pro Level</a>

                    <div className="mt-4 d-flex justify-content-around">

                        <h6 style={{ color: "#C7CBCF" }}>Followers
                    <br />
                            <span className="text-dark">
                                <h4>
                                    980
                                </h4>
                            </span>
                        </h6>

                        <h6 style={{ color: "#C7CBCF" }}  >Projects
                    <br />
                            <span className="text-dark">
                                <h4>
                                    980
                                </h4>
                            </span>
                        </h6>


                        <h6 style={{ color: "#C7CBCF" }} >Rank
                    <br />
                            <span className="text-dark">
                                <h4>
                                    980
                                </h4>
                            </span>
                        </h6>
                    </div>
                </div>
            </div>
       

    )
}
