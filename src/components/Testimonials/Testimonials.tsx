"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  FaQuoteLeft,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import styles from "./Testimonials.module.css";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Fashion Enthusiast",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    content:
      "Absolutely love shopping here! The quality of products exceeds my expectations every time. Fast shipping and excellent customer service make this my go-to store.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Tech Professional",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    content:
      "Found amazing deals on electronics. The prices are competitive and the return policy gives me peace of mind. Highly recommended for tech lovers!",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Interior Designer",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    content:
      "The jewelry collection is stunning! I've purchased several pieces for myself and as gifts. The attention to detail in packaging makes every order feel special.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Business Owner",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    content:
      "Great selection of men's clothing. The fit guides are accurate and the quality is excellent for the price. My new favorite online store!",
    rating: 4,
  },
  {
    id: 5,
    name: "Jessica Martinez",
    role: "Lifestyle Blogger",
    image: "https://randomuser.me/api/portraits/women/26.jpg",
    content:
      "I'm obsessed with this store! From trendy accessories to classic wardrobe staples, they have it all. The site is easy to navigate and checkout is seamless.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section className={styles.testimonials}>
      <h2 className={styles.sectionTitle}>What Our Customers Say</h2>
      <div className={styles.carouselContainer}>
        <button
          className={styles.navBtn}
          onClick={handlePrev}
          aria-label="Previous testimonial"
        >
          <FaChevronLeft />
        </button>

        <div className={styles.carousel}>
          <div
            className={styles.carouselTrack}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className={styles.testimonialCard}>
                <FaQuoteLeft className={styles.quoteIcon} />
                <p className={styles.content}>{testimonial.content}</p>
                <div className={styles.stars}>
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={
                        i < testimonial.rating
                          ? styles.starFilled
                          : styles.starEmpty
                      }
                    />
                  ))}
                </div>
                <div className={styles.author}>
                  <div className={styles.authorImage}>
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className={styles.avatar}
                    />
                  </div>
                  <div className={styles.authorInfo}>
                    <h4 className={styles.authorName}>{testimonial.name}</h4>
                    <p className={styles.authorRole}>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className={styles.navBtn}
          onClick={handleNext}
          aria-label="Next testimonial"
        >
          <FaChevronRight />
        </button>
      </div>

      <div className={styles.dots}>
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ""}`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
