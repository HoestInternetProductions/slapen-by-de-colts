import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import { GatsbyImage, IGatsbyImageData, getImage } from "gatsby-plugin-image";
import React from "react";

const IndexPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        background: file(relativePath: { eq: "slapen-by-de-colts-foto.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }

        picture: file(relativePath: { eq: "slapen-by-de-colts-foto.png" }) {
          childImageSharp {
            gatsbyImageData(quality: 90, formats: [AUTO, WEBP, AVIF])
          }
        }

        logo: file(relativePath: { eq: "sbdc-logo.png" }) {
          childImageSharp {
            gatsbyImageData(quality: 90, formats: [AUTO, WEBP, AVIF])
          }
        }

        email: file(relativePath: { eq: "email.png" }) {
          childImageSharp {
            gatsbyImageData(quality: 90, formats: [AUTO, WEBP, AVIF])
          }
        }

        airbnb: file(relativePath: { eq: "airbnb.png" }) {
          childImageSharp {
            gatsbyImageData(quality: 90, formats: [AUTO, WEBP, AVIF])
          }
        }

        bedandbreakfast: file(relativePath: { eq: "bedandbreakfast.png" }) {
          childImageSharp {
            gatsbyImageData(quality: 90, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    `
  );

  // Set ImageData.
  const imageData = data.background.childImageSharp.fluid;

  return (
    <BackgroundImage
      Tag="main"
      fluid={imageData}
      className="w-full h-screen bg-cover bg-center flex flex-col justify-center items-center relative"
    >
      <title>Slapen By De Colts</title>
      <h1 className="hidden">Slapen By De Colts</h1>
      <div className="absolute inset-0 bg-white opacity-50"></div>
      <GatsbyImage
        className="max-w-[50%] shrink-0"
        image={getImage(data.logo) as IGatsbyImageData}
        alt="Logo"
      />
      <section className="m-8 shrink-0">
        <GatsbyImage
          className="w-[75px] mx-4"
          image={getImage(data.email) as IGatsbyImageData}
          alt="e-mail"
        />
        <GatsbyImage
          className="w-[75px] mx-4"
          image={getImage(data.airbnb) as IGatsbyImageData}
          alt="airbnb"
        />
        <GatsbyImage
          className="w-[75px] mx-4"
          image={getImage(data.bedandbreakfast) as IGatsbyImageData}
          alt="bedandbreakfast"
        />
      </section>
    </BackgroundImage>
  );
};

export default IndexPage;
