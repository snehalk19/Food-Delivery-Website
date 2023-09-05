import RestaurantCard from "./RestaurantCard";
import restList from "../utils/mockData";
import { useState } from "react";

const Body = () => {

    

    // Normal JS Variable
    let listOfRestaurants = [
        { 
          "info": {
            "resId": 10159,
            "name": "Natural Ice Cream",
            "image": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/2\/10152\/dd88ed01246bc34c56200866611e9a21_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.4",
                "rating_text": "4.5",
                
            },
            "cuisine": [
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjMzXCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/pune\/restaurants\/ice-cream\/",
                    "name": "Ice Cream"
                }, 
            ],
         }
        },
        {  
         "info": {
            "resId": 10160,
            "name": "Dominos",
            "image": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/2\/10152\/dd88ed01246bc34c56200866611e9a21_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.4",
                "rating_text": "3.5" ,
                "rating_subtitle": "Very Good",
             
            },
            "cuisine": [
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjMzXCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/pune\/restaurants\/ice-cream\/",
                    "name": "Ice Cream"
                }, 
            ],
        }
        },
    ]
    
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    listOfRestaurants = listOfRestaurants.filter(   
                            (res) => res.info.rating.rating_text > 3 );
                    console.log(listOfRestaurants); 
                    }}
                > 
                    Top Rated Restaurants 
                </button>
            </div>
            <div className="rest-container">
                {
                    listOfRestaurants.map(restaurant => <RestaurantCard key={restaurant.info.resId}  restData={restaurant}/>)
                }
            </div>
        </div>
    );
};

export default Body;