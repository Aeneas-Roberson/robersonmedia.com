import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section with Cyber Background */}
      <div className="relative cyber-bg min-h-screen flex items-center">
        {/* Floating Particles */}
        <div className="particles">
          <div className="particle" style={{ left: '10%', animationDelay: '0s' }}></div>
          <div className="particle" style={{ left: '20%', animationDelay: '-1s' }}></div>
          <div className="particle" style={{ left: '30%', animationDelay: '-2s' }}></div>
          <div className="particle" style={{ left: '40%', animationDelay: '-3s' }}></div>
          <div className="particle" style={{ left: '50%', animationDelay: '-4s' }}></div>
          <div className="particle" style={{ left: '60%', animationDelay: '-5s' }}></div>
          <div className="particle" style={{ left: '70%', animationDelay: '-6s' }}></div>
          <div className="particle" style={{ left: '80%', animationDelay: '-7s' }}></div>
          <div className="particle" style={{ left: '90%', animationDelay: '-8s' }}></div>
        </div>
        
        <div className="relative z-10 mx-auto max-w-2xl py-32 px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            <span className="neon-text-subtle">robersonmedia.com</span>
          </h1>
          <p className="text-lg leading-8 text-cyan-100 mb-10">
            A place for me to host all of my projects. Currently hosting ways to upload to Facebook, Instagram, and Tiktok. Coming soon: College Football Predictive Model
          </p>
          <div className="flex items-center justify-center gap-x-6">
            <a
              href="#projects"
              className="rounded-md cyber-gradient px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 neon-border"
            >
              Explore Projects
            </a>
            <a 
              href="#about" 
              className="text-sm font-semibold leading-6 text-cyan-300 hover:text-cyan-100 transition-colors"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" className="py-24 sm:py-32 bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-cyan-400">My Projects</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Everything you need for modern digital automation
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              From social media automation to sports analytics, my platform provides comprehensive tools for digital growth.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {/* Instagram Project Card */}
              <a 
                href="/instagram"
                className="group relative pl-24 p-6 bg-gray-800/50 rounded-lg neon-border hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                <dt className="text-base font-semibold leading-7 text-white group-hover:text-purple-400 transition-colors">
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 flex h-14 w-14 items-center justify-center rounded-lg bg-gray-700/50 p-2 group-hover:bg-purple-500/20 transition-colors">
                    <Image
                      src="/logos/Instagram_Glyph_Gradient.png"
                      alt="Instagram"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  Instagram Project
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-300 group-hover:text-gray-200 transition-colors">
                  Future integration with Cloudflare R2 for video upload and Instagram Graph API for automated content management.
                </dd>
              </a>
              
              {/* Facebook Project Card */}
              <a 
                href="/facebook"
                className="group relative pl-24 p-6 bg-gray-800/50 rounded-lg neon-border hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                <dt className="text-base font-semibold leading-7 text-white group-hover:text-blue-400 transition-colors">
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 flex h-14 w-14 items-center justify-center rounded-lg bg-gray-700/50 p-2 group-hover:bg-blue-500/20 transition-colors">
                    <Image
                      src="/logos/Facebook_Logo_Primary.png"
                      alt="Facebook"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  Facebook Project
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-300 group-hover:text-gray-200 transition-colors">
                  Complete Facebook integration with required compliance pages: Login, Privacy Policy, and Data Deletion.
                </dd>
              </a>
              
              {/* TikTok Project Card */}
              <a 
                href="/tiktok"
                className="group relative pl-24 p-6 bg-gray-800/50 rounded-lg neon-border hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                <dt className="text-base font-semibold leading-7 text-white group-hover:text-pink-400 transition-colors">
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 flex h-14 w-14 items-center justify-center rounded-lg bg-gray-700/50 p-2 group-hover:bg-pink-500/20 transition-colors">
                    <Image
                      src="/logos/TikTok_Icon_Black_Square.png"
                      alt="TikTok"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  TikTok Project
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-300 group-hover:text-gray-200 transition-colors">
                  TikTok integration platform with Login, Privacy Policy, and Terms of Service pages for API compliance.
                </dd>
              </a>
              
              {/* College Football Project Card */}
              <a 
                href="/college-football"
                className="group relative pl-24 p-6 bg-gray-800/50 rounded-lg neon-border hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                <dt className="text-base font-semibold leading-7 text-white group-hover:text-orange-400 transition-colors">
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 flex h-14 w-14 items-center justify-center rounded-lg bg-gray-700/50 p-2 group-hover:bg-orange-500/20 transition-colors">
                    <Image
                      src="/logos/college-football-logo.png"
                      alt="College Football"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  College Football Model
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-300 group-hover:text-gray-200 transition-colors">
                  Dynamic PostgreSQL-powered analytics platform for College Football data with flexible visualizations.
                </dd>
              </a>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}