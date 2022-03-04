import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import { GatsbyImage, IGatsbyImageData, getImage } from "gatsby-plugin-image";
import React from "react";
import Helmet from "react-helmet";

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
      <Helmet>
        <title>Slapen By De Colts</title>

        <meta name="title" content="Slapen By De Colts" />
        <meta
          name="description"
          content="Ruim appartement van 80m2, onder ons huis met eigen ingang, daglicht en volop privacy. Het is recent gebouwd en van alle comfort voorzien. Zo is er een slaapkamer met 2-pers. boxspring, volledig ingerichte keuken met keramische kookplaat, oven, koelkast, magnetron en vaatwasser. Ook heeft het een fitnessruimte, douche en apart toilet. In de woonkamer staat een royale eettafel een grote smart-tv en hoekbank (slaapbank). De ruimte is ook zeer geschikt als werkplek of vergaderruimte."
        />
        <meta
          name="keywords"
          content="appartement, slapen, overnachten, privacy, comfort, slaapkamer, boxspring, keuken, oven, koelkast, magnetron, vaatwasser, fitness, douche, toilet, smart-tv, tv, hoekbank, werkplek, vergaderruimte, bed and breakfast, airbnb, soest, soestdijk, utrecht, amsterdam"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      </Helmet>
      <h1 className="hidden">Slapen By De Colts</h1>
      <div className="absolute inset-0 bg-white opacity-50"></div>
      <GatsbyImage
        className="max-w-[50%] shrink-0"
        image={getImage(data.logo) as IGatsbyImageData}
        alt="Logo"
      />
      <section className="m-8 shrink-0">
        <a title="Stuur ons een e-mail" href="mailto:overnachten@colthoff.nl">
          <GatsbyImage
            className="w-[75px] mx-4"
            image={getImage(data.email) as IGatsbyImageData}
            alt="e-mail"
          />
        </a>
        <a
          title="Bekijk ons op Airbnb"
          href="https://nam12.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.airbnb.nl%2Frooms%2F52898748%3Fadults%3D2%26federated_search_id%3D2a380cfe-4b2c-4bbe-ae2c-6c9c845713ae%26source_impression_id%3Dp3_1645796595_QElEC9jDl9LoYHrP&data=04%7C01%7C%7C0f62e2b63b6741199f0c08d9f8653f75%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C637813936108576425%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000&sdata=wqmWmw%2BzgePVBLAE%2FugvdItaUYM4Ux1mjLHtwP8F59g%3D&reserved=0"
          target="_blank"
        >
          <GatsbyImage
            className="w-[75px] mx-4"
            image={getImage(data.airbnb) as IGatsbyImageData}
            alt="airbnb"
          />
        </a>
        <a
          title="Bekijk ons op Bed and Breakfast"
          href="https://nam12.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.bedandbreakfast.nl%2Fnl%2Fa%2F76265%2Fb-b-slapen-by-de-colts%2F&data=04%7C01%7C%7C0f62e2b63b6741199f0c08d9f8653f75%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C637813936108576425%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000&sdata=LYUp7R2VMFV0Ky8fSChe7Rspjjr4uppcwZpIeja8GCk%3D&reserved=0"
          target="_blank"
        >
          <GatsbyImage
            className="w-[75px] mx-4"
            image={getImage(data.bedandbreakfast) as IGatsbyImageData}
            alt="bedandbreakfast"
          />
        </a>
      </section>
    </BackgroundImage>
  );
};

export default IndexPage;
