
import { useState } from 'react'
import React from 'react'
import {Link} from 'react-router-dom' 




const Navbar = () => {
    const [openMobile, setOpenMobile] = useState(false);
  return (
    <div>
        <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/30">
        <div className="flex items-center justify-between px-4 py-4 mx-auto max-w-7xl md:px-6">

           
  <div className="flex items-center gap-2">
    <div className="relative">
      <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-cyan-400 via-sky-500 to-indigo-600 shadow-[0_0_40px_rgba(56,189,248,0.35)]" />
      <svg className="absolute inset-0 w-5 h-5 m-auto text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12h8" />
        <path d="M12 6v12" />
      </svg>
    </div>
    <span className="text-xl font-semibold tracking-wide text-white">InnovaEdge</span>
  </div>

          
          <nav className="items-center hidden gap-8 text-sm text-slate-200/90 md:flex">
            <Link to="/services" className="hover:text-white">Services</Link>
            <Link to="/work" className="hover:text-white">Work</Link>
            <Link to="/process" className="hover:text-white">Process</Link>
            <Link to="/about" className="hover:text-white">About</Link>
            <Link to="/contact" className="hover:text-white">Contact</Link>
          </nav>
          <div className="hidden md:block">
            <a to="#contact" className="rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-[0_8px_30px_rgba(56,189,248,0.35)] transition hover:brightness-110">Request a Quote</a>
          </div>
          <button onClick={() => setOpenMobile(v => !v)} className="md:hidden" aria-label="Toggle menu">
            <svg className="text-white h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
          </button>
        </div>
        {openMobile && (
          <div className="px-4 py-3 border-t border-white/10 bg-black/40 md:hidden">
            <div className="grid gap-3 text-sm">
              {[
                ["/services","Services"],
                ["/work","Work"],
                ["/process","Process"],
                ["/about","About"],
                ["/contact","Contact"],
              ].map(([to, label]) => (
                <Link key={to} to={to} className="px-3 py-2 rounded-lg hover:bg-white/5">{label}</Link>
              ))}
              <Link to="#contact" className="px-3 py-2 mt-1 font-medium text-center rounded-lg bg-gradient-to-r from-cyan-400 to-indigo-600">Request a Quote</Link>
            </div>
          </div>
        )}
      </header>



    </div>
  )
}

export default Navbar




      