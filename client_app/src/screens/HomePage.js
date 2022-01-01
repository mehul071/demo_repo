import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import pizzasdata from "../4.1 pizzasdata";
import { getAllPizzas } from "../actions/pizzaActions";
import Pizza from "../Components/Pizza";
import "./HomePage.css";

function HomePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPizzas());
  }, []);
  return (
    <div className="pi">
      {pizzasdata.map((pizza) => {
        return (
          <div>
            <div>
              <Pizza pizza={pizza} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default HomePage;
