import React from "react";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { BiRightArrowAlt } from "react-icons/bi";
import Carousel, { CarouselItem } from "../components/shared/Carousel";

const Data = [
  {
    image:
      "https://web-static.wrike.com/cdn-cgi/image/width=927,fit=cover,format=auto,q=80/content/uploads/2021/01/rebrand-quote-slider_image_walmart_canada_2x.jpg?av=d5e35691719cb1e63e834465386bfcf9",
    discription:
      "“Everyone is in Wrike daily, we’ve built one story and one version of the truth. And that is a game changer for us. Now we do our project reviews in Wrike: no more need for presentations, word documents, or any of this additional work.”",
    company:
      "Francis Lalonde, Vice President of Transportation, Walmart Canada",
    logo: "https://web-static.wrike.com/content/uploads/2022/05/rebrand-quote_logo_walmart_canada_white.svg?av=795fbcf492ed934c24e3f42a76c1d3f5",
  },
  {
    image:
      "https://web-static.wrike.com/cdn-cgi/image/width=927,fit=cover,format=auto,q=80/content/uploads/2022/01/rebrand-quote-slider_image_syneos-health_2x.jpg?av=675edb298df70721dcf48c02c67ec608",
    discription:
      "“The moment our teams saw Wrike, we heard a resounding 'yes' – it was the one system that met each and every one of our team’s comprehensive and complex requirements.“",
    company: "Sherrie Besecker, Creative Technology Manager at Syneos Health",
    logo: "https://web-static.wrike.com/content/uploads/2022/05/rebrand-quote_logo_syneos-health-white.svg?av=3e21b4e369158318759fa3733ce138e6",
  },
  {
    image:
      "https://web-static.wrike.com/cdn-cgi/image/width=927,fit=cover,format=auto,q=80/content/uploads/2022/03/rebrand-quote-slider_image_texas-rangers_2x.png?av=0c496b6cadbd59fead0695de3e43f5c5",
    discription:
      "“I'm thankful for Wrike. It's a fast-paced world, and we're all trying to keep up. Wrike helps me do just that.”",
    company:
      "Kyle Bartlett, Director of Marketing and Advertising at the Texas Rangers",
    logo: "https://web-static.wrike.com/content/uploads/2022/03/rebrand-quote_logo_texas-rangers_2x.png?av=dbe2a1f16f02730e3c432dd260712f0f",
  },
  {
    image:
      "https://web-static.wrike.com/cdn-cgi/image/width=927,fit=cover,format=auto,q=80/content/uploads/2021/06/rebrand-quote-slider_image_monumental_2x.jpg?av=a486ca287bf5dc44431588aa22150ca9",
    discription:
      "“We save time knowing what the clients need from us and then can track the progress of each request, which is something we couldn’t do previously.”",
    company:
      "Lori Meyers, Manager of Digital Assets, Monumental Sports & Entertainment",
    logo: "https://web-static.wrike.com/content/uploads/2021/09/rebrand-quote-slider_logo_monumental-inverse.svg?av=76e74b35ebccddd4c223ed771e2ae19f",
  },
  {
    image:
      "https://web-static.wrike.com/cdn-cgi/image/width=927,fit=cover,format=auto,q=80/content/uploads/2021/07/rebrand-quote-slider_image_kitchenaid_2x.jpg?av=a815976b26dc1095c756e1a2175f9e4d",
    discription:
      "“The end goal was to create an agile, professional design engine. Wrike was our top pick; it was the one solution that we felt could make this a reality.”",
    company: "Ashley Klee, Global Senior Designer, KitchenAid",
    logo: "https://web-static.wrike.com/content/uploads/2021/09/rebrand-quote_logo_kitchenaid-inverse.svg?av=cfdf5c1935895d1830348b41cff5a3f1",
  },
];

const companies = [
  {
    logo: "https://web-static.wrike.com/content/uploads/2020/09/1440_logoroll_logo_white_google.svg?av=beca5f4cceefb37ded0e3f6cea1d2c34",
    company: "Google",
  },
  {
    logo: "https://web-static.wrike.com/content/uploads/2022/01/1440_logoroll_logo_syneos_white-1.svg?av=3c51d53d3a2752e057f1e1abfbbebf47",
    company: "Syneos Health",
  },
  {
    logo: "https://web-static.wrike.com/content/uploads/2020/09/1440_logoroll_logo_white_Siemens.svg?av=5e1fa37e9d06ab82ef08777c7c0e082e",
    company: "Siemens",
  },
  {
    logo: "https://web-static.wrike.com/content/uploads/2021/02/1440_logoroll_logo_estee-lauder_white.svg?av=2be9b6d45167ac0cde38a9db25481551",
    company: "Estee lauder",
  },
  {
    logo: "https://web-static.wrike.com/content/uploads/2021/11/1440_logoroll_logo_nickelodeon_white.svg?av=42b06a13b1119784a23a94a6b260a40e",
    company: "Nickelodeon",
  },
  {
    logo: "https://web-static.wrike.com/content/uploads/2020/09/1440_logoroll_logo_white_Oglivy.svg?av=ee1653b2fed429de007bf68906de4575",
    company: "Ogilvy",
  },
  {
    logo: "https://web-static.wrike.com/content/uploads/2020/09/1440_logoroll_logo_snowflake_white.svg?av=55fc2b6f2809a277065577c0b7f71cf1",
    company: "Snowflake",
  },
  {
    logo: "https://web-static.wrike.com/content/uploads/2021/06/1440_logoroll_logo_lyft_white-1.svg?av=36defb5419ded7146f73cf1f4934c332",
    company: "Lyft",
  },
];

