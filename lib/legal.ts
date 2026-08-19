export type Lang = "ar" | "fr" | "en";

export type LegalBlock =
  | { kind: "p"; text: string }
  | { kind: "li"; text: string }
  | { kind: "flow"; text: string }
  | { kind: "badge"; text: string }
  | { kind: "cta"; text: string; href: string }
  | { kind: "sub"; title: string; lead?: string; items: string[] };

export interface LegalSection {
  title: string;
  blocks: LegalBlock[];
}

export interface LegalLang {
  updatedDate: string;
  effectiveDate: string;
  updatedLabel: string;
  effectiveLabel: string;
  legal: {
    title: string;
    intro: string;
    termsPartTitle: string;
    privacyPartTitle: string;
    mentionsPartTitle: string;
    mentionsIntro: string;
    mentions: string[];
  };
  terms: {
    title: string;
    intro: string;
    legalTitle: string;
    legal: string;
    sections: LegalSection[];
    contact: { title: string; text: string; button: string };
  };
  privacy: {
    title: string;
    intro: string[];
    legalTitle: string;
    legal: string;
    sections: LegalSection[];
    closing: string;
  };
}

const EMAIL = "inrideai@gmail.com";
const DELETION_SUBJECT = "Account%20deletion%20request";

export const LEGAL: Record<Lang, LegalLang> = {
  en: {
    updatedDate: "August 14, 2026",
    effectiveDate: "August 14, 2026",
    updatedLabel: "Last updated",
    effectiveLabel: "Effective date",
    legal: {
      title: "Legal information",
      intro:
        "This page brings together the legal documents governing the use of the INRIDE AI platform: the General Terms of Use and the Privacy Policy. Both documents are binding and should be read carefully before using the platform.",
      termsPartTitle: "General Terms of Use",
      privacyPartTitle: "Privacy Policy",
      mentionsPartTitle: "Legal notice",
      mentionsIntro:
        "Information identifying the publisher and operator of the INRIDE AI platform, in accordance with the applicable Algerian legislation.",
      mentions: [
        "This website and the InRide AI mobile application are published and operated by the InRide AI brand, available at the official address https://inride.ai.dz, with the official contact and data-protection email: inrideai@gmail.com.",
        "All personal data are processed in accordance with Algerian Law No. 18-07 of 10 June 2018 on the protection of natural persons in the processing of personal data, amended and supplemented by Law No. 25-11 of 24 July 2025, and in accordance with the instructions of the ANPDP.",
        "The brand, logos and all content on the platform are protected by intellectual property law; any reproduction without the prior written authorisation of INRIDE AI is prohibited.",
        "Competent jurisdiction: the courts of the People's Democratic Republic of Algeria.",
      ],
    },
    terms: {
      title: "Terms of Service",
      intro:
        "Please read these General Terms of Service carefully. By using INRIDE AI, you agree to be bound by these Terms and by our Privacy Policy.",
      legalTitle: "Applicable law",
      legal:
        "These Terms are governed by and interpreted in accordance with the laws of the People's Democratic Republic of Algeria, and personal data is processed in accordance with Law No. 18-07 on the protection of personal data.",
      sections: [
        {
          title: "Nature of the Service",
          blocks: [
            { kind: "p", text: "INRIDE AI is a digital platform that acts as a technical intermediary connecting passengers with independent drivers. The platform lets the passenger set a proposed price for their ride, then receive offers from nearby drivers and choose the best one." },
            { kind: "p", text: "The final ride relationship is a direct agreement between the passenger and the driver. INRIDE AI is neither a transport company nor the drivers' employer, and bears no responsibility for the execution of the ride or the conduct of either party." },
          ],
        },
        {
          title: "Accounts & Security",
          blocks: [
            { kind: "p", text: "To create an INRIDE AI account, you must be at least 18 years old and have the legal capacity to contract under Algerian law:" },
            { kind: "li", text: "Your account is verified with a one-time code (OTP) sent via WhatsApp. Keep this code confidential — INRIDE AI staff will never ask for it." },
            { kind: "li", text: "You are responsible for all activity under your account. Secure your device and your WhatsApp account." },
            { kind: "li", text: "You may request account deletion at any time by emailing inrideai@gmail.com from the address linked to your account." },
          ],
        },
        {
          title: "Driver Obligations",
          blocks: [
            { kind: "p", text: "By using INRIDE AI as a driver, you undertake to:" },
            { kind: "li", text: "Maintain a valid driving licence, valid vehicle documents, and active insurance." },
            { kind: "li", text: "Maintain your vehicle and keep its details accurate and up to date in the app." },
            { kind: "li", text: "Complete rides professionally, treat passengers with respect, and never drive under the influence." },
            { kind: "li", text: "Comply with Algerian traffic laws and applicable regulations." },
          ],
        },
        {
          title: "Anti-Fraud Policy",
          blocks: [
            { kind: "p", text: "Any fraudulent activity on the platform is strictly prohibited, including without limitation:" },
            { kind: "li", text: "Using fake GPS apps or manipulating your location to mislead the system." },
            { kind: "li", text: "Creating fake or multiple accounts to take advantage of bonuses or promotions." },
            { kind: "li", text: "Manipulating prices, requests, or platform reviews." },
            { kind: "p", text: "Any violation of this policy may result in account suspension or permanent termination without prior notice." },
          ],
        },
        {
          title: "Intellectual Property",
          blocks: [
            { kind: "p", text: "The INRIDE AI brand, logos, design, software, and platform content are protected by intellectual property laws. You may not copy, modify, or reuse any of these elements without prior written permission from INRIDE AI." },
          ],
        },
        {
          title: "Liability & Limitations",
          blocks: [
            { kind: "p", text: "The platform is provided \"as is\" and \"as available\". INRIDE AI is not liable for:" },
            { kind: "li", text: "The conduct of drivers, passengers, or any third party." },
            { kind: "li", text: "Damages, accidents, or losses occurring during ride execution, as the relationship between passenger and driver is direct." },
            { kind: "li", text: "Indirect, incidental, or consequential damages arising from use of the platform." },
          ],
        },
        {
          title: "Dispute Resolution & Governing Law",
          blocks: [
            { kind: "p", text: "These Terms are governed by and interpreted in accordance with the laws of the People's Democratic Republic of Algeria. In the event of a dispute, we will make reasonable efforts to resolve it amicably. Failing an amicable settlement, the dispute will be submitted to the competent Algerian courts." },
          ],
        },
        {
          title: "Contact & Support",
          blocks: [
            { kind: "p", text: "For any question regarding these Terms, your account, or our services, contact our team at inrideai@gmail.com. We aim to respond within 2 business days." },
          ],
        },
      ],
      contact: { title: "Need help?", text: "Reach our support team any time.", button: "Email support" },
    },
    privacy: {
      title: "Privacy Policy",
      intro: [
        "Welcome to InRide AI. We respect your privacy and are committed to protecting the personal data and information processed through the InRide AI application, platform, and services on the official domain inride.ai.dz.",
        "This privacy policy describes the types of data we may collect, the purposes for which we process them, and how they are used, protected, retained, and shared, as well as the rights of data subjects and the ways to exercise these rights.",
        "By using InRide AI services or creating an account on the platform, you acknowledge that you have read this policy and understand its provisions, without prejudice to any rights or guarantees granted by law.",
      ],
      legalTitle: "Legal reference",
      legal:
        "All personal data is processed and stored in accordance with Law No. 18-07 of 10 June 2018 on the protection of natural persons in the processing of personal data, amended and supplemented by Law No. 25-11 of 24 July 2025, and the instructions of the Algerian National Authority for the Protection of Personal Data (ANPDP).",
      sections: [
        {
          title: "Legal Reference",
          blocks: [
            { kind: "p", text: "All personal data collected or processed through InRide AI is processed and stored in accordance with the applicable Algerian legislation and regulations on the protection of natural persons in the processing of personal data." },
            { kind: "p", text: "Data processing operations are subject, in particular, to the provisions of:" },
            { kind: "li", text: "Law No. 18-07 of 25 Ramadan 1439 corresponding to 10 June 2018 on the protection of natural persons in the processing of personal data, amended and supplemented by Law No. 25-11 of 28 Muharram 1447 corresponding to 24 July 2025." },
            { kind: "p", text: "To the extent applicable, InRide AI complies with the principles of personal data protection and the relevant legal and regulatory obligations, and takes appropriate technical and organisational measures to protect data from unauthorised access, unlawful use, alteration, disclosure, loss, or destruction." },
            { kind: "p", text: "The platform also takes into account the provisions and instructions issued by the National Authority for the Protection of Personal Data (ANPDP) and any applicable implementing or regulatory texts in Algeria." },
          ],
        },
        {
          title: "Who We Are",
          blocks: [
            { kind: "p", text: "InRide AI is a smart digital application and platform for transport, mobility, and free negotiation between parties, aimed at connecting passengers with drivers and facilitating the request, management, and tracking of rides." },
            { kind: "p", text: "For the purposes of this policy:" },
            { kind: "li", text: "\"InRide AI\", \"we\", or \"the platform\" means the project and organisation responsible for operating the InRide AI service in Algeria." },
            { kind: "li", text: "\"User\" or \"you\" means any person using the application or platform." },
            { kind: "li", text: "\"Passenger\" means a user who uses the platform to request a ride or propose a transport price." },
            { kind: "li", text: "\"Driver\" or \"partner\" means a registered user providing transport services through the platform." },
            { kind: "li", text: "\"Personal data\" means data and information relating to an identified or identifiable natural person, in accordance with applicable Algerian law." },
            { kind: "li", text: "\"Processing\" includes the collection, recording, organisation, storage, use, modification, retrieval, sharing, or deletion of data, to the extent permitted by law." },
          ],
        },
        {
          title: "Scope of This Policy",
          blocks: [
            { kind: "p", text: "This policy applies to:" },
            { kind: "li", text: "The InRide AI mobile application and web application (PWA)." },
            { kind: "li", text: "The official InRide AI website: https://inride.ai.dz." },
            { kind: "li", text: "Passenger, driver, and partner accounts." },
            { kind: "li", text: "Ride and interactive negotiation services, technical support services, and identity verification." },
            { kind: "li", text: "Any digital services associated with the platform." },
            { kind: "p", text: "This policy does not apply to external services or websites that InRide AI does not own or operate, which may have independent privacy policies." },
          ],
        },
        {
          title: "Data We Collect",
          blocks: [
            { kind: "p", text: "We only collect data that is necessary or appropriate for the purposes set out in this policy, in compliance with applicable legal requirements." },
            { kind: "sub", title: "Passenger Data", lead: "Data collected from the passenger may include:", items: [
              "Personal or display name.",
              "Phone number (used for verification via OTP code).",
              "Email address.",
              "City and area.",
              "Ride data: pick-up location, drop-off location, and interactive location during the ride.",
              "Proposed ride price and negotiation history.",
              "Ratings, reviews, and records of communication with customer service.",
            ] },
            { kind: "sub", title: "Driver and Partner Data", lead: "Given the nature of transport services and safety and verification requirements, the driver must provide additional data including:", items: [
              "Personal data: full name, phone number, city, official personal photo, and date of birth.",
              "Identity documents: national ID card or biometric ID card (document image, number, and expiry date).",
              "Driving licence: licence image, number, and validity.",
              "Vehicle and insurance data: vehicle type, model, year of manufacture, colour, licence plate number, vehicle photos, and a copy of the valid insurance document.",
            ] },
            { kind: "sub", title: "Data Generated During Use of the Service", lead: "Data related to the use of InRide AI may be recorded, including:", items: [
              "Ride number, ride date and time, route, distance, and ride status, final cost and agreement, and mutual ratings and complaints raised to support.",
            ] },
            { kind: "sub", title: "Location Data (GPS)", lead: "Location is an essential element for operating the service:", items: [
              "For the passenger: we use location to determine the pick-up point, show nearby drivers, and track the route while travelling.",
              "For the driver: we collect precise location while in \"online/active\" mode and during ride execution to route nearby requests and ensure ride safety.",
            ] },
          ],
        },
        {
          title: "Why We Collect This Data",
          blocks: [
            { kind: "p", text: "Data is processed for the following purposes:" },
            { kind: "li", text: "Creating and managing accounts and confirming phone numbers via OTP codes." },
            { kind: "li", text: "Operating the smart matching engine and price negotiation between passengers and drivers." },
            { kind: "li", text: "Verifying driver identity and the validity of documents and supporting papers, and ensuring platform safety." },
            { kind: "li", text: "Displaying maps, calculating distances, and providing technical support communications." },
            { kind: "li", text: "Preventing fraud and detecting fake accounts or the use of location-spoofing applications (fake GPS)." },
            { kind: "li", text: "Complying with legal and regulatory obligations issued by the competent Algerian authorities." },
          ],
        },
        {
          title: "Driver and Partner Verification Stages",
          blocks: [
            { kind: "p", text: "Driver accounts are subject to progressive review stages:" },
            { kind: "flow", text: "[Pending] ➔ [Documents Submitted] ➔ [Under Review] ➔ [Approved] (or [Rejected] / [Suspended] / [Blocked] if conditions are not met)." },
            { kind: "p", text: "A driver is not allowed to receive ride requests until their documents have been fully checked and approved." },
          ],
        },
        {
          title: "Protection of Driver Documents",
          blocks: [
            { kind: "p", text: "InRide AI treats all official documents (identity cards, driving licences, and insurance) as highly encrypted and sensitive data. Documents are stored in isolated, protected cloud environments, and are never displayed to passengers or any unauthorised party." },
          ],
        },
        {
          title: "Artificial Intelligence and Automated Verification",
          blocks: [
            { kind: "p", text: "InRide AI may use artificial intelligence and optical character recognition (OCR) technologies to help read data from documents, analyse expiry dates, and detect signs of tampering. These systems remain assistive and are subject to human review when needed to ensure fair decisions." },
          ],
        },
        {
          title: "Data Sharing",
          blocks: [
            { kind: "li", text: "Between passenger and driver: only the information necessary to complete the ride is shared (e.g., passenger name and pick-up location / driver name, photo, vehicle type, and licence plate number)." },
            { kind: "li", text: "Service providers: we rely on hosting partners, infrastructure, and verification message operators (such as Meta / WhatsApp API) under strict confidentiality agreements." },
            { kind: "li", text: "Sale: InRide AI never sells users' personal data to any commercial entity." },
            { kind: "li", text: "Judicial authorities: data is only disclosed on the basis of a court order or a valid official request from the Algerian security authorities, in accordance with the law." },
          ],
        },
        {
          title: "Transfer of Data Outside Algeria",
          blocks: [
            { kind: "p", text: "When using international cloud servers or infrastructure, InRide AI undertakes to take all technical and organisational measures to ensure that data is processed in accordance with the provisions of Algerian Law No. 18-07, as amended by Law No. 25-11." },
          ],
        },
        {
          title: "Account Security and OTP Code",
          blocks: [
            { kind: "p", text: "The login process is protected by temporary OTP codes. Users are prohibited from sharing this code with anyone, and we confirm that InRide AI staff will never ask you for an OTP code." },
          ],
        },
        {
          title: "Fraud and Abuse Prevention",
          blocks: [
            { kind: "p", text: "We have systems to protect against duplicate accounts, price manipulation, cyberattacks, and the use of malicious software, and the platform reserves the right to suspend suspicious accounts pending review." },
          ],
        },
        {
          title: "Data Retention Period",
          blocks: [
            { kind: "p", text: "Personal data is kept for the duration of account activity and for the period necessary to achieve the purposes of the service or for legal and financial obligations. When the purpose of the data has ended, it is deleted, destroyed, or anonymised (Anonymized)." },
          ],
        },
        {
          title: "Rights of Data Subjects",
          blocks: [
            { kind: "p", text: "Under Algerian legislation, you have the right to:" },
            { kind: "li", text: "Obtain information about how your data is processed and access it." },
            { kind: "li", text: "Correct or update inaccurate data." },
            { kind: "li", text: "Request the deletion of your personal data under the legal conditions." },
            { kind: "li", text: "Submit an objection or complaint to the National Authority for the Protection of Personal Data (ANPDP)." },
          ],
        },
        {
          title: "Account and Data Deletion (Data Erasure Request)",
          blocks: [
            { kind: "badge", text: "IMPORTANT · Google Play requirement" },
            { kind: "p", text: "Users may request the permanent deletion of their account at any time via:" },
            { kind: "li", text: "Within the app: go to Settings > Account > Request account deletion." },
            { kind: "li", text: "By email: contact the privacy officer at: inrideai@gmail.com." },
            { kind: "p", text: "The deletion request and associated data are processed within no more than 7 business days from the date the request is submitted." },
            { kind: "cta", text: "Email deletion request", href: `mailto:${EMAIL}?subject=${DELETION_SUBJECT}` },
          ],
        },
        {
          title: "Children's Data",
          blocks: [
            { kind: "p", text: "InRide AI services are not intended for children under the age of 18, and if we discover that a minor's data has been collected without the consent of their legal guardian, it will be deleted immediately." },
          ],
        },
        {
          title: "Technologies and Cookies",
          blocks: [
            { kind: "p", text: "We use local storage technologies (Local Storage & Session Tokens) on the device to maintain login and ensure the stability of work sessions and account security." },
          ],
        },
        {
          title: "Communication and Notifications",
          blocks: [
            { kind: "p", text: "The platform sends operational notifications related to rides, account updates, and OTP codes via the app, SMS, email, or approved applications such as the WhatsApp API." },
          ],
        },
        {
          title: "Data Protection Officer (DPO)",
          blocks: [
            { kind: "p", text: "In compliance with Algerian regulations, you may contact the InRide AI data protection officer via:" },
            { kind: "li", text: "Privacy email: inrideai@gmail.com" },
            { kind: "li", text: "Website: https://inride.ai.dz" },
          ],
        },
        {
          title: "Contact and Exercising Rights",
          blocks: [
            { kind: "p", text: "For any legal or privacy-related inquiries, you can contact us via:" },
            { kind: "li", text: "Official email: inrideai@gmail.com" },
            { kind: "li", text: "Official website: https://inride.ai.dz" },
          ],
        },
        {
          title: "Privacy Policy Updates",
          blocks: [
            { kind: "p", text: "We may update this policy when new technical features are introduced or amended regulations are issued. Users will be notified of any material change, and the \"Last updated\" date at the top of the document will be updated." },
          ],
        },
        {
          title: "Service and Platform Information",
          blocks: [
            { kind: "li", text: "Service name and brand: InRide AI" },
            { kind: "li", text: "Official domain: https://inride.ai.dz" },
            { kind: "li", text: "Official and support email: inrideai@gmail.com" },
            { kind: "li", text: "Privacy and data deletion email: inrideai@gmail.com" },
            { kind: "li", text: "Judicial and legal jurisdiction: People's Democratic Republic of Algeria" },
          ],
        },
      ],
      closing:
        "We are committed to providing smart and safe transport services while ensuring the highest levels of personal data protection in accordance with the applicable Algerian legislation.",
    },
  },

  fr: {
    updatedDate: "14 août 2026",
    effectiveDate: "14 août 2026",
    updatedLabel: "Dernière mise à jour",
    effectiveLabel: "Date d'entrée en vigueur",
    legal: {
      title: "Informations légales",
      intro:
        "Cette page rassemble les documents légaux qui régissent l'utilisation de la plateforme INRIDE AI : les Conditions générales d'utilisation et la Politique de confidentialité. Ces documents sont contraignants et doivent être lus attentivement avant toute utilisation de la plateforme.",
      termsPartTitle: "Conditions générales d'utilisation",
      privacyPartTitle: "Politique de confidentialité",
      mentionsPartTitle: "Mentions légales",
      mentionsIntro:
        "Informations identifiant l'éditeur et l'exploitant de la plateforme INRIDE AI, conformément à la législation algérienne applicable.",
      mentions: [
        "Ce site et l'application mobile InRide AI sont publiés et exploités par la marque InRide AI, disponible à l'adresse officielle https://inride.ai.dz, avec pour contact officiel et email de protection des données : inrideai@gmail.com.",
        "Toutes les données à caractère personnel sont traitées conformément à la loi algérienne n° 18-07 du 10 juin 2018 relative à la protection des personnes physiques dans le traitement des données à caractère personnel, modifiée et complétée par la loi n° 25-11 du 24 juillet 2025, ainsi qu'aux instructions de l'ANPDP.",
        "La marque, les logos et tous les contenus de la plateforme sont protégés par le droit de la propriété intellectuelle ; toute reproduction sans autorisation écrite préalable d'INRIDE AI est interdite.",
        "Juridiction compétente : les tribunaux de la République algérienne démocratique et populaire.",
      ],
    },
    terms: {
      title: "Conditions générales d'utilisation",
      intro:
        "Veuillez lire attentivement les présentes Conditions Générales d'Utilisation. En utilisant INRIDE AI, vous acceptez de vous conformer à ces Conditions ainsi qu'à notre Politique de confidentialité.",
      legalTitle: "Droit applicable",
      legal:
        "Les présentes Conditions sont régies et interprétées conformément au droit de la République algérienne démocratique et populaire, et les données personnelles sont traitées conformément à la loi n° 18-07 relative à la protection des données à caractère personnel.",
      sections: [
        {
          title: "Nature du service",
          blocks: [
            { kind: "p", text: "INRIDE AI est une plateforme numérique qui agit comme intermédiaire technique entre les passagers et des conducteurs indépendants. La plateforme permet au passager de fixer le prix proposé pour sa course, puis de recevoir des offres de conducteurs à proximité et de choisir celle qui lui convient le mieux." },
            { kind: "p", text: "La relation finale de la course est un accord direct entre le passager et le conducteur. INRIDE AI n'est ni une société de transport ni l'employeur des conducteurs, et ne supporte aucune responsabilité quant à l'exécution de la course ou au comportement de l'une ou l'autre partie." },
          ],
        },
        {
          title: "Comptes & sécurité",
          blocks: [
            { kind: "p", text: "Pour créer un compte INRIDE AI, vous devez être âgé d'au moins 18 ans et disposer de la capacité juridique de contracter selon le droit algérien :" },
            { kind: "li", text: "Votre compte est vérifié par un code OTP envoyé sur WhatsApp. Gardez ce code confidentiel — le personnel d'INRIDE AI ne vous le demandera jamais." },
            { kind: "li", text: "Vous êtes responsable de toute activité effectuée depuis votre compte. Sécurisez votre appareil et votre compte WhatsApp." },
            { kind: "li", text: "Vous pouvez demander la suppression de votre compte à tout moment en écrivant à inrideai@gmail.com depuis l'adresse liée à votre compte." },
          ],
        },
        {
          title: "Obligations des conducteurs",
          blocks: [
            { kind: "p", text: "En utilisant INRIDE AI en tant que conducteur, vous vous engagez à :" },
            { kind: "li", text: "Maintenir un permis de conduire valide, des documents de véhicule et une assurance en cours de validité." },
            { kind: "li", text: "Entretenir votre véhicule et garder ses informations exactes et à jour dans l'application." },
            { kind: "li", text: "Effectuer les courses professionnellement, respecter les passagers et ne jamais conduire sous influence." },
            { kind: "li", text: "Respecter le code de la route algérien et la réglementation en vigueur." },
          ],
        },
        {
          title: "Politique anti-fraude",
          blocks: [
            { kind: "p", text: "Toute activité frauduleuse sur la plateforme est strictement interdite, notamment :" },
            { kind: "li", text: "Utiliser des applications de GPS fictif ou manipuler votre position pour tromper le système." },
            { kind: "li", text: "Créer des comptes fictifs ou multiples pour profiter de bonus ou de promotions." },
            { kind: "li", text: "Manipuler les prix, les commandes ou les avis sur la plateforme." },
            { kind: "p", text: "Toute violation de cette politique peut entraîner la suspension ou la résiliation définitive du compte sans préavis." },
          ],
        },
        {
          title: "Propriété intellectuelle",
          blocks: [
            { kind: "p", text: "La marque INRIDE AI, les logos, le design, les logiciels et les contenus de la plateforme sont protégés par les lois sur la propriété intellectuelle. Il est interdit de copier, modifier ou réutiliser ces éléments sans autorisation écrite préalable d'INRIDE AI." },
          ],
        },
        {
          title: "Responsabilité & limites",
          blocks: [
            { kind: "p", text: "La plateforme est fournie « en l'état » et « selon disponibilité ». INRIDE AI ne saurait être tenu responsable de :" },
            { kind: "li", text: "Le comportement des conducteurs, des passagers ou de tout tiers." },
            { kind: "li", text: "Les dommages, accidents ou pertes survenus pendant l'exécution de la course, la relation entre le passager et le conducteur étant directe." },
            { kind: "li", text: "Les dommages indirects, accessoires ou consécutifs résultant de l'utilisation de la plateforme." },
          ],
        },
        {
          title: "Règlement des litiges & droit applicable",
          blocks: [
            { kind: "p", text: "Les présentes Conditions sont régies et interprétées conformément au droit de la République algérienne démocratique et populaire. En cas de litige, nous nous efforcerons de le résoudre à l'amiable. À défaut, le litige sera soumis aux tribunaux algériens compétents." },
          ],
        },
        {
          title: "Contact & support",
          blocks: [
            { kind: "p", text: "Pour toute question concernant ces Conditions, votre compte ou nos services, contactez notre équipe à inrideai@gmail.com. Nous nous efforçons de répondre sous 2 jours ouvrés." },
          ],
        },
      ],
      contact: { title: "Besoin d'aide ?", text: "Contactez notre équipe de support à tout moment.", button: "Contacter le support" },
    },
    privacy: {
      title: "Politique de confidentialité",
      intro: [
        "Bienvenue sur InRide AI. Nous respectons votre vie privée et nous nous engageons à protéger les données et informations à caractère personnel traitées via l'application InRide AI, sa plateforme et ses services sur le domaine officiel inride.ai.dz.",
        "La présente politique de confidentialité décrit les types de données que nous pouvons collecter, les finalités pour lesquelles nous les traitons, ainsi que la manière dont elles sont utilisées, protégées, conservées et partagées, de même que les droits des personnes concernées et les modalités d'exercice de ces droits.",
        "En utilisant les services d'InRide AI ou en créant un compte sur la plateforme, vous reconnaissez avoir pris connaissance de la présente politique et en comprendre les dispositions, sans préjudice des droits ou garanties accordés par la loi.",
      ],
      legalTitle: "Référence légale",
      legal:
        "Toutes les données à caractère personnel sont traitées et conservées conformément à la loi n° 18-07 du 10 juin 2018 relative à la protection des personnes physiques dans le traitement des données à caractère personnel, modifiée et complétée par la loi n° 25-11 du 24 juillet 2025, ainsi qu'aux instructions de l'Autorité nationale de protection des données à caractère personnel (ANPDP).",
      sections: [
        {
          title: "Référence légale",
          blocks: [
            { kind: "p", text: "Toutes les données à caractère personnel collectées ou traitées via InRide AI sont traitées et conservées conformément à la législation et à la réglementation algériennes applicables relatives à la protection des personnes physiques dans le traitement des données à caractère personnel." },
            { kind: "p", text: "Les opérations de traitement des données sont soumises, en particulier, aux dispositions de :" },
            { kind: "li", text: "Loi n° 18-07 du 25 Ramadan 1439 correspondant au 10 juin 2018 relative à la protection des personnes physiques dans le traitement des données à caractère personnel, modifiée et complétée par la loi n° 25-11 du 28 Moharram 1447 correspondant au 24 juillet 2025." },
            { kind: "p", text: "Dans la mesure où cela lui est applicable, InRide AI respecte les principes de protection des données personnelles et les obligations légales et réglementaires pertinentes, et prend les mesures techniques et organisationnelles appropriées pour protéger les données contre tout accès non autorisé, usage illicite, altération, divulgation, perte ou destruction." },
            { kind: "p", text: "La plateforme tient également compte des dispositions et instructions émanant de l'Autorité nationale de protection des données à caractère personnel (ANPDP) et de tout texte d'application ou réglementaire applicable en Algérie." },
          ],
        },
        {
          title: "Qui sommes-nous ?",
          blocks: [
            { kind: "p", text: "InRide AI est une application et une plateforme numérique intelligente de transport, de mobilité et de négociation libre entre les parties, visant à connecter les passagers aux conducteurs et à faciliter la demande, la gestion et le suivi des courses." },
            { kind: "p", text: "Aux fins de la présente politique :" },
            { kind: "li", text: "« InRide AI », « nous » ou « la plateforme » désigne le projet et l'organisation responsables de l'exploitation du service InRide AI en Algérie." },
            { kind: "li", text: "« Utilisateur » ou « vous » désigne toute personne utilisant l'application ou la plateforme." },
            { kind: "li", text: "« Passager » désigne un utilisateur qui utilise la plateforme pour demander une course ou proposer un prix de déplacement." },
            { kind: "li", text: "« Conducteur » ou « partenaire » désigne un utilisateur enregistré fournissant des services de transport via la plateforme." },
            { kind: "li", text: "« Données personnelles » désigne les données et informations relatives à une personne physique identifiée ou identifiable, conformément à la législation algérienne applicable." },
            { kind: "li", text: "« Traitement » englobe les opérations de collecte, d'enregistrement, d'organisation, de conservation, d'utilisation, de modification, d'extraction, de partage ou de suppression des données, dans la mesure autorisée par la loi." },
          ],
        },
        {
          title: "Champ d'application de la présente politique",
          blocks: [
            { kind: "p", text: "La présente politique s'applique à :" },
            { kind: "li", text: "L'application mobile et l'application web (PWA) d'InRide AI." },
            { kind: "li", text: "Le site web officiel d'InRide AI : https://inride.ai.dz." },
            { kind: "li", text: "Les comptes passagers, conducteurs et partenaires." },
            { kind: "li", text: "Les services de courses et de négociation interactive, les services d'assistance technique et la vérification des identités." },
            { kind: "li", text: "Tout service numérique associé à la plateforme." },
            { kind: "p", text: "La présente politique ne s'applique pas aux services ou sites externes qu'InRide AI ne possède ni ne gère, lesquels peuvent avoir des politiques de confidentialité indépendantes." },
          ],
        },
        {
          title: "Données que nous collectons",
          blocks: [
            { kind: "p", text: "Nous ne collectons que les données nécessaires ou appropriées aux finalités définies dans la présente politique, conformément aux exigences légales applicables." },
            { kind: "sub", title: "Données des passagers", lead: "Les données collectées auprès du passager peuvent inclure :", items: [
              "Nom personnel ou nom d'affichage.",
              "Numéro de téléphone (utilisé pour la vérification via le code OTP).",
              "Adresse e-mail.",
              "Ville et région.",
              "Données de course : lieu de départ, lieu d'arrivée et localisation interactive pendant la course.",
              "Prix proposé pour la course et historique des négociations.",
              "Évaluations, avis et enregistrements des échanges avec le service client.",
            ] },
            { kind: "sub", title: "Données des conducteurs et partenaires", lead: "Compte tenu de la nature des services de transport et des exigences de sécurité et de vérification, le conducteur doit fournir des données supplémentaires, notamment :", items: [
              "Données personnelles : nom complet, numéro de téléphone, ville, photo personnelle officielle et date de naissance.",
              "Documents d'identité : carte nationale d'identité ou carte d'identité biométrique (image du document, numéro et date d'expiration).",
              "Permis de conduire : image du permis, numéro et validité.",
              "Données du véhicule et de l'assurance : type de véhicule, modèle, année de fabrication, couleur, numéro de plaque, photos du véhicule et copie du document d'assurance en cours de validité.",
            ] },
            { kind: "sub", title: "Données générées lors de l'utilisation du service", lead: "Des données liées à l'utilisation d'InRide AI peuvent être enregistrées, notamment :", items: [
              "Numéro de course, date et heure de la course, trajet, distance et statut de la course, coût final et accord, évaluations mutuelles et réclamations adressées au support.",
            ] },
            { kind: "sub", title: "Données de localisation (GPS)", lead: "La localisation est un élément essentiel au fonctionnement du service :", items: [
              "Pour le passager : nous utilisons la localisation pour déterminer le point de prise en charge, afficher les conducteurs à proximité et suivre le trajet pendant le déplacement.",
              "Pour le conducteur : nous collectons la localisation précise en mode « en ligne/actif » et pendant l'exécution de la course afin de router les demandes proches et d'assurer la sécurité de la course.",
            ] },
          ],
        },
        {
          title: "Pourquoi collectons-nous ces données ?",
          blocks: [
            { kind: "p", text: "Les données sont traitées aux fins suivantes :" },
            { kind: "li", text: "Créer et gérer les comptes et confirmer les numéros de téléphone via les codes OTP." },
            { kind: "li", text: "Faire fonctionner le moteur de mise en relation intelligente et la négociation des prix entre passagers et conducteurs." },
            { kind: "li", text: "Vérifier l'identité des conducteurs et la validité des documents et pièces justificatives, et assurer la sécurité de la plateforme." },
            { kind: "li", text: "Afficher les cartes, calculer les distances et fournir les communications d'assistance technique." },
            { kind: "li", text: "Prévenir la fraude et détecter les comptes fictifs ou l'utilisation d'applications de falsification de localisation (Fake GPS)." },
            { kind: "li", text: "Se conformer aux obligations légales et réglementaires émanant des autorités algériennes compétentes." },
          ],
        },
        {
          title: "Étapes de vérification des conducteurs et partenaires",
          blocks: [
            { kind: "p", text: "Les comptes des conducteurs sont soumis à des étapes d'examen progressif :" },
            { kind: "flow", text: "[Pending] ➔ [Documents Submitted] ➔ [Under Review] ➔ [Approved] (ou [Rejected] / [Suspended] / [Blocked] en cas de non-respect des conditions)." },
            { kind: "p", text: "Le conducteur n'est autorisé à recevoir des demandes de courses qu'après la vérification complète et l'approbation de ses documents." },
          ],
        },
        {
          title: "Protection des documents des conducteurs",
          blocks: [
            { kind: "p", text: "InRide AI traite tous les documents officiels (cartes d'identité, permis de conduire et assurance) comme des données hautement chiffrées et sensibles. Les documents sont stockés dans des environnements cloud isolés et protégés, et ne sont jamais affichés aux passagers ni à toute partie non autorisée." },
          ],
        },
        {
          title: "Intelligence artificielle et vérification automatique",
          blocks: [
            { kind: "p", text: "InRide AI peut utiliser des technologies d'intelligence artificielle et de reconnaissance optique de caractères (OCR) pour aider à lire les données des documents, analyser les dates d'expiration et détecter les signes de falsification. Ces systèmes restent auxiliaires et font l'objet d'un examen humain si nécessaire pour garantir des décisions équitables." },
          ],
        },
        {
          title: "Partage des données",
          blocks: [
            { kind: "li", text: "Entre passager et conducteur : seules les informations nécessaires à la réalisation de la course sont partagées (par exemple : nom du passager et lieu de départ / nom du conducteur, photo, type de véhicule et numéro de plaque)." },
            { kind: "li", text: "Prestataires de services : nous nous appuyons sur des partenaires d'hébergement, des infrastructures et des opérateurs de messagerie de vérification (tels que l'API Meta / WhatsApp) dans le cadre de contrats de confidentialité stricts." },
            { kind: "li", text: "Vente : InRide AI ne vend jamais les données personnelles des utilisateurs à une entité commerciale." },
            { kind: "li", text: "Autorités judiciaires : les données ne sont divulguées que sur ordonnance judiciaire ou demande officielle valable des autorités de sécurité algériennes, conformément à la loi." },
          ],
        },
        {
          title: "Transfert de données hors d'Algérie",
          blocks: [
            { kind: "p", text: "Lors de l'utilisation de serveurs ou d'infrastructures cloud internationaux, InRide AI s'engage à prendre toutes les mesures techniques et organisationnelles pour garantir que les données sont traitées conformément aux dispositions de la loi algérienne n° 18-07, modifiée par la loi n° 25-11." },
          ],
        },
        {
          title: "Sécurité du compte et code OTP",
          blocks: [
            { kind: "p", text: "Le processus de connexion est protégé par des codes OTP temporaires. Il est interdit à l'utilisateur de partager ce code avec quiconque, et nous confirmons que le personnel d'InRide AI ne vous demandera jamais de code OTP." },
          ],
        },
        {
          title: "Prévention de la fraude et de l'abus",
          blocks: [
            { kind: "p", text: "Nous disposons de systèmes de protection contre les comptes en double, la manipulation des prix, les cyberattaques et l'utilisation de logiciels malveillants, et la plateforme se réserve le droit de suspendre les comptes suspects en attendant leur examen." },
          ],
        },
        {
          title: "Durée de conservation des données",
          blocks: [
            { kind: "p", text: "Les données personnelles sont conservées pendant toute la durée d'activité du compte et pour la période nécessaire à la réalisation des finalités du service ou pour les obligations légales et financières. Lorsque la finalité des données a pris fin, elles sont supprimées, détruites ou anonymisées (Anonymized)." },
          ],
        },
        {
          title: "Droits des personnes concernées",
          blocks: [
            { kind: "p", text: "En vertu de la législation algérienne, vous avez le droit de :" },
            { kind: "li", text: "Obtenir des informations sur la manière dont vos données sont traitées et y accéder." },
            { kind: "li", text: "Corriger ou mettre à jour des données inexactes." },
            { kind: "li", text: "Demander la suppression de vos données personnelles dans les conditions légales." },
            { kind: "li", text: "Soumettre une objection ou une plainte à l'Autorité nationale de protection des données à caractère personnel (ANPDP)." },
          ],
        },
        {
          title: "Suppression du compte et des données (Data Erasure Request)",
          blocks: [
            { kind: "badge", text: "IMPORTANT · Exigence Google Play" },
            { kind: "p", text: "L'utilisateur peut demander la suppression définitive de son compte à tout moment via :" },
            { kind: "li", text: "Dans l'application : accédez à Réglages > Compte > Demander la suppression du compte." },
            { kind: "li", text: "Par e-mail : contactez le responsable de la confidentialité à : inrideai@gmail.com." },
            { kind: "p", text: "La demande de suppression et les données associées sont traitées dans un délai n'excédant pas 7 jours ouvrés à compter de la date de soumission de la demande." },
            { kind: "cta", text: "Envoyer la demande par e-mail", href: `mailto:${EMAIL}?subject=${DELETION_SUBJECT}` },
          ],
        },
        {
          title: "Données des enfants",
          blocks: [
            { kind: "p", text: "Les services d'InRide AI ne sont pas destinés aux enfants de moins de 18 ans, et si nous découvrons que des données d'un mineur ont été collectées sans le consentement de son représentant légal, elles seront supprimées immédiatement." },
          ],
        },
        {
          title: "Technologies et cookies",
          blocks: [
            { kind: "p", text: "Nous utilisons des technologies de stockage local (Local Storage & Session Tokens) sur l'appareil pour maintenir la connexion et assurer la stabilité des sessions de travail et la sécurité du compte." },
          ],
        },
        {
          title: "Communication et notifications",
          blocks: [
            { kind: "p", text: "La plateforme envoie des notifications opérationnelles relatives aux courses, aux mises à jour du compte et aux codes OTP via l'application, les SMS, l'e-mail ou les applications agréées telles que l'API WhatsApp." },
          ],
        },
        {
          title: "Délégué à la protection des données (DPO)",
          blocks: [
            { kind: "p", text: "Conformément aux réglementations algériennes, vous pouvez contacter le délégué à la protection des données d'InRide AI via :" },
            { kind: "li", text: "E-mail de confidentialité : inrideai@gmail.com" },
            { kind: "li", text: "Site web : https://inride.ai.dz" },
          ],
        },
        {
          title: "Contact et exercice des droits",
          blocks: [
            { kind: "p", text: "Pour toute demande juridique ou relative à la confidentialité, vous pouvez nous contacter via :" },
            { kind: "li", text: "E-mail officiel : inrideai@gmail.com" },
            { kind: "li", text: "Site web officiel : https://inride.ai.dz" },
          ],
        },
        {
          title: "Mise à jour de la politique de confidentialité",
          blocks: [
            { kind: "p", text: "Nous pouvons mettre à jour cette politique lors de l'introduction de nouvelles fonctionnalités techniques ou de la publication de règlements modifiés. Les utilisateurs seront informés de tout changement substantiel, et la date « Dernière mise à jour » en haut du document sera mise à jour." },
          ],
        },
        {
          title: "Informations sur le service et la plateforme",
          blocks: [
            { kind: "li", text: "Nom du service et marque : InRide AI" },
            { kind: "li", text: "Domaine officiel : https://inride.ai.dz" },
            { kind: "li", text: "E-mail officiel et support : inrideai@gmail.com" },
            { kind: "li", text: "E-mail de confidentialité et de suppression des données : inrideai@gmail.com" },
            { kind: "li", text: "Juridiction judiciaire et légale : République algérienne démocratique et populaire" },
          ],
        },
      ],
      closing:
        "Nous nous engageons à fournir des services de transport intelligents et sûrs tout en garantissant les plus hauts niveaux de protection des données personnelles conformément à la législation algérienne applicable.",
    },
  },

  ar: {
    updatedDate: "14 أوت 2026",
    effectiveDate: "14 أوت 2026",
    updatedLabel: "آخر تحديث",
    effectiveLabel: "تاريخ السريان",
    legal: {
      title: "المعلومات القانونية",
      intro:
        "تجمع هذه الصفحة الوثائق القانونية المنظِّمة لاستخدام منصة INRIDE AI: شروط الاستخدام العامة وسياسة الخصوصية. هذه الوثائق ملزمة ويجب قراءتها بعناية قبل أي استخدام للمنصة.",
      termsPartTitle: "شروط الاستخدام العامة",
      privacyPartTitle: "سياسة الخصوصية",
      mentionsPartTitle: "البيانات القانونية",
      mentionsIntro: "معلومات لتحديد هوية الناشر والمشغّل لمنصة INRIDE AI، وفقاً للقانون الجزائري المعمول به.",
      mentions: [
        "يُدار هذا الموقع وتطبيق InRide AI من قبل العلامة التجارية InRide AI، المتاحة على العنوان الرسمي https://inride.ai.dz، مع البريد الإلكتروني الرسمي للاتصال وحماية البيانات: inrideai@gmail.com.",
        "تُعالج جميع المعطيات ذات الطابع الشخصي وفقاً للقانون الجزائري رقم 18-07 المؤرخ في 10 جوان 2018 المتعلق بحماية الأشخاص الطبيعيين في مجال معالجة المعطيات ذات الطابع الشخصي، المعدَّل والمتمِّم بالقانون رقم 25-11 المؤرخ في 24 جويلية 2025، وتعليمات السلطة الوطنية لحماية المعطيات الشخصية (ANPDP).",
        "العلامة التجارية والشعارات وجميع محتويات المنصة محمية بموجب قانون الملكية الفكرية؛ ويُمنع أي استنساخ دون إذن كتابي مسبق من INRIDE AI.",
        "الاختصاص القضائي: محاكم الجمهورية الجزائرية الديمقراطية الشعبية.",
      ],
    },
    terms: {
      title: "شروط الخدمة",
      intro:
        "يرجى قراءة شروط الخدمة العامة التالية بعناية. باستخدامك INRIDE AI فإنك توافق على الالتزام بهذه الشروط وبسياسة الخصوصية الخاصة بنا.",
      legalTitle: "القانون الحاكم",
      legal:
        "تُحكم هذه الشروط وتُفسَّر وفقاً لقوانين الجمهورية الجزائرية الديمقراطية الشعبية، وتُعالج البيانات الشخصية وفقاً لأحكام القانون رقم 18-07 المتعلق بحماية المعطيات ذات الطابع الشخصي.",
      sections: [
        {
          title: "طبيعة الخدمة",
          blocks: [
            { kind: "p", text: "INRIDE AI منصة رقمية تعمل كوسيط تقني يربط بين الركاب والسائقين المستقلين. تتيح المنصة للراكب تحديد السعر المقترح لرحلته، ثم يتلقى عروضاً من السائقين القريبين ويختار العرض الأنسب له." },
            { kind: "p", text: "العلاقة النهائية للرحلة هي اتفاق مباشر بين الراكب والسائق. INRIDE AI ليست شركة نقل ولا تعمل كصاحب عمل للسائقين، ولا تتحمل مسؤولية تنفيذ الرحلة أو سلوك أي طرف آخر." },
          ],
        },
        {
          title: "الحسابات والأمان",
          blocks: [
            { kind: "p", text: "لإنشاء حساب على INRIDE AI يجب أن يكون عمرك 18 عاماً على الأقل وأن تمتلك الأهلية القانونية للتعاقد وفق القانون الجزائري:" },
            { kind: "li", text: "يتم التحقق من حسابك عبر رمز OTP يُرسل إلى واتساب. حافظ على سرية الرمز — لن يطلبه منك موظفو INRIDE AI أبداً." },
            { kind: "li", text: "أنت مسؤول عن كل نشاط يتم من حسابك. قم بتأمين جهازك وحساب واتساب الخاص بك." },
            { kind: "li", text: "يمكنك طلب حذف حسابك في أي وقت بإرسال بريد إلى inrideai@gmail.com من البريد المرتبط بحسابك." },
          ],
        },
        {
          title: "التزامات السائقين",
          blocks: [
            { kind: "p", text: "باستخدام INRIDE AI كسائق، فإنك تتعهد بما يلي:" },
            { kind: "li", text: "المحافظة على رخصة قيادة سارية ووثائق مركبة سارية وتأمين سارٍ." },
            { kind: "li", text: "العناية بمركبتك وإبقاء بياناتها دقيقة ومحدثة في التطبيق." },
            { kind: "li", text: "إتمام الرحلات بشكل احترافي واحترام الركاب، وعدم القيادة أبداً تحت تأثير أي مادة." },
            { kind: "li", text: "الامتثال لقوانين المرور الجزائرية واللوائح المعمول بها." },
          ],
        },
        {
          title: "سياسة مكافحة الاحتيال",
          blocks: [
            { kind: "p", text: "نمنع بشكل صارم أي نشاط احتيالي على المنصة، بما في ذلك على سبيل المثال لا الحصر:" },
            { kind: "li", text: "استخدام تطبيقات GPS مزيفة أو التلاعب بالموقع لتضليل النظام." },
            { kind: "li", text: "إنشاء حسابات وهمية أو متعددة للاستفادة من المكافآت أو العروض الترويجية." },
            { kind: "li", text: "التلاعب بالأسعار أو الطلبات أو تقييمات المنصة." },
            { kind: "p", text: "أي مخالفة لهذه السياسة قد تؤدي إلى تعليق الحساب أو إنهائه بشكل دائم دون إشعار مسبق." },
          ],
        },
        {
          title: "الملكية الفكرية",
          blocks: [
            { kind: "p", text: "العلامة التجارية INRIDE AI والشعارات والتصميم والبرمجيات ومحتوى المنصة محمية بموجب قوانين الملكية الفكرية. لا يجوز نسخ أو تعديل أو إعادة استخدام أي من هذه العناصر دون إذن كتابي مسبق من INRIDE AI." },
          ],
        },
        {
          title: "المسؤولية وحدودها",
          blocks: [
            { kind: "p", text: "تُقدم المنصة «كما هي» و«كما تتوفر». لا تتحمل INRIDE AI مسؤولية:" },
            { kind: "li", text: "سلوك السائقين أو الركاب أو أي طرف ثالث." },
            { kind: "li", text: "الأضرار أو الحوادث أو الخسائر التي تحدث أثناء تنفيذ الرحلة، لأن العلاقة بين الراكب والسائق مباشرة." },
            { kind: "li", text: "الأضرار غير المباشرة أو العرضية أو التبعية الناتجة عن استخدام المنصة." },
          ],
        },
        {
          title: "تسوية المنازعات والقانون الحاكم",
          blocks: [
            { kind: "p", text: "تخضع هذه الشروط وتُفسَّر وفقاً لقوانين الجمهورية الجزائرية الديمقراطية الشعبية. في حال نشوء أي خلاف، نبذل جهوداً معقولة لحله وديأ أولاً. إذا تعذر الحل الودي، تُعرض المنازعة على المحاكم الجزائرية المختصة." },
          ],
        },
        {
          title: "التواصل والدعم",
          blocks: [
            { kind: "p", text: "لأي سؤال حول هذه الشروط أو حسابك أو خدماتنا، تواصل مع فريقنا عبر inrideai@gmail.com. نسعى للرد خلال يومي عمل." },
          ],
        },
      ],
      contact: { title: "تحتاج مساعدة؟", text: "تواصل مع فريق الدعم لدينا في أي وقت.", button: "راسل الدعم" },
    },
    privacy: {
      title: "سياسة الخصوصية",
      intro: [
        "مرحبًا بك في InRide AI. نحن نحترم خصوصيتك ونلتزم بحماية المعطيات والبيانات ذات الطابع الشخصي التي تتم معالجتها من خلال تطبيق InRide AI ومنصته وخدماته عبر النطاق الرسمي inride.ai.dz.",
        "توضح سياسة الخصوصية هذه أنواع المعطيات التي قد نجمعها، والأغراض التي نعالجها من أجلها، وكيفية استخدامها وحمايتها والاحتفاظ بها ومشاركتها، بالإضافة إلى حقوق الأشخاص المعنيين بالمعالجة وطرق ممارسة هذه الحقوق.",
        "باستخدامك لخدمات InRide AI أو إنشاء حساب على المنصة، فإنك تقر باطلاعك على هذه السياسة وفهمك لأحكامها، وذلك دون المساس بأي حقوق أو ضمانات يمنحها القانون.",
      ],
      legalTitle: "المرجعية القانونية",
      legal:
        "تُعالج جميع البيانات والمعطيات الشخصية وتُحفظ وفقاً لأحكام القانون رقم 18-07 المؤرخ في 10 يونيو 2018 المتعلق بحماية الأشخاص الطبيعيين في مجال معالجة المعطيات ذات الطابع الشخصي، المعدل والمتمم بالقانون رقم 25-11 المؤرخ في 24 يوليو 2025، وتعليمات السلطة الوطنية لحماية المعطيات ذات الطابع الشخصي (ANPDP).",
      sections: [
        {
          title: "المرجعية القانونية",
          blocks: [
            { kind: "p", text: "تُعالج وتُحفظ جميع المعطيات والبيانات ذات الطابع الشخصي التي يتم جمعها أو معالجتها من خلال InRide AI وفقًا للتشريعات والتنظيمات الجزائرية المعمول بها والمتعلقة بحماية الأشخاص الطبيعيين في مجال معالجة المعطيات ذات الطابع الشخصي." },
            { kind: "p", text: "وتخضع عمليات معالجة المعطيات، على وجه الخصوص، لأحكام:" },
            { kind: "li", text: "القانون رقم 18-07 المؤرخ في 25 رمضان 1439 الموافق 10 يونيو 2018، المتعلق بحماية الأشخاص الطبيعيين في مجال معالجة المعطيات ذات الطابع الشخصي، المعدل والمتمم بالقانون رقم 25-11 المؤرخ في 28 محرم 1447 الموافق 24 يوليو 2025." },
            { kind: "p", text: "وتلتزم InRide AI، في حدود ما ينطبق عليها، بمبادئ حماية المعطيات الشخصية والالتزامات القانونية والتنظيمية ذات الصلة، وباتخاذ التدابير التقنية والتنظيمية المناسبة لحماية المعطيات من الوصول غير المصرح به أو الاستعمال غير المشروع أو التغيير أو الكشف أو الفقدان أو الإتلاف." },
            { kind: "p", text: "كما تراعي المنصة الأحكام والتعليمات الصادرة عن السلطة الوطنية لحماية المعطيات ذات الطابع الشخصي (ANPDP) وأي نصوص تطبيقية أو تنظيمية واجبة التطبيق في الجزائر." },
          ],
        },
        {
          title: "من نحن؟",
          blocks: [
            { kind: "p", text: "InRide AI هو تطبيق ومنصة رقمية ذكية لخدمات النقل والتنقل والتفاوض الحر بين الطرفين، يهدف إلى ربط الركاب بالسائقين وتسهيل طلب الرحلات وإدارتها ومتابعتها." },
            { kind: "p", text: "لأغراض هذه السياسة:" },
            { kind: "li", text: "\"InRide AI\" أو \"نحن\" أو \"المنصة\" تعني المشروع والمؤسسة المسؤولة عن تشغيل خدمة InRide AI في الجزائر." },
            { kind: "li", text: "\"المستخدم\" أو \"أنت\" يعني أي شخص يستخدم التطبيق أو المنصة." },
            { kind: "li", text: "\"الراكب\" يعني المستخدم الذي يستخدم المنصة لطلب رحلة أو اقتراح سعر تنقل." },
            { kind: "li", text: "\"السائق\" أو \"الشريك\" يعني المستخدم المسجل لتقديم خدمات النقل من خلال المنصة." },
            { kind: "li", text: "\"المعطيات الشخصية\" تعني البيانات والمعلومات المتعلقة بشخص طبيعي معرف أو قابل للتعرف عليه، وفقًا للتشريع الجزائري المعمول به." },
            { kind: "li", text: "\"المعالجة\" تشمل عمليات جمع المعطيات وتسجيلها وتنظيمها وحفظها واستخدامها وتعديلها واسترجاعها ومشاركتها أو حذفها، حسب ما يسمح به القانون." },
          ],
        },
        {
          title: "نطاق تطبيق هذه السياسة",
          blocks: [
            { kind: "p", text: "تنطبق هذه السياسة على:" },
            { kind: "li", text: "تطبيق الهواتف المحمولة وتطبيق الويب (PWA) لـ InRide AI." },
            { kind: "li", text: "موقع InRide AI الإلكتروني الرسمي: https://inride.ai.dz." },
            { kind: "li", text: "حسابات الركاب والسائقين والشركاء." },
            { kind: "li", text: "خدمات الرحلات والتفاوض التفاعلي، وخدمات الدعم الفني والتحقق من الهويات." },
            { kind: "li", text: "أي خدمات رقمية مرتبطة بالمنصة." },
            { kind: "p", text: "ولا تنطبق هذه السياسة على خدمات أو مواقع خارجية لا تملكها أو تديرها InRide AI، والتي قد تكون لها سياسات خصوصية مستقلة." },
          ],
        },
        {
          title: "البيانات التي نجمعها",
          blocks: [
            { kind: "p", text: "نجمع فقط المعطيات التي تكون ضرورية أو مناسبة للأغراض المحددة في هذه السياسة، وبما يتوافق مع المتطلبات القانونية المعمول بها." },
            { kind: "sub", title: "بيانات الركاب", lead: "قد تشمل البيانات التي يتم جمعها من الراكب:", items: [
              "الاسم الشخصي أو الظاهر.",
              "رقم الهاتف (المستخدم للتحقق عبر رمز OTP).",
              "البريد الإلكتروني.",
              "المدينة والمنطقة.",
              "بيانات الرحلات: موقع الانطلاق، موقع الوصول، والموقع الجغرافي التفاعلي أثناء الرحلة.",
              "السعر المقترح للرحلة وسجل المفاوضات.",
              "التقييمات والمراجعات وسجلات التواصل مع خدمة العملاء.",
            ] },
            { kind: "sub", title: "بيانات السائقين والشركاء", lead: "نظرًا لطبيعة خدمات النقل ومتطلبات السلامة والتحقق، يحتاج السائق إلى تقديم بيانات إضافية تشمل:", items: [
              "البيانات الشخصية: الاسم الكامل، رقم الهاتف، المدينة، الصورة الشخصية الرسمية، وتاريخ الميلاد.",
              "وثائق الهوية: بطاقة الهوية الوطنية أو بطاقة التعريف البيومترية (صورة الوثيقة، الرقم، وتاريخ الانتهاء).",
              "رخصة القيادة: صورة الرخصة، رقمها، وصلاحيتها.",
              "بيانات المركبة والتأمين: نوع المركبة، الموديل، سنة الصنع، اللون، رقم لوحة الترقيم، صور المركبة، وصورة وثيقة التأمين السارية.",
            ] },
            { kind: "sub", title: "البيانات التي يتم إنشاؤها أثناء استخدام الخدمة", lead: "قد يتم تسجيل بيانات مرتبطة باستخدام InRide AI تشمل:", items: [
              "رقم الرحلة، تاريخ ووقت الرحلة، المسار والمسافة وحالة الرحلة، التكلفة النهائية والاتفاق، والتقييمات المتبادلة والشكاوى المرفوعة للدعم.",
            ] },
            { kind: "sub", title: "الموقع الجغرافي (GPS Location Data)", lead: "يُعد الموقع الجغرافي عنصرًا أساسيًا لتشغيل الخدمة:", items: [
              "للراكب: نستخدم الموقع لتحديد نقطة الالتقاط، إظهار السائقين القريبين، ومتابعة المسار أثناء التنقل.",
              "للسائق: نجمع الموقع الجغرافي الدقيق أثناء وضع \"متصل/نشط\" وأثناء تنفيذ الرحلة لتوجيه الطلبات القريبة وضمان أمان الرحلة.",
            ] },
          ],
        },
        {
          title: "لماذا نجمع هذه البيانات؟",
          blocks: [
            { kind: "p", text: "تُعالج البيانات للأغراض التالية:" },
            { kind: "li", text: "إنشاء وإدارة الحسابات وتأكيد أرقام الهواتف عبر رموز OTP." },
            { kind: "li", text: "إدارة محرك الربط الذكي والتفاوض على الأسعار بين الركاب والسائقين." },
            { kind: "li", text: "التحقق من هوية السائقين وصلاحية الوثائق والأوراق الثبوتية وضمان أمان المنصة." },
            { kind: "li", text: "عرض الخرائط وحساب المسافات وتوفير اتصالات الدعم الفني." },
            { kind: "li", text: "منع الاحتيال واكتشاف الحسابات الوهمية أو استخدام تطبيقات تزييف الموقع (Fake GPS)." },
            { kind: "li", text: "الامتثال للالتزامات القانونية والتنظيمية الصادرة عن السلطات الجزائرية المختصة." },
          ],
        },
        {
          title: "مراحل التحقق من السائقين والشركاء",
          blocks: [
            { kind: "p", text: "تخضع حسابات السائقين لمراحل مراجعة تدريجية:" },
            { kind: "flow", text: "[Pending] ➔ [Documents Submitted] ➔ [Under Review] ➔ [Approved] (أو [Rejected] / [Suspended] / [Blocked] في حال عدم استيفاء الشروط)." },
            { kind: "p", text: "ولا يُسمح للسائق باستقبال طلبات الرحلات إلا بعد التدقيق الكامل والموافقة على وثائقه." },
          ],
        },
        {
          title: "حماية وثائق السائقين",
          blocks: [
            { kind: "p", text: "تُعامل InRide AI جميع الوثائق الرسمية (بطاقات الهوية، رخص القيادة، والتأمين) كبيانات عالية التشفير والحساسية. تُخزن الوثائق في بيئات سحابية معزولة ومحمية، ولا يتم عرض هذه الوثائق إطلاقاً للركاب أو أي طرف غير مصرح له." },
          ],
        },
        {
          title: "الذكاء الاصطناعي والتحقق الآلي",
          blocks: [
            { kind: "p", text: "قد تستخدم InRide AI تقنيات الذكاء الاصطناعي والتعرف الضوئي على الحروف (OCR) للمساعدة في قراءة البيانات من الوثائق وتحليل انتهاء الصلاحية واكتشاف مؤشرات التلاعب. تظل هذه الأنظمة مساعدة، وتخضع للمراجعة البشرية عند الحاجة لضمان القرارات العادلة." },
          ],
        },
        {
          title: "مشاركة البيانات",
          blocks: [
            { kind: "li", text: "بين الراكب والسائق: تُشارك المعلومات الضرورية لإتمام الرحلة فقط (مثل: اسم الراكب وموقع الانطلاق / اسم السائق، صوته، نوع المركبة، ورقم اللوحة)." },
            { kind: "li", text: "مزودو الخدمات: نعتمد على شركاء استضافة وبنى تحتية ومشغلي إرسال رسائل التحقق (مثل Meta / WhatsApp API) تحت عقود سرية حازمة." },
            { kind: "li", text: "البيع: لا تقوم InRide AI ببيع البيانات الشخصية للمستخدمين لأي جهة تجارية إطلاقاً." },
            { kind: "li", text: "الجهات القضائية: لا يتم الإفصاح عن البيانات إلا بناءً على أمر قضائي أو طلب رسمي صادق من السلطات الأمنية الجزائرية وفق القانون." },
          ],
        },
        {
          title: "نقل البيانات خارج الجزائر",
          blocks: [
            { kind: "p", text: "عند استخدام خوادم أو بنى تحتية سحابية دولية، تلتزم InRide AI باتخاذ كافة التدابير التقنية والتنظيمية لضمان معالجة المعطيات وفق أحكام القانون الجزائري رقم 18-07 والمعدل بالقانون 25-11." },
          ],
        },
        {
          title: "أمن الحساب ورمز OTP",
          blocks: [
            { kind: "p", text: "تُدعم عملية تسجيل الدخول بفرز رموز OTP المؤقتة. يُحظر على المستخدم مشاركة هذا الرمز مع أي شخص، ونؤكد أن موظفي InRide AI لن يطلبوا منك رمز OTP مطلقاً." },
          ],
        },
        {
          title: "مكافحة الاحتيال وإساءة الاستخدام",
          blocks: [
            { kind: "p", text: "نمتلك أنظمة للحماية من الحسابات المزدوجة، التلاعب بالأسعار، الهجمات السيبرانية، واستخدام البرامج الضارة، ويحق للمنصة تعليق الحسابات المشبوهة لحين مراجعتها." },
          ],
        },
        {
          title: "مدة الاحتفاظ بالبيانات",
          blocks: [
            { kind: "p", text: "تُحفظ البيانات الشخصية طيلة فترة نشاط الحساب وللمدة الضرورية لتحقيق أغراض الخدمة أو للالتزامات القانونية والمالية. عند انتهاء الغاية من البيانات، يتم حذفها أو إتلافها أو أرشفة بياناتها بشكل مجهول (Anonymized)." },
          ],
        },
        {
          title: "حقوق الأشخاص المعنيين بالمعالجة",
          blocks: [
            { kind: "p", text: "بموجب التشريع الجزائري، يحق لك:" },
            { kind: "li", text: "الحصول على معلومات حول كيفية معالجة معطياتك والوصول إليها." },
            { kind: "li", text: "تصحيح أو تحديث البيانات غير الدقيقة." },
            { kind: "li", text: "طلب حذف معطياتك الشخصية وفق الشروط القانونية." },
            { kind: "li", text: "تقديم اعتراض أو شكوى للسلطة الوطنية لحماية المعطيات ذات الطابع الشخصي (ANPDP)." },
          ],
        },
        {
          title: "حذف الحساب والبيانات (Data Erasure Request)",
          blocks: [
            { kind: "badge", text: "مهم · متطلب Google Play" },
            { kind: "p", text: "يمكن للمستخدم طلب حذف حسابه نهائياً في أي وقت عبر:" },
            { kind: "li", text: "داخل التطبيق: الانتقال إلى الإعدادات > الحساب > طلب حذف الحساب." },
            { kind: "li", text: "عبر البريد الإلكتروني: مراسلة مسؤول الخصوصية عبر: inrideai@gmail.com." },
            { kind: "p", text: "تتم معالجة طلب الحذف وحذف البيانات المرتبطة خلال مدة لا تتجاوز 7 أيام عمل من تاريخ تقديم الطلب." },
            { kind: "cta", text: "أرسل طلب الحذف بالبريد", href: `mailto:${EMAIL}?subject=${DELETION_SUBJECT}` },
          ],
        },
        {
          title: "بيانات الأطفال",
          blocks: [
            { kind: "p", text: "خدمات InRide AI غير موجهة للأطفال دون سن 18 عاماً، وفي حال اكتشاف جمع بيانات قاصر دون موافقة وليه الشرعي، سيتم حذفها فوراً." },
          ],
        },
        {
          title: "التقنيات ومشبهات ملفات الكوكيز (Cookies)",
          blocks: [
            { kind: "p", text: "نستخدم تقنيات التخزين المحلي (Local Storage & Session Tokens) على الجهاز للحفاظ على تسجيل الدخول وضمان استقرار جلسات العمل وأمان الحساب." },
          ],
        },
        {
          title: "التواصل والإشعارات",
          blocks: [
            { kind: "p", text: "تُرسل المنصة إشعارات تشغيلية تتعلق بالرحلات، تحديثات الحساب، ورموز OTP عبر التطبيق، أو الرسائل النصية، أو البريد الإلكتروني، أو التطبيقات المعتمدة مثل WhatsApp API." },
          ],
        },
        {
          title: "مسؤول حماية المعطيات الشخصية (DPO)",
          blocks: [
            { kind: "p", text: "امتثالاً للتنظيمات الجزائرية، يُمكن التواصل مع مسؤول حماية المعطيات الخاص بـ InRide AI عبر:" },
            { kind: "li", text: "البريد الإلكتروني للخصوصية: inrideai@gmail.com" },
            { kind: "li", text: "الموقع الإلكتروني: https://inride.ai.dz" },
          ],
        },
        {
          title: "التواصل وممارسة الحقوق",
          blocks: [
            { kind: "p", text: "لأي استفسارات قانونية أو متعلقة بالخصوصية، يمكنك التواصل معنا عبر:" },
            { kind: "li", text: "البريد الإلكتروني الرسمي: inrideai@gmail.com" },
            { kind: "li", text: "الموقع الرسمي: https://inride.ai.dz" },
          ],
        },
        {
          title: "تحديث سياسة الخصوصية",
          blocks: [
            { kind: "p", text: "قد نقوم بتحديث هذه السياسة عند إدخال ميزات تقنية جديدة أو صدور قوانين تنظيمية معدلة. سيتم إخطار المستخدمين بأي تغيير جوهري وتعديل تاريخ \"آخر تحديث\" في أعلى الوثيقة." },
          ],
        },
        {
          title: "معلومات الخدمة والمنصة",
          blocks: [
            { kind: "li", text: "اسم الخدمة والعلامة: InRide AI" },
            { kind: "li", text: "النطاق الرسمي: https://inride.ai.dz" },
            { kind: "li", text: "البريد الإلكتروني الرسمي والدعم: inrideai@gmail.com" },
            { kind: "li", text: "بريد الخصوصية وحذف البيانات: inrideai@gmail.com" },
            { kind: "li", text: "الاختصاص القضائي والقانوني: الجمهورية الجزائرية الديمقراطية الشعبية" },
          ],
        },
      ],
      closing:
        "نلتزم بتقديم خدمات نقل ذكية وآمنة مع ضمان أعلى مستويات حماية المعطيات الشخصية وفق التشريعات الجزائرية المعمول بها.",
    },
  },
};
