import {
  Stethoscope,
  Pill,
  FlaskConical,
  Building2,
  ArrowRight,
} from 'lucide-react';

const roles = [
  {
    icon: Stethoscope,
    title: 'Médecins',
    desc: 'Gérez vos rendez-vous, consultations et dossiers patients depuis une seule interface.',
    color: '#0FA958',
  },
  {
    icon: Pill,
    title: 'Pharmacies',
    desc: 'Gérez vos stocks, recevez les ordonnances numériques et servez vos patients plus vite.',
    color: '#F2A900',
  },
  {
    icon: FlaskConical,
    title: 'Laboratoires',
    desc: 'Gérez vos analyses, partagez les résultats directement avec les médecins traitants.',
    color: '#8B5CF6',
  },
  {
    icon: Building2,
    title: 'Hôpitaux & Cliniques',
    desc: 'Gérez vos services, admissions et suivis patients de manière centralisée.',
    color: '#3B82F6',
  },
];

export default function Professionals() {
  return (
    <section id="professionnels" className="py-16 lg:py-24 bg-sira-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-sira-primary-light text-sira-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Professionnels de santé
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-sira-dark mb-4">
            Développez votre pratique
            <br />
            <span className="text-sira-primary">avec Sira</span>
          </h2>
          <p className="text-sira-text max-w-2xl mx-auto text-lg">
            Rejoignez un réseau de professionnels de santé et simplifiez
            votre gestion quotidienne.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {roles.map((role) => (
            <div
              key={role.title}
              className="bg-white rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                style={{ backgroundColor: `${role.color}12` }}
              >
                <role.icon size={28} style={{ color: role.color }} />
              </div>
              <h3 className="text-lg font-semibold text-sira-dark mb-2">
                {role.title}
              </h3>
              <p className="text-sm text-sira-text leading-relaxed mb-4">
                {role.desc}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-1 text-sm font-medium transition-colors"
                style={{ color: role.color }}
              >
                En savoir plus
                <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-sira-primary text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-sira-primary-dark transition-all shadow-lg shadow-sira-primary/20"
          >
            Rejoindre le réseau Sira
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
