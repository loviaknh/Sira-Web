import {
  Smartphone,
  CreditCard,
  Building,
  Hospital,
  ScanLine,
  FileCheck,
  BarChart3,
  TrendingUp,
  AlertCircle,
  PieChart,
  Activity,
  Map,
  Star,
} from 'lucide-react';

/* =========== ZERO CASH SECTION =========== */
export function ZeroCash() {
  const paymentMethods = [
    { icon: Smartphone, label: 'Mobile Money (MTN/Moov)' },
    { icon: CreditCard, label: 'Paiement par carte' },
    { icon: Building, label: 'Virement bancaire' },
    { icon: Hospital, label: 'Paiement en établissement' },
  ];

  const benefits = [
    { icon: ScanLine, label: 'Validation du patient' },
    { icon: FileCheck, label: 'Factures numériques' },
    { icon: BarChart3, label: 'Gestion de fonds' },
    { icon: TrendingUp, label: 'Audit en temps réel' },
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-sira-primary-light text-sira-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Paiements
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-sira-dark mb-4">
              Zéro cash. <span className="text-sira-primary">Zéro fuite.</span>
            </h2>
            <p className="text-sira-text text-lg mb-8 leading-relaxed">
              Tous les flux financiers sont tracés et sécurisés. Fini les
              paiements en espèces non traçables.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {paymentMethods.map((m) => (
                <div key={m.label} className="flex items-center gap-3 bg-sira-gray rounded-xl p-3 hover:bg-sira-primary-light transition-colors group">
                  <m.icon size={20} className="text-sira-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-sira-dark">{m.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-lg">
              <h3 className="font-semibold text-sira-dark mb-6">Flux de paiement sécurisé</h3>
              <div className="space-y-4">
                {benefits.map((b, i) => (
                  <div key={b.label} className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-sira-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                      <b.icon size={20} className="text-sira-primary" />
                    </div>
                    <div className="flex-1">
                      <span className="text-sm font-medium text-sira-dark">{b.label}</span>
                      <div className="w-full bg-gray-100 rounded-full h-2 mt-1">
                        <div className="bg-sira-primary h-2 rounded-full transition-all" style={{ width: `${95 - i * 10}%` }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========== DATA DASHBOARD SECTION =========== */
export function DataDashboard() {
  const dashboardMetrics = [
    { icon: Activity, label: 'Cas/urgences sanitaires', value: 'Temps réel' },
    { icon: Map, label: 'Zones sous-équipées', value: 'Cartographie' },
    { icon: AlertCircle, label: 'Saturation hospitalière', value: 'Alertes' },
    { icon: PieChart, label: 'Campagnes vaccination', value: 'Suivi' },
  ];

  return (
    <section className="py-16 lg:py-24 bg-sira-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Dashboard mockup */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            {/* Top bar */}
            <div className="bg-sira-dark px-4 py-3 flex items-center gap-2">
              <div className="w-3 h-3 bg-red-400 rounded-full" />
              <div className="w-3 h-3 bg-yellow-400 rounded-full" />
              <div className="w-3 h-3 bg-green-400 rounded-full" />
              <span className="text-white/50 text-xs ml-2">Tableau de bord national en temps réel</span>
            </div>
            {/* Content */}
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { label: 'Maladies fréquentes', value: '1,234', trend: '+12%' },
                  { label: 'Zones sous-équipées', value: '47', trend: '-5%' },
                  { label: 'Saturation hospitalière', value: '68%', trend: '+3%' },
                  { label: 'Campagnes en cours', value: '12', trend: '+2' },
                ].map((item) => (
                  <div key={item.label} className="bg-sira-gray rounded-xl p-4">
                    <p className="text-xs text-sira-text mb-1">{item.label}</p>
                    <div className="flex items-end gap-2">
                      <p className="text-xl font-bold text-sira-dark">{item.value}</p>
                      <span className={`text-xs font-medium ${item.trend.startsWith('+') ? 'text-sira-primary' : 'text-sira-danger'}`}>
                        {item.trend}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chart placeholder */}
              <div className="h-32 bg-sira-gray rounded-xl flex items-end p-4 gap-2">
                {[40, 65, 45, 80, 55, 70, 90, 60, 75, 85, 50, 95].map((h, i) => (
                  <div key={i} className="flex-1 bg-sira-primary/70 rounded-t-sm hover:bg-sira-primary transition-colors" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <span className="inline-block bg-blue-50 text-sira-info text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Intelligence sanitaire
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-sira-dark mb-4">
              Piloter la santé
              <br />
              <span className="text-sira-primary">grâce à la donnée</span>
            </h2>
            <p className="text-sira-text text-lg mb-8 leading-relaxed">
              Tableau de bord national en temps réel pour les décideurs.
              Visualisez les tendances sanitaires et anticipez les besoins.
            </p>

            <div className="space-y-4">
              {dashboardMetrics.map((m) => (
                <div key={m.label} className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3">
                    <m.icon size={20} className="text-sira-primary" />
                    <span className="font-medium text-sira-dark text-sm">{m.label}</span>
                  </div>
                  <span className="text-xs bg-sira-primary-light text-sira-primary px-3 py-1 rounded-full font-medium">{m.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========== TESTIMONIALS SECTION =========== */
export function Testimonials() {
  const testimonials = [
    {
      name: 'Aline D.',
      role: 'Patiente',
      text: 'Grâce à Sira, j\'ai pu trouver un gynécologue et prendre rendez-vous en 5 minutes. C\'est révolutionnaire pour le Bénin !',
      rating: 5,
    },
    {
      name: 'Dr. Kofi M.',
      role: 'Médecin généraliste',
      text: 'Sira m\'a permis d\'organiser mes consultations et de gérer mes patients de manière bien plus efficace. Je recommande.',
      rating: 5,
    },
    {
      name: 'Philippe T.',
      role: 'Pharmacien',
      text: 'Recevoir les ordonnances numériquement a considérablement réduit les erreurs. Un outil indispensable pour notre pharmacie.',
      rating: 5,
    },
    {
      name: 'Sophie A.',
      role: 'Responsable Laboratoire',
      text: 'Le partage direct des résultats d\'analyses avec les médecins traitants nous fait gagner un temps précieux.',
      rating: 4,
    },
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-sira-primary-light text-sira-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Témoignages
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-sira-dark mb-4">
            Ils nous font <span className="text-sira-primary">confiance</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className={i < t.rating ? 'text-sira-secondary fill-sira-secondary' : 'text-gray-200'} />
                ))}
              </div>
              <p className="text-sm text-sira-text leading-relaxed mb-5 italic">
                &quot;{t.text}&quot;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
                {/* Avatar */}
                <div className="w-10 h-10 bg-sira-primary-light rounded-full flex items-center justify-center">
                  <span className="text-sira-primary font-bold text-sm">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-sira-dark text-sm">{t.name}</p>
                  <p className="text-xs text-sira-text">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========== PARTNERS SECTION =========== */
export function Partners() {
  const partners = [
    { name: 'MTN', color: '#FFCB05' },
    { name: 'ANIP', color: '#1E40AF' },
    { name: 'Hôpital de Zone', color: '#0FA958' },
    { name: 'Pharmacies', color: '#EF4444' },
    { name: 'Laboratoires', color: '#8B5CF6' },
    { name: 'Mutuelles', color: '#F97316' },
    { name: 'Institutions', color: '#06B6D4' },
  ];

  return (
    <section className="py-16 lg:py-20 bg-sira-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-sira-dark mb-3">
            Ensemble pour une santé <span className="text-sira-primary">plus accessible</span>
          </h2>
          <p className="text-sira-text">Nos partenaires qui rendent cette transformation possible.</p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-10">
          {partners.map((p) => (
            <div
              key={p.name}
              className="bg-white rounded-xl px-6 py-4 shadow-sm hover:shadow-md transition-shadow flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${p.color}20` }}>
                <span className="font-bold text-xs" style={{ color: p.color }}>
                  {p.name.charAt(0)}
                </span>
              </div>
              <span className="font-semibold text-sm text-sira-dark">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