const Home = ({ screenWidth }) => {
  const desktopViewHeader = {
    position: "absolute",
    margin: "0 25%",
    padding: "0",
    zIndex: "1",
    width: "50%",
    paddingTop: "4rem",
    lineHeight: "3rem",
    fontSize: "20px",
    textAlign: "center",
    color: "#fff",
  };

  const mobileViewHeader = {
    backgroundColor: "#0c3245",
    height: "500px",
    lineHeight: screenWidth > 768 ? "3rem" : "2rem",
    padding: `4rem 1rem`,
    fontSize: screenWidth > 678 ? "1.5rem" : "1rem",
    textAlign: "center",
  };

  return (
    <div
      style={{
        paddingTop: "80px",
        color: "#eee",
      }}
    >
      <div>
        <div style={screenWidth >= 1024 ? desktopViewHeader : mobileViewHeader}>
          <h1 style={{ margin: "1.5rem 0" }}>
            Remove barriers, find clarity, exceed goals
          </h1>
          <p>
            Anything is possible with the most powerful work management software
            at your fingertips
          </p>
          <div style={{ marginTop: screenWidth > 768 ? "2rem" : "1rem" }}>
            <input
              style={{
                backgroundColor: "snow",
                color: "#1c1c1c",
                padding: "1rem",
                fontSize: "16px",
                border: "none",
                borderRadius: "5px",
                margin: screenWidth < 768 ? "5px 0px" : "10px",
                width: screenWidth < 768 ? "100%" : "auto",
              }}
              placeholder="Enter your business email"
              type="email"
            />
            <button
              style={{
                padding: "1rem",
                fontSize: "16px",
                border: "none",
                borderRadius: "5px",
                backgroundColor: "#07cf65",
                margin: screenWidth < 768 ? "5px 0px" : "10px",
                width: screenWidth < 768 ? "100%" : "auto",
              }}
            >
              Try for free
            </button>
            <div
              style={{ fontSize: "18px", color: "#07cf65", fontWeight: "bold" }}
            >
              <AiOutlinePlayCircle /> Our Story
            </div>
          </div>
        </div>
        <>
          {screenWidth >= 1024 && (
            <img
              src="https://web-static.wrike.com/content/uploads/2022/01/rebrand-hero-illustration_homepage_screenshots_dark_1920x680_1x.png"
              alt="homepage"
              style={{
                position: "relative",
                maxWidth: "100%",
                paddingTop: screenWidth >= 1440 ? "4rem" : "8rem",
                backgroundColor: "#0c3245",
              }}
            />
          )}
        </>
      </div>
      <div style={{ backgroundColor: "#181f39", marginTop: "-5px" }}>
        <p style={{ textAlign: "center", padding: "2rem" }}>
          TRUSTED BY 20,000+ HAPPY CUSTOMERS WORLDWIDE
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            padding: "1rem",
          }}
        >
          {companies.map((company, index) => (
            <div key={index}>
              <img src={company.logo} alt={company.company} />
            </div>
          ))}
        </div>
      </div>
      <div style={{ backgroundColor: "#04444d", padding: "2rem" }}>
        <h1 style={{ textAlign: "center", marginBottom: "4rem" }}>
          Stories from our customers
        </h1>
        <Carousel>
          {Data.map((item, index) => (
            <CarouselItem key={index}>
              <div
                style={{
                  display: "grid",
                  color: "wheat",
                  gridTemplateColumns: "50% 50%",
                }}
              >
                <div
                  style={{
                    padding: "2rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img
                    style={{ width: "100%", borderTopLeftRadius: "50%" }}
                    src={item.image}
                    alt=""
                  />
                </div>
                <div
                  style={{
                    padding: "2rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <div
                      style={{
                        whiteSpace: "normal",
                        margin: "1.5rem 0",
                        fontSize: "1.5rem",
                        fontStyle: "italic",
                      }}
                    >
                      <p>{item.discription}</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        whiteSpace: "normal",
                        fontSize: "1rem",
                        justifyContent: "space-between",
                        alignItems: "center",
                        margin: "1rem 0",
                      }}
                    >
                      <div>{item.company}</div>
                      <div>
                        <img src={item.logo} alt="logo" />
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        color: "green",
                        alignItems: "center",
                        fontSize: "2rem",
                        justifyContent: "center",
                      }}
                    >
                      <span style={{ fontSize: "1.5rem" }}>Watch here</span>{" "}
                      <span
                        style={{
                          margin: "0 10px",
                          alignItems: "center",
                          display: "flex",
                        }}
                      >
                        <BiRightArrowAlt />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </Carousel>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
