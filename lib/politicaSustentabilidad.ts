import type { Locale } from "@/lib/i18n";

/**
 * Sous-page « Política de Sustentabilidad »
 * (/iniciativas/politica-de-sustentabilidad) : texte intégral de la
 * politique de Destino Patagonia S.P.A. (PDF fourni par Emilia, sans le
 * RUT de la représentante légale, volontairement non publié) + code de
 * conduite du touriste responsable de SERNATUR (PDF hébergé dans
 * /public/docs).
 *
 * Le texte espagnol est l'original. Les versions EN/FR sont des
 * traductions de courtoisie (à faire relire par Emilia).
 */

export const POLITICA_SLUG = "politica-de-sustentabilidad";
export const CODIGO_PDF = "/docs/codigo-turista-responsable-sernatur.pdf";

type PoliticaContent = {
  metaTitle: string;
  metaDescription: string;
  back: string;
  titulo: string;
  empresa: string;
  nota?: string;
  compromisoTitulo: string;
  compromiso: string;
  principiosIntro: string;
  principios: string[];
  compromisosIntro: string;
  compromisos: string[];
  comunicacionTitulo: string;
  comunicacion: string;
  mejoraTitulo: string;
  mejora: string;
  alcanceTitulo: string;
  alcance: string[];
  firmaNombre: string;
  firmaCargo: string;
  codigoTitulo: string;
  codigoIntro: string;
  codigoItems: string[];
  codigoDescargar: string;
  /** Libellés des deux liens affichés dans le bloc Iniciativas. */
  linkPolitica: string;
  linkCodigo: string;
};

