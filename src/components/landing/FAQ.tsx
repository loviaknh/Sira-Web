'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Qu\'est-ce que Sira ?',
    a: 'Sira est une plateforme de santé numérique complète pour le Bénin. Elle permet aux patients de prendre des rendez-vous, consulter leur dossier médical, recevoir des ordonnances numériques, et accéder à une mutuelle digitale — le tout depuis leur téléphone.',
  },
  {
    q: 'Comment fonctionne le MFI ?',
    a: 'Le MFI (Modèle de Financement Intégré) permet aux patients de cotiser via Mobile Money et d\'obtenir une couverture santé immédiate. Les remboursements sont automatiques et traçables.',
  },
  {
    q: 'Mes données sont-elles sécurisées ?',
    a: 'Absolument. Toutes les données médicales sont chiffrées de bout en bout et stockées de manière sécurisée conformément aux normes internationales de protection des données de santé. Seuls vous et vos médecins autorisés y ont accès.',
  },
  {
    q: 'Comment rejoindre la mutuelle ?',
    a: 'Téléchargez l\'application Sira, créez votre compte et accédez à la section "Mutuelle". Vous pouvez souscrire et commencer à cotiser directement via MTN Mobile Money ou Moov Money.',
  },
  {
    q: 'Comment fonctionne le bouton SOS ?',
    a: 'En cas d\'urgence, appuyez sur le bouton SOS dans l\'application. Votre position GPS est automatiquement partagée et les services d\'urgence les plus proches sont alertés pour envoyer une ambulance.',
  },
  {
    q: 'Comment prendre rendez-vous ?',
    a: 'Ouvrez l\'application, sélectionnez une spécialité médicale, choisissez un médecin disponible, puis sélectionnez un créneau horaire. La confirmation est instantanée et vous recevez un rappel avant le rendez-vous.',
  },
  {
    q: 'Puis-je utiliser Sira partout au Bénin ?',
    a: 'Oui ! Sira est disponible sur tout le territoire béninois. Notre réseau de professionnels de santé couvre toutes les grandes villes et s\'étend progressivement aux zones rurales.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 lg:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-sira-primary-light text-sira-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-sira-dark mb-4">
            Questions <span className="text-sira-primary">fréquentes</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-sm transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left"
              >
                <span className="font-semibold text-sira-dark pr-4">{faq.q}</span>
                <ChevronDown
                  size={20}
                  className={`text-sira-text flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180 text-sira-primary' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-6 pb-4 text-sira-text leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
