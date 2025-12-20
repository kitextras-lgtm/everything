import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Video, Instagram, Music2, ArrowUpRight, LogOut } from 'lucide-react';
import { BetaBadge } from '../components/BetaBadge';
import { SocialLinksForm } from '../components/SocialLinksForm';
import { DoorTransition } from '../components/DoorTransition';

export function CreatorDashboard() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('currentDashboard', '/dashboard/creator');
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <DoorTransition>
      <div className="min-h-screen text-white pb-20 md:pb-0" style={{ backgroundColor: '#111111' }}>
      <header className="fixed top-0 left-0 right-0 z-50 h-14 sm:h-16" style={{ backgroundColor: '#111111', borderBottom: '1px solid #1a1a1a' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-full flex items-center justify-between">
          <div className="flex items-center gap-1">
            <img src="/elevate_transparent_white_.png" alt="ELEVATE" className="h-20 sm:h-28" />
            <BetaBadge />
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <div
              className={`home-icon group ${activeSection === 'home' ? 'active' : ''}`}
              onClick={() => setActiveSection('home')}
            >
              <div className="home-icon-wrapper">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="14" y="18" width="20" height="24" rx="2" stroke="white" strokeWidth="2" fill="none"/>
                  <path d="M8 20L24 8L40 20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path className="light-beam" d="M19 42V28C19 27.4477 19.4477 27 20 27H28C28.5523 27 29 27.4477 29 28V42" fill="white"/>
                  <ellipse className="glow-ellipse" cx="24" cy="35" rx="6" ry="8" fill="white"/>
                </svg>
                <div className="outer-glow"></div>
              </div>
              <span className="label">Home</span>
            </div>

            <div
              className={`messages-icon group ${activeSection === 'messages' ? 'active' : ''}`}
              onClick={() => setActiveSection('messages')}
            >
              <div className="messages-icon-wrapper">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className="back-bubble" d="M32 12H18C14.6863 12 12 14.6863 12 18V26C12 29.3137 14.6863 32 18 32H20L24 36L28 32H32C35.3137 32 38 29.3137 38 26V18C38 14.6863 35.3137 12 32 12Z" stroke="white" strokeWidth="2" fill="none"/>
                  <path className="front-bubble" d="M30 20H16C13.2386 20 11 22.2386 11 25V31C11 33.7614 13.2386 36 16 36H18L21 40L24 36H30C32.7614 36 35 33.7614 35 31V25C35 22.2386 32.7614 20 30 20Z" stroke="white" strokeWidth="2" fill="rgba(0,0,0,0.8)"/>
                  <g className="dots">
                    <circle cx="17" cy="28" r="1.5" fill="white"/>
                    <circle cx="23" cy="28" r="1.5" fill="white"/>
                    <circle cx="29" cy="28" r="1.5" fill="white"/>
                  </g>
                </svg>
              </div>
              <span className="label">Messages</span>
            </div>

            <div
              className={`earnings-icon group ${activeSection === 'earnings' ? 'active' : ''}`}
              onClick={() => setActiveSection('earnings')}
            >
              <div className="icon-container">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon">
                  <ellipse cx="24" cy="28" rx="14" ry="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <ellipse cx="36" cy="28" rx="4" ry="3" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <circle cx="35" cy="27" r="0.8" fill="currentColor"/>
                  <circle cx="37" cy="27" r="0.8" fill="currentColor"/>
                  <path d="M16 20C16 20 14 16 18 14C22 12 24 16 24 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
                  <path d="M16 36V40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M22 36V40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M26 36V40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M32 36V40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <rect x="20" y="17" width="8" height="2" rx="1" fill="currentColor"/>
                  <circle cx="18" cy="25" r="1.5" fill="currentColor"/>
                </svg>
                <div className="coin coin-1">
                  <svg width="8" height="8" viewBox="0 0 12 12" fill="none">
                    <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.5"/>
                    <text x="6" y="8" textAnchor="middle" fill="currentColor" fontSize="6" fontWeight="bold">$</text>
                  </svg>
                </div>
                <div className="coin coin-2">
                  <svg width="6" height="6" viewBox="0 0 12 12" fill="none">
                    <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.5"/>
                    <text x="6" y="8" textAnchor="middle" fill="currentColor" fontSize="6" fontWeight="bold">$</text>
                  </svg>
                </div>
              </div>
              <span className="label">Earnings</span>
            </div>
          </nav>

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-all duration-200 hover:brightness-110 cursor-pointer"
              style={{ backgroundColor: '#1a1a1e', color: '#F8FAFC' }}
            >
              M
            </button>

            {isDropdownOpen && (
              <div
                className="absolute right-0 mt-2 w-80 rounded-2xl shadow-2xl overflow-hidden z-50"
                style={{ backgroundColor: '#1a1a1e', color: '#F8FAFC' }}
              >
                <div className="p-6">
                  <div className="mb-5">
                    <div className="inline-block px-2.5 py-1 rounded-md text-xs font-bold tracking-wider mb-3" style={{ backgroundColor: '#111111', color: '#94A3B8' }}>
                      CREATOR
                    </div>
                    <h3 className="text-xl font-bold mb-0.5" style={{ color: '#F8FAFC' }}>Main</h3>
                    <p className="text-sm" style={{ color: '#64748B' }}>judestcks@gmail.com</p>
                  </div>

                  <button className="w-full py-3 px-4 rounded-xl text-sm font-bold mb-3 transition-all duration-200 hover:brightness-110" style={{ backgroundColor: '#111111', color: '#F8FAFC' }}>
                    Settings
                  </button>

                  <button className="w-full flex items-center justify-between py-3 px-4 rounded-xl text-sm font-bold mb-1 transition-all duration-200 hover:brightness-110" style={{ backgroundColor: 'transparent', color: '#F8FAFC' }}>
                    <span>Give feedback</span>
                    <ArrowUpRight className="w-4 h-4" style={{ color: '#64748B' }} />
                  </button>

                  <button className="w-full flex items-center justify-between py-3 px-4 rounded-xl text-sm font-bold mb-5 transition-all duration-200 hover:brightness-110" style={{ backgroundColor: 'transparent', color: '#F8FAFC' }}>
                    <span>Support</span>
                    <ArrowUpRight className="w-4 h-4" style={{ color: '#64748B' }} />
                  </button>

                  <button onClick={handleLogout} className="w-full flex items-center gap-2.5 py-3 px-4 text-sm font-bold transition-all duration-200 hover:opacity-70" style={{ color: '#F8FAFC' }}>
                    <LogOut className="w-4 h-4" />
                    <span>Log out</span>
                  </button>
                </div>

                <div className="px-6 py-4 flex items-center gap-4 text-xs" style={{ color: '#64748B', borderTop: '1px solid #111111' }}>
                  <button className="transition-colors" style={{ color: '#64748B' }}>Privacy</button>
                  <button className="transition-colors" style={{ color: '#64748B' }}>Terms</button>
                  <button className="transition-colors" style={{ color: '#64748B' }}>Clipper Terms</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t" style={{ backgroundColor: '#111111', borderColor: '#1a1a1e' }}>
        <div className="flex items-center justify-around px-4 py-3">
          <div
            className={`home-icon group ${activeSection === 'home' ? 'active' : ''}`}
            onClick={() => setActiveSection('home')}
          >
            <div className="home-icon-wrapper">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="14" y="18" width="20" height="24" rx="2" stroke="white" strokeWidth="2" fill="none"/>
                <path d="M8 20L24 8L40 20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path className="light-beam" d="M19 42V28C19 27.4477 19.4477 27 20 27H28C28.5523 27 29 27.4477 29 28V42" fill="white"/>
                <ellipse className="glow-ellipse" cx="24" cy="35" rx="6" ry="8" fill="white"/>
              </svg>
              <div className="outer-glow"></div>
            </div>
            <span className="label">Home</span>
          </div>

          <div
            className={`messages-icon group ${activeSection === 'messages' ? 'active' : ''}`}
            onClick={() => setActiveSection('messages')}
          >
            <div className="messages-icon-wrapper">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="back-bubble" d="M32 12H18C14.6863 12 12 14.6863 12 18V26C12 29.3137 14.6863 32 18 32H20L24 36L28 32H32C35.3137 32 38 29.3137 38 26V18C38 14.6863 35.3137 12 32 12Z" stroke="white" strokeWidth="2" fill="none"/>
                <path className="front-bubble" d="M30 20H16C13.2386 20 11 22.2386 11 25V31C11 33.7614 13.2386 36 16 36H18L21 40L24 36H30C32.7614 36 35 33.7614 35 31V25C35 22.2386 32.7614 20 30 20Z" stroke="white" strokeWidth="2" fill="rgba(0,0,0,0.8)"/>
                <g className="dots">
                  <circle cx="17" cy="28" r="1.5" fill="white"/>
                  <circle cx="23" cy="28" r="1.5" fill="white"/>
                  <circle cx="29" cy="28" r="1.5" fill="white"/>
                </g>
              </svg>
            </div>
            <span className="label">Messages</span>
          </div>

          <div
            className={`earnings-icon group ${activeSection === 'earnings' ? 'active' : ''}`}
            onClick={() => setActiveSection('earnings')}
          >
            <div className="icon-container">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon">
                <ellipse cx="24" cy="28" rx="14" ry="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                <ellipse cx="36" cy="28" rx="4" ry="3" stroke="currentColor" strokeWidth="2" fill="none"/>
                <circle cx="35" cy="27" r="0.8" fill="currentColor"/>
                <circle cx="37" cy="27" r="0.8" fill="currentColor"/>
                <path d="M16 20C16 20 14 16 18 14C22 12 24 16 24 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
                <path d="M16 36V40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M22 36V40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M26 36V40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M32 36V40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <rect x="20" y="17" width="8" height="2" rx="1" fill="currentColor"/>
                <circle cx="18" cy="25" r="1.5" fill="currentColor"/>
              </svg>
              <div className="coin coin-1">
                <svg width="8" height="8" viewBox="0 0 12 12" fill="none">
                  <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.5"/>
                  <text x="6" y="8" textAnchor="middle" fill="currentColor" fontSize="6" fontWeight="bold">$</text>
                </svg>
              </div>
              <div className="coin coin-2">
                <svg width="6" height="6" viewBox="0 0 12 12" fill="none">
                  <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.5"/>
                  <text x="6" y="8" textAnchor="middle" fill="currentColor" fontSize="6" fontWeight="bold">$</text>
                </svg>
              </div>
            </div>
            <span className="label">Earnings</span>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-6 sm:py-12 pt-20 sm:pt-24">
        {activeSection === 'messages' && (
          <div className="flex items-center justify-center min-h-[calc(100vh-250px)] sm:min-h-[calc(100vh-200px)]">
            <div className="text-center px-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center" style={{ backgroundColor: '#1a1a1e' }}>
                <svg className="w-8 h-8 sm:w-10 sm:h-10" style={{ color: '#64748B' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3" style={{ color: '#F8FAFC' }}>No messages yet</h3>
              <p className="text-sm sm:text-base" style={{ color: '#94A3B8' }}>Your conversations will appear here</p>
            </div>
          </div>
        )}

        {activeSection === 'earnings' && (
          <div className="flex items-center justify-center min-h-[calc(100vh-250px)] sm:min-h-[calc(100vh-200px)]">
            <div className="text-center px-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center" style={{ backgroundColor: '#1a1a1e' }}>
                <svg className="w-8 h-8 sm:w-10 sm:h-10" style={{ color: '#64748B' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3" style={{ color: '#F8FAFC' }}>No earnings yet</h3>
              <p className="text-sm sm:text-base" style={{ color: '#94A3B8' }}>Start posting clips to earn money</p>
            </div>
          </div>
        )}

        {activeSection === 'home' && (
          <>
        <section className="mb-10 sm:mb-20">
          <div className="mb-5 sm:mb-7">
            <h2 className="text-2xl sm:text-3xl font-bold mb-1.5 sm:mb-2 tracking-tight" style={{ color: '#F8FAFC' }}>Active campaigns</h2>
            <p className="text-sm sm:text-base" style={{ color: '#94A3B8' }}>Select a campaign to start clipping</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            <div className="rounded-xl sm:rounded-2xl p-5 sm:p-7 transition-all duration-200 hover:brightness-105 cursor-pointer" style={{ backgroundColor: '#1a1a1e' }}>
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                  <Video className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 sm:gap-2 mb-1">
                    <h3 className="font-semibold text-base sm:text-lg truncate" style={{ color: '#F8FAFC' }}>DreamKey</h3>
                    <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                      <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm" style={{ color: '#64748B' }}>13d ago • Per view</p>
                </div>
              </div>

              <p className="mb-4 sm:mb-5 font-medium text-sm sm:text-base" style={{ color: '#F8FAFC' }}>VCTV9000 Channel Awareness</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 sm:gap-3">
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: '#64748B' }} />
                  <Video className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: '#64748B' }} />
                  <Music2 className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: '#64748B' }} />
                </div>
                <div className="text-right">
                  <div className="text-2xl sm:text-3xl font-bold" style={{ color: '#F8FAFC' }}>$1,000</div>
                  <div className="text-[10px] sm:text-xs font-medium tracking-wider mt-0.5" style={{ color: '#64748B' }}>PER 1M VIEWS</div>
                </div>
              </div>
            </div>

            <div className="rounded-xl sm:rounded-2xl p-5 sm:p-7 transition-all duration-200 hover:brightness-105 cursor-pointer" style={{ backgroundColor: '#1a1a1e' }}>
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br from-cyan-400 to-emerald-500 flex items-center justify-center text-black font-bold text-lg sm:text-xl flex-shrink-0">
                  1B
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 sm:gap-2 mb-1">
                    <h3 className="font-semibold text-base sm:text-lg truncate" style={{ color: '#F8FAFC' }}>1 Billion Followers Sum...</h3>
                    <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                      <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm" style={{ color: '#64748B' }}>24d ago • Per view</p>
                </div>
              </div>

              <p className="mb-4 sm:mb-5 font-medium text-sm sm:text-base" style={{ color: '#F8FAFC' }}>1 Billion Acts of Kindness</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 sm:gap-3">
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: '#64748B' }} />
                  <Music2 className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: '#64748B' }} />
                  <Video className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: '#64748B' }} />
                </div>
                <div className="text-right">
                  <div className="text-2xl sm:text-3xl font-bold" style={{ color: '#F8FAFC' }}>$1,500</div>
                  <div className="text-[10px] sm:text-xs font-medium tracking-wider mt-0.5" style={{ color: '#64748B' }}>PER 1M VIEWS</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10 sm:mb-20">
          <div className="mb-5 sm:mb-7">
            <h2 className="text-2xl sm:text-3xl font-bold mb-1.5 sm:mb-2 tracking-tight" style={{ color: '#F8FAFC' }}>My Accounts</h2>
            <p className="text-sm sm:text-base" style={{ color: '#94A3B8' }}>Add your social media channels and profiles</p>
          </div>

          <SocialLinksForm />
        </section>

        <section className="mb-8">
          <div className="mb-5 sm:mb-7">
            <h2 className="text-2xl sm:text-3xl font-bold mb-1.5 sm:mb-2 tracking-tight" style={{ color: '#F8FAFC' }}>Top clips</h2>
            <p className="text-sm sm:text-base" style={{ color: '#94A3B8' }}>Your most viewed clips</p>
          </div>
        </section>
          </>
        )}
      </main>
    </div>
    </DoorTransition>
  );
}
