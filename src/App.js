import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Star, CheckCircle } from 'lucide-react'

// NOTE — build fix:
// The original build failed because `Discord` and `LightningBolt` were not exported
// from the lucide-react CDN the preview environment was using.
// To fix that reliably without depending on CDN exports, this file now
// implements small inline SVG components for the "Discord" (connect) icon
// and the lightning/bolt icon. We keep using lucide-react for the other
// common icons (ShieldCheck, Star, CheckCircle).

// Small, lightweight inline icons (avoid depending on external package exports)
const DiscordIcon = ({ size = 16, className = '' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* simple chat-bubble + two "eyes" — intentionally generic so we don't rely on a branded asset */}
    <path
      d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="9" cy="11" r="1.05" fill="currentColor" />
    <circle cx="15" cy="11" r="1.05" fill="currentColor" />
  </svg>
)

const BoltIcon = ({ size = 18, className = '' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* simple bolt shaped polygon */}
    <path d="M13 2 L3 14h7l-1 8 10-12h-7z" fill="currentColor" />
  </svg>
)

// Lil Bro Premium - Single-file React component (Tailwind CSS + Framer Motion)
// Default export: preview-ready landing page. Replace links, images, and OAuth URL as needed.
export default function LilBroPremium() {
  const discordOAuthUrl = '#REPLACE_WITH_DISCORD_OAUTH_URL'

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-[#071122] text-slate-100 antialiased">
      {/* NAV */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-400 flex items-center justify-center shadow-lg">
            <span className="font-extrabold text-lg">LB</span>
          </div>
          <div>
            <h1 className="font-bold tracking-tight">Lil Bro <span className="text-indigo-400">Premium</span></h1>
            <p className="text-xs text-slate-400 -mt-1">Discord automation, reimagined</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-slate-300">
          <a className="hover:text-white" href="#features">Features</a>
          <a className="hover:text-white" href="#pricing">Pricing</a>
          <a className="hover:text-white" href="#testimonials">Testimonials</a>
          <a className="px-4 py-2 rounded-md bg-slate-800/40 hover:bg-slate-800 text-sm" href="#docs">Docs</a>
          <a href={discordOAuthUrl} className="ml-4 inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md shadow">
            <DiscordIcon />
            <span>Connect Discord</span>
          </a>
        </nav>

        <div className="md:hidden">
          <a href={discordOAuthUrl} className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-3 py-2 rounded-md shadow text-sm">
            <DiscordIcon />
            <span>Login</span>
          </a>
        </div>
      </header>

      {/* HERO */}
      <main className="max-w-6xl mx-auto px-6">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-20">
          <motion.div initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <p className="inline-flex items-center gap-2 text-sm bg-indigo-800/30 px-3 py-1 rounded-full text-indigo-200 w-max">New • Lifetime $5 plan</p>
            <h2 className="mt-6 text-4xl md:text-5xl font-extrabold leading-tight">Lil Bro Premium — <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-300">small price, massive power</span></h2>
            <p className="mt-4 text-slate-300 text-lg">Unlock exclusive commands, faster snipes, advanced moderation helpers, and a beautiful control panel that feels like home. Simple account linking with Discord and lifetime access for one low price.</p>

            <div className="mt-6 flex items-center gap-4">
              <a href={discordOAuthUrl} className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-3 rounded-lg shadow-lg">
                <DiscordIcon />
                <span>Connect with Discord</span>
              </a>

              <a href="#pricing" className="inline-flex items-center gap-2 border border-slate-700 text-slate-200 px-4 py-3 rounded-lg hover:bg-slate-800/40">
                See Pricing
              </a>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 max-w-md">
              <div className="flex items-start gap-3 bg-slate-800/30 p-3 rounded-lg">
                <BoltIcon className="mt-1" />
                <div>
                  <p className="font-semibold">Ultra-fast snipes</p>
                  <p className="text-slate-400 text-sm">Optimized queues & priority processing.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-800/30 p-3 rounded-lg">
                <ShieldCheck className="mt-1" />
                <div>
                  <p className="font-semibold">Secure</p>
                  <p className="text-slate-400 text-sm">OAuth-only auth, scoped permissions.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Hero mock terminal / dashboard */}
          <motion.div initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <div className="relative rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-900/40 p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="text-xs text-slate-400">Lil Bro Dashboard Preview</div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="rounded-md bg-slate-700/40 p-3">
                    <p className="text-xs text-slate-300 font-semibold">Commands used</p>
                    <p className="text-lg font-bold">snipe • backup • autodelete</p>
                  </div>

                  <div className="rounded-md bg-slate-700/40 p-3">
                    <p className="text-xs text-slate-300 font-semibold">Queue</p>
                    <p className="text-lg font-bold">Priority: Premium</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="rounded-md bg-slate-700/40 p-3">
                    <p className="text-xs text-slate-300 font-semibold">Active guilds</p>
                    <p className="text-lg font-bold">1,234</p>
                  </div>

                  <div className="rounded-md bg-slate-700/40 p-3">
                    <p className="text-xs text-slate-300 font-semibold">Latency</p>
                    <p className="text-lg font-bold">48ms</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-md bg-gradient-to-r from-indigo-700/30 to-purple-700/20 p-3 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-200 font-medium">Lifetime Access</p>
                  <p className="text-2xl font-extrabold">$5</p>
                </div>
                <div className="text-xs text-slate-400">One payment • No subscriptions</div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* FEATURES */}
        <section id="features" className="py-12">
          <h3 className="text-2xl font-bold">Features built for Lil Bros</h3>
          <p className="text-slate-400 mt-2">Everything you need to run faster, safer, and with style.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
            {[{
              icon: <Star />,
              title: 'Priority Snipes',
              desc: 'Queue prioritization for premium users — higher success rates.'
            },{
              icon: <CheckCircle />,
              title: 'Lifetime Access',
              desc: 'One-time purchase unlocks lifetime features — no hidden fees.'
            },{
              icon: <ShieldCheck />,
              title: 'Privacy-first',
              desc: 'OAuth-only, scoped permissions, and minimal data retention.'
            }].map((f, i) => (
              <motion.div key={i} whileHover={{ y: -6 }} className="bg-slate-800/30 p-5 rounded-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-md bg-slate-700/40 flex items-center justify-center">{f.icon}</div>
                  <div>
                    <p className="font-semibold">{f.title}</p>
                    <p className="text-slate-400 text-sm">{f.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="py-12">
          <h3 className="text-2xl font-bold">Pricing</h3>
          <p className="text-slate-400 mt-2">Simple, honest pricing — made for the community.</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div className="rounded-2xl bg-gradient-to-br from-slate-800/30 to-slate-900/30 p-6 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-300">Lifetime</p>
                  <p className="text-4xl font-extrabold">$5</p>
                </div>
                <div className="text-sm text-slate-400">One-time payment • Immediate unlock</div>
              </div>

              <ul className="mt-6 space-y-3 text-slate-300">
                <li className="flex items-start gap-3"><CheckCircle /> Priority snipes & queues</li>
                <li className="flex items-start gap-3"><CheckCircle /> Dashboard access</li>
                <li className="flex items-start gap-3"><CheckCircle /> Priority support</li>
                <li className="flex items-start gap-3"><CheckCircle /> Future premium features</li>
              </ul>

              <div className="mt-6">
                <a href={discordOAuthUrl} className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-3 rounded-lg">
                  <DiscordIcon />
                  <span>Buy Lifetime Access</span>
                </a>
              </div>
            </div>

            <div className="rounded-2xl p-6 bg-slate-800/20 flex flex-col gap-4">
              <h4 className="font-bold">Why Lil Bro?</h4>
              <p className="text-slate-400">We focus on doing a small set of things extremely well — fast snipes, rock-solid uptime, and a delightful dashboard that makes management easy for server owners.</p>

              <div className="mt-2 grid grid-cols-2 gap-2">
                <div className="p-3 rounded-md bg-slate-700/30 text-slate-200">Auto-updates</div>
                <div className="p-3 rounded-md bg-slate-700/30 text-slate-200">Role-safe</div>
                <div className="p-3 rounded-md bg-slate-700/30 text-slate-200">Webhook logs</div>
                <div className="p-3 rounded-md bg-slate-700/30 text-slate-200">Invite tracking</div>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials" className="py-12">
          <h3 className="text-2xl font-bold">What the community says</h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {name: 'Riley', quote: 'Switched and never looked back — snipes are instant.'},
              {name: 'Sam', quote: 'Dashboard is gorgeous and I bought lifetime the minute it dropped.'},
              {name: 'Ava', quote: 'Support responds fast — worth every cent.'}
            ].map((t, i) => (
              <motion.blockquote key={i} whileHover={{ scale: 1.03 }} className="bg-slate-800/30 p-5 rounded-2xl">
                <p className="text-slate-300">“{t.quote}”</p>
                <div className="mt-3 text-sm text-slate-400">— {t.name}</div>
              </motion.blockquote>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-12 py-10 border-t border-slate-700/40">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-400 flex items-center justify-center">LB</div>
                <div>
                  <p className="font-semibold">Lil Bro Premium</p>
                  <p className="text-xs text-slate-400">© {new Date().getFullYear()} Lil Bro • Built with ♥ for Discord</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a className="text-slate-400 hover:text-white text-sm" href="#terms">Terms</a>
              <a className="text-slate-400 hover:text-white text-sm" href="#privacy">Privacy</a>
              <a className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md" href={discordOAuthUrl}>
                <DiscordIcon />
                <span>Get Premium</span>
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
