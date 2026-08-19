/* ==========================================================================
   INRIDE AI — Trilingual engine (FR / AR / EN) with automatic RTL for Arabic
   Zero-dependency vanilla JS. Progressive enhancement: without JS the site
   renders in French (default).
   ========================================================================== */
(function () {
  'use strict';

  var LS_KEY = 'inride_lang';

  var DICTS = {
    /* ================= ENGLISH ================= */
    en: {
      lang: { switched: 'Language: English', fr: 'Français', ar: 'العربية', en: 'English' },
      common: { skip: 'Skip to content', menu: 'Open menu', close: 'Close menu' },
      nav: { home: 'Home', services: 'Services', safety: 'Safety', privacy: 'Privacy Policy', terms: 'Terms of Service', legal: 'Legal information', cta: 'Download' },
      page: { updated: 'Last updated', toc: 'On this page', backTop: 'Back to top', updatedDate: 'August 14, 2026', effectiveDate: 'August 14, 2026' },
      legal: {
        title: 'Legal information',
        intro: 'This page brings together the legal documents governing the use of the INRIDE AI platform: the General Terms of Use and the Privacy Policy. Both documents are binding and should be read carefully before using the platform.',
        termsPartTitle: 'General Terms of Use',
        privacyPartTitle: 'Privacy Policy',
        mentionsPartTitle: 'Legal notice',
        mentionsIntro: 'Information identifying the publisher and operator of the INRIDE AI platform, in accordance with the applicable Algerian legislation.',
        m1: 'This website and the InRide AI mobile application are published and operated by the InRide AI brand, available at the official address https://inride.ai.dz, with the official contact and data-protection email: inrideai@gmail.com.',
        m2: 'All personal data are processed in accordance with Algerian Law No. 18-07 of 10 June 2018 on the protection of natural persons in the processing of personal data, amended and supplemented by Law No. 25-11 of 24 July 2025, and in accordance with the instructions of the ANPDP.',
        m3: 'The brand, logos and all content on the platform are protected by intellectual property law; any reproduction without the prior written authorisation of INRIDE AI is prohibited.',
        m4: 'Competent jurisdiction: the courts of the People\'s Democratic Republic of Algeria.'
      },
      footer: {
        tagline: 'Smart mobility for Algeria, powered by AI.',
        legal: 'Legal',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        contact: 'Contact',
        rights: '© 2026 INRIDE AI. All rights reserved.',
        services: 'Our services',
        safety: 'Safety & protection',
        support: 'Support & compliance',
        about: 'About INRIDE AI',
        aboutText: 'INRIDE AI is an interactive digital platform connecting users and facilitating transport, mobility and delivery services. We act as technical intermediaries providing a free and safe negotiation environment between passengers and drivers, without intervening directly in individual transactions.',
        officialSite: 'Official website: https://inride.ai.dz',
        cityRides: 'City rides',
        interRides: 'Inter-wilaya rides',
        express: 'InRide Express',
        riderSafety: 'Passenger safety charter',
        driverSafety: 'Driver safety terms',
        documentCheck: 'Document verification',
        supportEmail: 'Support: inrideai@gmail.com',
        privacyCenter: 'Privacy center & data deletion',
        deletion: 'Account deletion request',
        legalDocs: 'Legal documents',
        generalTerms: 'General Terms of Use',
        generalTermsDesc: 'The rules governing the use of the INRIDE AI platform and its services.',
        privacyPolicy: 'Privacy Policy',
        privacyPolicyDesc: 'How we collect, process and protect your personal data.',
        legalNote: 'Data collection and processing are subject to the provisions of Algerian Law No. 18-07 on the protection of natural persons in the processing of personal data.'
      },
      store: {
        playTop: 'Get it on',
        playName: 'Google Play',
        appleTop: 'Download on the',
        appleName: 'App Store',
        playAria: 'Download INRIDE AI on Google Play',
        appleAria: 'Download INRIDE AI on the App Store'
      },
      home: {
        badge: 'INRIDE AI — Smart mobility, fair pricing',
        heroBadge: 'Free negotiation and fair-priced rides',
        title: 'Move smartly... and enjoy every ride.',
        subtitle: 'A smart transport experience combining speed and safety.',
        ctaPwa: 'Download the PWA demo',
        ctaPwaAria: 'Download the INRIDE AI trial PWA',
        ctaWeb: 'Try the web experience',
        ctaWebAria: 'Try INRIDE AI through the web',
        statsRidesLabel: 'Rides delivered',
        statsRatingLabel: 'Average rating',
        statsWilayasLabel: 'Wilayas covered',
        whyKicker: 'Why choose INRIDE AI',
        whyTitle: 'One platform for every journey',
        whySubtitle: 'Fast city rides, comfortable inter-wilaya travel and express parcel delivery — at a transparent price agreed by both parties.',
        why1Title: 'City rides',
        why1Desc: 'Quick daily rides inside the city, at prices agreed transparently between both parties.',
        why2Title: 'Inter-wilaya rides',
        why2Desc: 'Comfortable travel between Algerian wilayas at a fair cost — with no hidden commissions.',
        why3Title: 'Parcel & order delivery',
        why3Desc: 'Fast, safe delivery of parcels and valuable items through the platform.',
        fairKicker: 'Fair rides at the price you agree on',
        fairTitle: 'No algorithm decides the price',
        fairLead: 'With INRIDE AI there are no algorithms raising prices at random! The passenger proposes a price, and the driver accepts it or makes a counter-offer through the interactive negotiation engine.',
        fairItem1: 'You propose the fare',
        fairItem2: 'The driver accepts or makes a counter-offer',
        fairItem3: 'Both parties agree transparently',
        fairNote: 'The negotiation engine keeps every trip fair, transparent and agreed — for passengers and drivers alike.',
        negChip: 'Negotiation engine',
        negRiderLabel: 'Passenger proposal',
        negDriverLabel: 'Driver counter-offer',
        negAgreedLabel: 'Agreement between both parties',
        negProposed: 'Proposed',
        negCounter: 'Counter-offer',
        negAccepted: 'Accepted',
        servicesKicker: 'INRIDE AI services',
        servicesTitle: 'One app .. smart mobility & delivery solutions',
        srv1Title: 'City rides',
        srv1Tag: 'Urban mobility',
        srv1RiderTitle: 'For passengers',
        srv1Rider: 'Request your ride, set the pickup and drop-off points, and propose the price that suits you.',
        srv1DriverTitle: 'For drivers',
        srv1Driver: 'Receive ride requests near you, and choose the price and trip that fit your schedule.',
        srv2Title: 'Inter-wilaya travel',
        srv2Tag: 'Long distance',
        srv2RiderTitle: 'For passengers',
        srv2Rider: 'Choose comfort and safety on long-distance trips, at a fair price fixed in advance.',
        srv2DriverTitle: 'For drivers',
        srv2Driver: 'Double your earnings with inter-city and inter-wilaya trips, easily.',
        srv3Title: 'InRide Express',
        srv3Tag: 'Fast delivery',
        srv3RiderTitle: 'For clients & businesses',
        srv3Rider: 'Fast and secure delivery for documents, parcels and personal orders.',
        srv3DriverTitle: 'For couriers',
        srv3Driver: 'Flexible job opportunities with direct and fast earnings.',
        safetyKicker: 'Safety & protection',
        safetyTitle: 'Safety is an absolute priority',
        safetySubtitle: 'We apply the highest protection standards to guarantee the safety of all platform users, on every trip.',
        safe1Title: 'Identity verification',
        safe1Desc: 'Strict automated and human vetting of drivers\u2019 documents, driving licences and ID cards.',
        safe2Title: 'Live GPS tracking',
        safe2Desc: 'Share your ride route with family and friends as soon as the trip starts.',
        safe3Title: 'Emergency button & support',
        safe3Desc: 'Direct support through the platform and the official email to handle complaints and disputes immediately.',
        impactKicker: 'Technology & social impact in Algeria',
        impactTitle: 'AI serving fair, connected mobility',
        impactLead: 'INRIDE AI relies on artificial intelligence to suggest fair average prices and reduce waiting time — while supporting young technical talent and contributing to sustainable mobility and digital transformation in Algeria.',
        impact1: 'Fair average prices suggested by AI',
        impact2: 'Reduced waiting time',
        impact3: 'Support for young technical talent',
        impact4: 'Sustainable mobility solutions',
        impact5: 'Digital transformation in Algeria',
        ctaTitle: 'Ready to move smarter — and fairer?',
        ctaSubtitle: 'Join thousands of passengers and drivers across Algeria on INRIDE AI.',
        phone: {
          gps: 'GPS live',
          title: 'Driver arriving',
          car: 'Dacia Logan',
          min: 'min',
          fareLabel: 'Your fare',
          agreedLabel: 'Agreed fare',
          fare: '450 DZD',
          share: 'Share location',
          cancel: 'Cancel ride',
          sos: 'SOS protection active',
          sosConnected: 'SOS protection & safety system connected',
          negotiationChip: 'Negotiation',
          sosChip: 'SOS enabled'
        }
      },
      privacy: {
        title: 'Privacy Policy',
        versionLabel: 'Version',
        effectiveLabel: 'Effective date',
        intro: 'Welcome to InRide AI. We respect your privacy and are committed to protecting the personal data and information processed through the InRide AI application, platform, and services on the official domain inride.ai.dz.',
        intro2: 'This privacy policy describes the types of data we may collect, the purposes for which we process them, and how they are used, protected, retained, and shared, as well as the rights of data subjects and the ways to exercise these rights.',
        intro3: 'By using InRide AI services or creating an account on the platform, you acknowledge that you have read this policy and understand its provisions, without prejudice to any rights or guarantees granted by law.',
        legalTitle: 'Legal reference',
        legal: 'All personal data is processed and stored in accordance with Law No. 18-07 of 10 June 2018 on the protection of natural persons in the processing of personal data, amended and supplemented by Law No. 25-11 of 24 July 2025, and the instructions of the Algerian National Authority for the Protection of Personal Data (ANPDP).',
        s1: {
          title: 'Legal Reference',
          p1: 'All personal data collected or processed through InRide AI is processed and stored in accordance with the applicable Algerian legislation and regulations on the protection of natural persons in the processing of personal data.',
          p2: 'Data processing operations are subject, in particular, to the provisions of:',
          law1: 'Law No. 18-07 of 25 Ramadan 1439 corresponding to 10 June 2018 on the protection of natural persons in the processing of personal data, amended and supplemented by Law No. 25-11 of 28 Muharram 1447 corresponding to 24 July 2025.',
          p3: 'To the extent applicable, InRide AI complies with the principles of personal data protection and the relevant legal and regulatory obligations, and takes appropriate technical and organisational measures to protect data from unauthorised access, unlawful use, alteration, disclosure, loss, or destruction.',
          p4: 'The platform also takes into account the provisions and instructions issued by the National Authority for the Protection of Personal Data (ANPDP) and any applicable implementing or regulatory texts in Algeria.'
        },
        s2: {
          title: 'Who We Are',
          p1: 'InRide AI is a smart digital application and platform for transport, mobility, and free negotiation between parties, aimed at connecting passengers with drivers and facilitating the request, management, and tracking of rides.',
          p2: 'For the purposes of this policy:',
          d1: '"InRide AI", "we", or "the platform" means the project and organisation responsible for operating the InRide AI service in Algeria.',
          d2: '"User" or "you" means any person using the application or platform.',
          d3: '"Passenger" means a user who uses the platform to request a ride or propose a transport price.',
          d4: '"Driver" or "partner" means a registered user providing transport services through the platform.',
          d5: '"Personal data" means data and information relating to an identified or identifiable natural person, in accordance with applicable Algerian law.',
          d6: '"Processing" includes the collection, recording, organisation, storage, use, modification, retrieval, sharing, or deletion of data, to the extent permitted by law.'
        },
        s3: {
          title: 'Scope of This Policy',
          p1: 'This policy applies to:',
          i1: 'The InRide AI mobile application and web application (PWA).',
          i2: 'The official InRide AI website: https://inride.ai.dz.',
          i3: 'Passenger, driver, and partner accounts.',
          i4: 'Ride and interactive negotiation services, technical support services, and identity verification.',
          i5: 'Any digital services associated with the platform.',
          p2: 'This policy does not apply to external services or websites that InRide AI does not own or operate, which may have independent privacy policies.'
        },
        s4: {
          title: 'Data We Collect',
          p1: 'We only collect data that is necessary or appropriate for the purposes set out in this policy, in compliance with applicable legal requirements.',
          sub1: 'Passenger Data',
          sub1p: 'Data collected from the passenger may include:',
          p1i1: 'Personal or display name.',
          p1i2: 'Phone number (used for verification via OTP code).',
          p1i3: 'Email address.',
          p1i4: 'City and area.',
          p1i5: 'Ride data: pick-up location, drop-off location, and interactive location during the ride.',
          p1i6: 'Proposed ride price and negotiation history.',
          p1i7: 'Ratings, reviews, and records of communication with customer service.',
          sub2: 'Driver and Partner Data',
          sub2p: 'Given the nature of transport services and safety and verification requirements, the driver must provide additional data including:',
          p2i1: 'Personal data: full name, phone number, city, official personal photo, and date of birth.',
          p2i2: 'Identity documents: national ID card or biometric ID card (document image, number, and expiry date).',
          p2i3: 'Driving licence: licence image, number, and validity.',
          p2i4: 'Vehicle and insurance data: vehicle type, model, year of manufacture, colour, licence plate number, vehicle photos, and a copy of the valid insurance document.',
          sub3: 'Data Generated During Use of the Service',
          sub3p: 'Data related to the use of InRide AI may be recorded, including:',
          p3i1: 'Ride number, ride date and time, route, distance, and ride status, final cost and agreement, and mutual ratings and complaints raised to support.',
          sub4: 'Location Data (GPS)',
          sub4p: 'Location is an essential element for operating the service:',
          p4i1: 'For the passenger: we use location to determine the pick-up point, show nearby drivers, and track the route while travelling.',
          p4i2: 'For the driver: we collect precise location while in "online/active" mode and during ride execution to route nearby requests and ensure ride safety.'
        },
        s5: {
          title: 'Why We Collect This Data',
          p1: 'Data is processed for the following purposes:',
          i1: 'Creating and managing accounts and confirming phone numbers via OTP codes.',
          i2: 'Operating the smart matching engine and price negotiation between passengers and drivers.',
          i3: 'Verifying driver identity and the validity of documents and supporting papers, and ensuring platform safety.',
          i4: 'Displaying maps, calculating distances, and providing technical support communications.',
          i5: 'Preventing fraud and detecting fake accounts or the use of location-spoofing applications (fake GPS).',
          i6: 'Complying with legal and regulatory obligations issued by the competent Algerian authorities.'
        },
        s6: {
          title: 'Driver and Partner Verification Stages',
          p1: 'Driver accounts are subject to progressive review stages:',
          flow: '[Pending] ➔ [Documents Submitted] ➔ [Under Review] ➔ [Approved] (or [Rejected] / [Suspended] / [Blocked] if conditions are not met).',
          p3: 'A driver is not allowed to receive ride requests until their documents have been fully checked and approved.'
        },
        s7: {
          title: 'Protection of Driver Documents',
          p1: 'InRide AI treats all official documents (identity cards, driving licences, and insurance) as highly encrypted and sensitive data. Documents are stored in isolated, protected cloud environments, and are never displayed to passengers or any unauthorised party.'
        },
        s8: {
          title: 'Artificial Intelligence and Automated Verification',
          p1: 'InRide AI may use artificial intelligence and optical character recognition (OCR) technologies to help read data from documents, analyse expiry dates, and detect signs of tampering. These systems remain assistive and are subject to human review when needed to ensure fair decisions.'
        },
        s9: {
          title: 'Data Sharing',
          i1: 'Between passenger and driver: only the information necessary to complete the ride is shared (e.g., passenger name and pick-up location / driver name, photo, vehicle type, and licence plate number).',
          i2: 'Service providers: we rely on hosting partners, infrastructure, and verification message operators (such as Meta / WhatsApp API) under strict confidentiality agreements.',
          i3: "Sale: InRide AI never sells users' personal data to any commercial entity.",
          i4: 'Judicial authorities: data is only disclosed on the basis of a court order or a valid official request from the Algerian security authorities, in accordance with the law.'
        },
        s10: {
          title: 'Transfer of Data Outside Algeria',
          p1: 'When using international cloud servers or infrastructure, InRide AI undertakes to take all technical and organisational measures to ensure that data is processed in accordance with the provisions of Algerian Law No. 18-07, as amended by Law No. 25-11.'
        },
        s11: {
          title: 'Account Security and OTP Code',
          p1: 'The login process is protected by temporary OTP codes. Users are prohibited from sharing this code with anyone, and we confirm that InRide AI staff will never ask you for an OTP code.'
        },
        s12: {
          title: 'Fraud and Abuse Prevention',
          p1: 'We have systems to protect against duplicate accounts, price manipulation, cyberattacks, and the use of malicious software, and the platform reserves the right to suspend suspicious accounts pending review.'
        },
        s13: {
          title: 'Data Retention Period',
          p1: 'Personal data is kept for the duration of account activity and for the period necessary to achieve the purposes of the service or for legal and financial obligations. When the purpose of the data has ended, it is deleted, destroyed, or anonymised (Anonymized).'
        },
        s14: {
          title: 'Rights of Data Subjects',
          p1: 'Under Algerian legislation, you have the right to:',
          i1: 'Obtain information about how your data is processed and access it.',
          i2: 'Correct or update inaccurate data.',
          i3: 'Request the deletion of your personal data under the legal conditions.',
          i4: 'Submit an objection or complaint to the National Authority for the Protection of Personal Data (ANPDP).'
        },
        s15: {
          title: 'Account and Data Deletion (Data Erasure Request)',
          badge: 'IMPORTANT · Google Play requirement',
          p1: 'Users may request the permanent deletion of their account at any time via:',
          i1: 'Within the app: go to Settings > Account > Request account deletion.',
          i2: 'By email: contact the privacy officer at: inrideai@gmail.com.',
          p2: 'The deletion request and associated data are processed within no more than 7 business days from the date the request is submitted.',
          button: 'Email deletion request'
        },
        s16: {
          title: "Children's Data",
          p1: "InRide AI services are not intended for children under the age of 18, and if we discover that a minor's data has been collected without the consent of their legal guardian, it will be deleted immediately."
        },
        s17: {
          title: 'Technologies and Cookies',
          p1: 'We use local storage technologies (Local Storage & Session Tokens) on the device to maintain login and ensure the stability of work sessions and account security.'
        },
        s18: {
          title: 'Communication and Notifications',
          p1: 'The platform sends operational notifications related to rides, account updates, and OTP codes via the app, SMS, email, or approved applications such as the WhatsApp API.'
        },
        s19: {
          title: 'Data Protection Officer (DPO)',
          p1: 'In compliance with Algerian regulations, you may contact the InRide AI data protection officer via:',
          i1: 'Privacy email: inrideai@gmail.com',
          i2: 'Website: https://inride.ai.dz'
        },
        s20: {
          title: 'Contact and Exercising Rights',
          p1: 'For any legal or privacy-related inquiries, you can contact us via:',
          i1: 'Official email: inrideai@gmail.com',
          i2: 'Official website: https://inride.ai.dz'
        },
        s21: {
          title: 'Privacy Policy Updates',
          p1: 'We may update this policy when new technical features are introduced or amended regulations are issued. Users will be notified of any material change, and the "Last updated" date at the top of the document will be updated.'
        },
        s22: {
          title: 'Service and Platform Information',
          i1: 'Service name and brand: InRide AI',
          i2: 'Official domain: https://inride.ai.dz',
          i3: 'Official and support email: inrideai@gmail.com',
          i4: 'Privacy and data deletion email: inrideai@gmail.com',
          i5: "Judicial and legal jurisdiction: People's Democratic Republic of Algeria"
        },
        closing: 'We are committed to providing smart and safe transport services while ensuring the highest levels of personal data protection in accordance with the applicable Algerian legislation.'
      },
      terms: {
        title: 'Terms of Service',
        intro: 'Please read these General Terms of Service carefully. By using INRIDE AI, you agree to be bound by these Terms and by our Privacy Policy.',
        legalTitle: 'Applicable law',
        legal: "These Terms are governed by and interpreted in accordance with the laws of the People's Democratic Republic of Algeria, and personal data is processed in accordance with Law No. 18-07 on the protection of personal data.",
        s1: {
          title: 'Nature of the Service',
          p1: 'INRIDE AI is a digital platform that acts as a technical intermediary connecting passengers with independent drivers. The platform lets the passenger set a proposed price for their ride, then receive offers from nearby drivers and choose the best one.',
          p2: "The final ride relationship is a direct agreement between the passenger and the driver. INRIDE AI is neither a transport company nor the drivers' employer, and bears no responsibility for the execution of the ride or the conduct of either party."
        },
        s2: {
          title: 'Accounts & Security',
          p1: 'To create an INRIDE AI account, you must be at least 18 years old and have the legal capacity to contract under Algerian law:',
          i1: 'Your account is verified with a one-time code (OTP) sent via WhatsApp. Keep this code confidential — INRIDE AI staff will never ask for it.',
          i2: 'You are responsible for all activity under your account. Secure your device and your WhatsApp account.',
          i3: 'You may request account deletion at any time by emailing inrideai@gmail.com from the address linked to your account.'
        },
        s3: {
          title: 'Driver Obligations',
          p1: 'By using INRIDE AI as a driver, you undertake to:',
          i1: 'Maintain a valid driving licence, valid vehicle documents, and active insurance.',
          i2: 'Maintain your vehicle and keep its details accurate and up to date in the app.',
          i3: 'Complete rides professionally, treat passengers with respect, and never drive under the influence.',
          i4: 'Comply with Algerian traffic laws and applicable regulations.'
        },
        s4: {
          title: 'Anti-Fraud Policy',
          p1: 'Any fraudulent activity on the platform is strictly prohibited, including without limitation:',
          i1: 'Using fake GPS apps or manipulating your location to mislead the system.',
          i2: 'Creating fake or multiple accounts to take advantage of bonuses or promotions.',
          i3: 'Manipulating prices, requests, or platform reviews.',
          p2: 'Any violation of this policy may result in account suspension or permanent termination without prior notice.'
        },
        s5: {
          title: 'Intellectual Property',
          p1: 'The INRIDE AI brand, logos, design, software, and platform content are protected by intellectual property laws. You may not copy, modify, or reuse any of these elements without prior written permission from INRIDE AI.'
        },
        s6: {
          title: 'Liability & Limitations',
          p1: 'The platform is provided "as is" and "as available". INRIDE AI is not liable for:',
          i1: 'The conduct of drivers, passengers, or any third party.',
          i2: 'Damages, accidents, or losses occurring during ride execution, as the relationship between passenger and driver is direct.',
          i3: 'Indirect, incidental, or consequential damages arising from use of the platform.'
        },
        s7: {
          title: 'Dispute Resolution & Governing Law',
          p1: "These Terms are governed by and interpreted in accordance with the laws of the People's Democratic Republic of Algeria. In the event of a dispute, we will make reasonable efforts to resolve it amicably. Failing an amicable settlement, the dispute will be submitted to the competent Algerian courts."
        },
        s8: {
          title: 'Contact & Support',
          p1: 'For any question regarding these Terms, your account, or our services, contact our team at inrideai@gmail.com. We aim to respond within 2 business days.'
        },
        contactCard: {
          title: 'Need help?',
          text: 'Reach our support team any time.',
          button: 'Email support'
        }
      },
      meta: {
        home: {
          title: 'INRIDE AI — Smart Mobility & Fair Pricing | Algeria',
          desc: 'INRIDE AI is a smart mobility platform for Algeria: fair negotiated pricing, city rides, inter-wilaya travel and express parcel delivery. Live GPS safety, identity verification and SOS support. Try the PWA demo or the web experience.'
        },
        privacy: {
          title: 'Privacy Policy — INRIDE AI',
          desc: 'Read the InRide AI privacy policy: legal reference (Law 18-07), data collected, purposes of processing, driver verification, data sharing, retention, rights, and data erasure request.'
        },
        terms: {
          title: 'Terms of Service — INRIDE AI',
          desc: 'Read the INRIDE AI terms of service: nature of the service, accounts & security, driver obligations, anti-fraud policy, intellectual property, liability, and governing law.'
        },
        legal: {
          title: 'Legal information — INRIDE AI',
          desc: 'All the legal documents of INRIDE AI in one place: the General Terms of Use and the Privacy Policy, governed by Algerian Law No. 18-07.'
        }
      }
    },

    /* ================= FRANÇAIS ================= */
    fr: {
      lang: { switched: 'Langue : Français', fr: 'Français', ar: 'العربية', en: 'English' },
      common: { skip: 'Aller au contenu', menu: 'Ouvrir le menu', close: 'Fermer le menu' },
      nav: { home: 'Accueil', services: 'Services', safety: 'Sécurité', privacy: 'Confidentialité', terms: 'CGU', legal: 'Informations légales', cta: 'Télécharger' },
      page: { updated: 'Dernière mise à jour', toc: 'Sur cette page', backTop: 'Retour en haut', updatedDate: '14 août 2026', effectiveDate: '14 août 2026' },
      legal: {
        title: 'Informations légales',
        intro: 'Cette page rassemble les documents juridiques régissant l\u2019utilisation de la plateforme INRIDE AI : les Conditions générales d\u2019utilisation et la Politique de confidentialité. Ces documents sont opposables et doivent être lus attentivement avant toute utilisation de la plateforme.',
        termsPartTitle: "Conditions générales d'utilisation",
        privacyPartTitle: 'Politique de confidentialité',
        mentionsPartTitle: 'Mentions légales',
        mentionsIntro: "Informations permettant d'identifier l'éditeur et l'exploitant de la plateforme INRIDE AI, conformément à la législation algérienne applicable.",
        m1: "Le présent site web et l'application mobile InRide AI sont édités et exploités par la marque InRide AI, disponible à l'adresse officielle https://inride.ai.dz, avec pour e-mail officiel de contact et de protection des données : inrideai@gmail.com.",
        m2: "L'ensemble des données à caractère personnel sont traitées conformément à la loi algérienne n° 18-07 du 10 juin 2018 relative à la protection des personnes physiques dans le traitement des données à caractère personnel, modifiée et complétée par la loi n° 25-11 du 24 juillet 2025, ainsi qu'aux instructions de l'ANPDP.",
        m3: "La marque, les logos et l'ensemble des contenus de la plateforme sont protégés par le droit de la propriété intellectuelle ; toute reproduction sans autorisation écrite préalable d'INRIDE AI est interdite.",
        m4: 'Juridiction compétente : les tribunaux de la République algérienne démocratique et populaire.'
      },
      footer: {
        tagline: "La mobilité intelligente pour l'Algérie, propulsée par l'IA.",
        legal: 'Mentions légales',
        privacy: 'Politique de confidentialité',
        terms: "Conditions d'utilisation",
        contact: 'Contact',
        rights: '© 2026 INRIDE AI. Tous droits réservés.',
        services: 'Nos services',
        safety: 'Sécurité & protection',
        support: 'Support & conformité',
        about: 'À propos d\u2019INRIDE AI',
        aboutText: 'INRIDE AI est une plateforme numérique interactive qui connecte les utilisateurs et facilite les services de transport, de mobilité et de livraison. Nous agissons comme intermédiaires techniques offrant un environnement de négociation libre et sécurisé entre passagers et conducteurs, sans intervenir directement dans les transactions individuelles.',
        officialSite: 'Site officiel : https://inride.ai.dz',
        cityRides: 'Courses en ville',
        interRides: 'Courses inter-wilayas',
        express: 'InRide Express',
        riderSafety: 'Charte de sécurité des passagers',
        driverSafety: 'Conditions de sécurité des conducteurs',
        documentCheck: 'Vérification des documents',
        supportEmail: 'Support : inrideai@gmail.com',
        privacyCenter: 'Centre de confidentialité & suppression des données',
        deletion: 'Demande de suppression de compte',
        legalDocs: 'Documents légaux',
        generalTerms: "Conditions générales d'utilisation",
        generalTermsDesc: "Les règles régissant l'utilisation de la plateforme INRIDE AI et de ses services.",
        privacyPolicy: 'Politique de confidentialité',
        privacyPolicyDesc: 'Comment nous collectons, traitons et protégeons vos données personnelles.',
        legalNote: "La collecte et le traitement des données sont soumis aux dispositions de la loi algérienne n° 18-07 relative à la protection des personnes physiques dans le traitement des données à caractère personnel."
      },
      store: {
        playTop: 'Télécharger sur',
        playName: 'Google Play',
        appleTop: 'Télécharger sur',
        appleName: "l'App Store",
        playAria: "Télécharger INRIDE AI sur Google Play",
        appleAria: "Télécharger INRIDE AI sur l'App Store"
      },
      home: {
        badge: 'INRIDE AI — la mobilité intelligente au juste prix',
        heroBadge: 'Liberté de négociation et déplacements à prix juste',
        title: 'Déplacez-vous intelligemment... et profitez de chaque trajet.',
        subtitle: 'Une expérience de transport intelligente alliant rapidité et sécurité.',
        ctaPwa: "Télécharger l'appli PWA (démo)",
        ctaPwaAria: "Télécharger l'appli PWA de démonstration d'INRIDE AI",
        ctaWeb: 'Essayer la version web',
        ctaWebAria: 'Essayer INRIDE AI via le web',
        statsRidesLabel: 'Courses effectuées',
        statsRatingLabel: 'Note moyenne',
        statsWilayasLabel: 'Wilayas couvertes',
        whyKicker: 'Pourquoi INRIDE AI',
        whyTitle: 'Une plateforme pour chaque trajet',
        whySubtitle: 'Des courses urbaines rapides, des voyages inter-wilayas confortables et une livraison de colis express — à un prix transparent convenu d\u2019un commun accord.',
        why1Title: 'Courses en ville',
        why1Desc: 'Des trajets quotidiens rapides en ville, à des prix convenus entre les deux parties en toute transparence.',
        why2Title: 'Courses inter-wilayas',
        why2Desc: 'Voyages confortables entre les wilayas algériennes à un coût équitable, sans commissions cachées.',
        why3Title: 'Livraison de colis & commandes',
        why3Desc: 'Livraison rapide et sécurisée de colis et d\u2019objets de valeur via la plateforme.',
        fairKicker: 'Des courses équitables au prix convenu',
        fairTitle: 'Aucun algorithme ne décide du prix',
        fairLead: 'Avec INRIDE AI, aucune algorithme ne fait grimper les prix au hasard ! Le passager propose un prix, et le conducteur l\u2019accepte ou fait une contre-offre via le moteur de négociation interactif.',
        fairItem1: 'Vous proposez le tarif',
        fairItem2: 'Le conducteur accepte ou fait une contre-offre',
        fairItem3: 'Les deux parties s\u2019accordent en toute transparence',
        fairNote: 'Le moteur de négociation garantit que chaque trajet reste équitable, transparent et convenu — pour les passagers comme pour les conducteurs.',
        negChip: 'Moteur de négociation',
        negRiderLabel: 'Proposition du passager',
        negDriverLabel: 'Contre-offre du conducteur',
        negAgreedLabel: 'Accord des deux parties',
        negProposed: 'Proposé',
        negCounter: 'Contre-offre',
        negAccepted: 'Accepté',
        servicesKicker: 'Services INRIDE AI',
        servicesTitle: 'Une seule appli .. des solutions de mobilité & de livraison',
        srv1Title: 'Courses en ville',
        srv1Tag: 'Mobilité urbaine',
        srv1RiderTitle: 'Pour les passagers',
        srv1Rider: 'Demandez votre course, définissez le point de départ et d\u2019arrivée, et proposez le prix qui vous convient.',
        srv1DriverTitle: 'Pour les conducteurs',
        srv1Driver: 'Recevez les demandes de courses près de chez vous, et choisissez le prix et le trajet qui correspondent à votre planning.',
        srv2Title: 'Voyages inter-wilayas',
        srv2Tag: 'Longue distance',
        srv2RiderTitle: 'Pour les passagers',
        srv2Rider: 'Choisissez le confort et la sécurité sur les longs trajets, à un prix équitable et fixé à l\u2019avance.',
        srv2DriverTitle: 'Pour les conducteurs',
        srv2Driver: 'Doublez vos gains grâce aux trajets inter-villes et inter-wilayas, en toute simplicité.',
        srv3Title: 'InRide Express',
        srv3Tag: 'Livraison rapide',
        srv3RiderTitle: 'Pour les clients & entreprises',
        srv3Rider: 'Livraison rapide et sécurisée de documents, colis et commandes personnelles.',
        srv3DriverTitle: 'Pour les coursiers',
        srv3Driver: 'Des opportunités de travail flexibles avec des gains directs et rapides.',
        safetyKicker: 'Sécurité & protection',
        safetyTitle: 'La sécurité est une priorité absolue',
        safetySubtitle: 'Nous appliquons les normes de protection les plus élevées pour garantir la sécurité de tous les utilisateurs de la plateforme, à chaque trajet.',
        safe1Title: 'Vérification des identités',
        safe1Desc: 'Contrôle strict, automatique et humain, des documents des conducteurs, des permis de conduire et des cartes d\u2019identité.',
        safe2Title: 'Tracé GPS en direct',
        safe2Desc: 'Partagez l\u2019itinéraire de votre course avec votre famille et vos proches dès le départ.',
        safe3Title: 'Bouton d\u2019urgence & support',
        safe3Desc: 'Un support direct via la plateforme et l\u2019e-mail officiel pour traiter les réclamations et litiges immédiatement.',
        impactKicker: 'Technologie & impact social en Algérie',
        impactTitle: 'Une IA au service d\u2019une mobilité équitable et connectée',
        impactLead: 'INRIDE AI s\u2019appuie sur l\u2019intelligence artificielle pour proposer des prix moyens équitables et réduire le temps d\u2019attente — tout en soutenant les jeunes talents techniques et en contribuant au développement d\u2019une mobilité durable et de la transformation numérique en Algérie.',
        impact1: 'Prix moyens équitables suggérés par l\u2019IA',
        impact2: 'Réduction du temps d\u2019attente',
        impact3: 'Soutien aux jeunes talents techniques',
        impact4: 'Solutions de mobilité durable',
        impact5: 'Transformation numérique en Algérie',
        ctaTitle: 'Prêt à vous déplacer plus intelligemment et plus équitablement ?',
        ctaSubtitle: 'Rejoignez des milliers de passagers et conducteurs en Algérie sur INRIDE AI.',
        phone: {
          gps: 'GPS en direct',
          title: 'Votre conducteur arrive',
          car: 'Dacia Logan',
          min: 'min',
          fareLabel: 'Votre tarif',
          agreedLabel: 'Tarif convenu',
          fare: '450 DZD',
          share: 'Partager la position',
          cancel: 'Annuler la course',
          sos: 'Protection SOS active',
          sosConnected: 'Protection SOS et système de sécurité connectés',
          negotiationChip: 'Négociation',
          sosChip: 'SOS activé'
        }
      },
      privacy: {
        title: 'Politique de confidentialité',
        versionLabel: 'Version',
        effectiveLabel: 'Date d\'entrée en vigueur',
        intro: "Bienvenue sur InRide AI. Nous respectons votre vie privée et nous nous engageons à protéger les données et informations à caractère personnel traitées via l'application InRide AI, sa plateforme et ses services sur le domaine officiel inride.ai.dz.",
        intro2: "La présente politique de confidentialité décrit les types de données que nous pouvons collecter, les finalités pour lesquelles nous les traitons, ainsi que la manière dont elles sont utilisées, protégées, conservées et partagées, de même que les droits des personnes concernées et les modalités d'exercice de ces droits.",
        intro3: "En utilisant les services d'InRide AI ou en créant un compte sur la plateforme, vous reconnaissez avoir pris connaissance de la présente politique et en comprendre les dispositions, sans préjudice des droits ou garanties accordés par la loi.",
        legalTitle: 'Référence légale',
        legal: "Toutes les données à caractère personnel sont traitées et conservées conformément à la loi n° 18-07 du 10 juin 2018 relative à la protection des personnes physiques dans le traitement des données à caractère personnel, modifiée et complétée par la loi n° 25-11 du 24 juillet 2025, ainsi qu'aux instructions de l'Autorité nationale de protection des données à caractère personnel (ANPDP).",
        s1: {
          title: 'Référence légale',
          p1: "Toutes les données à caractère personnel collectées ou traitées via InRide AI sont traitées et conservées conformément à la législation et à la réglementation algériennes applicables relatives à la protection des personnes physiques dans le traitement des données à caractère personnel.",
          p2: 'Les opérations de traitement des données sont soumises, en particulier, aux dispositions de :',
          law1: "Loi n° 18-07 du 25 Ramadan 1439 correspondant au 10 juin 2018 relative à la protection des personnes physiques dans le traitement des données à caractère personnel, modifiée et complétée par la loi n° 25-11 du 28 Moharram 1447 correspondant au 24 juillet 2025.",
          p3: "Dans la mesure où cela lui est applicable, InRide AI respecte les principes de protection des données personnelles et les obligations légales et réglementaires pertinentes, et prend les mesures techniques et organisationnelles appropriées pour protéger les données contre tout accès non autorisé, usage illicite, altération, divulgation, perte ou destruction.",
          p4: "La plateforme tient également compte des dispositions et instructions émanant de l'Autorité nationale de protection des données à caractère personnel (ANPDP) et de tout texte d'application ou réglementaire applicable en Algérie."
        },
        s2: {
          title: "Qui sommes-nous ?",
          p1: "InRide AI est une application et une plateforme numérique intelligente de transport, de mobilité et de négociation libre entre les parties, visant à connecter les passagers aux conducteurs et à faciliter la demande, la gestion et le suivi des courses.",
          p2: 'Aux fins de la présente politique :',
          d1: "« InRide AI », « nous » ou « la plateforme » désigne le projet et l'organisation responsables de l'exploitation du service InRide AI en Algérie.",
          d2: "« Utilisateur » ou « vous » désigne toute personne utilisant l'application ou la plateforme.",
          d3: "« Passager » désigne un utilisateur qui utilise la plateforme pour demander une course ou proposer un prix de déplacement.",
          d4: "« Conducteur » ou « partenaire » désigne un utilisateur enregistré fournissant des services de transport via la plateforme.",
          d5: "« Données personnelles » désigne les données et informations relatives à une personne physique identifiée ou identifiable, conformément à la législation algérienne applicable.",
          d6: "« Traitement » englobe les opérations de collecte, d'enregistrement, d'organisation, de conservation, d'utilisation, de modification, d'extraction, de partage ou de suppression des données, dans la mesure autorisée par la loi."
        },
        s3: {
          title: "Champ d'application de la présente politique",
          p1: 'La présente politique s\'applique à :',
          i1: "L'application mobile et l'application web (PWA) d'InRide AI.",
          i2: "Le site web officiel d'InRide AI : https://inride.ai.dz.",
          i3: 'Les comptes passagers, conducteurs et partenaires.',
          i4: "Les services de courses et de négociation interactive, les services d'assistance technique et la vérification des identités.",
          i5: 'Tout service numérique associé à la plateforme.',
          p2: "La présente politique ne s'applique pas aux services ou sites externes qu'InRide AI ne possède ni ne gère, lesquels peuvent avoir des politiques de confidentialité indépendantes."
        },
        s4: {
          title: 'Données que nous collectons',
          p1: "Nous ne collectons que les données nécessaires ou appropriées aux finalités définies dans la présente politique, conformément aux exigences légales applicables.",
          sub1: 'Données des passagers',
          sub1p: 'Les données collectées auprès du passager peuvent inclure :',
          p1i1: 'Nom personnel ou nom d\'affichage.',
          p1i2: 'Numéro de téléphone (utilisé pour la vérification via le code OTP).',
          p1i3: 'Adresse e-mail.',
          p1i4: 'Ville et région.',
          p1i5: "Données de course : lieu de départ, lieu d'arrivée et localisation interactive pendant la course.",
          p1i6: 'Prix proposé pour la course et historique des négociations.',
          p1i7: 'Évaluations, avis et enregistrements des échanges avec le service client.',
          sub2: 'Données des conducteurs et partenaires',
          sub2p: 'Compte tenu de la nature des services de transport et des exigences de sécurité et de vérification, le conducteur doit fournir des données supplémentaires, notamment :',
          p2i1: 'Données personnelles : nom complet, numéro de téléphone, ville, photo personnelle officielle et date de naissance.',
          p2i2: "Documents d'identité : carte nationale d'identité ou carte d'identité biométrique (image du document, numéro et date d'expiration).",
          p2i3: 'Permis de conduire : image du permis, numéro et validité.',
          p2i4: "Données du véhicule et de l'assurance : type de véhicule, modèle, année de fabrication, couleur, numéro de plaque, photos du véhicule et copie du document d'assurance en cours de validité.",
          sub3: 'Données générées lors de l\'utilisation du service',
          sub3p: 'Des données liées à l\'utilisation d\'InRide AI peuvent être enregistrées, notamment :',
          p3i1: "Numéro de course, date et heure de la course, trajet, distance et statut de la course, coût final et accord, évaluations mutuelles et réclamations adressées au support.",
          sub4: 'Données de localisation (GPS)',
          sub4p: "La localisation est un élément essentiel au fonctionnement du service :",
          p4i1: "Pour le passager : nous utilisons la localisation pour déterminer le point de prise en charge, afficher les conducteurs à proximité et suivre le trajet pendant le déplacement.",
          p4i2: "Pour le conducteur : nous collectons la localisation précise en mode « en ligne/actif » et pendant l'exécution de la course afin de router les demandes proches et d'assurer la sécurité de la course."
        },
        s5: {
          title: 'Pourquoi collectons-nous ces données ?',
          p1: 'Les données sont traitées aux fins suivantes :',
          i1: 'Créer et gérer les comptes et confirmer les numéros de téléphone via les codes OTP.',
          i2: 'Faire fonctionner le moteur de mise en relation intelligente et la négociation des prix entre passagers et conducteurs.',
          i3: "Vérifier l'identité des conducteurs et la validité des documents et pièces justificatives, et assurer la sécurité de la plateforme.",
          i4: "Afficher les cartes, calculer les distances et fournir les communications d'assistance technique.",
          i5: "Prévenir la fraude et détecter les comptes fictifs ou l'utilisation d'applications de falsification de localisation (Fake GPS).",
          i6: 'Se conformer aux obligations légales et réglementaires émanant des autorités algériennes compétentes.'
        },
        s6: {
          title: 'Étapes de vérification des conducteurs et partenaires',
          p1: "Les comptes des conducteurs sont soumis à des étapes d'examen progressif :",
          flow: '[Pending] ➔ [Documents Submitted] ➔ [Under Review] ➔ [Approved] (ou [Rejected] / [Suspended] / [Blocked] en cas de non-respect des conditions).',
          p3: "Le conducteur n'est autorisé à recevoir des demandes de courses qu'après la vérification complète et l'approbation de ses documents."
        },
        s7: {
          title: 'Protection des documents des conducteurs',
          p1: "InRide AI traite tous les documents officiels (cartes d'identité, permis de conduire et assurance) comme des données hautement chiffrées et sensibles. Les documents sont stockés dans des environnements cloud isolés et protégés, et ne sont jamais affichés aux passagers ni à toute partie non autorisée."
        },
        s8: {
          title: 'Intelligence artificielle et vérification automatique',
          p1: "InRide AI peut utiliser des technologies d'intelligence artificielle et de reconnaissance optique de caractères (OCR) pour aider à lire les données des documents, analyser les dates d'expiration et détecter les signes de falsification. Ces systèmes restent auxiliaires et font l'objet d'un examen humain si nécessaire pour garantir des décisions équitables."
        },
        s9: {
          title: 'Partage des données',
          i1: "Entre passager et conducteur : seules les informations nécessaires à la réalisation de la course sont partagées (par exemple : nom du passager et lieu de départ / nom du conducteur, photo, type de véhicule et numéro de plaque).",
          i2: "Prestataires de services : nous nous appuyons sur des partenaires d'hébergement, des infrastructures et des opérateurs de messagerie de vérification (tels que l'API Meta / WhatsApp) dans le cadre de contrats de confidentialité stricts.",
          i3: "Vente : InRide AI ne vend jamais les données personnelles des utilisateurs à une entité commerciale.",
          i4: "Autorités judiciaires : les données ne sont divulguées que sur ordonnance judiciaire ou demande officielle valable des autorités de sécurité algériennes, conformément à la loi."
        },
        s10: {
          title: 'Transfert de données hors d\'Algérie',
          p1: "Lors de l'utilisation de serveurs ou d'infrastructures cloud internationaux, InRide AI s'engage à prendre toutes les mesures techniques et organisationnelles pour garantir que les données sont traitées conformément aux dispositions de la loi algérienne n° 18-07, modifiée par la loi n° 25-11."
        },
        s11: {
          title: 'Sécurité du compte et code OTP',
          p1: "Le processus de connexion est protégé par des codes OTP temporaires. Il est interdit à l'utilisateur de partager ce code avec quiconque, et nous confirmons que le personnel d'InRide AI ne vous demandera jamais de code OTP."
        },
        s12: {
          title: 'Prévention de la fraude et de l\'abus',
          p1: "Nous disposons de systèmes de protection contre les comptes en double, la manipulation des prix, les cyberattaques et l'utilisation de logiciels malveillants, et la plateforme se réserve le droit de suspendre les comptes suspects en attendant leur examen."
        },
        s13: {
          title: 'Durée de conservation des données',
          p1: "Les données personnelles sont conservées pendant toute la durée d'activité du compte et pour la période nécessaire à la réalisation des finalités du service ou pour les obligations légales et financières. Lorsque la finalité des données a pris fin, elles sont supprimées, détruites ou anonymisées (Anonymized)."
        },
        s14: {
          title: 'Droits des personnes concernées',
          p1: "En vertu de la législation algérienne, vous avez le droit de :",
          i1: "Obtenir des informations sur la manière dont vos données sont traitées et y accéder.",
          i2: 'Corriger ou mettre à jour des données inexactes.',
          i3: "Demander la suppression de vos données personnelles dans les conditions légales.",
          i4: "Soumettre une objection ou une plainte à l'Autorité nationale de protection des données à caractère personnel (ANPDP)."
        },
        s15: {
          title: "Suppression du compte et des données (Data Erasure Request)",
          badge: 'IMPORTANT · Exigence Google Play',
          p1: "L'utilisateur peut demander la suppression définitive de son compte à tout moment via :",
          i1: "Dans l'application : accédez à Réglages > Compte > Demander la suppression du compte.",
          i2: "Par e-mail : contactez le responsable de la confidentialité à : inrideai@gmail.com.",
          p2: "La demande de suppression et les données associées sont traitées dans un délai n'excédant pas 7 jours ouvrés à compter de la date de soumission de la demande.",
          button: 'Envoyer la demande par e-mail'
        },
        s16: {
          title: 'Données des enfants',
          p1: "Les services d'InRide AI ne sont pas destinés aux enfants de moins de 18 ans, et si nous découvrons que des données d'un mineur ont été collectées sans le consentement de son représentant légal, elles seront supprimées immédiatement."
        },
        s17: {
          title: 'Technologies et cookies',
          p1: "Nous utilisons des technologies de stockage local (Local Storage & Session Tokens) sur l'appareil pour maintenir la connexion et assurer la stabilité des sessions de travail et la sécurité du compte."
        },
        s18: {
          title: 'Communication et notifications',
          p1: "La plateforme envoie des notifications opérationnelles relatives aux courses, aux mises à jour du compte et aux codes OTP via l'application, les SMS, l'e-mail ou les applications agréées telles que l'API WhatsApp."
        },
        s19: {
          title: 'Délégué à la protection des données (DPO)',
          p1: "Conformément aux réglementations algériennes, vous pouvez contacter le délégué à la protection des données d'InRide AI via :",
          i1: 'E-mail de confidentialité : inrideai@gmail.com',
          i2: 'Site web : https://inride.ai.dz'
        },
        s20: {
          title: 'Contact et exercice des droits',
          p1: "Pour toute demande juridique ou relative à la confidentialité, vous pouvez nous contacter via :",
          i1: 'E-mail officiel : inrideai@gmail.com',
          i2: 'Site web officiel : https://inride.ai.dz'
        },
        s21: {
          title: 'Mise à jour de la politique de confidentialité',
          p1: "Nous pouvons mettre à jour cette politique lors de l'introduction de nouvelles fonctionnalités techniques ou de la publication de règlements modifiés. Les utilisateurs seront informés de tout changement substantiel, et la date « Dernière mise à jour » en haut du document sera mise à jour."
        },
        s22: {
          title: 'Informations sur le service et la plateforme',
          i1: 'Nom du service et marque : InRide AI',
          i2: 'Domaine officiel : https://inride.ai.dz',
          i3: 'E-mail officiel et support : inrideai@gmail.com',
          i4: 'E-mail de confidentialité et de suppression des données : inrideai@gmail.com',
          i5: "Juridiction judiciaire et légale : République algérienne démocratique et populaire"
        },
        closing: "Nous nous engageons à fournir des services de transport intelligents et sûrs tout en garantissant les plus hauts niveaux de protection des données personnelles conformément à la législation algérienne applicable."
      },
      terms: {
        title: "Conditions générales d'utilisation",
        intro: "Veuillez lire attentivement les présentes Conditions Générales d'Utilisation. En utilisant INRIDE AI, vous acceptez de vous conformer à ces Conditions ainsi qu'à notre Politique de confidentialité.",
        legalTitle: 'Droit applicable',
        legal: "Les présentes Conditions sont régies et interprétées conformément au droit de la République algérienne démocratique et populaire, et les données personnelles sont traitées conformément à la loi n° 18-07 relative à la protection des données à caractère personnel.",
        s1: {
          title: 'Nature du service',
          p1: "INRIDE AI est une plateforme numérique qui agit comme intermédiaire technique entre les passagers et des conducteurs indépendants. La plateforme permet au passager de fixer le prix proposé pour sa course, puis de recevoir des offres de conducteurs à proximité et de choisir celle qui lui convient le mieux.",
          p2: "La relation finale de la course est un accord direct entre le passager et le conducteur. INRIDE AI n'est ni une société de transport ni l'employeur des conducteurs, et ne supporte aucune responsabilité quant à l'exécution de la course ou au comportement de l'une ou l'autre partie."
        },
        s2: {
          title: 'Comptes & sécurité',
          p1: "Pour créer un compte INRIDE AI, vous devez être âgé d'au moins 18 ans et disposer de la capacité juridique de contracter selon le droit algérien :",
          i1: "Votre compte est vérifié par un code OTP envoyé sur WhatsApp. Gardez ce code confidentiel — le personnel d'INRIDE AI ne vous le demandera jamais.",
          i2: "Vous êtes responsable de toute activité effectuée depuis votre compte. Sécurisez votre appareil et votre compte WhatsApp.",
          i3: "Vous pouvez demander la suppression de votre compte à tout moment en écrivant à inrideai@gmail.com depuis l'adresse liée à votre compte."
        },
        s3: {
          title: 'Obligations des conducteurs',
          p1: "En utilisant INRIDE AI en tant que conducteur, vous vous engagez à :",
          i1: "Maintenir un permis de conduire valide, des documents de véhicule et une assurance en cours de validité.",
          i2: "Entretenir votre véhicule et garder ses informations exactes et à jour dans l'application.",
          i3: "Effectuer les courses professionnellement, respecter les passagers et ne jamais conduire sous influence.",
          i4: "Respecter le code de la route algérien et la réglementation en vigueur."
        },
        s4: {
          title: 'Politique anti-fraude',
          p1: 'Toute activité frauduleuse sur la plateforme est strictement interdite, notamment :',
          i1: "Utiliser des applications de GPS fictif ou manipuler votre position pour tromper le système.",
          i2: "Créer des comptes fictifs ou multiples pour profiter de bonus ou de promotions.",
          i3: "Manipuler les prix, les commandes ou les avis sur la plateforme.",
          p2: "Toute violation de cette politique peut entraîner la suspension ou la résiliation définitive du compte sans préavis."
        },
        s5: {
          title: 'Propriété intellectuelle',
          p1: "La marque INRIDE AI, les logos, le design, les logiciels et les contenus de la plateforme sont protégés par les lois sur la propriété intellectuelle. Il est interdit de copier, modifier ou réutiliser ces éléments sans autorisation écrite préalable d'INRIDE AI."
        },
        s6: {
          title: 'Responsabilité & limites',
          p1: "La plateforme est fournie « en l'état » et « selon disponibilité ». INRIDE AI ne saurait être tenu responsable de :",
          i1: "Le comportement des conducteurs, des passagers ou de tout tiers.",
          i2: "Les dommages, accidents ou pertes survenus pendant l'exécution de la course, la relation entre le passager et le conducteur étant directe.",
          i3: "Les dommages indirects, accessoires ou consécutifs résultant de l'utilisation de la plateforme."
        },
        s7: {
          title: "Règlement des litiges & droit applicable",
          p1: "Les présentes Conditions sont régies et interprétées conformément au droit de la République algérienne démocratique et populaire. En cas de litige, nous nous efforcerons de le résoudre à l'amiable. À défaut, le litige sera soumis aux tribunaux algériens compétents."
        },
        s8: {
          title: 'Contact & support',
          p1: "Pour toute question concernant ces Conditions, votre compte ou nos services, contactez notre équipe à inrideai@gmail.com. Nous nous efforçons de répondre sous 2 jours ouvrés."
        },
        contactCard: {
          title: 'Besoin d’aide ?',
          text: 'Contactez notre équipe de support à tout moment.',
          button: 'Contacter le support'
        }
      },
      meta: {
        home: {
          title: 'INRIDE AI — Mobilité intelligente & prix équitables | Algérie',
          desc: "INRIDE AI est une plateforme de mobilité intelligente en Algérie : prix négociés équitables, courses en ville, voyages inter-wilayas et livraison de colis express. Sécurité GPS en direct, vérification des identités et support SOS. Essayez la démo PWA ou la version web."
        },
        privacy: {
          title: 'Politique de confidentialité — INRIDE AI',
          desc: "Lisez la politique de confidentialité d'InRide AI : référence légale (loi 18-07), données collectées, finalités du traitement, vérification des conducteurs, partage des données, conservation, droits et demande d'effacement."
        },
        terms: {
          title: "Conditions d'utilisation — INRIDE AI",
          desc: "Lisez les conditions d'utilisation d'INRIDE AI : nature du service, comptes et sécurité, obligations des conducteurs, politique anti-fraude, propriété intellectuelle, responsabilité et droit applicable."
        },
        legal: {
          title: 'Informations légales — INRIDE AI',
          desc: "Tous les documents légaux d'INRIDE AI au même endroit : les Conditions générales d'utilisation et la Politique de confidentialité, régies par la loi algérienne n° 18-07."
        }
      }
    },

    /* ================= العربية ================= */
    ar: {
      lang: { switched: 'اللغة: العربية', fr: 'Français', ar: 'العربية', en: 'English' },
      common: { skip: 'تخطَّ إلى المحتوى', menu: 'افتح القائمة', close: 'أغلق القائمة' },
      nav: { home: 'الرئيسية', services: 'الخدمات', safety: 'الأمان', privacy: 'الخصوصية', terms: 'شروط الخدمة', legal: 'المعلومات القانونية', cta: 'حمّل' },
      page: { updated: 'آخر تحديث', toc: 'في هذه الصفحة', backTop: 'العودة إلى الأعلى', updatedDate: '14 أوت 2026', effectiveDate: '14 أوت 2026' },
      legal: {
        title: 'المعلومات القانونية',
        intro: 'تجمع هذه الصفحة الوثائق القانونية المنظِّمة لاستخدام منصة INRIDE AI: شروط الاستخدام العامة وسياسة الخصوصية. هذه الوثائق ملزمة ويجب قراءتها بعناية قبل أي استخدام للمنصة.',
        termsPartTitle: 'شروط الاستخدام العامة',
        privacyPartTitle: 'سياسة الخصوصية',
        mentionsPartTitle: 'البيانات القانونية',
        mentionsIntro: 'معلومات لتحديد هوية الناشر والمشغّل لمنصة INRIDE AI، وفقاً للقانون الجزائري المعمول به.',
        m1: 'يُدار هذا الموقع وتطبيق InRide AI من قبل العلامة التجارية InRide AI، المتاحة على العنوان الرسمي https://inride.ai.dz، مع البريد الإلكتروني الرسمي للاتصال وحماية البيانات: inrideai@gmail.com.',
        m2: 'تُعالج جميع المعطيات ذات الطابع الشخصي وفقاً للقانون الجزائري رقم 18-07 المؤرخ في 10 جوان 2018 المتعلق بحماية الأشخاص الطبيعيين في مجال معالجة المعطيات ذات الطابع الشخصي، المعدَّل والمتمِّم بالقانون رقم 25-11 المؤرخ في 24 جويلية 2025، وتعليمات السلطة الوطنية لحماية المعطيات الشخصية (ANPDP).',
        m3: 'العلامة التجارية والشعارات وجميع محتويات المنصة محمية بموجب قانون الملكية الفكرية؛ ويُمنع أي استنساخ دون إذن كتابي مسبق من INRIDE AI.',
        m4: 'الاختصاص القضائي: محاكم الجمهورية الجزائرية الديمقراطية الشعبية.'
      },
      footer: {
        tagline: 'تنقّل ذكي للجزائر، مدعوم بالذكاء الاصطناعي.',
        legal: 'روابط قانونية',
        privacy: 'سياسة الخصوصية',
        terms: 'شروط الخدمة',
        contact: 'تواصل معنا',
        rights: '© 2026 INRIDE AI. جميع الحقوق محفوظة.',
        services: 'خدماتنا',
        safety: 'الأمان والحماية',
        support: 'الدعم والامتثال',
        about: 'نبذة عن INRIDE AI',
        aboutText: 'تُعد INRIDE AI منصة رقمية تفاعلية لربط المستخدمين وتسهيل خدمات النقل والتنقل والتوصيل. نحن نعمل كوسطاء تقنيين يوفرون بيئة تفاوض حرة وآمنة بين الركاب والسائقين دون التدخل المباشر في المعاملات الفردية.',
        officialSite: 'الموقع الرسمي: https://inride.ai.dz',
        cityRides: 'رحلات المدينة',
        interRides: 'الرحلات بين الولايات',
        express: 'خدمة التوصيل السريع',
        riderSafety: 'ميثاق السلامة للركاب',
        driverSafety: 'شروط الأمان للسائقين',
        documentCheck: 'التحقق من الوثائق',
        supportEmail: 'البريد الإلكتروني للدعم: inrideai@gmail.com',
        privacyCenter: 'مركز الخصوصية وحذف البيانات',
        deletion: 'طلب حذف الحساب',
        legalDocs: 'المستندات القانونية',
        generalTerms: 'شروط الاستخدام العامة',
        generalTermsDesc: 'القواعد المنظمة لاستخدام منصة INRIDE AI وخدماتها.',
        privacyPolicy: 'سياسة الخصوصية',
        privacyPolicyDesc: 'كيف نجمع ونعالج ونحمي معطياتك الشخصية.',
        legalNote: 'يخضع جمع البيانات وتجهيزها لأحكام القانون الجزائري رقم 18-07 المتعلق بحماية الأشخاص الطبيعيين في مجال معالجة المعطيات ذات الطابع الشخصي.'
      },
      store: {
        playTop: 'حمّله من',
        playName: 'Google Play',
        appleTop: 'حمّله من',
        appleName: 'App Store',
        playAria: 'حمّل INRIDE AI من Google Play',
        appleAria: 'حمّل INRIDE AI من App Store'
      },
      home: {
        badge: 'INRIDE AI — التنقل الذكي بالتسعير العادل',
        heroBadge: 'حرية التفاوض والتنقل بأسعار عادلة',
        title: 'تنقّل بذكاء... واستمتع بكل رحلة.',
        subtitle: 'تجربة نقل ذكية تجمع بين السرعة والأمان.',
        ctaPwa: 'تنزيل تطبيق الـ PWA',
        ctaPwaAria: 'تنزيل تطبيق INRIDE AI التجريبي PWA',
        ctaWeb: 'تجربة الخدمة مباشرة',
        ctaWebAria: 'تجربة INRIDE AI مباشرة',
        statsRidesLabel: 'رحلة مكتملة',
        statsRatingLabel: 'تقييم المستخدمين',
        statsWilayasLabel: 'تغطية شاملة',
        whyKicker: 'لماذا تختارون INRIDE AI؟',
        whyTitle: 'منصة واحدة لكل تنقّلاتك',
        whySubtitle: 'رحلات مدينة سريعة، سفر مريح بين الولايات، وتوصيل طرود سريع — بسعر عادل يتفق عليه الطرفان بشفافية.',
        why1Title: 'رحلات المدينة',
        why1Desc: 'رحلات يومية سريعة داخل المدينة بأسعار يتفق عليها الطرفان بكل شفافية.',
        why2Title: 'رحلات بين الولايات',
        why2Desc: 'سفر مريح بين مختلف الولايات الجزائرية بتكلفة عادلة وبدون عمولات خفية.',
        why3Title: 'توصيل الطرود والطلبات',
        why3Desc: 'خدمة توصيل سريعة للطرود والأشياء الثمينة عبر المنصة.',
        fairKicker: 'رحلات عادلة بالسعر الذي تتفقون عليه',
        fairTitle: 'لا خوارزمية تقرر السعر',
        fairLead: 'في INRIDE AI، لا توجد خوارزميات تتحكم في رفع الأسعار بشكل عشوائي! الراكب يقترح السعر، والسائق يقبل أو يقدم عرضاً مقابلاً عبر محرك التفاوض التفاعلي.',
        fairItem1: 'أنت تقترح السعر',
        fairItem2: 'السائق يقبل أو يقدّم عرضاً مقابلاً',
        fairItem3: 'يتفق الطرفان بشفافية تامة',
        fairNote: 'محرك التفاوض يضمن أن تبقى كل رحلة عادلة وشفافة ومتفقاً عليها — للركاب وللسائقين على حد سواء.',
        negChip: 'محرك التفاوض',
        negRiderLabel: 'اقتراح الراكب',
        negDriverLabel: 'عرض السائق المقابل',
        negAgreedLabel: 'اتفاق الطرفين',
        negProposed: 'مقترح',
        negCounter: 'عرض مقابل',
        negAccepted: 'تم الاتفاق',
        servicesKicker: 'خدمات INRIDE AI',
        servicesTitle: 'تطبيق واحد .. حلول تنقل وتوصيل ذكية',
        srv1Title: 'رحلات المدينة',
        srv1Tag: 'تنقل حضري',
        srv1RiderTitle: 'للركاب',
        srv1Rider: 'اطلب رحلتك، حدد نقطة الالتقاء والوصول، واقترح السعر المناسب لك.',
        srv1DriverTitle: 'للسائقين',
        srv1Driver: 'استقبل طلبات الرحلات القريبة منك، واختر السعر والمشوار الذي يناسب جدولك.',
        srv2Title: 'رحلات بين الولايات (سفر)',
        srv2Tag: 'مسافات طويلة',
        srv2RiderTitle: 'للركاب',
        srv2Rider: 'اختر الراحة والأمان في تنقلاتك طويلة المسافة بسعر عادل ومحدد مسبقاً.',
        srv2DriverTitle: 'للسائقين',
        srv2Driver: 'ضاعف أرباحك عبر الرحلات بين المدن والولايات بكل سهولة.',
        srv3Title: 'InRide Express (التوصيل السريع)',
        srv3Tag: 'توصيل سريع',
        srv3RiderTitle: 'للعملاء والأعمال',
        srv3Rider: 'توصيل سريع وآمن للوثائق والطرود والطلبات الشخصية.',
        srv3DriverTitle: 'لمندوبي التوصيل',
        srv3Driver: 'فرص عمل مرنة وأرباح مباشرة وسريعة.',
        safetyKicker: 'السلامة والأمان',
        safetyTitle: 'الأمان خيار لا يقبل التنازل',
        safetySubtitle: 'نحن نطبق أعلى معايير الحماية لضمان سلامة جميع مستخدمي المنصة في كل رحلة.',
        safe1Title: 'التحقق من الهويات',
        safe1Desc: 'تدقيق آلي وبشري صارم لوثائق السائقين ورخص القيادة وبطاقات التعريف.',
        safe2Title: 'تتبع الرحلة مباشرة',
        safe2Desc: 'إمكانية مشاركة مسار الرحلة مع العائلة والأصدقاء فور انطلاقها.',
        safe3Title: 'زر الطوارئ والدعم الفني',
        safe3Desc: 'دعم مباشر عبر المنصة والبريد الرسمي لمعالجة الشكاوى والنزاعات فوراً.',
        impactKicker: 'التقنية والأثر الاجتماعي في الجزائر',
        impactTitle: 'ذكاء اصطناعي يخدم تنقلاً عادلاً ومتّصلاً',
        impactLead: 'تعتمد منصة INRIDE AI على تقنيات الذكاء الاصطناعي لاقتراح متوسط الأسعار العادلة وتقليل وقت الانتظار، إلى جانب دعم الكفاءات التقنية الشابة والمساهمة في تطوير حلول التنقل المستدام والتحول الرقمي في الجزائر.',
        impact1: 'متوسط أسعار عادلة يقترحها الذكاء الاصطناعي',
        impact2: 'تقليل وقت الانتظار',
        impact3: 'دعم الكفاءات التقنية الشابة',
        impact4: 'حلول تنقل مستدامة',
        impact5: 'التحول الرقمي في الجزائر',
        ctaTitle: 'هل أنت مستعد للتنقل بذكاء وعدالة؟',
        ctaSubtitle: 'انضم إلى آلاف الركاب والسائقين في الجزائر على INRIDE AI.',
        phone: {
          gps: 'GPS مباشر',
          title: 'وصول السائق',
          car: 'Dacia Logan',
          min: 'دقائق',
          fareLabel: 'أجرتك',
          agreedLabel: 'السعر المتفق عليه',
          fare: '450 د.ج',
          share: 'مشاركة الموقع',
          cancel: 'إلغاء الرحلة',
          sos: 'حماية SOS نشطة',
          sosConnected: 'نظام الحماية SOS متصل',
          negotiationChip: 'تفاوض',
          sosChip: 'SOS مفعّل'
        }
      },
      privacy: {
        title: 'سياسة الخصوصية',
        versionLabel: 'الإصدار',
        effectiveLabel: 'تاريخ السريان',
        intro: 'مرحبًا بك في InRide AI. نحن نحترم خصوصيتك ونلتزم بحماية المعطيات والبيانات ذات الطابع الشخصي التي تتم معالجتها من خلال تطبيق InRide AI ومنصته وخدماته عبر النطاق الرسمي inride.ai.dz.',
        intro2: 'توضح سياسة الخصوصية هذه أنواع المعطيات التي قد نجمعها، والأغراض التي نعالجها من أجلها، وكيفية استخدامها وحمايتها والاحتفاظ بها ومشاركتها، بالإضافة إلى حقوق الأشخاص المعنيين بالمعالجة وطرق ممارسة هذه الحقوق.',
        intro3: 'باستخدامك لخدمات InRide AI أو إنشاء حساب على المنصة، فإنك تقر باطلاعك على هذه السياسة وفهمك لأحكامها، وذلك دون المساس بأي حقوق أو ضمانات يمنحها القانون.',
        legalTitle: 'المرجعية القانونية',
        legal: 'تُعالج جميع البيانات والمعطيات الشخصية وتُحفظ وفقاً لأحكام القانون رقم 18-07 المؤرخ في 10 يونيو 2018 المتعلق بحماية الأشخاص الطبيعيين في مجال معالجة المعطيات ذات الطابع الشخصي، المعدل والمتمم بالقانون رقم 25-11 المؤرخ في 24 يوليو 2025، وتعليمات السلطة الوطنية لحماية المعطيات ذات الطابع الشخصي (ANPDP).',
        s1: {
          title: 'المرجعية القانونية',
          p1: 'تُعالج وتُحفظ جميع المعطيات والبيانات ذات الطابع الشخصي التي يتم جمعها أو معالجتها من خلال InRide AI وفقًا للتشريعات والتنظيمات الجزائرية المعمول بها والمتعلقة بحماية الأشخاص الطبيعيين في مجال معالجة المعطيات ذات الطابع الشخصي.',
          p2: 'وتخضع عمليات معالجة المعطيات، على وجه الخصوص، لأحكام:',
          law1: 'القانون رقم 18-07 المؤرخ في 25 رمضان 1439 الموافق 10 يونيو 2018، المتعلق بحماية الأشخاص الطبيعيين في مجال معالجة المعطيات ذات الطابع الشخصي، المعدل والمتمم بالقانون رقم 25-11 المؤرخ في 28 محرم 1447 الموافق 24 يوليو 2025.',
          p3: 'وتلتزم InRide AI، في حدود ما ينطبق عليها، بمبادئ حماية المعطيات الشخصية والالتزامات القانونية والتنظيمية ذات الصلة، وباتخاذ التدابير التقنية والتنظيمية المناسبة لحماية المعطيات من الوصول غير المصرح به أو الاستعمال غير المشروع أو التغيير أو الكشف أو الفقدان أو الإتلاف.',
          p4: 'كما تراعي المنصة الأحكام والتعليمات الصادرة عن السلطة الوطنية لحماية المعطيات ذات الطابع الشخصي (ANPDP) وأي نصوص تطبيقية أو تنظيمية واجبة التطبيق في الجزائر.'
        },
        s2: {
          title: 'من نحن؟',
          p1: 'InRide AI هو تطبيق ومنصة رقمية ذكية لخدمات النقل والتنقل والتفاوض الحر بين الطرفين، يهدف إلى ربط الركاب بالسائقين وتسهيل طلب الرحلات وإدارتها ومتابعتها.',
          p2: 'لأغراض هذه السياسة:',
          d1: '"InRide AI" أو "نحن" أو "المنصة" تعني المشروع والمؤسسة المسؤولة عن تشغيل خدمة InRide AI في الجزائر.',
          d2: '"المستخدم" أو "أنت" يعني أي شخص يستخدم التطبيق أو المنصة.',
          d3: '"الراكب" يعني المستخدم الذي يستخدم المنصة لطلب رحلة أو اقتراح سعر تنقل.',
          d4: '"السائق" أو "الشريك" يعني المستخدم المسجل لتقديم خدمات النقل من خلال المنصة.',
          d5: '"المعطيات الشخصية" تعني البيانات والمعلومات المتعلقة بشخص طبيعي معرف أو قابل للتعرف عليه، وفقًا للتشريع الجزائري المعمول به.',
          d6: '"المعالجة" تشمل عمليات جمع المعطيات وتسجيلها وتنظيمها وحفظها واستخدامها وتعديلها واسترجاعها ومشاركتها أو حذفها، حسب ما يسمح به القانون.'
        },
        s3: {
          title: 'نطاق تطبيق هذه السياسة',
          p1: 'تنطبق هذه السياسة على:',
          i1: 'تطبيق الهواتف المحمولة وتطبيق الويب (PWA) لـ InRide AI.',
          i2: 'موقع InRide AI الإلكتروني الرسمي: https://inride.ai.dz.',
          i3: 'حسابات الركاب والسائقين والشركاء.',
          i4: 'خدمات الرحلات والتفاوض التفاعلي، وخدمات الدعم الفني والتحقق من الهويات.',
          i5: 'أي خدمات رقمية مرتبطة بالمنصة.',
          p2: 'ولا تنطبق هذه السياسة على خدمات أو مواقع خارجية لا تملكها أو تديرها InRide AI، والتي قد تكون لها سياسات خصوصية مستقلة.'
        },
        s4: {
          title: 'البيانات التي نجمعها',
          p1: 'نجمع فقط المعطيات التي تكون ضرورية أو مناسبة للأغراض المحددة في هذه السياسة، وبما يتوافق مع المتطلبات القانونية المعمول بها.',
          sub1: 'بيانات الركاب',
          sub1p: 'قد تشمل البيانات التي يتم جمعها من الراكب:',
          p1i1: 'الاسم الشخصي أو الظاهر.',
          p1i2: 'رقم الهاتف (المستخدم للتحقق عبر رمز OTP).',
          p1i3: 'البريد الإلكتروني.',
          p1i4: 'المدينة والمنطقة.',
          p1i5: 'بيانات الرحلات: موقع الانطلاق، موقع الوصول، والموقع الجغرافي التفاعلي أثناء الرحلة.',
          p1i6: 'السعر المقترح للرحلة وسجل المفاوضات.',
          p1i7: 'التقييمات والمراجعات وسجلات التواصل مع خدمة العملاء.',
          sub2: 'بيانات السائقين والشركاء',
          sub2p: 'نظرًا لطبيعة خدمات النقل ومتطلبات السلامة والتحقق، يحتاج السائق إلى تقديم بيانات إضافية تشمل:',
          p2i1: 'البيانات الشخصية: الاسم الكامل، رقم الهاتف، المدينة، الصورة الشخصية الرسمية، وتاريخ الميلاد.',
          p2i2: 'وثائق الهوية: بطاقة الهوية الوطنية أو بطاقة التعريف البيومترية (صورة الوثيقة، الرقم، وتاريخ الانتهاء).',
          p2i3: 'رخصة القيادة: صورة الرخصة، رقمها، وصلاحيتها.',
          p2i4: 'بيانات المركبة والتأمين: نوع المركبة، الموديل، سنة الصنع، اللون، رقم لوحة الترقيم، صور المركبة، وصورة وثيقة التأمين السارية.',
          sub3: 'البيانات التي يتم إنشاؤها أثناء استخدام الخدمة',
          sub3p: 'قد يتم تسجيل بيانات مرتبطة باستخدام InRide AI تشمل:',
          p3i1: 'رقم الرحلة، تاريخ ووقت الرحلة، المسار والمسافة وحالة الرحلة، التكلفة النهائية والاتفاق، والتقييمات المتبادلة والشكاوى المرفوعة للدعم.',
          sub4: 'الموقع الجغرافي (GPS Location Data)',
          sub4p: 'يُعد الموقع الجغرافي عنصرًا أساسيًا لتشغيل الخدمة:',
          p4i1: 'للراكب: نستخدم الموقع لتحديد نقطة الالتقاط، إظهار السائقين القريبين، ومتابعة المسار أثناء التنقل.',
          p4i2: 'للسائق: نجمع الموقع الجغرافي الدقيق أثناء وضع "متصل/نشط" وأثناء تنفيذ الرحلة لتوجيه الطلبات القريبة وضمان أمان الرحلة.'
        },
        s5: {
          title: 'لماذا نجمع هذه البيانات؟',
          p1: 'تُعالج البيانات للأغراض التالية:',
          i1: 'إنشاء وإدارة الحسابات وتأكيد أرقام الهواتف عبر رموز OTP.',
          i2: 'إدارة محرك الربط الذكي والتفاوض على الأسعار بين الركاب والسائقين.',
          i3: 'التحقق من هوية السائقين وصلاحية الوثائق والأوراق الثبوتية وضمان أمان المنصة.',
          i4: 'عرض الخرائط وحساب المسافات وتوفير اتصالات الدعم الفني.',
          i5: 'منع الاحتيال واكتشاف الحسابات الوهمية أو استخدام تطبيقات تزييف الموقع (Fake GPS).',
          i6: 'الامتثال للالتزامات القانونية والتنظيمية الصادرة عن السلطات الجزائرية المختصة.'
        },
        s6: {
          title: 'مراحل التحقق من السائقين والشركاء',
          p1: 'تخضع حسابات السائقين لمراحل مراجعة تدريجية:',
          flow: '[Pending] ➔ [Documents Submitted] ➔ [Under Review] ➔ [Approved] (أو [Rejected] / [Suspended] / [Blocked] في حال عدم استيفاء الشروط).',
          p3: 'ولا يُسمح للسائق باستقبال طلبات الرحلات إلا بعد التدقيق الكامل والموافقة على وثائقه.'
        },
        s7: {
          title: 'حماية وثائق السائقين',
          p1: 'تُعامل InRide AI جميع الوثائق الرسمية (بطاقات الهوية، رخص القيادة، والتأمين) كبيانات عالية التشفير والحساسية. تُخزن الوثائق في بيئات سحابية معزولة ومحمية، ولا يتم عرض هذه الوثائق إطلاقاً للركاب أو أي طرف غير مصرح له.'
        },
        s8: {
          title: 'الذكاء الاصطناعي والتحقق الآلي',
          p1: 'قد تستخدم InRide AI تقنيات الذكاء الاصطناعي والتعرف الضوئي على الحروف (OCR) للمساعدة في قراءة البيانات من الوثائق وتحليل انتهاء الصلاحية واكتشاف مؤشرات التلاعب. تظل هذه الأنظمة مساعدة، وتخضع للمراجعة البشرية عند الحاجة لضمان القرارات العادلة.'
        },
        s9: {
          title: 'مشاركة البيانات',
          i1: 'بين الراكب والسائق: تُشارك المعلومات الضرورية لإتمام الرحلة فقط (مثل: اسم الراكب وموقع الانطلاق / اسم السائق، صوته، نوع المركبة، ورقم اللوحة).',
          i2: 'مزودو الخدمات: نعتمد على شركاء استضافة وبنى تحتية ومشغلي إرسال رسائل التحقق (مثل Meta / WhatsApp API) تحت عقود سرية حازمة.',
          i3: 'البيع: لا تقوم InRide AI ببيع البيانات الشخصية للمستخدمين لأي جهة تجارية إطلاقاً.',
          i4: 'الجهات القضائية: لا يتم الإفصاح عن البيانات إلا بناءً على أمر قضائي أو طلب رسمي صادق من السلطات الأمنية الجزائرية وفق القانون.'
        },
        s10: {
          title: 'نقل البيانات خارج الجزائر',
          p1: 'عند استخدام خوادم أو بنى تحتية سحابية دولية، تلتزم InRide AI باتخاذ كافة التدابير التقنية والتنظيمية لضمان معالجة المعطيات وفق أحكام القانون الجزائري رقم 18-07 والمعدل بالقانون 25-11.'
        },
        s11: {
          title: 'أمن الحساب ورمز OTP',
          p1: 'تُدعم عملية تسجيل الدخول بفرز رموز OTP المؤقتة. يُحظر على المستخدم مشاركة هذا الرمز مع أي شخص، ونؤكد أن موظفي InRide AI لن يطلبوا منك رمز OTP مطلقاً.'
        },
        s12: {
          title: 'مكافحة الاحتيال وإساءة الاستخدام',
          p1: 'نمتلك أنظمة للحماية من الحسابات المزدوجة، التلاعب بالأسعار، الهجمات السيبرانية، واستخدام البرامج الضارة، ويحق للمنصة تعليق الحسابات المشبوهة لحين مراجعتها.'
        },
        s13: {
          title: 'مدة الاحتفاظ بالبيانات',
          p1: 'تُحفظ البيانات الشخصية طيلة فترة نشاط الحساب وللمدة الضرورية لتحقيق أغراض الخدمة أو للالتزامات القانونية والمالية. عند انتهاء الغاية من البيانات، يتم حذفها أو إتلافها أو أرشفة بياناتها بشكل مجهول (Anonymized).'
        },
        s14: {
          title: 'حقوق الأشخاص المعنيين بالمعالجة',
          p1: 'بموجب التشريع الجزائري، يحق لك:',
          i1: 'الحصول على معلومات حول كيفية معالجة معطياتك والوصول إليها.',
          i2: 'تصحيح أو تحديث البيانات غير الدقيقة.',
          i3: 'طلب حذف معطياتك الشخصية وفق الشروط القانونية.',
          i4: 'تقديم اعتراض أو شكوى للسلطة الوطنية لحماية المعطيات ذات الطابع الشخصي (ANPDP).'
        },
        s15: {
          title: 'حذف الحساب والبيانات (Data Erasure Request)',
          badge: 'مهم · متطلب Google Play',
          p1: 'يمكن للمستخدم طلب حذف حسابه نهائياً في أي وقت عبر:',
          i1: 'داخل التطبيق: الانتقال إلى الإعدادات > الحساب > طلب حذف الحساب.',
          i2: 'عبر البريد الإلكتروني: مراسلة مسؤول الخصوصية عبر: inrideai@gmail.com.',
          p2: 'تتم معالجة طلب الحذف وحذف البيانات المرتبطة خلال مدة لا تتجاوز 7 أيام عمل من تاريخ تقديم الطلب.',
          button: 'أرسل طلب الحذف بالبريد'
        },
        s16: {
          title: 'بيانات الأطفال',
          p1: 'خدمات InRide AI غير موجهة للأطفال دون سن 18 عاماً، وفي حال اكتشاف جمع بيانات قاصر دون موافقة وليه الشرعي، سيتم حذفها فوراً.'
        },
        s17: {
          title: 'التقنيات ومشبهات ملفات الكوكيز (Cookies)',
          p1: 'نستخدم تقنيات التخزين المحلي (Local Storage & Session Tokens) على الجهاز للحفاظ على تسجيل الدخول وضمان استقرار جلسات العمل وأمان الحساب.'
        },
        s18: {
          title: 'التواصل والإشعارات',
          p1: 'تُرسل المنصة إشعارات تشغيلية تتعلق بالرحلات، تحديثات الحساب، ورموز OTP عبر التطبيق، أو الرسائل النصية، أو البريد الإلكتروني، أو التطبيقات المعتمدة مثل WhatsApp API.'
        },
        s19: {
          title: 'مسؤول حماية المعطيات الشخصية (DPO)',
          p1: 'امتثالاً للتنظيمات الجزائرية، يُمكن التواصل مع مسؤول حماية المعطيات الخاص بـ InRide AI عبر:',
          i1: 'البريد الإلكتروني للخصوصية: inrideai@gmail.com',
          i2: 'الموقع الإلكتروني: https://inride.ai.dz'
        },
        s20: {
          title: 'التواصل وممارسة الحقوق',
          p1: 'لأي استفسارات قانونية أو متعلقة بالخصوصية، يمكنك التواصل معنا عبر:',
          i1: 'البريد الإلكتروني الرسمي: inrideai@gmail.com',
          i2: 'الموقع الرسمي: https://inride.ai.dz'
        },
        s21: {
          title: 'تحديث سياسة الخصوصية',
          p1: 'قد نقوم بتحديث هذه السياسة عند إدخال ميزات تقنية جديدة أو صدور قوانين تنظيمية معدلة. سيتم إخطار المستخدمين بأي تغيير جوهري وتعديل تاريخ "آخر تحديث" في أعلى الوثيقة.'
        },
        s22: {
          title: 'معلومات الخدمة والمنصة',
          i1: 'اسم الخدمة والعلامة: InRide AI',
          i2: 'النطاق الرسمي: https://inride.ai.dz',
          i3: 'البريد الإلكتروني الرسمي والدعم: inrideai@gmail.com',
          i4: 'بريد الخصوصية وحذف البيانات: inrideai@gmail.com',
          i5: 'الاختصاص القضائي والقانوني: الجمهورية الجزائرية الديمقراطية الشعبية'
        },
        closing: 'نلتزم بتقديم خدمات نقل ذكية وآمنة مع ضمان أعلى مستويات حماية المعطيات الشخصية وفق التشريعات الجزائرية المعمول بها.'
      },
      terms: {
        title: 'شروط الخدمة',
        intro: 'يرجى قراءة شروط الخدمة العامة التالية بعناية. باستخدامك INRIDE AI فإنك توافق على الالتزام بهذه الشروط وبسياسة الخصوصية الخاصة بنا.',
        legalTitle: 'القانون الحاكم',
        legal: 'تُحكم هذه الشروط وتُفسَّر وفقاً لقوانين الجمهورية الجزائرية الديمقراطية الشعبية، وتُعالج البيانات الشخصية وفقاً لأحكام القانون رقم 18-07 المتعلق بحماية المعطيات ذات الطابع الشخصي.',
        s1: {
          title: 'طبيعة الخدمة',
          p1: 'INRIDE AI منصة رقمية تعمل كوسيط تقني يربط بين الركاب والسائقين المستقلين. تتيح المنصة للراكب تحديد السعر المقترح لرحلته، ثم يتلقى عروضاً من السائقين القريبين ويختار العرض الأنسب له.',
          p2: 'العلاقة النهائية للرحلة هي اتفاق مباشر بين الراكب والسائق. INRIDE AI ليست شركة نقل ولا تعمل كصاحب عمل للسائقين، ولا تتحمل مسؤولية تنفيذ الرحلة أو سلوك أي طرف آخر.'
        },
        s2: {
          title: 'الحسابات والأمان',
          p1: 'لإنشاء حساب على INRIDE AI يجب أن يكون عمرك 18 عاماً على الأقل وأن تمتلك الأهلية القانونية للتعاقد وفق القانون الجزائري:',
          i1: 'يتم التحقق من حسابك عبر رمز OTP يُرسل إلى واتساب. حافظ على سرية الرمز — لن يطلبه منك موظفو INRIDE AI أبداً.',
          i2: 'أنت مسؤول عن كل نشاط يتم من حسابك. قم بتأمين جهازك وحساب واتساب الخاص بك.',
          i3: 'يمكنك طلب حذف حسابك في أي وقت بإرسال بريد إلى inrideai@gmail.com من البريد المرتبط بحسابك.'
        },
        s3: {
          title: 'التزامات السائقين',
          p1: 'باستخدام INRIDE AI كسائق، فإنك تتعهد بما يلي:',
          i1: 'المحافظة على رخصة قيادة سارية ووثائق مركبة سارية وتأمين سارٍ.',
          i2: 'العناية بمركبتك وإبقاء بياناتها دقيقة ومحدثة في التطبيق.',
          i3: 'إتمام الرحلات بشكل احترافي واحترام الركاب، وعدم القيادة أبداً تحت تأثير أي مادة.',
          i4: 'الامتثال لقوانين المرور الجزائرية واللوائح المعمول بها.'
        },
        s4: {
          title: 'سياسة مكافحة الاحتيال',
          p1: 'نمنع بشكل صارم أي نشاط احتيالي على المنصة، بما في ذلك على سبيل المثال لا الحصر:',
          i1: 'استخدام تطبيقات GPS مزيفة أو التلاعب بالموقع لتضليل النظام.',
          i2: 'إنشاء حسابات وهمية أو متعددة للاستفادة من المكافآت أو العروض الترويجية.',
          i3: 'التلاعب بالأسعار أو الطلبات أو تقييمات المنصة.',
          p2: 'أي مخالفة لهذه السياسة قد تؤدي إلى تعليق الحساب أو إنهائه بشكل دائم دون إشعار مسبق.'
        },
        s5: {
          title: 'الملكية الفكرية',
          p1: 'العلامة التجارية INRIDE AI والشعارات والتصميم والبرمجيات ومحتوى المنصة محمية بموجب قوانين الملكية الفكرية. لا يجوز نسخ أو تعديل أو إعادة استخدام أي من هذه العناصر دون إذن كتابي مسبق من INRIDE AI.'
        },
        s6: {
          title: 'المسؤولية وحدودها',
          p1: 'تُقدم المنصة «كما هي» و«كما تتوفر». لا تتحمل INRIDE AI مسؤولية:',
          i1: 'سلوك السائقين أو الركاب أو أي طرف ثالث.',
          i2: 'الأضرار أو الحوادث أو الخسائر التي تحدث أثناء تنفيذ الرحلة، لأن العلاقة بين الراكب والسائق مباشرة.',
          i3: 'الأضرار غير المباشرة أو العرضية أو التبعية الناتجة عن استخدام المنصة.'
        },
        s7: {
          title: 'تسوية المنازعات والقانون الحاكم',
          p1: 'تخضع هذه الشروط وتُفسَّر وفقاً لقوانين الجمهورية الجزائرية الديمقراطية الشعبية. في حال نشوء أي خلاف، نبذل جهوداً معقولة لحله وديأ أولاً. إذا تعذر الحل الودي، تُعرض المنازعة على المحاكم الجزائرية المختصة.'
        },
        s8: {
          title: 'التواصل والدعم',
          p1: 'لأي سؤال حول هذه الشروط أو حسابك أو خدماتنا، تواصل مع فريقنا عبر inrideai@gmail.com. نسعى للرد خلال يومي عمل.'
        },
        contactCard: {
          title: 'تحتاج مساعدة؟',
          text: 'تواصل مع فريق الدعم لدينا في أي وقت.',
          button: 'راسل الدعم'
        }
      },
      meta: {
        home: {
          title: 'INRIDE AI — تنقّل ذكي وتسعير عادل | الجزائر',
          desc: 'INRIDE AI منصة تنقّل ذكية في الجزائر: تسعير عادل بالتفاوض، رحلات مدينة، سفر بين الولايات، وتوصيل طرود سريع. أمان GPS مباشر، تحقق من الهويات، ودعم SOS. جرّب تطبيق PWA التجريبي أو الخدمة عبر الويب.'
        },
        privacy: {
          title: 'سياسة الخصوصية — INRIDE AI',
          desc: 'اقرأ سياسة خصوصية InRide AI: المرجعية القانونية (القانون 18-07)، البيانات المجمعة، غايات المعالجة، التحقق من السائقين، مشاركة البيانات، الاحتفاظ، الحقوق، وطلب حذف الحساب.'
        },
        terms: {
          title: 'شروط الخدمة — INRIDE AI',
          desc: 'اقرأ شروط خدمة INRIDE AI: طبيعة الخدمة والحسابات والأمان والتزامات السائقين وسياسة مكافحة الاحتيال والملكية الفكرية والمسؤولية والقانون الحاكم.'
        },
        legal: {
          title: 'المعلومات القانونية — INRIDE AI',
          desc: 'جميع الوثائق القانونية لـ INRIDE AI في مكان واحد: شروط الاستخدام العامة وسياسة الخصوصية، الخاضعة للقانون الجزائري رقم 18-07.'
        }
      }
    }
  };

  var currentLang = 'ar';

  /* ---------- helpers ---------- */
  function pickLang() {
    var q = new URLSearchParams(window.location.search).get('lang');
    if (q && DICTS[q]) return q;
    var saved = null;
    try { saved = localStorage.getItem(LS_KEY); } catch (e) { saved = null; }
    if (saved && DICTS[saved]) return saved;
    return 'ar';
  }

  function lookup(lang, key) {
    var o = DICTS[lang] || DICTS.fr;
    var parts = String(key).split('.');
    for (var i = 0; i < parts.length; i++) {
      o = o[parts[i]];
      if (o === undefined || o === null) return key;
    }
    return o;
  }

  function translate(root) {
    root = root || document;
    var els, i;
    els = root.querySelectorAll('[data-i18n-html]');
    for (i = 0; i < els.length; i++) {
      els[i].innerHTML = lookup(currentLang, els[i].getAttribute('data-i18n-html'));
    }
    els = root.querySelectorAll('[data-i18n]');
    for (i = 0; i < els.length; i++) {
      els[i].textContent = lookup(currentLang, els[i].getAttribute('data-i18n'));
    }
    els = root.querySelectorAll('[data-i18n-aria]');
    for (i = 0; i < els.length; i++) {
      els[i].setAttribute('aria-label', lookup(currentLang, els[i].getAttribute('data-i18n-aria')));
    }
    els = root.querySelectorAll('[data-i18n-placeholder]');
    for (i = 0; i < els.length; i++) {
      els[i].setAttribute('placeholder', lookup(currentLang, els[i].getAttribute('data-i18n-placeholder')));
    }
  }

  var IMG_SRCS = {
    hero: { ar: 'hero-ar.png', fr: 'hero-ar.png', en: 'hero-ar.png' }
  };

  function applyImgs() {
    var imgs = document.querySelectorAll('[data-i18n-img]');
    for (var i = 0; i < imgs.length; i++) {
      (function (img) {
        var map = IMG_SRCS[img.getAttribute('data-i18n-img')];
        if (!map) return;
        var src = map[currentLang] || map.ar;
        img.onerror = function () {
          img.onerror = null;
          img.src = map.ar;
        };
        img.src = src;
      })(imgs[i]);
    }
  }

  function applyMeta() {
    var page = document.body.getAttribute('data-page') || 'home';
    var m = lookup(currentLang, 'meta.' + page);
    if (!m || m === ('meta.' + page)) return;
    document.title = m.title;
    var d = document.querySelector('meta[name="description"]');
    if (d) d.setAttribute('content', m.desc);
    var og = document.querySelector('meta[property="og:description"]');
    if (og) og.setAttribute('content', m.desc);
    var ogt = document.querySelector('meta[property="og:title"]');
    if (ogt) ogt.setAttribute('content', m.title);
  }

  function setLang(lang, persist) {
    if (!DICTS[lang]) return;
    currentLang = lang;
    if (persist !== false) {
      try { localStorage.setItem(LS_KEY, lang); } catch (e) { /* ignore */ }
    }
    var html = document.documentElement;
    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    var btns = document.querySelectorAll('[data-lang-btn]');
    for (var i = 0; i < btns.length; i++) {
      var on = btns[i].getAttribute('data-lang-btn') === lang;
      btns[i].classList.toggle('active', on);
      btns[i].setAttribute('aria-pressed', String(on));
    }

    try {
      translate();
      applyMeta();
      applyImgs();

      var live = document.getElementById('lang-live');
      if (live) live.textContent = lookup(lang, 'lang.switched');

      if (window.INRIDE_UI && typeof window.INRIDE_UI.onLangChange === 'function') {
        window.INRIDE_UI.onLangChange(lang);
      }
    } catch (e) {
      if (window.console && typeof window.console.error === 'function') {
        window.console.error('i18n translate error:', e);
      }
    }
  }

  function init() {
    document.addEventListener('click', function (e) {
      var btn = e.target && e.target.closest ? e.target.closest('[data-lang-btn]') : null;
      if (btn) {
        setLang(btn.getAttribute('data-lang-btn'));
        try {
          var url = new URL(window.location.href);
          if (url.searchParams.has('lang')) {
            url.searchParams.delete('lang');
            window.history.replaceState(null, '', url.pathname + url.search + url.hash);
          }
        } catch (err) { /* ignore */ }
      }
    });
    setLang(pickLang(), false);
  }

  window.INRIDE_I18N = {
    lookup: lookup,
    setLang: setLang,
    getLang: function () { return currentLang; }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
