import React, { useState, useEffect } from "react";
import "./AllCourses.css";
import AllCoursesCard from "../AllCoursesCard/AllCoursesCard";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// redux
import { useSelector } from "react-redux";

function AllCourses() {
  const products = useSelector((state) => state.products.products);
  const categories = useSelector((state) => state.categories.categories);

  const [filtredProduct, setFiltredProducts] = useState([]);

  // const [filter, setFilter] = useState("");

  useEffect(() => {
    setFiltredProducts(products);
  }, [products]);

  const handleSearch = (e) => {
    const filter = e.target.value;
    let result = [products];

    if (filter === "all") {
      setFiltredProducts(products);
    } else {
      result = products.filter((data) => {
        return (
          data.productCategory.category.toLowerCase().search(filter) !== -1
        );
      });

      setFiltredProducts(result);
    }
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div class="col mt-5 all__courses__container">
      <div class="row">
        <div class="col">
          <h1 class="what__to__learn">What to learn next ?</h1>
        </div>
      </div>

      <div class="row mb-5 justify-content-center">
        <div class="input-group col-sm-5 justify-content-center">
          <select
            class="custom-select"
            id="inputGroupSelect04"
            onChange={(e) => handleSearch(e)}
          >
            <option selected value="all">
              All courses
            </option>
            {categories.map(({ category }) => (
              <option value={category.toLowerCase()}>{category}</option>
            ))}
          </select>
         
        </div>
      </div>

      <div class="row justify-content-sm-center">
        <div class="col col-sm-10">
          <Slider {...settings}>
            {products &&
              filtredProduct.map((product) => (
                <AllCoursesCard key={product._id} product={product} />
              ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default AllCourses;
