import {
  Smartphone,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

/* =========== CTA BANNER =========== */
export function CTABanner() {
  return (
    <section
      id="telecharger"
      className="py-16 lg:py-24 bg-gradient-sira relative overflow-hidden"
    >
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          Rejoignez la révolution numérique
          <br />
          de la santé au Bénin.
        </h2>
        <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
          Téléchargez Sira et accédez à un système de santé plus simple, plus
          rapide, plus transparent et plus inclusif.
        </p>

        {/* Store buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#"
            className="inline-flex items-center gap-3 bg-white text-sira-dark px-6 py-3.5 rounded-xl font-semibold hover:bg-gray-50 transition-colors shadow-lg"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
              <path d="M17.523 2.047a.667.667 0 00-.665.063l-9.084 6.479L4.547 5.36a.667.667 0 00-1.044.555v12.17a.667.667 0 001.044.555l3.227-3.229 9.084 6.479a.667.667 0 001.031-.555V2.665a.667.667 0 00-.366-.618z" />
            </svg>
            <div className="text-left">
              <p className="text-[10px] text-gray-500 leading-none">Disponible sur</p>
              <p className="text-sm font-bold leading-tight">Google Play</p>
            </div>
          </a>

          <a
            href="#"
            className="inline-flex items-center gap-3 bg-white text-sira-dark px-6 py-3.5 rounded-xl font-semibold hover:bg-gray-50 transition-colors shadow-lg"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <div className="text-left">
              <p className="text-[10px] text-gray-500 leading-none">Télécharger sur</p>
              <p className="text-sm font-bold leading-tight">App Store</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

/* =========== FOOTER =========== */
export default function Footer() {
  const footerLinks = {
    Produit: [
      { label: 'Fonctionnalités', href: '#fonctionnalites' },
      { label: 'Téléchargement', href: '#telecharger' },
      { label: 'FAQ', href: '#faq' },
    ],
    Professionnels: [
      { label: 'Médecins', href: '#professionnels' },
      { label: 'Pharmacies', href: '#professionnels' },
      { label: 'Laboratoires', href: '#professionnels' },
      { label: 'Hôpitaux', href: '#professionnels' },
    ],
    Entreprise: [
      { label: 'À propos', href: '#' },
      { label: 'Contact', href: '#contact' },
      { label: 'Partenaires', href: '#' },
    ],
    Légal: [
      { label: 'Mentions légales', href: '#' },
      { label: 'Confidentialité', href: '#' },
      { label: 'CGU', href: '#' },
    ],
  };

  const socials = [
    { 
      href: '#', 
      label: 'Facebook',
      icon: () => (
        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      )
    },
    { 
      href: '#', 
      label: 'Instagram',
      icon: () => (
        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      )
    },
    { 
      href: '#', 
      label: 'LinkedIn',
      icon: () => (
        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      )
    },
    { 
      href: '#', 
      label: 'Twitter',
      icon: () => (
        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
        </svg>
      )
    },
  ];

  return (
    <footer id="contact" className="bg-sira-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-sira-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold">Sira</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Votre santé, notre mission.
              <br />
              La plateforme de santé numérique qui transforme l&apos;accès aux
              soins au Bénin.
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <MapPin size={16} className="text-sira-primary flex-shrink-0" />
                Cotonou, Bénin
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Mail size={16} className="text-sira-primary flex-shrink-0" />
                contact@sira.bj
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Phone size={16} className="text-sira-primary flex-shrink-0" />
                +229 01 23 45 67 89
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-white mb-4">{title}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-sira-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © 2026 Sira — Tous droits réservés.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-sira-primary transition-colors"
              >
                <s.icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
