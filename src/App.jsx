import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import LivingRoom from "./pages/livingroom/LivingRoom";
import Sofas from "./pages/sofas/Sofas";
import Modal from "./pages/modal/Modal";
import Contact from "./pages/contact/Contact";

function App() {
  // DATABASE

  const [data, setData] = useState([
    {
      id: "1",
      amount: "1",
      name: "Comfort",
      text: "green 2-Seater velvet sofa",
      price: 299,
      image: "/sofasCards/comfort.png",
      rating: "fa-solid fa-star",
      halfrating: "fa-regular fa-star-half-stroke",
    },
    {
      id: "2",
      amount: "1",
      name: "Ancient",
      text: "green 2-Seater velvet sofa",
      price: 159,
      image: "/sofasCards/ancient.png",
      rating: "fa-solid fa-star",
    },
    {
      id: "3",
      amount: "1",
      name: "Special",
      text: "green 2-Seater velvet sofa",
      price: 499,
      image: "/sofasCards/ancient2.png",
      rating: "fa-solid fa-star",
      halfrating: "fa-regular fa-star-half-stroke",
    },
    {
      id: "4",
      amount: "1",
      name: "Ancient",
      text: "green 2-Seater velvet sofa",
      price: 399,
      image: "/sofasCards/ancient3.png",
      rating: "fa-solid fa-star",
    },
    {
      id: "5",
      amount: "1",
      name: "Sassy",
      text: "green 2-Seater velvet sofa",
      price: 199,
      image: "/sofasCards/ancient4.png",
      halfrating: "fa-regular fa-star-half-stroke",
    },
    {
      id: "6",
      amount: "1",
      name: "Sunny",
      text: "green 2-Seater velvet sofa",
      price: 299,
      image: "/sofasCards/comfort2.png",
      rating: "fa-solid fa-star",
    },
    {
      id: "7",
      amount: "1",
      name: "Comfort",
      text: "green 2-Seater velvet sofa",
      price: 499,
      image: "/sofasCards/comfort3.png",
      rating: "fa-solid fa-star",
    },
    {
      id: "8",
      amount: "1",
      name: "Special",
      text: "green 2-Seater velvet sofa",
      price: 400,
      image: "/sofasCards/comfort4.png",
      halfrating: "fa-regular fa-star-half-stroke",
      rating: "fa-solid fa-star",
    },
    {
      id: "9",
      amount: "1",
      name: "Classy",
      text: "green 2-Seater velvet sofa",
      price: 699,
      image: "/sofasCards/comfort5.png",
      rating: "fa-solid fa-star",
    },
    {
      id: "10",
      amount: "1",
      name: "Ancient",
      text: "green 2-Seater velvet sofa",
      price: 299,
      image: "/sofasCards/sassy.png",
      halfrating: "fa-regular fa-star-half-stroke",
      rating: "fa-solid fa-star",
    },
    {
      id: "11",
      amount: "1",
      name: "Classy",
      text: "green 2-Seater velvet sofa",
      price: 150,
      image: "/sofasCards/sassy2.png",
      halfrating: "fa-regular fa-star-half-stroke",
    },
    {
      id: "12",
      amount: "1",
      name: "Comfort",
      text: "green 2-Seater velvet sofa",
      price: 250,
      image: "/sofasCards/seater.png",
      rating: "fa-solid fa-star",
      rating: "fa-solid fa-star",
    },
    {
      id: "13",
      amount: "1",
      name: "Ancient",
      text: "green 2-Seater velvet sofa",
      price: 299,
      image: "/sofasCards/special.png",
      rating: "fa-solid fa-star",
      halfrating: "fa-regular fa-star-half-stroke",
    },
    {
      id: "14",
      amount: "1",
      name: "Comfort",
      text: "green 2-Seater velvet sofa",
      price: 359,
      image: "/sofasCards/special2.png",
      rating: "fa-solid fa-star",
      halfrating: "fa-regular fa-star-half-stroke",
    },
    {
      id: "15",
      amount: "1",
      name: "Sassy",
      text: "green 2-Seater velvet sofa",
      price: 449,
      image: "/sofasCards/sunny.png",
      rating: "fa-solid fa-star",
    },
    {
      id: "16",
      amount: "1",
      name: "Comfort",
      text: "green 2-Seater velvet sofa",
      price: 399,
      image: "/sofasCards/classy.png",
      halfrating: "fa-regular fa-star-half-stroke",
      rating: "fa-solid fa-star",
    },
    {
      id: "17",
      amount: "1",
      name: "Seater",
      text: "green 2-Seater velvet sofa",
      price: 199,
      image: "/sofasCards/classy2.png",
      halfrating: "fa-regular fa-star-half-stroke",
    },
    {
      id: "18",
      amount: "1",
      name: "Classy",
      text: "green 2-Seater velvet sofa",
      price: 269,
      image: "/sofasCards/classy3.png",
      rating: "fa-solid fa-star",
    },
    {
      id: "19",
      amount: "1",
      name: "Seater",
      text: "green 2-Seater velvet sofa",
      price: 499,
      image: "/sofasCards/best.jpg",
      rating: "fa-solid fa-star",
      halfrating: "fa-regular fa-star-half-stroke",
    },
    {
      id: "20",
      amount: "1",
      name: "Classy",
      text: "green 2-Seater velvet sofa",
      price: 1342,
      image: "/sofasCards/best1.png",
      rating: "fa-solid fa-star",
      halfrating: "fa-regular fa-star-half-stroke",
    },
    {
      id: "21",
      amount: "1",
      name: "Sassy",
      text: "green 2-Seater velvet sofa",
      price: 1500,
      image: "/sofasCards/best3.jpg",
      rating: "fa-solid fa-star",
      halfrating: "fa-regular fa-star-half-stroke",
    },
    {
      id: "22",
      amount: "1",
      name: "Ancient",
      text: "green 2-Seater velvet sofa",
      price: 1110,
      image: "/sofasCards/best4.jpg",
      rating: "fa-solid fa-star",
      halfrating: "fa-regular fa-star-half-stroke",
    },
    {
      id: "23",
      amount: "1",
      name: "Comfort",
      text: "green 2-Seater velvet sofa",
      price: 1023,
      image: "/sofasCards/best5.jpg",
      rating: "fa-solid fa-star",
      halfrating: "fa-regular fa-star-half-stroke",
    },
    {
      id: "24",
      amount: "1",
      name: "Classy",
      text: "green 2-Seater velvet sofa",
      price: 943,
      image: "/sofasCards/best6.jpg",
      rating: "fa-solid fa-star",
      halfrating: "fa-regular fa-star-half-stroke",
    },
    {
      id: "25",
      amount: "1",
      name: "Seater",
      text: "green 2-Seater velvet sofa",
      price: 745,
      image: "/sofasCards/best7.jpg",
      rating: "fa-solid fa-star",
      halfrating: "fa-regular fa-star-half-stroke",
    },
    {
      id: "26",
      amount: "1",
      name: "Special",
      text: "green 2-Seater velvet sofa",
      price: 235,
      image: "/sofasCards/best8.jpg",
      halfrating: "fa-regular fa-star-half-stroke",
    },
    {
      id: "27",
      amount: "1",
      name: "Ancient",
      text: "green 2-Seater velvet sofa",
      price: 249,
      image: "/sofasCards/best9.jpeg",
      rating: "fa-solid fa-star",
    },
    {
      id: "28",
      amount: "1",
      name: "Special",
      text: "green 2-Seater velvet sofa",
      price: 400,
      image: "/sofasCards/best10.jpeg",
      rating: "fa-solid fa-star",
      halfrating: "fa-regular fa-star-half-stroke",
    },
    {
      id: "29",
      amount: "1",
      name: "Comfort",
      text: "green 2-Seater velvet sofa",
      price: 539,
      image: "/sofasCards/best11.jpg",
      rating: "fa-solid fa-star",
      halfrating: "fa-regular fa-star-half-stroke",
    },
    {
      id: "30",
      amount: "1",
      name: "Seater",
      text: "green 2-Seater velvet sofa",
      price: 799,
      image: "/sofasCards/best12.jpg",
      rating: "fa-solid fa-star",
      halfrating: "fa-regular fa-star-half-stroke",
    },
    {
      id: "31",
      amount: "1",
      name: "Classy",
      text: "green 2-Seater velvet sofa",
      price: 220,
      image: "/sofasCards/best13.jpg",
      halfrating: "fa-regular fa-star-half-stroke",
    },
    {
      id: "32",
      amount: "1",
      name: "Comfort",
      text: "green 2-Seater velvet sofa",
      price: 506,
      image: "/sofasCards/best14.png",
      rating: "fa-solid fa-star",
      halfrating: "fa-regular fa-star-half-stroke",
    },
    {
      id: "33",
      amount: "1",
      name: "Special",
      text: "green 2-Seater velvet sofa",
      price: 305,
      image: "/sofasCards/best15.jpg",
      rating: "fa-solid fa-star",
    },
  ]);

  const [card, setCard] = useState([])
  console.log(card);  

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/livingroom" element={<LivingRoom />} />
        <Route
          path="/sofas"
          element={<Sofas card={card} setCard={setCard} data={data} />}
        />
        <Route path="/modal" element={<Modal card={card} data={data} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
