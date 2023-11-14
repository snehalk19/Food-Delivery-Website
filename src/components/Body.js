import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import restList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  // Local State Variable - Super powerful variable
  // const [listOfRestaurants, setlistOfRestaurants] = useState(restList);
  // const [filteredRestaurants, setFilteredRestaurants] = useState(restList);

  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const RestaurantCardLabel = withPromotedLabel(RestaurantCard);

  const [searchText, setSearchText] = useState("");
  // Normal JS Variable
  let listOfRestaurantsJS = [
    {
      info: {
        resId: 10159,
        name: "Natural Ice Cream",
        image: {
          url: "https://b.zmtcdn.com/data/pictures/chains/2/10152/dd88ed01246bc34c56200866611e9a21_o2_featured_v2.jpg",
        },
        rating: {
          has_fake_reviews: 0,
          aggregate_rating: "4.4",
          rating_text: "4.5",
        },
        cuisine: [
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjMzXCJdfSJd",
            url: "https://www.zomato.com/pune/restaurants/ice-cream/",
            name: "Ice Cream",
          },
        ],
      },
    },
    {
      info: {
        resId: 10160,
        name: "Dominos",
        image: {
          url: "https://b.zmtcdn.com/data/pictures/chains/2/10152/dd88ed01246bc34c56200866611e9a21_o2_featured_v2.jpg",
        },
        rating: {
          has_fake_reviews: 0,
          aggregate_rating: "4.4",
          rating_text: "3.5",
          rating_subtitle: "Very Good",
        },
        cuisine: [
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjMzXCJdfSJd",
            url: "https://www.zomato.com/pune/restaurants/ice-cream/",
            name: "Ice Cream",
          },
        ],
      },
    },
  ];

  useEffect(() => {
    console.log("useEffect called");
    fetchData();
  }, []);

  //console.log("Body rendered");

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    //    console.log(json);

    //console.log(json.data.cards[1].card.card.gridElements.infoWithStyle);

    //setlistOfRestaurants(json.data.cards[2].data.data.cards)

    // console.log(
    //   json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
    // Optional Chaining
    setListOfRestraunt(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // Conditional Rendering
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4 flex items-center">
          <input
            type="text"
            className="border border-black border-solid mr-4"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>

          <button
            className="px-4 py-2 bg-green-200 rounded-lg"
            onClick={() => {
              //console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>

        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-200 m-4 items-center rounded-lg"
            onClick={() => {
              //console.log(listOfRestaurants);
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRatingString > 4.5
              );
              //setlistOfRestaurants(filteredList);
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant?.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant?.info.promoted ? (
              <RestaurantCardLabel resData={restaurant?.info} />
            ) : (
              <RestaurantCard resData={restaurant?.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
