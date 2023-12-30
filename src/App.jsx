import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import LivingRoom from "./pages/livingroom/LivingRoom";
import Sofas from "./pages/sofas/Sofas";

function App() {
  const [data, setData] = useState([
    {
      name: "Comfort",
      text: "green 2-Seater velvet sofa",
      price: 299,
      image: "/sofasCards/comfort.png",
      rating: "fa-solid fa-star",
      halfrating: "fa-regular fa-star-half-stroke",
    },
    {
      name: "Ancient",
      text: "green 2-Seater velvet sofa",
      price: 159,
      image: "/sofasCards/ancient.png",
      rating: "fa-solid fa-star",
    },
    {
      name: "Special",
      text: "green 2-Seater velvet sofa",
      price: 499,
      image: "/sofasCards/ancient2.png",
      rating: "fa-solid fa-star",
      halfrating: "fa-regular fa-star-half-stroke",
    },
    {
      name: "Ancient",
      text: "green 2-Seater velvet sofa",
      price: 399,
      image: "/sofasCards/ancient3.png",
      rating: "fa-solid fa-star",
    },
    {
      name: "Sassy",
      text: "green 2-Seater velvet sofa",
      price: 199,
      image: "/sofasCards/ancient4.png",
      halfrating: "fa-regular fa-star-half-stroke",
    },
    {
      name: "Sunny",
      text: "green 2-Seater velvet sofa",
      price: 299,
      image: "/sofasCards/comfort2.png",
      rating: "fa-solid fa-star",
    },
    {
      name: "Comfort",
      text: "green 2-Seater velvet sofa",
      price: 499,
      image: "/sofasCards/comfort3.png",
      rating: "fa-solid fa-star",
    },
    {
      name: "Special",
      text: "green 2-Seater velvet sofa",
      price: 400,
      image: "/sofasCards/comfort4.png",
      halfrating: "fa-regular fa-star-half-stroke",
      rating: "fa-solid fa-star",
    },
    {
      name: "Classy",
      text: "green 2-Seater velvet sofa",
      price: 699,
      image: "/sofasCards/comfort5.png",
      rating: "fa-solid fa-star",
    },
    {
      name: "Ancient",
      text: "green 2-Seater velvet sofa",
      price: 299,
      image: "/sofasCards/sassy.png",
      halfrating: "fa-regular fa-star-half-stroke",
      rating: "fa-solid fa-star",
    },
    {
      name: "Classy",
      text: "green 2-Seater velvet sofa",
      price: 150,
      image: "/sofasCards/sassy2.png",
      halfrating: "fa-regular fa-star-half-stroke",
    },
    {
      name: "Comfort",
      text: "green 2-Seater velvet sofa",
      price: 250,
      image: "/sofasCards/seater.png",
      rating: "fa-solid fa-star",
      rating: "fa-solid fa-star",
    },
    {
      name: "Ancient",
      text: "green 2-Seater velvet sofa",
      price: 299,
      image: "/sofasCards/special.png",
      rating: "fa-solid fa-star",
      halfrating: "fa-regular fa-star-half-stroke",
    },
    {
      name: "Comfort",
      text: "green 2-Seater velvet sofa",
      price: 359,
      image: "/sofasCards/special2.png",
      rating: "fa-solid fa-star",
      halfrating: "fa-regular fa-star-half-stroke",
    },
    {
      name: "Sassy",
      text: "green 2-Seater velvet sofa",
      price: 449,
      image: "/sofasCards/sunny.png",
      rating: "fa-solid fa-star",
    },
    {
      name: "Comfort",
      text: "green 2-Seater velvet sofa",
      price: 399,
      image: "/sofasCards/classy.png",
      halfrating: "fa-regular fa-star-half-stroke",
      rating: "fa-solid fa-star",
    },
    {
      name: "Seater",
      text: "green 2-Seater velvet sofa",
      price: 199,
      image: "/sofasCards/classy2.png",
      halfrating: "fa-regular fa-star-half-stroke",
    },
    {
      name: "Classy",
      text: "green 2-Seater velvet sofa",
      price: 269,
      image: "/sofasCards/classy3.png",
      rating: "fa-solid fa-star",
    },
    {
      name: "Seater",
      text: "green 2-Seater velvet sofa",
      price: 499,
      image: "/sofasCards/best.jpg",
      rating: "fa-solid fa-star",
      halfrating: "fa-regular fa-star-half-stroke",
    },
    {
      name: "Classy",
      text: "green 2-Seater velvet sofa",
      price: 1342,
      image: "/sofasCards/best1.png",
      rating: "fa-solid fa-star",
      halfrating: "fa-regular fa-star-half-stroke",
    },
    {
      name: "Sassy",
      text: "green 2-Seater velvet sofa",
      price: 1500,
      image: "/sofasCards/best3.jpg",
      rating: "fa-solid fa-star",
      halfrating: "fa-regular fa-star-half-stroke",
    },
    {
      name: "Ancient",
      text: "green 2-Seater velvet sofa",
      price: 1110,
      image: "/sofasCards/best4.jpg",
      rating: "fa-solid fa-star",
      halfrating: "fa-regular fa-star-half-stroke",
    },
    {
      name: "Comfort",
      text: "green 2-Seater velvet sofa",
      price: 1023,
      image: "/sofasCards/best5.jpg",
      rating: "fa-solid fa-star",
      halfrating: "fa-regular fa-star-half-stroke",
    },
    {
      name: "Classy",
      text: "green 2-Seater velvet sofa",
      price: 943,
      image: "/sofasCards/best6.jpg",
      rating: "fa-solid fa-star",
      halfrating: "fa-regular fa-star-half-stroke",
    },
    {
      name: "Seater",
      text: "green 2-Seater velvet sofa",
      price: 745,
      image: "/sofasCards/best7.jpg",
      rating: "fa-solid fa-star",
      halfrating: "fa-regular fa-star-half-stroke",
    },
    {
      name: "Special",
      text: "green 2-Seater velvet sofa",
      price: 235,
      image: "/sofasCards/best8.jpg",
      halfrating: "fa-regular fa-star-half-stroke",
    },
    {
      name: "Ancient",
      text: "green 2-Seater velvet sofa",
      price: 249,
      image: "/sofasCards/best9.jpeg",
      rating: "fa-solid fa-star",
    },
    {
      name: "Special",
      text: "green 2-Seater velvet sofa",
      price: 400,
      image: "/sofasCards/best10.jpeg",
      rating: "fa-solid fa-star",
      halfrating: "fa-regular fa-star-half-stroke",
    },
    {
      name: "Comfort",
      text: "green 2-Seater velvet sofa",
      price: 539,
      image: "/sofasCards/best11.jpg",
      rating: "fa-solid fa-star",
      halfrating: "fa-regular fa-star-half-stroke",
    },
    {
      name: "Seater",
      text: "green 2-Seater velvet sofa",
      price: 799,
      image: "/sofasCards/best12.jpg",
      rating: "fa-solid fa-star",
      halfrating: "fa-regular fa-star-half-stroke",
    },
    {
      name: "Classy",
      text: "green 2-Seater velvet sofa",
      price: 220,
      image: "/sofasCards/best13.jpg",
      halfrating: "fa-regular fa-star-half-stroke",
    },
    {
      name: "Comfort",
      text: "green 2-Seater velvet sofa",
      price: 506,
      image: "/sofasCards/best14.png",
      rating: "fa-solid fa-star",
      halfrating: "fa-regular fa-star-half-stroke",
    },
    {
      name: "Special",
      text: "green 2-Seater velvet sofa",
      price: 305,
      image: "/sofasCards/best15.jpg",
      rating: "fa-solid fa-star",
    },
  ]);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/livingroom" element={<LivingRoom />} />
        <Route path="/sofas" element={<Sofas data={data} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
