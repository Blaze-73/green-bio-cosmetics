import { Suspense, lazy, useEffect } from "react"
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import { I18nextProvider } from "react-i18next"
import i18n from "./i18n"
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import { WhatsAppFloat } from "./components/WhatsAppFloat"

const Home = lazy(() => import("./pages/Home").then((m) => ({ default: m.Home })))
const Products = lazy(() => import("./pages/Products").then((m) => ({ default: m.Products })))
const About = lazy(() => import("./pages/About").then((m) => ({ default: m.About })))
const Contact = lazy(() => import("./pages/Contact").then((m) => ({ default: m.Contact })))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -14 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <Suspense fallback={null}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </motion.main>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <div className="grain min-h-screen bg-cream font-body text-pine antialiased">
          <ScrollToTop />
          <Navbar />
          <AnimatedRoutes />
          <Footer />
          <WhatsAppFloat />
        </div>
      </BrowserRouter>
    </I18nextProvider>
  )
}
