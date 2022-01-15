import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzas } from "../actions/pizzaActions";
import Loading from "../Components/Loading";
import Pizza from "../Components/Pizza";
import Error from "../Components/Error";
import "./HomePage.css";

function HomePage() {
  const dispatch = useDispatch();
  const pizzaState = useSelector((state) => state.getAllPizzasReducer);
  const { pizzas, error, loading } = pizzaState;
  useEffect(() => {
    dispatch(getAllPizzas());
  }, []);
  return (
    <div className="pi">
      {loading ? (
        <p>
          <Loading />
        </p>
      ) : error ? (
        <h1>
          <Error error="Something went wrong" />
        </h1>
      ) : (
        pizzas.map((pizza) => {
          return (
            <div>
              <div>
                <Pizza pizza={pizza} />
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default HomePage;
