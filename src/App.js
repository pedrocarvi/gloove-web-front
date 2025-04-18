import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

// Layout
import Layout from "./layout/Layout";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Landing from "pages/Landing";
import Booking from "pages/Booking";
import Tour from "pages/Tour";
import TourCart from "pages/TourCart";
import TourBooking from "pages/TourBooking";
import TourConfirm from "pages/TourConfirm";
import CheckoutForm from "pages/CheckoutForm";
import AccommodationDetails from "pages/AccommodationDetails";

const App = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} exact /> */}
      <Route path="/about" element={<About />} />
      <Route path="/" element={<Landing />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/accommodation/:id" element={<AccommodationDetails />} />
      <Route path="/tour" element={<Tour />} />
      <Route path="/tour-cart" element={<TourCart />} />
      <Route path="/tour-booking" element={<TourBooking />} />
      <Route path="/tour-confirm" element={<TourConfirm />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/checkout" element={<CheckoutForm />} />
    </Routes>
  );
};

export default App;
