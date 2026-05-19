import { useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import LandingPage from './pages/Landing.jsx'
import WAHInv from './pages/WAHInv.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function App() {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/wahinv" element={<WAHInv />} />
				<Route path="/WAHInv" element={<Navigate to="/wahinv" replace />} />
				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		</BrowserRouter>
	)
}
