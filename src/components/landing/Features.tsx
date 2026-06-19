import {
  CalendarCheck,
  Video,
  FolderHeart,
  FileText,
  Pill,
  MapPin,
  Syringe,
  Baby,
  HeartPulse,
  Activity,
  Bell,
  Droplets,
} from 'lucide-react';

const features = [
  {
    icon: CalendarCheck,
    title: 'Prise de rendez-vous',
    desc: 'Réservez une consultation en quelques clics avec le médecin de votre choix.',
    color: '#0FA958',
  },
  {
    icon: Video,
    title: 'Téléconsultation',
    desc: 'Consultez un médecin à distance par vidéo, où que vous soyez.',
    color: '#3B82F6',
  },
  {
    icon: FolderHeart,
    title: 'Dossier médical numérique',
    desc: 'Accédez à votre historique médical complet, sécurisé et centralisé.',
    color: '#8B5CF6',
  },
  {
    icon: FileText,
    title: 'Ordonnances électroniques',
    desc: 'Recevez et partagez vos ordonnances numériquement.',
    color: '#F2A900',
  },
  {
    icon: Pill,
    title: 'Pharmacie numérique',
    desc: 'Localisez les pharmacies et vérifiez la disponibilité des médicaments.',
    color: '#EF4444',
  },
  {
    icon: MapPin,
    title: 'Localisation des soins',
    desc: 'Trouvez les établissements de santé les plus proches de vous.',
    color: '#06B6D4',
  },
  {
    icon: Syringe,
    title: 'Calendrier vaccinal',
    desc: 'Suivez vos vaccins et recevez des rappels pour ne rien oublier.',
    color: '#EC4899',
  },
  {
    icon: Baby,
    title: 'Suivi de grossesse',
    desc: 'Accompagnement personnalisé tout au long de la grossesse.',
    color: '#F97316',
  },
  {
    icon: HeartPulse,
    title: 'Carnet de santé de l\'enfant',
    desc: 'Suivi de la croissance et du développement de votre enfant.',
    color: '#10B981',
  },
  {
    icon: Activity,
    title: 'Suivi maladies chroniques',
    desc: 'Gérez votre diabète, hypertension ou asthme au quotidien.',
    color: '#6366F1',
  },
  {
    icon: Bell,
    title: 'Alertes médicales',
    desc: 'Recevez des notifications pour vos rendez-vous et traitements.',
    color: '#F59E0B',
  },
  {
    icon: Droplets,
    title: 'Don de sang',
    desc: 'Participez aux campagnes de don de sang et sauvez des vies.',
    color: '#DC2626',
  },
];

export default function Features() {
  return (
    <section id="fonctionnalites" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-sira-primary-light text-sira-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Fonctionnalités
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-sira-dark mb-4">
            Tout ce dont vous avez besoin
            <br className="hidden lg:block" /> pour gérer votre santé
          </h2>
          <p className="text-sira-text max-w-2xl mx-auto text-lg">
            Sira regroupe tous les services de santé essentiels dans une seule
            application simple et intuitive.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feat) => (
            <div
              key={feat.title}
              className="bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300"
                style={{ backgroundColor: `${feat.color}12` }}
              >
                <feat.icon
                  size={24}
                  style={{ color: feat.color }}
                  className="group-hover:scale-110 transition-transform"
                />
              </div>
              <h3 className="text-base font-semibold text-sira-dark mb-1.5">
                {feat.title}
              </h3>
              <p className="text-sm text-sira-text leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
