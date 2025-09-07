import React from "react";
import HomePage from "./home/components/HomePage";

export const metadata = {
  title: "Apurv's Portfolio | Full Stack Developer",
  description: "Welcome to Apurv's Portfolio. Explore my projects, skills, and experience as a Full Stack Developer.",
  keywords: "Portfolio, Full Stack Developer, Projects, Skills, Experience, Web Development, React, Node.js, JavaScript",
  openGraph: {
    title: "Apurv's Portfolio | Full Stack Developer",
    locale: 'en_IN',
    type: 'website',
  },
}
export default function Home() {
  return (
    <>
      <HomePage />
    </>
  );
}
