import "../assets/styles/homePage.css";
import BackgroundVideo from "./components/BackgroundVideo";
import EventPreviewCardShort from "./components/EventPreviewCardShort";
import event1 from "./assets/event1.png";
import event2 from "./assets/event2.png";
import event3 from "./assets/event3.png";
import event4 from "./assets/event4.png";
import clubImg from "./assets/club.jpg";

import drinksIcon from "./assets/icons/drinks.svg";
import vipIcon from "./assets/icons/vip.svg";
import danceLightIcon from "./assets/icons/lights.svg";
import calendarIcon from "./assets/icons/calendar.svg";
import phoneIcon from "./assets/icons/phone.svg";
import mapsIcon from "./assets/icons/maps.svg";
import mailIcon from "./assets/icons/mail.svg";

import DJ1 from "./assets/DJ1.jpeg";
import ThemeCarousel from "./components/themeCarousel";

export default function HomePage() {
  return (
    <main aria-label="home page" className="home-page">
      <section aria-label="hero section" className="hero-section">
        <BackgroundVideo />
      </section>

      <section aria-label="events section" className="event-section">
        <div className="section-header">
          <p>Our events</p>
          <h1>
            Upcoming <span>events</span>
          </h1>
        </div>
        <div className="showcase-events">
          <EventPreviewCardShort name={"event 1"} image={event1} />
          <EventPreviewCardShort name={"event 2"} image={event2} />
          <EventPreviewCardShort name={"event 3"} image={event3} />
          <EventPreviewCardShort name={"event 4"} image={event4} />
        </div>

        <button>See all events</button>
      </section>

      <section aria-label="services section" className="services-section">
        <div className="section-header">
          <div className="section-header-text">
            <p>Our services</p>
            <h1>
              What We offer in <span>Our Club</span>
            </h1>
          </div>
          {/* <button>Buy tickets</button> */}
        </div>

        <div className="showcase-services">
          <div className="service-card">
            <img src={drinksIcon} alt="" className="fa" />
            <h2>Lounge Bar</h2>
            <p>
              Sip our expertly crafted cocktails & beers, enjoy smooth beats,
              and sink into plush seating designed for comfort and connection.
            </p>
          </div>

          <div className="service-card">
            <img src={vipIcon} alt="" className="fa" />
            <h2>VIP Zone</h2>
            <p>
              Our VIP Zone offers premium bottle service, private seating, and
              personalized attention,your own space to party in luxury.
            </p>
          </div>

          <div className="service-card">
            <img src={danceLightIcon} alt="" className="fa" />
            <h2>Dance Floor</h2>
            <p>
              Feel the energy & rhythm come alive on our electric dance floor.
              With top DJs and state-of-the-art sound and lighting.
            </p>
          </div>

          <div className="service-card">
            <img src={calendarIcon} alt="" className="fa" />
            <h2>Special Events</h2>
            <p>
              From themed nights to guest performances, our special events keep
              the vibe fresh and unforgettable Every week.
            </p>
          </div>
        </div>
      </section>

      <section aria-label="themes section" className="themes-section">
        <div className="section-header">
          <p>Our themes</p>
          <h1>What our different nights look like</h1>
        </div>
        <ThemeCarousel />
      </section>

      <section aria-label="reservation section" className="reservation-section">
        <div className="image-container">
          <img src={DJ1} alt="dj playing image" className="bg-image" />

          <div className="image-overlay">
            <button>Book a table</button>
            <button>Priivate events</button>
          </div>
        </div>
      </section>

      <section
        aria-label="subscription section"
        className="subscription-section"
      >
        <div className="subscription-overlay">
          <div className="subscription-overlay-intro">
            <h1>BE FIRST TO THE PARTY!</h1>
            <p>
              Be first in line for the hottest parties, exclusive premieres, DJ
              sets, and all our curated favorites.
            </p>
          </div>

          <form>
            <div className="form-group">
              <label htmlFor="user-email">Email Address</label>
              <input type="email" id="user-email" />
            </div>

            <div className="form-group">
              <label htmlFor="user-name">Name</label>
              <input type="text" id="user-name" />
            </div>

            <p>Pick your poison:</p>
            <div className="form-group">
              <div>
                <input type="radio" id="option1" name="event" value="parties" />
                <label htmlFor="option1">Parties</label>
              </div>
              <div>
                <input type="radio" id="option2" name="event" value="shows" />
                <label htmlFor="option2">Shows</label>
              </div>
              <div>
                <input type="radio" id="option3" name="event" value="dj" />
                <label htmlFor="option3">DJ</label>
              </div>
              <div>
                <input type="radio" id="option4" name="event" value="all" />
                <label htmlFor="option4">All</label>
              </div>
            </div>

            <button type="submit">SUBSCRIBE</button>
          </form>
        </div>
      </section>

      <section aria-label="contact section" className="contact-section">
        <div className="image-container">
          <img src={clubImg} alt="club image" className="bg-image" />

          <div className="image-overlay">
            <div className="section-intro">
              <h2>Visit us</h2>
              <h2 className="heading">
                Come and visit <span>our club</span>
              </h2>
              <div className="cta">
                {/* <button>Buy tickets</button> */}
                <button className="diff">Contact us </button>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-overlay">
          <div className="individual-contact">
            <img src={mapsIcon} alt="phone" className="fa" />
            <p>
              Near Daisha Road, Mtwapa, Opposite The Gold Fish Bar, Next to
              Samantha's Collections, Mtwapa
            </p>
          </div>
          <div className="individual-contact">
            <img src={mailIcon} alt="mail" className="fa" />
            <p>contact@club.com</p>
          </div>
          <div className="individual-contact">
            <img src={phoneIcon} alt="phone" className="fa" />
            <p>+254 700 524 998</p>
          </div>
        </div>
      </section>
    </main>
  );
}
