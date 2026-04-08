import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import PrivacyPolicyPage from './pages/PrivacyPolicy'
import TermsOfConditionPage from './pages/TermsOfCondition'

function Home() {
  return (
    <div className="min-h-screen bg-background text-text flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md w-full">
        <h1 className="text-4xl font-serif text-primary mb-2">SHYNE</h1>
        <p className="text-text-secondary mb-12 uppercase tracking-[0.2em] text-xs font-bold">Women's Wellness Sanctuary</p>
        
        <div className="space-y-4">
          <Link 
            to="/privacy" 
            className="w-full py-4 px-6 bg-surface border border-border-light rounded-3xl flex items-center justify-between group hover:border-primary transition-colors no-underline"
          >
            <div className="flex items-center">
              <span className="text-2xl mr-4">🛡️</span>
              <span className="font-serif text-lg text-text-secondary group-hover:text-primary transition-colors">Privacy Policy</span>
            </div>
            <svg 
              className="text-stone-300 group-hover:text-primary transition-colors"
              xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </Link>

          <Link 
            to="/terms" 
            className="w-full py-4 px-6 bg-surface border border-border-light rounded-3xl flex items-center justify-between group hover:border-primary transition-colors no-underline"
          >
            <div className="flex items-center">
              <span className="text-2xl mr-4">📜</span>
              <span className="font-serif text-lg text-text-secondary group-hover:text-primary transition-colors">Terms & Conditions</span>
            </div>
            <svg 
              className="text-stone-300 group-hover:text-primary transition-colors"
              xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </Link>
        </div>

        <p className="mt-12 text-xs text-text-tertiary">
          © 2026 Shyne Wellness · All rights reserved
        </p>
      </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsOfConditionPage />} />
      </Routes>
    </Router>
  )
}

export default App
