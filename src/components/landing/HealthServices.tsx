import {
  AlertTriangle,
  MapPin,
  Bell,
  Ambulance,
  Phone,
  Trophy,
  Target,
  Gift,
  Star,
  HeartPulse,
  Baby,
  Syringe,
  Activity,
} from 'lucide-react';

/* =========== SOS SECTION =========== */
export function SOS() {
  const sosFeatures = [
    { icon: AlertTriangle, title: 'Appui sur SOS', desc: 'Un bouton d\'urgence accessible à tout moment depuis l\'application.' },
    { icon: MapPin, title: 'Position GPS envoyée', desc: 'Votre localisation exacte est partagée automatiquement avec les secours.' },
    { icon: Bell, title: 'Notification des urgences', desc: 'Les services d\'urgence les plus proches sont alertés instantanément.' },
    { icon: Ambulance, title: 'Ambulance la plus proche dépêchée', desc: 'Dispatch automatique vers l\'ambulance disponible la plus proche.' },
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div>
            <span className="inline-block bg-red-50 text-sira-danger text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Urgences
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-sira-dark mb-4">
              Une aide d&apos;urgence
              <br />
              <span className="text-sira-danger">en un clic</span>
            </h2>
            <p className="text-sira-text text-lg mb-8 leading-relaxed">
              En cas d&apos;urgence médicale, Sira localise et alerte
              automatiquement les secours les plus proches de votre position.
            </p>

            <div className="space-y-5">
              {sosFeatures.map((feat, i) => (
                <div key={feat.title} className="flex gap-4 group">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-sira-danger transition-colors">
                      <feat.icon size={20} className="text-sira-danger group-hover:text-white transition-colors" />
                    </div>
                    {i < sosFeatures.length - 1 && (
                      <div className="w-0.5 h-8 bg-red-100 mt-2" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-sira-dark">{feat.title}</h3>
                    <p className="text-sm text-sira-text">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - SOS Visual */}
          <div className="flex justify-center">
            <div className="relative">
              {/* SOS Button */}
              <div className="w-48 h-48 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex flex-col items-center justify-center shadow-2xl shadow-red-500/30 animate-pulse-soft cursor-pointer">
                <span className="text-white text-5xl font-extrabold">SOS</span>
                <span className="text-white/80 text-sm font-medium mt-1">SANTÉ</span>
              </div>
              {/* Ripple rings */}
              <div className="absolute inset-0 w-48 h-48 border-2 border-red-300 rounded-full animate-ping opacity-30" />
              <div className="absolute -inset-6 border border-red-200 rounded-full animate-ping opacity-20" style={{ animationDelay: '0.5s' }} />

              {/* Info cards around */}
              <div className="absolute -top-8 -right-20 bg-white rounded-xl shadow-lg p-3 hidden lg:block">
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-sira-danger" />
                  <span className="text-xs font-medium text-sira-dark">Appel d&apos;urgence</span>
                </div>
              </div>
              <div className="absolute -bottom-8 -left-20 bg-white rounded-xl shadow-lg p-3 hidden lg:block">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-sira-primary" />
                  <span className="text-xs font-medium text-sira-dark">GPS activé</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========== REWARDS SECTION =========== */
export function Rewards() {
  const rewards = [
    { icon: Target, title: 'Objectifs santé', desc: 'Atteignez vos objectifs quotidiens de bien-être.' },
    { icon: Star, title: 'Points de fidélité', desc: 'Cumulez des points à chaque consultation ou action de prévention.' },
    { icon: Gift, title: 'Récompenses', desc: 'Échangez vos points contre des réductions ou des consultations gratuites.' },
    { icon: Trophy, title: 'Classement', desc: 'Motivez-vous grâce au classement de la communauté Sira.' },
  ];

  return (
    <section className="py-16 lg:py-24 bg-sira-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-sira-secondary-light text-sira-secondary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Gamification
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-sira-dark mb-4">
            Votre santé <span className="text-sira-secondary">récompensée</span>
          </h2>
          <p className="text-sira-text max-w-2xl mx-auto text-lg">
            Adoptez de bonnes habitudes santé et gagnez des récompenses.
            Plus vous prenez soin de vous, plus vous êtes récompensé.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {rewards.map((item) => (
            <div key={item.title} className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 group">
              <div className="w-14 h-14 bg-sira-secondary-light rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-sira-secondary transition-colors">
                <item.icon size={28} className="text-sira-secondary group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-semibold text-sira-dark mb-2">{item.title}</h3>
              <p className="text-sm text-sira-text">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========== LIFE STAGES SECTION =========== */
export function LifeStages() {
  const stages = [
    { icon: Baby, title: 'Calendrier prénatal', desc: 'Suivi personnalisé de la grossesse, rappels de consultations et échographies.', color: '#EC4899' },
    { icon: HeartPulse, title: 'Carnet de santé numérique', desc: 'Suivi de la croissance et du développement de votre enfant.', color: '#0FA958' },
    { icon: Activity, title: 'Courbe de croissance', desc: 'Visualisez l\'évolution du poids et de la taille de votre enfant.', color: '#3B82F6' },
    { icon: Syringe, title: 'Vaccination des enfants', desc: 'Calendrier vaccinal complet avec rappels automatiques.', color: '#F2A900' },
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-pink-50 text-pink-500 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Famille & Enfants
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-sira-dark mb-4">
            Accompagner chaque <span className="text-sira-primary">étape de la vie</span>
          </h2>
          <p className="text-sira-text max-w-2xl mx-auto text-lg">
            De la grossesse aux premiers pas de votre enfant, Sira vous accompagne
            à chaque étape avec des outils dédiés.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stages.map((stage) => (
            <div key={stage.title} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${stage.color}12` }}>
                <stage.icon size={24} style={{ color: stage.color }} />
              </div>
              <h3 className="font-semibold text-sira-dark mb-2">{stage.title}</h3>
              <p className="text-sm text-sira-text leading-relaxed">{stage.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
