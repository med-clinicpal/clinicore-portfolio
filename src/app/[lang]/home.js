'use client'
import { useState, useEffect } from "react";
import { getTranslations } from "../data/translations";
import LanguageSwitcher from "../components/LanguageSwitcher";

export default function Home({ pricingData, lang }) {
  const t = getTranslations(lang);

  return (
    <div className="min-h-screen bg-bg">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col bg-gradient-to-br from-navy to-teal">
        {/* Navigation */}
        <nav className="flex items-center justify-between p-6 lg:px-12">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <span className="text-white text-xl font-bold">CliniCore.ai</span>
          </div>
          <LanguageSwitcher lang={lang} />
        </nav>

        {/* Hero Content */}
        <div className="flex-1 flex items-center justify-center px-6 lg:px-12">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {t.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl text-light-blue mb-8 max-w-4xl mx-auto leading-relaxed">
              {t.heroSubtitle}
            </p>
            <p className="text-lg text-pale-blue mb-12 max-w-3xl mx-auto opacity-90">
              {t.heroDescription}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-primary hover:bg-btn-primary-hover text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                {t.getDemo}
              </button>
              <button className="bg-transparent border-2 border-light-blue text-light-blue hover:bg-light-blue hover:text-navy px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
                {t.learnMore}
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-light-blue" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 lg:px-12 bg-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              {t.featuresTitle}
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              {t.featuresSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Patient Management */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-pale-blue">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">{t.patientManagementTitle}</h3>
              <p className="text-text-muted leading-relaxed">{t.patientManagementDesc}</p>
            </div>

            {/* Appointments */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-pale-blue">
              <div className="w-16 h-16 bg-teal rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">{t.appointmentTitle}</h3>
              <p className="text-text-muted leading-relaxed">{t.appointmentDesc}</p>
            </div>

            {/* Document Management */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-pale-blue">
              <div className="w-16 h-16 bg-light-blue rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">{t.documentTitle}</h3>
              <p className="text-text-muted leading-relaxed">{t.documentDesc}</p>
            </div>

            {/* AI Analysis */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-pale-blue">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">{t.aiAnalysisTitle}</h3>
              <p className="text-text-muted leading-relaxed">{t.aiAnalysisDesc}</p>
            </div>

            {/* Analytics */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-pale-blue">
              <div className="w-16 h-16 bg-teal rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">{t.analyticsTitle}</h3>
              <p className="text-text-muted leading-relaxed">{t.analyticsDesc}</p>
            </div>

            {/* Calendar */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-pale-blue">
              <div className="w-16 h-16 bg-light-blue rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">{t.calendarTitle}</h3>
              <p className="text-text-muted leading-relaxed">{t.calendarDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Preview Section */}
      <section className="py-20 px-6 lg:px-12 bg-pale-blue">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              {t.analyticsStatsTitle}
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              {t.analyticsStatsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="text-4xl font-bold text-primary mb-2">2,847</div>
              <div className="text-text-muted font-medium">{t.totalPatients}</div>
            </div>
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="text-4xl font-bold text-teal mb-2">156</div>
              <div className="text-text-muted font-medium">{t.weeklyAppointments}</div>
            </div>
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="text-4xl font-bold text-light-blue mb-2">682</div>
              <div className="text-text-muted font-medium">{t.monthlyVisits}</div>
            </div>
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
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
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              {t.benefitsTitle}
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              {t.benefitsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">{t.aiPoweredTitle}</h3>
              <p className="text-text-muted leading-relaxed">{t.aiPoweredDesc}</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-teal rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">{t.secureTitle}</h3>
              <p className="text-text-muted leading-relaxed">{t.secureDesc}</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-light-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">{t.efficientTitle}</h3>
              <p className="text-text-muted leading-relaxed">{t.efficientDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 lg:px-12 bg-gradient-to-br from-navy to-teal">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t.contactTitle}
          </h2>
          <p className="text-xl text-light-blue mb-8">
            {t.contactSubtitle}
          </p>
          <p className="text-lg text-pale-blue mb-12 opacity-90">
            {t.contactDescription}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary hover:bg-btn-primary-hover text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              {t.requestDemo}
            </button>
            <button className="bg-transparent border-2 border-light-blue text-light-blue hover:bg-light-blue hover:text-navy px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
              {t.contact}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-12 bg-navy text-center">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center space-x-3 mb-8">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <span className="text-white text-xl font-bold">CliniCore.ai</span>
          </div>
          <p className="text-light-blue">
            © 2024 CliniCore.ai. {t.allRightsReserved}
          </p>
        </div>
      </footer>

    </div>
  );
}