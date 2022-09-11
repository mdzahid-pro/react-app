import React from "react";

export default function IconRating({avg_rating}){

    console.log(avg_rating)
    return (
        <>
            { (() => {
                let arr = [];
                for(let i = 0; i < avg_rating; i++){
                    arr.push(<i className="las la-star icon"></i>)
                }
                    
                for (let i = avg_rating; i < 5; i++){
                    arr.push(<i class="lar la-star icon"></i>)
                }

                return arr;
            })() }
        </>
    );
}