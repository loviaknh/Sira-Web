import {
  CreditCard,
  RefreshCcw,
  Users,
  LineChart,
  FileText,
  ShieldCheck,
} from 'lucide-react';

const mutuelleFeatures = [
  { icon: CreditCard, text: 'Paiement MTN Mobile' },
  { icon: RefreshCcw, text: 'Prélèvements automatiques' },
  { icon: Users, text: 'Couverture familiale complète' },
  { icon: LineChart, text: 'Suivi des cotisations' },
  { icon: FileText, text: 'Historique des remboursements' },
  { icon: ShieldCheck, text: 'Tableau de bord personnel' },
];

export default function Mutuelle() {
  return (
    <section className="py-16 lg:py-24 bg-sira-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Phone Mockup */}
          <div className="relative flex justify-center">
            <div className="phone-frame animate-float">
              <div className="absolute inset-0 bg-white flex flex-col">
                {/* Header */}
                <div className="bg-sira-primary p-4 pt-8">
                  <p className="text-white font-bold text-sm">Ma Mutuelle</p>
                  <p className="text-white/70 text-xs">Sira Santé</p>
                </div>
                {/* Content */}
                <div className="p-4 flex-1">
                  {/* Coverage Card */}
                  <div className="bg-sira-primary-light rounded-xl p-4 mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-sira-primary">
                        Couverture
                      </span>
                      <span className="text-xs bg-sira-primary text-white px-2 py-0.5 rounded-full">
                        Active
                      </span>
                    </div>
                    <div className="w-full bg-white rounded-full h-3 mb-1">
                      <div
                        className="bg-sira-primary h-3 rounded-full"
                        style={{ width: '80%' }}
                      />
                    </div>
                    <p className="text-right text-xs text-sira-primary font-bold">
                      80%
                    </p>
                  </div>

                  {/* Balance */}
                  <div className="bg-gray-50 rounded-xl p-4 mb-4 text-center">
                    <p className="text-xs text-sira-text mb-1">
                      Solde disponible
                    </p>
                    <p className="text-2xl font-extrabold text-sira-dark">
                      15 000 <span className="text-sm font-normal">FCFA</span>
                    </p>
                  </div>

                  {/* Quick actions */}
                  <div className="grid grid-cols-2 gap-2">
                    <button className="bg-sira-primary text-white text-xs py-2 rounded-lg font-medium">
                      Cotiser
                    </button>
                    <button className="bg-gray-100 text-sira-dark text-xs py-2 rounded-lg font-medium">
                      Historique
                    </button>
                  </div>

                  {/* Recent */}
                  <div className="mt-4 space-y-2">
                    <p className="text-xs font-semibold text-sira-dark">
                      Récent
                    </p>
                    {['Consultation Dr. Agbo', 'Pharmacie Étoile', 'Laboratoire BioPlus'].map(
                      (item) => (
                        <div
                          key={item}
                          className="flex items-center justify-between py-2 border-b border-gray-50"
                        >
                          <span className="text-xs text-sira-text">{item}</span>
                          <span className="text-xs font-medium text-sira-primary">
                            Remboursé
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <span className="inline-block bg-sira-secondary-light text-sira-secondary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Mutuelle digitale
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-sira-dark mb-4">
              Une mutuelle
              <br />
              <span className="text-sira-primary">100% numérique</span>
            </h2>
            <p className="text-sira-text text-lg mb-8 leading-relaxed">
              Souscrivez, cotisez et utilisez vos garanties directement depuis
              votre téléphone. Plus besoin de papiers ni de files d&apos;attente.
            </p>

            <div className="space-y-4">
              {mutuelleFeatures.map((feat) => (
                <div
                  key={feat.text}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 bg-sira-primary-light rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-sira-primary transition-colors">
                    <feat.icon
                      size={20}
                      className="text-sira-primary group-hover:text-white transition-colors"
                    />
                  </div>
                  <span className="text-sira-dark font-medium">{feat.text}</span>
                </div>
              ))}
            </div>

            <a
              href="#telecharger"
              className="inline-flex items-center gap-2 bg-sira-primary text-white px-6 py-3 rounded-xl font-semibold mt-8 hover:bg-sira-primary-dark transition-all shadow-lg shadow-sira-primary/20"
            >
              Découvrir la mutuelle
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
