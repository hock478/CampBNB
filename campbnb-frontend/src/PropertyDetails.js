import React from 'react'
import NewReservationForm from './NewReservationForm'

const PropertyDetails = (props) => {
    console.log(props) 

    return (
        <div className="propert-view-page">
            <div className="property-name">
                <h3>{props.property.name}</h3>
            </div>
            <div className="details">
                <p>A bunch of details here...</p>

            </div>
            <div className="reservation-form">
                <NewReservationForm property={props.property} userId={props.userId} />
            </div>

        </div>
    )
}
export default PropertyDetails