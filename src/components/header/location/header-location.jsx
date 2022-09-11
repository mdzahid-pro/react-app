import React from "react";

export default function HeaderLocation(){
    return (
        <div className="location">
            <div className="form-group">
                <i className="las la-map-marker icon"></i>
                <select id="address_country_ship_2" defaultValue={''}>
                    <option value="" disabled=""> Select Location</option>
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Italy">Italy</option>
                    <option value="Germany">Germany</option>
                    <option value="France">France</option>
                    <option value="Spain">Spain</option>
                    <option value="Australia">Australia</option>
                    <option value="Finland">Finland</option>
                    <option value="Austria">Austria</option>
                    <option value="Belgium">Belgium</option>
                    <option value="Brazil">Brazil</option>
                    <option value="Canada">Canada</option>
                    <option value="Chile">Chile</option>
                    <option value="Cuba">Cuba</option>
                    <option value="India">India</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="Japan">Japan</option>
                </select>
            </div>
        </div>
    );
}