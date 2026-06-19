import {
  Users,
  Stethoscope,
  Building2,
  Clock,
  FileWarning,
  HeartPulse,
  BadgeDollarSign,
  ShieldAlert,
  UserX,
  AlertTriangle,
} from 'lucide-react';

const stats = [
  { value: '10 000+', label: 'Patients connectés', icon: Users },
  { value: '500+', label: 'Professionnels de santé', icon: Stethoscope },
  { value: '100+', label: 'Structures partenaires', icon: Building2 },
  { value: '24/7', label: 'Disponibilité des services', icon: Clock },
];

const problems = [
  {
    icon: FileWarning,
    title: 'Dossiers médicaux perdus',
    desc: 'Les dossiers papier se perdent, rendant le suivi des patients difficile.',
  },
  {
    icon: HeartPulse,
    title: 'Difficultés d\'accès aux soins',
    desc: 'Les patients peinent à trouver un médecin disponible rapidement.',
  },
  {
    icon: BadgeDollarSign,
    title: 'Paiements peu traçables',
    desc: 'Le manque de traçabilité financière complique la gestion des soins.',
  },
  {
    icon: ShieldAlert,
    title: 'Manque de suivi continu',
    desc: 'Pas de rappels, pas de suivi — les patients oublient leurs traitements.',
  },
  {
    icon: UserX,
    title: 'Faible collaboration médicale',
    desc: 'Les professionnels de santé ne partagent pas facilement les informations.',
  },
  {
    icon: AlertTriangle,
    title: 'Urgences mal coordonnées',
    desc: 'En cas d\'urgence, trouver un service approprié prend trop de temps.',
  },
];

export default function Impact() {
  return (
    <section className="py-16 lg:py-24">
      {/* Stats Bar */}
      <div className="bg-gradient-sira py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-white text-2xl lg:text-3xl font-bold mb-10">
            Un impact réel sur la santé des Béninois
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center group"
              >
                <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-white/25 transition-colors">
                  <stat.icon size={28} className="text-white" />
                </div>
                <p className="text-3xl lg:text-4xl font-extrabold text-white mb-1">
                  {stat.value}
                </p>
                <p className="text-white/75 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-sira-dark mb-4">
            Pourquoi repenser notre système de santé ?
          </h2>
          <p className="text-sira-text max-w-2xl mx-auto text-lg">
            Le système de santé béninois fait face à des défis majeurs que Sira
            s&apos;engage à résoudre grâce au numérique.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:border-sira-primary/20 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-sira-primary-light rounded-xl flex items-center justify-center mb-4 group-hover:bg-sira-primary group-hover:text-white transition-colors">
                <item.icon
                  size={24}
                  className="text-sira-primary group-hover:text-white transition-colors"
                />
              </div>
              <h3 className="text-lg font-semibold text-sira-dark mb-2">
                {item.title}
              </h3>
              <p className="text-sira-text text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
