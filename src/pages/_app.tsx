import "rc-collapse/assets/index.css";
import "overlayscrollbars/css/OverlayScrollbars.css";
import "assets/styles/scrollbar.css";
import "assets/styles/rc-collapse.css";
import "assets/styles/index.css";
import { CartProvider } from "contexts/cart/cart.provider";
import { DrawerProvider } from "contexts/drawer/drawer.provider";
import { SearchProvider } from "contexts/search/use-search";
import "typeface-open-sans";
import { CategoryProvider } from "contexts/category/use-category";
import { useEffect } from "react";

export default function CustomApp({ Component, pageProps }) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("/sw.js").then(
          function (registration) {
            console.log(
              "Service Worker registration successful with scope: ",
              registration.scope
            );
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
  }, []);

  return (
    <SearchProvider>
      <CategoryProvider>
        <DrawerProvider>
          <CartProvider>
            <Component {...pageProps} />
          </CartProvider>
        </DrawerProvider>
      </CategoryProvider>
    </SearchProvider>
  );
}