export const POLITICA_CONTENT: Record<Locale, PoliticaContent> = {
  es: {
    metaTitle: "Política de Sustentabilidad — Destino Patagonia",
    metaDescription:
      "Principios y compromisos de sustentabilidad de Destino Patagonia, y código de conducta del turista responsable de SERNATUR.",
    back: "Iniciativas",
    titulo: "Política de Sustentabilidad",
    empresa: "Destino Patagonia S.P.A.",
    compromisoTitulo: "Nuestro compromiso",
    compromiso:
      "Como pequeña empresa local de la región de Aysén, creemos que es fundamental pensar en la sustentabilidad de nuestras acciones en el territorio. Por lo mismo, llevamos más de 16 años mejorando nuestros procesos, promoviendo la conservación de la biodiversidad, la protección del patrimonio y el desarrollo económico local. Entendemos que el turismo debe generar experiencias memorables mientras contribuye al bienestar de las comunidades locales y al desarrollo económico responsable. Por ello, asumimos el compromiso de incorporar criterios de sustentabilidad en todas nuestras actividades.",
    principiosIntro:
      "Nuestra política de sustentabilidad se basa en los siguientes principios:",
    principios: [
      "Proteger y conservar la biodiversidad de la Patagonia, en especial la región de Aysén.",
      "Aportar al desarrollo del conocimiento científico en nuestra región.",
      "Difundir y llevar a cabo acciones de protección y restauración del patrimonio cultural tangible e intangible de las comunidades locales.",
      "Generar beneficios económicos de manera ética y responsable para nuestros colaboradores, proveedores y comunidades.",
      "Cumplir con la legislación vigente y con otros requisitos aplicables en materia ambiental, social y laboral.",
      "Fomentar la mejora continua de nuestro desempeño en materia de sustentabilidad.",
      "Rechazar la explotación de los seres humanos en cualquiera de sus formas, especialmente la sexual y en particular cuando afecta a niños.",
    ],
    compromisosIntro: "Para esto, nos comprometemos a:",
    compromisos: [
      "Minimizar la generación de residuos mediante la reducción, reutilización y reciclaje.",
      "Promover prácticas para disminuir las emisiones de gases de efecto invernadero cuando sea posible.",
      "Favorecer el uso responsable de materiales e insumos con menor impacto ambiental.",
      "Dar a conocer el valor de nuestra biodiversidad y respeto por nuestras Áreas Silvestres Protegidas.",
      "Diseñar y entregar experiencias a nuestros visitantes que fomenten el aprendizaje y la cercanía con la naturaleza y la cultura locales.",
      "Promover el comportamiento responsable de nuestros pasajeros mediante información y buenas prácticas como, por ejemplo, el método No Deje Rastro.",
      "Priorizar la contratación de proveedores y servicios locales cuando sea viable.",
      "Respetar y valorar la identidad cultural de las comunidades anfitrionas.",
      "Contribuir al desarrollo económico local mediante alianzas y relaciones comerciales responsables.",
      "Promover un ambiente laboral seguro, inclusivo y libre de discriminación.",
      "Favorecer el desarrollo profesional y la capacitación continua de nuestros colaboradores.",
      "Incentivar la participación del equipo en iniciativas de sustentabilidad.",
      "Denunciar malas prácticas ambientales.",
    ],
    comunicacionTitulo: "Comunicación y sensibilización",
    comunicacion:
      "Difundiremos esta política entre nuestros colaboradores, clientes, proveedores y demás partes interesadas, promoviendo una cultura de turismo responsable y generando instancias de capacitación y sensibilización.",
    mejoraTitulo: "Mejora continua",
    mejora:
      "Revisaremos periódicamente esta política y nuestros objetivos de sustentabilidad para evaluar su eficacia, establecer nuevas metas e impulsar acciones que fortalezcan nuestro desempeño ambiental, social y económico.",
    alcanceTitulo: "Alcance",
    alcance: [
      "Esta política aplica a todas las operaciones, colaboradores, directivos y prestadores de servicios que actúan en representación de Destino Patagonia, quienes deberán conocerla y contribuir activamente a su cumplimiento.",
      "La Dirección de Destino Patagonia asume la responsabilidad de liderar la implementación de esta política, asignando los recursos necesarios para su cumplimiento y promoviendo una cultura organizacional basada en la sustentabilidad, la mejora continua y el respeto por el patrimonio natural y cultural de la Patagonia.",
    ],
    firmaNombre: "Emilia Astorga Roine",
    firmaCargo: "Representante Legal, Destino Patagonia S.P.A.",
    codigoTitulo: "Código de conducta del turista responsable",
    codigoIntro:
      "Recomendaciones del Servicio Nacional de Turismo (SERNATUR) para viajar de forma responsable. Cinco ejes:",
    codigoItems: [
      "Valore las tradiciones y costumbres locales",
      "Apoye a la economía local",
      "Respete el medio ambiente",
      "Sea cuidadoso al visitar áreas silvestres, patrimoniales, arqueológicas u otras que le parezcan frágiles y/o valiosas",
      "Sea un viajero informado y respetuoso",
    ],
    codigoDescargar: "Descargar el código (PDF)",
    linkPolitica: "Ver nuestra política de sustentabilidad",
    linkCodigo: "Código de conducta del turista responsable (PDF)",
  },
  en: {
    metaTitle: "Sustainability Policy — Destino Patagonia",
    metaDescription:
      "Destino Patagonia's sustainability principles and commitments, and the SERNATUR responsible tourist code of conduct.",
    back: "Initiatives",
    titulo: "Sustainability Policy",
    empresa: "Destino Patagonia S.P.A.",
    nota: "Courtesy translation. The Spanish version is the original.",
    compromisoTitulo: "Our commitment",
    compromiso:
      "As a small local company in the Aysén region, we believe it is essential to think about the sustainability of our actions in the territory. That is why, for more than 16 years, we have been improving our processes and promoting biodiversity conservation, heritage protection and local economic development. We understand that tourism must create memorable experiences while contributing to the well-being of local communities and to responsible economic development. We therefore commit to incorporating sustainability criteria into all our activities.",
    principiosIntro: "Our sustainability policy is based on the following principles:",
    principios: [
      "Protect and conserve the biodiversity of Patagonia, especially the Aysén region.",
      "Contribute to the development of scientific knowledge in our region.",
      "Promote and carry out actions to protect and restore the tangible and intangible cultural heritage of local communities.",
      "Generate economic benefits in an ethical and responsible way for our staff, suppliers and communities.",
      "Comply with current legislation and other applicable environmental, social and labor requirements.",
      "Foster continuous improvement of our sustainability performance.",
      "Reject the exploitation of human beings in any form, especially sexual exploitation and in particular when it affects children.",
    ],
    compromisosIntro: "To this end, we commit to:",
    compromisos: [
      "Minimize waste generation through reduction, reuse and recycling.",
      "Promote practices that reduce greenhouse gas emissions whenever possible.",
      "Favor the responsible use of materials and supplies with a lower environmental impact.",
      "Raise awareness of the value of our biodiversity and respect for our Protected Wild Areas.",
      "Design and deliver experiences for our visitors that encourage learning and closeness to local nature and culture.",
      "Promote responsible behavior among our passengers through information and good practices, such as the Leave No Trace method.",
      "Give priority to hiring local suppliers and services when feasible.",
      "Respect and value the cultural identity of the host communities.",
      "Contribute to local economic development through responsible partnerships and business relationships.",
      "Promote a safe, inclusive and discrimination-free work environment.",
      "Support the professional development and ongoing training of our staff.",
      "Encourage the team's participation in sustainability initiatives.",
      "Report poor environmental practices.",
    ],
    comunicacionTitulo: "Communication and awareness",
    comunicacion:
      "We will share this policy with our staff, clients, suppliers and other stakeholders, promoting a culture of responsible tourism and creating opportunities for training and awareness.",
    mejoraTitulo: "Continuous improvement",
    mejora:
      "We will periodically review this policy and our sustainability objectives to assess their effectiveness, set new goals and drive actions that strengthen our environmental, social and economic performance.",
    alcanceTitulo: "Scope",
    alcance: [
      "This policy applies to all operations, staff, managers and service providers acting on behalf of Destino Patagonia, who must know it and actively contribute to its fulfillment.",
      "The Management of Destino Patagonia takes responsibility for leading the implementation of this policy, allocating the resources needed to fulfill it and promoting an organizational culture based on sustainability, continuous improvement and respect for the natural and cultural heritage of Patagonia.",
    ],
    firmaNombre: "Emilia Astorga Roine",
    firmaCargo: "Legal Representative, Destino Patagonia S.P.A.",
    codigoTitulo: "Responsible tourist code of conduct",
    codigoIntro:
      "Recommendations from Chile's National Tourism Service (SERNATUR) for traveling responsibly. Five key areas (the PDF is in Spanish):",
    codigoItems: [
      "Value local traditions and customs",
      "Support the local economy",
      "Respect the environment",
      "Be careful when visiting wild, heritage, archaeological or other areas that seem fragile or valuable",
      "Be an informed and respectful traveler",
    ],
    codigoDescargar: "Download the code (PDF, Spanish)",
    linkPolitica: "Read our sustainability policy",
    linkCodigo: "Responsible tourist code of conduct (PDF, Spanish)",
  },
  fr: {
    metaTitle: "Politique de durabilité — Destino Patagonia",
    metaDescription:
      "Principes et engagements de durabilité de Destino Patagonia, et code de conduite du touriste responsable du SERNATUR.",
    back: "Initiatives",
    titulo: "Politique de durabilité",
    empresa: "Destino Patagonia S.P.A.",
    nota: "Traduction de courtoisie. La version espagnole fait foi.",
    compromisoTitulo: "Notre engagement",
    compromiso:
      "En tant que petite entreprise locale de la région d'Aysén, nous pensons qu'il est essentiel de réfléchir à la durabilité de nos actions sur le territoire. C'est pourquoi, depuis plus de 16 ans, nous améliorons nos processus, en favorisant la conservation de la biodiversité, la protection du patrimoine et le développement économique local. Nous estimons que le tourisme doit offrir des expériences mémorables tout en contribuant au bien-être des communautés locales et à un développement économique responsable. Nous nous engageons donc à intégrer des critères de durabilité dans toutes nos activités.",
    principiosIntro: "Notre politique de durabilité repose sur les principes suivants :",
    principios: [
      "Protéger et conserver la biodiversité de la Patagonie, en particulier celle de la région d'Aysén.",
      "Contribuer au développement des connaissances scientifiques dans notre région.",
      "Faire connaître et mener des actions de protection et de restauration du patrimoine culturel matériel et immatériel des communautés locales.",
      "Générer des bénéfices économiques de manière éthique et responsable pour nos collaborateurs, nos fournisseurs et les communautés.",
      "Respecter la législation en vigueur et les autres exigences applicables en matière environnementale, sociale et du travail.",
      "Encourager l'amélioration continue de notre performance en matière de durabilité.",
      "Rejeter l'exploitation des êtres humains sous toutes ses formes, en particulier l'exploitation sexuelle, notamment lorsqu'elle touche des enfants.",
    ],
    compromisosIntro: "Pour cela, nous nous engageons à :",
    compromisos: [
      "Réduire au minimum la production de déchets grâce à la réduction, au réemploi et au recyclage.",
      "Promouvoir des pratiques visant à réduire les émissions de gaz à effet de serre lorsque c'est possible.",
      "Favoriser l'usage responsable de matériaux et de fournitures à moindre impact environnemental.",
      "Faire connaître la valeur de notre biodiversité et le respect de nos Aires Sauvages Protégées.",
      "Concevoir et proposer à nos visiteurs des expériences qui favorisent l'apprentissage et la proximité avec la nature et la culture locales.",
      "Encourager un comportement responsable de nos passagers par l'information et les bonnes pratiques, comme la méthode Sans Laisser de Trace.",
      "Donner la priorité aux fournisseurs et aux services locaux lorsque c'est possible.",
      "Respecter et valoriser l'identité culturelle des communautés d'accueil.",
      "Contribuer au développement économique local par des partenariats et des relations commerciales responsables.",
      "Promouvoir un environnement de travail sûr, inclusif et exempt de discrimination.",
      "Favoriser le développement professionnel et la formation continue de nos collaborateurs.",
      "Encourager la participation de l'équipe à des initiatives de durabilité.",
      "Dénoncer les mauvaises pratiques environnementales.",
    ],
    comunicacionTitulo: "Communication et sensibilisation",
    comunicacion:
      "Nous diffuserons cette politique auprès de nos collaborateurs, clients, fournisseurs et autres parties intéressées, en promouvant une culture du tourisme responsable et en créant des occasions de formation et de sensibilisation.",
    mejoraTitulo: "Amélioration continue",
    mejora:
      "Nous réviserons périodiquement cette politique et nos objectifs de durabilité afin d'évaluer leur efficacité, de fixer de nouveaux objectifs et de mener des actions qui renforcent notre performance environnementale, sociale et économique.",
    alcanceTitulo: "Portée",
    alcance: [
      "Cette politique s'applique à l'ensemble des opérations, collaborateurs, dirigeants et prestataires de services agissant au nom de Destino Patagonia, qui doivent la connaître et contribuer activement à son respect.",
      "La Direction de Destino Patagonia assume la responsabilité de piloter la mise en œuvre de cette politique, en allouant les ressources nécessaires et en promouvant une culture d'organisation fondée sur la durabilité, l'amélioration continue et le respect du patrimoine naturel et culturel de la Patagonie.",
    ],
    firmaNombre: "Emilia Astorga Roine",
    firmaCargo: "Représentante légale, Destino Patagonia S.P.A.",
    codigoTitulo: "Code de conduite du touriste responsable",
    codigoIntro:
      "Recommandations du Service national du tourisme du Chili (SERNATUR) pour voyager de façon responsable. Cinq axes (le PDF est en espagnol) :",
    codigoItems: [
      "Valoriser les traditions et coutumes locales",
      "Soutenir l'économie locale",
      "Respecter l'environnement",
      "Être prudent lors de la visite de zones sauvages, patrimoniales, archéologiques ou autres qui semblent fragiles ou précieuses",
      "Être un voyageur informé et respectueux",
    ],
    codigoDescargar: "Télécharger le code (PDF, en espagnol)",
    linkPolitica: "Lire notre politique de durabilité",
    linkCodigo: "Code de conduite du touriste responsable (PDF, en espagnol)",
  },
};
