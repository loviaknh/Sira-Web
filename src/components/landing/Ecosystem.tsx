import {
  User,
  Stethoscope,
  Pill,
  Building2,
  FlaskConical,
  Ambulance,
  Heart,
  CreditCard,
} from 'lucide-react';

const nodes = [
  { icon: User, label: 'Patients', color: '#0FA958', pos: 'top' },
  { icon: Stethoscope, label: 'Médecins', color: '#3B82F6', pos: 'top-right' },
  { icon: Pill, label: 'Pharmacies', color: '#F2A900', pos: 'right' },
  { icon: Heart, label: 'Mutuelles', color: '#EF4444', pos: 'bottom-right' },
  { icon: FlaskConical, label: 'Laboratoires', color: '#8B5CF6', pos: 'bottom' },
  { icon: Ambulance, label: 'Ambulances', color: '#EC4899', pos: 'bottom-left' },
  { icon: Building2, label: 'Hôpitaux', color: '#06B6D4', pos: 'left' },
  { icon: CreditCard, label: 'Paiements', color: '#F97316', pos: 'top-left' },
];

export default function Ecosystem() {
  return (
    <section
      id="ecosysteme"
      className="py-16 lg:py-24 bg-sira-gray"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-sira-primary-light text-sira-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Écosystème connecté
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-sira-dark mb-4">
            Une plateforme unique qui connecte
            <br className="hidden lg:block" /> tout l&apos;écosystème santé
          </h2>
          <p className="text-sira-text max-w-2xl mx-auto text-lg">
            Sira est le hub central qui relie patients, professionnels de santé,
            pharmacies, laboratoires et établissements dans un seul écosystème.
          </p>
        </div>

        {/* Ecosystem Diagram */}
        <div className="relative max-w-3xl mx-auto">
          {/* Central Hub */}
          <div className="flex justify-center mb-8 lg:mb-0 lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 z-10">
            <div className="w-36 h-36 lg:w-44 lg:h-44 bg-gradient-sira rounded-full flex flex-col items-center justify-center shadow-xl shadow-sira-primary/25 animate-pulse-soft">
              <span className="text-white font-extrabold text-2xl lg:text-3xl">
                SIRA
              </span>
              <span className="text-white/80 text-[10px] lg:text-xs text-center leading-tight mt-1">
                Plateforme
                <br />
                Nationale
                <br />
                de la Santé
              </span>
            </div>
          </div>

          {/* Nodes - Mobile: Grid | Desktop: Circular */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:hidden">
            {nodes.map((node) => (
              <div
                key={node.label}
                className="flex flex-col items-center gap-2 bg-white rounded-xl p-4 shadow-sm"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${node.color}15` }}
                >
                  <node.icon size={24} style={{ color: node.color }} />
                </div>
                <span className="text-sm font-medium text-sira-dark">
                  {node.label}
                </span>
              </div>
            ))}
          </div>

          {/* Desktop circular layout */}
          <div className="hidden lg:block h-[450px]">
            {nodes.map((node, i) => {
              const angle = (i * 360) / nodes.length - 90;
              const rad = (angle * Math.PI) / 180;
              const radius = 180;
              const x = 50 + (radius / 3) * Math.cos(rad);
              const y = 50 + (radius / 4.5) * Math.sin(rad);

              return (
                <div
                  key={node.label}
                  className="absolute flex flex-col items-center gap-2 group"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center bg-white shadow-lg group-hover:scale-110 transition-transform duration-300"
                    style={{ boxShadow: `0 8px 25px ${node.color}20` }}
                  >
                    <node.icon size={28} style={{ color: node.color }} />
                  </div>
                  <span className="text-sm font-semibold text-sira-dark whitespace-nowrap">
                    {node.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
