import {
  Shield,
  CreditCard,
  Smartphone,
  Heart,
  Users,
  Activity,
} from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sira-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sira-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-sira-primary-light text-sira-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 bg-sira-primary rounded-full animate-pulse" />
              Entreprise accélérant la transformation numérique de la santé au Bénin
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold text-sira-dark leading-tight mb-6">
              Une seule plateforme
              <br />
              pour toute votre{' '}
              <span className="text-sira-primary">santé.</span>
            </h1>

            <p className="text-lg text-sira-text max-w-xl mb-8 leading-relaxed">
              Dossier médical numérique, mutuelle digitale, téléconsultation,
              urgences, pharmacies, paiements sécurisés et suivi de santé
              réunis dans un même écosystème.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#telecharger"
                className="inline-flex items-center gap-3 bg-sira-primary text-white px-6 py-3.5 rounded-xl font-semibold text-base hover:bg-sira-primary-dark transition-all duration-200 shadow-lg shadow-sira-primary/25 hover:shadow-xl hover:shadow-sira-primary/30"
              >
                <Smartphone size={20} />
                Télécharger l&apos;application
              </a>
              <a
                href="#ecosysteme"
                className="inline-flex items-center gap-2 bg-white text-sira-dark px-6 py-3.5 rounded-xl font-semibold text-base border border-gray-200 hover:border-sira-primary hover:text-sira-primary transition-all duration-200"
              >
                Découvrir la plateforme
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4">
              {[
                { icon: Shield, text: 'Paiements sécurisés' },
                { icon: CreditCard, text: 'Données cryptées & protégées' },
                { icon: Heart, text: 'Dossier médical centralisé' },
              ].map((badge) => (
                <div
                  key={badge.text}
                  className="flex items-center gap-2 text-sm text-sira-text"
                >
                  <badge.icon
                    size={16}
                    className="text-sira-primary flex-shrink-0"
                  />
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in">
            {/* Phone */}
            <div className="phone-frame animate-float">
              <div className="absolute inset-0 bg-gradient-to-b from-sira-primary via-sira-primary to-sira-primary-dark flex flex-col p-6 pt-10">
                {/* App Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-white/70 text-xs">Bonjour,</p>
                    <p className="text-white font-bold text-sm">Ahouefa 👋</p>
                  </div>
                  <div className="w-8 h-8 bg-white/20 rounded-full" />
                </div>

                {/* Search bar */}
                <div className="bg-white/20 rounded-lg px-3 py-2 mb-5">
                  <p className="text-white/60 text-xs">Rechercher...</p>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-3 gap-2 mb-5">
                  {['Mutuelle active', 'Vaccination à jour', 'Bilan de santé annuel'].map(
                    (item, i) => (
                      <div
                        key={item}
                        className="bg-white/15 rounded-lg p-2 text-center"
                      >
                        <div
                          className={`w-6 h-6 mx-auto mb-1 rounded-full ${
                            i === 0
                              ? 'bg-green-400'
                              : i === 1
                              ? 'bg-yellow-400'
                              : 'bg-blue-400'
                          }`}
                        />
                        <p className="text-white text-[8px] leading-tight">
                          {item}
                        </p>
                      </div>
                    )
                  )}
                </div>

                {/* Stats cards */}
                <div className="space-y-2 mt-auto">
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <p className="text-xs text-gray-500">Citoyens connectés</p>
                    <p className="text-lg font-bold text-sira-dark">
                      10 000+
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <p className="text-xs text-gray-500">
                      Professionnels de santé
                    </p>
                    <p className="text-lg font-bold text-sira-dark">200+</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stat cards */}
            <div className="absolute -left-4 top-1/4 bg-white rounded-xl shadow-xl p-4 animate-float-delayed hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-sira-primary-light rounded-lg flex items-center justify-center">
                  <Users size={20} className="text-sira-primary" />
                </div>
                <div>
                  <p className="text-xs text-sira-text">Utilisateurs actifs</p>
                  <p className="text-lg font-bold text-sira-dark">10 000+</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-4 bottom-1/4 bg-white rounded-xl shadow-xl p-4 animate-float hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-sira-secondary-light rounded-lg flex items-center justify-center">
                  <Activity size={20} className="text-sira-secondary" />
                </div>
                <div>
                  <p className="text-xs text-sira-text">Consultations/jour</p>
                  <p className="text-lg font-bold text-sira-dark">+150</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
