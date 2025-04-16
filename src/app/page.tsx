import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Globe, Mail, MapPin, Phone, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Globe className="h-6 w-6 text-emerald-600" />
            <span>Sahas Tour and Travels</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#home" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              About
            </Link>
            <Link href="#destinations" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              Destinations
            </Link>
            <Link href="#services" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              Services
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              Testimonials
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              Contact
            </Link>
          </nav>
          <Button className="bg-emerald-600 hover:bg-emerald-700">Book Now</Button>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/img/main.png"
              alt="Beautiful travel destination"
              fill
              className="object-cover bg-center brightness-[0.6]"
              priority
            />
          </div>
          <div className="container relative z-10 flex flex-col items-center justify-center py-32 text-center text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Discover the World with Sahas</h1>
            <p className="mt-6 max-w-2xl text-lg">
              Experience unforgettable journeys to the most breathtaking destinations around the globe. Let us take care
              of your travel dreams.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                Explore Destinations
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-black hover:bg-white hover:text-emerald-800"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-slate-50">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="About Sahas Tours"
                  width={600}
                  height={600}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold tracking-tight">About Sahas Tour and Travels</h2>
                <div className="mt-4 h-1 w-20 bg-emerald-600"></div>
                <p className="mt-6 text-lg text-muted-foreground">
                  Founded with a passion for exploration, Sahas Tour and Travels has been helping travelers discover the
                  beauty of the world for over a decade. Our team of experienced travel enthusiasts is dedicated to
                  creating personalized travel experiences that cater to your unique preferences and desires.
                </p>
                <p className="mt-4 text-lg text-muted-foreground">
                  We believe that travel is not just about visiting new places, but about creating memories that last a
                  lifetime. With our expertise and attention to detail, we ensure that every journey with us is
                  seamless, enjoyable, and unforgettable.
                </p>
                <Button className="mt-8 bg-emerald-600 hover:bg-emerald-700">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Destinations */}
        <section id="destinations" className="py-20">
          <div className="container">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight">Popular Destinations</h2>
              <div className="mx-auto mt-4 h-1 w-20 bg-emerald-600"></div>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                Explore our handpicked selection of breathtaking destinations that promise unforgettable experiences.
              </p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {destinations.map((destination, index) => (
                <Card key={index} className="overflow-hidden transition-all hover:shadow-lg">
                  <div className="relative h-64">
                    <Image
                      src={destination.image || "/placeholder.svg"}
                      alt={destination.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold">{destination.name}</h3>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="ml-1 text-sm">{destination.rating}</span>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center text-muted-foreground">
                      <MapPin className="mr-1 h-4 w-4" />
                      <span className="text-sm">{destination.location}</span>
                    </div>
                    <p className="mt-4">{destination.description}</p>
                    <Button className="mt-4 w-full bg-emerald-600 hover:bg-emerald-700">View Details</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button variant="outline" size="lg">
                View All Destinations <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-slate-50">
          <div className="container">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight">Our Services</h2>
              <div className="mx-auto mt-4 h-1 w-20 bg-emerald-600"></div>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                We offer a wide range of travel services to make your journey comfortable and memorable.
              </p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => (
                <Card key={index} className="text-center transition-all hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                      {service.icon}
                    </div>
                    <h3 className="mt-4 text-xl font-bold">{service.name}</h3>
                    <p className="mt-2 text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-20">
          <div className="container">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight">What Our Clients Say</h2>
              <div className="mx-auto mt-4 h-1 w-20 bg-emerald-600"></div>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                Don't just take our word for it. Here's what our happy travelers have to say about their experiences
                with us.
              </p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="transition-all hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="mt-4 italic">"{testimonial.text}"</p>
                    <div className="mt-6 flex items-center">
                      <div className="relative h-12 w-12 overflow-hidden rounded-full">
                        <Image
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="ml-4">
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.destination}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-slate-50">
          <div className="container">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight">Contact Us</h2>
              <div className="mx-auto mt-4 h-1 w-20 bg-emerald-600"></div>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                Have questions or ready to plan your next adventure? Get in touch with our travel experts.
              </p>
            </div>
            <div className="mt-12 grid gap-12 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-bold">Send Us a Message</h3>
                <form className="mt-6 space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium">
                        Name
                      </label>
                      <Input id="name" placeholder="Your name" className="mt-1" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="Your email" className="mt-1" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium">
                      Subject
                    </label>
                    <Input id="subject" placeholder="How can we help?" className="mt-1" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Tell us about your travel plans" className="mt-1" rows={4} />
                  </div>
                  <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
                    Send Message
                  </Button>
                </form>
              </div>
              <div>
                <h3 className="text-xl font-bold">Contact Information</h3>
                <div className="mt-6 space-y-4">
                  <div className="flex items-start">
                    <MapPin className="mr-4 h-6 w-6 text-emerald-600" />
                    <div>
                      <h4 className="font-medium">Address</h4>
                      <p className="mt-1 text-muted-foreground">
                        123 Travel Street, Wanderlust Avenue
                        <br />
                        Adventure City, AC 12345
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="mr-4 h-6 w-6 text-emerald-600" />
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <p className="mt-1 text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="mr-4 h-6 w-6 text-emerald-600" />
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="mt-1 text-muted-foreground">info@sahastours.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Calendar className="mr-4 h-6 w-6 text-emerald-600" />
                    <div>
                      <h4 className="font-medium">Working Hours</h4>
                      <p className="mt-1 text-muted-foreground">
                        Monday - Friday: 9:00 AM - 6:00 PM
                        <br />
                        Saturday: 10:00 AM - 4:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <h4 className="font-medium">Follow Us</h4>
                  <div className="mt-4 flex space-x-4">
                    <a
                      href="#"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 transition-colors hover:bg-emerald-600 hover:text-white"
                    >
                      <span className="sr-only">Facebook</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 transition-colors hover:bg-emerald-600 hover:text-white"
                    >
                      <span className="sr-only">Twitter</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 transition-colors hover:bg-emerald-600 hover:text-white"
                    >
                      <span className="sr-only">Instagram</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 py-12 text-white">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 font-bold text-xl">
                <Globe className="h-6 w-6 text-emerald-400" />
                <span>Sahas Tour and Travels</span>
              </div>
              <p className="mt-4 text-gray-400">
                Your trusted partner for unforgettable travel experiences. Let us help you explore the world.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold">Quick Links</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="#home" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#destinations" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Destinations
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold">Popular Destinations</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Pindari Glacier, Uttarakhand
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                      Khalia top,  Uttarakhand
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    abc, Uttarakhand
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    abc, Uttarakhand
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    abc, Uttarakhand
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold">Newsletter</h3>
              <p className="mt-4 text-gray-400">Subscribe to our newsletter for the latest travel deals and updates.</p>
              <form className="mt-4 flex">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="rounded-r-none bg-gray-800 border-gray-700 text-white"
                />
                <Button type="submit" className="rounded-l-none bg-emerald-600 hover:bg-emerald-700">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Sahas Tour and Travels. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Sample data
const destinations = [
  {
    name: "Pindari Glacier, Uttarakhand",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.9,
    location: "India",
    description: "Experience the perfect blend of beautiful beaches, vibrant culture, and lush landscapes.",
  },
  {
    name: "Khaliya Top, Uttarakhand",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.8,
    location: "India",
    description: "Discover the iconic white buildings, blue domes, and breathtaking sunsets.",
  },
  {
    name: "Kyoto, Uttarakhand",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.7,
    location: "India",
    description: "Immerse yourself in Japanese culture with ancient temples, gardens, and traditions.",
  },
]

const services = [
  {
    name: "Custom Tour Packages",
    icon: <Globe className="h-8 w-8 text-emerald-600" />,
    description: "Personalized travel itineraries tailored to your preferences and budget.",
  },
  {
    name: "Luxury Accommodations",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-8 w-8 text-emerald-600"
      >
        <path d="M3 14h18" />
        <path d="M21 9h-9a3 3 0 0 0 0 6h9" />
        <path d="M3 9v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-9" />
        <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2" />
      </svg>
    ),
    description: "Handpicked premium hotels and resorts for a comfortable stay.",
  },
  {
    name: "Transportation",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-8 w-8 text-emerald-600"
      >
        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.6-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C1.4 11.3 1 12.1 1 13v3c0 .6.4 1 1 1h2" />
        <circle cx="7" cy="17" r="2" />
        <path d="M9 17h6" />
        <circle cx="17" cy="17" r="2" />
      </svg>
    ),
    description: "Comfortable and reliable transportation throughout your journey.",
  },
  {
    name: "Guided Tours",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-8 w-8 text-emerald-600"
      >
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
      </svg>
    ),
    description: "Expert local guides to enhance your travel experience.",
  },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    destination: "Bali Trip",
    text: "Our trip to Bali was absolutely perfect! Sahas Tours took care of every detail, and we didn't have to worry about a thing. The accommodations were luxurious, and the itinerary was perfectly balanced.",
  },
  {
    name: "Michael Chen",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    destination: "Europe Tour",
    text: "I've traveled with many agencies before, but Sahas Tours stands out for their attention to detail and personalized service. Our Europe tour was magical, and I'll definitely book with them again!",
  },
  {
    name: "Priya Sharma",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 4,
    destination: "Japan Adventure",
    text: "The Japan cultural tour exceeded all my expectations. The local guides were knowledgeable, and the experiences were authentic. Sahas made our first trip to Asia memorable and stress-free.",
  },
]
