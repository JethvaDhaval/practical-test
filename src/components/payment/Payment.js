import { Plan } from './Plan'
import { Pricing } from './Pricing'
import { Profile } from './Profile'
import React from 'react'

export default function Payment() {
    return (
        <div className="p-2">
            <div className="float-left">
                <Plan />
            </div>

            <div>
                <div >
                    <Profile />
                </div>
                <div >
                    <Pricing />
                </div>
            </div>
        </div >
    )
}
