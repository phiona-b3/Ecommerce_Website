import { useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { GrCaretNext } from "react-icons/gr";
import { GrCaretPrevious } from "react-icons/gr";


const testimonials = [
    {
        id: 1,
        name: "Alice Johnson",
        review: "Amazing quality! Highly recommend.",
        rating: 5
    },
    {
        id: 2,
        name: "David Smitch",
        review: "Good product",
        rating: 4
    },
    {
        id: 3,
        name: "Sophia",
        review: "Best shopping experience ever! Will buy again.",
        rating: 5,
    }
]

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextReview = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }

    const prevReview = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    }

  return (
    <div className="bg-white p-8 mt-10 text-center rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">What Our Customers Say</h2>
        <p className="text-lg italic">{testimonials[currentIndex].review}</p>
        <p className="font-semibold mt-2">{testimonials[currentIndex].name}</p>
        <div className="flex justify-center mt-2">
            {[...Array(5)].map((_, i) => (
                <span key={i} className={i < testimonials[currentIndex].rating ? "text-yellow-500": "text-gray-300"}><FaRegStar /></span>
            ))}
        </div>
        <div className="mt-4">
            <button onClick={prevReview} className="bg-gray-300 px-3 py-1 rounded-md mx-2"><GrCaretNext /></button>
            <button onClick={nextReview} className="bg-gray-300 px-3 py-1 rounded-md mx-2"><GrCaretPrevious /></button>
        </div>
    </div>
  )
}

export default Testimonials