'use client'
import { getTranslations } from "../data/translations";
import Navigation from "../components/Navigation";

export default function Home({ lang }) {
  const t = getTranslations(lang);

  return (
    <div className="min-h-screen bg-bg">
      
      {/* Navigation */}
      <Navigation lang={lang} />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex flex-col bg-bg pt-20">

        {/* Hero Content */}
        <div className="flex-1 flex items-center justify-center px-6 lg:px-12">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text mb-6 leading-tight">
              {t.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl text-text-muted mb-8 max-w-4xl mx-auto leading-relaxed">
              {t.heroSubtitle}
            </p>
            <p className="text-lg text-text-muted mb-12 max-w-3xl mx-auto opacity-90">
              {t.heroDescription}
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${lang === 'ar' ? 'sm:flex-row-reverse' : ''}`}>
              <button className="bg-primary hover:bg-btn-primary-hover text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                {t.getDemo}
              </button>
              <button className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
                {t.learnMore}
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 lg:px-12 bg-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">
              {t.featuresTitle}
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              {t.featuresSubtitle}
            </p>
          </div> 

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Patient Management */}
            <div className="bg-bg-alt rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-teal rounded-xl flex items-center justify-center mb-6">
                <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-text mb-4">{t.patientManagementTitle}</h3>
              <p className="text-text-muted leading-relaxed">{t.patientManagementDesc}</p>
            </div>

            {/* Appointments */}
            <div className="bg-bg-alt rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border">
              <div className="w-16 h-16 bg-gradient-to-br from-teal to-primary rounded-xl flex items-center justify-center mb-6">
                <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5a2.25 2.25 0 002.25-2.25m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5M9 12.75h6m-6 3h6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-text mb-4">{t.appointmentTitle}</h3>
              <p className="text-text-muted leading-relaxed">{t.appointmentDesc}</p>
            </div>

            {/* Document Management */}
            <div className="bg-bg-alt rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border">
              <div className="w-16 h-16 bg-gradient-to-br from-light-blue to-primary rounded-xl flex items-center justify-center mb-6">
                <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-text mb-4">{t.documentTitle}</h3>
              <p className="text-text-muted leading-relaxed">{t.documentDesc}</p>
            </div>

            {/* AI Analysis */}
            <div className="bg-bg-alt rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-light-blue rounded-xl flex items-center justify-center mb-6">
                <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 14.5M14.25 3.104c.251.023.501.05.75.082M19.8 14.5l-5.8 5.8a2.25 2.25 0 01-3.182 0L5.018 14.5M19.8 14.5a2.25 2.25 0 011.35 2.056c-.04.577-.447 1.094-1.105 1.383l-.755.377a1.5 1.5 0 01-1.34 0l-.755-.377c-.658-.289-1.065-.806-1.105-1.383a2.25 2.25 0 011.35-2.056z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-text mb-4">{t.aiAnalysisTitle}</h3>
              <p className="text-text-muted leading-relaxed">{t.aiAnalysisDesc}</p>
            </div>

            {/* Analytics */}
            <div className="bg-bg-alt rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border">
              <div className="w-16 h-16 bg-gradient-to-br from-teal to-light-blue rounded-xl flex items-center justify-center mb-6">
                <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-text mb-4">{t.analyticsTitle}</h3>
              <p className="text-text-muted leading-relaxed">{t.analyticsDesc}</p>
            </div>

            {/* Calendar */}
            <div className="bg-bg-alt rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border">
              <div className="w-16 h-16 bg-gradient-to-br from-light-blue to-teal rounded-xl flex items-center justify-center mb-6">
                <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-text mb-4">{t.calendarTitle}</h3>
              <p className="text-text-muted leading-relaxed">{t.calendarDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Preview Section */}
      <section id="analytics" className="py-20 px-6 lg:px-12 bg-bg-alt">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">
              {t.analyticsStatsTitle}
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              {t.analyticsStatsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-bg rounded-xl p-8 text-center shadow-lg border border-border">
              <div className="text-4xl font-bold text-primary mb-2">2,847</div>
              <div className="text-text-muted font-medium">{t.totalPatients}</div>
            </div>
            <div className="bg-bg rounded-xl p-8 text-center shadow-lg border border-border">
              <div className="text-4xl font-bold text-teal mb-2">156</div>
              <div className="text-text-muted font-medium">{t.weeklyAppointments}</div>
            </div>
            <div className="bg-bg rounded-xl p-8 text-center shadow-lg border border-border">
              <div className="text-4xl font-bold text-light-blue mb-2">682</div>
              <div className="text-text-muted font-medium">{t.monthlyVisits}</div>
            </div>
            <div className="bg-bg rounded-xl p-8 text-center shadow-lg border border-border">
              <div className="text-4xl font-bold text-primary mb-2">1,234</div>
              <div className="text-text-muted font-medium">{t.aiAnalyses}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 lg:px-12 bg-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">
              {t.benefitsTitle}
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              {t.benefitsSubtitle}
            </p>
          </div>

          <div className={`grid grid-cols-1 lg:grid-cols-3 gap-12 ${lang === 'ar' ? 'lg:grid-flow-col-dense' : ''}`}>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-text mb-4">{t.aiPoweredTitle}</h3>
              <p className="text-text-muted leading-relaxed">{t.aiPoweredDesc}</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-teal rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-text mb-4">{t.secureTitle}</h3>
              <p className="text-text-muted leading-relaxed">{t.secureDesc}</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-light-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-text mb-4">{t.efficientTitle}</h3>
              <p className="text-text-muted leading-relaxed">{t.efficientDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 px-6 lg:px-12 bg-bg-alt">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">
              {t.aboutTitle}
            </h2>
            <p className="text-xl text-text-muted max-w-4xl mx-auto leading-relaxed">
              {t.aboutSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* About Content */}
            <div>
              <p className="text-lg text-text-muted leading-relaxed mb-8">
                {t.aboutDescription}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-bg rounded-xl p-6 border border-border">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-text mb-3">{t.aboutVision}</h3>
                  <p className="text-text-muted leading-relaxed">{t.aboutVisionText}</p>
                </div>

                <div className="bg-bg rounded-xl p-6 border border-border">
                  <div className="w-12 h-12 bg-teal rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-text mb-3">{t.aboutMission}</h3>
                  <p className="text-text-muted leading-relaxed">{t.aboutMissionText}</p>
                </div>
              </div>
            </div>

            {/* About Image/Illustration */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-primary to-teal rounded-2xl flex items-center justify-center">
                  <svg className="w-32 h-32 text-white opacity-20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-light-blue rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-teal rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 lg:px-12 bg-bg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">
            {t.contactTitle}
          </h2>
          <p className="text-xl text-text-muted mb-8">
            {t.contactSubtitle}
          </p>
          <p className="text-lg text-text-muted mb-12 opacity-90">
            {t.contactDescription}
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${lang === 'ar' ? 'sm:flex-row-reverse' : ''}`}>
            <button className="bg-primary hover:bg-btn-primary-hover text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              {t.requestDemo}
            </button>
            <button className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
              {t.contact}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-12 bg-bg text-center border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className={`flex items-center justify-center mb-8 ${lang === 'ar' ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <span className="text-text text-xl font-bold">CliniCore.ai</span>
          </div>
          <p className="text-text-muted">
            © 2024 CliniCore.ai. {t.allRightsReserved}
          </p>
        </div>
      </footer>

    </div>
  );
}