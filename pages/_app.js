import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef, useEffect } from "react";
import "../styles/globals.css";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Layout from "../components/Layout";
import { SmoothScrollProvider } from "../src/context/SmoothScroll.context";

function MyApp({ Component, pageProps }) {
  const containerRef = useRef(null);
  // useEffect(() => {
  //   let scroll;
  //   import("locomotive-scroll").then((locomotiveModule) => {
  //     scroll = new locomotiveModule.default({
  //       el: document.querySelector("[data-scroll-container]"),
  //       smooth: true,
  //       smoothMobile: false,
  //       resetNativeScroll: true,
  //     });
  //   });

  //   // `useEffect`'s cleanup phase
  //   return () => scroll.destroy();
  // });

  return (
    <SmoothScrollProvider containerRef={containerRef}>
      <main data-scroll-container>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </SmoothScrollProvider>
  );
}

export default MyApp;
