import React from "react";
import TestimonialsList from "../data/testimonials";

const Testimonials = () => {

    const [testimonials, setTestimonials] = useState(Testimonials);

    return ( 
        <div className="Testimonials">
            {testimonials.map((t, i) => (
                <div>
                <h6>{t.name}</h6>
                <p>{t.message}</p>
                </div>
            ))}
        </div>
    );
}
 
export default Testimonials;