-- ============================================================
-- CORRECTIF — Quiénes Somos
-- Retire les fiches "Daniel Torres" / "Emilia Astorga" ajoutées
-- précédemment dans bloques (elles faisaient doublon en haut de
-- page, hors contexte, sans photo). Le vrai texte des bios va
-- maintenant sous leur photo dans la section "Conócenos"
-- (composant EquipoConocenos.tsx, fichier envoyé séparément).
-- Retour aux 4 blocs d'origine + le texte "¿Por qué reservar"
-- déjà mis à jour (retrait du "9 años").
-- ============================================================
update paginas set
  bloques = '[
    {"titulo": "Nuestra historia", "texto": "Destino Patagonia nace el año 2009 en la comuna de Tortel, donde comenzamos realizando viajes de navegación a los glaciares Jorge Montt y Steffens, además de lugares cercanos como la Isla de los Muertos. Desde el año 2011 trabajamos en la ruta a Laguna San Rafael a través de Bahía Exploradores."},
    {"titulo": "Nuestro equipo", "texto": "Contamos con dos embarcaciones, SISU y La Resistencia. El equipo se conforma por 2 patrones de nave menor y 2 guías tripulantes, además de Emilia Astorga y Daniel Torres, creadores de la empresa y encargados del ámbito administrativo y logístico."},
    {"titulo": "¿Por qué reservar con nosotros?", "texto": "Desde el año 2009, realizamos viajes a zonas remotas de la región de Aysén, dónde hemos aprendido a navegar de distintos modos en sus fiordos, lagos y lagunas. Maravillándonos con cada paso que damos en el bosque, la arena, el mallín; y, con su historia viva y reciente, fascinante como su naturaleza.\n\n• Experiencia en la zona de Aysén\n• Aporte al entorno local\n• Aventuras realizadas por un equipo con más de 15 años de experiencia\n• Amamos lo que hacemos"},
    {"titulo": "¿Qué puedes esperar de un viaje con nosotros?", "texto": "Encantarte con un paisaje sublime, no sólo el glaciar San Rafael, sino también el mar que lo rodea, las montañas y el bosque. Al viajar con nosotros también estás aportando directamente al desarrollo de las Áreas Silvestres Protegidas (ASP) en Chile y específicamente al Parque Nacional Laguna San Rafael. Desde un comienzo hemos buscado formas de aportar concretamente a su desarrollo, una de ellas a partir del pago de entrada y concesión, generando nuevas rutas y pensando en un turismo sustentable a largo plazo."}
  ]'::jsonb,
  updated_at = now()
where slug = 'quienes-somos';
 
-- Vérification :
-- select slug, jsonb_array_length(bloques) as n_bloques from paginas where slug = 'quienes-somos';
-- (doit repasser à 4)
 
