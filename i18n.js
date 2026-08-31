// ── Internationalization: dictionary, detection, DOM application
window.ChoachiI18n = (function () {
  const STORAGE_KEY = 'cw_lang';

  const dict = {
    en: {
      meta_title: 'Choachi Wild — Andean Expeditions',
      meta_description: 'Private bio-expeditions through the Colombian Andes. Páramo, cloud forest, Muisca heritage, thermal springs. 2 Days / 1 Night from Bogotá.',

      nav_experience: 'The Experience',
      nav_itinerary: 'Itinerary',
      nav_destinations: 'Destinations',
      nav_book: 'Book Now',
      nav_menu_aria: 'Menu',

      hero_img_alt: 'Colombian Andes páramo landscape',
      hero_eyebrow: 'Colombia · Eastern Andes · 2 Days / 1 Night',
      hero_title_html: 'Where the Cloud Forest<br><em>Meets the Sacred</em>',
      hero_subtitle: 'Private expeditions through páramo, ancient Muisca land, and thermal springs — one hour from Bogotá, a world away from tourism.',
      hero_cta_book: 'Book Your Expedition',
      hero_cta_discover: 'Discover the Route',
      hero_scroll_aria: 'Scroll down',

      stat_altitude_label: 'Above sea level',
      stat_private_label: 'Private Land',
      stat_private_desc: 'In Roca Blanca, no crowds. Ever.',
      stat_allinclusive_label: 'All-inclusive',
      stat_allinclusive_desc: 'All meals and accommodation included',

      exp_label: 'The Experience',
      exp_title_html: 'Not a checklist of attractions.<br>A coherent journey.',
      exp_desc: "In two days you'll cross ecological zones that in Europe would take days of travel to experience — from freezing páramo mist to 38-degree geothermal water, from Muisca sacred sites to bonfire dinners under Andean stars.",
      route_map_alt: 'Choachi Wild expedition route map',

      feature_paramo_title: 'Rarest Ecosystem on Earth',
      feature_paramo_desc: "The páramo only exists in the tropical Andes. Nowhere else. Walk among frailejones — living sponges that feed Bogotá's water supply — at 3,400 metres above sea level.",
      feature_private_title: 'Private Land Access',
      feature_private_desc: 'RocaBlanca and Naranjalia are private. No tour buses. No queues. Just your group, the forest, and a guide.',
      feature_muisca_title: 'Living Pre-Columbian History',
      feature_muisca_desc: 'Stand at El Guardián Indígena — the Muisca Indigenous Guardian — and at Laguna de Ubaque, a sacred lake connected to the El Dorado legend. This is Colombian prehistory, still alive.',
      feature_food_title: 'Gastronomy as Culture',
      feature_food_desc: 'Amasijos, arepa de maíz, chocolate at altitude. Bonfire dinner under mountain stars. Traditional Cundiboyacense cooking that connects you to the place.',

      pullquote_text: '"The water comes straight off the páramo we visited this morning, filtered through volcanic soil for months before emerging here."',
      pullquote_cite: '— At Cascada del Chuscal, RocaBlanca',

      itinerary_label: 'The Route',
      itinerary_title: '2 Days / 1 Night',

      day1_img_alt: 'Day 1 — Andean Ecosystem Immersion',
      day1_badge: 'Day 1',
      day1_title: 'Andean Ecosystem Immersion',
      stop_d1_1_title: 'VIP Pickup',
      stop_d1_1_desc: 'Private 4×4 collection from your hotel in Bogotá.',
      stop_d1_2_title: 'El Verjón Páramo',
      stop_d1_2_desc: '3,400 masl. Frailejones, cloud mist, the water source of a city of 8 million.',
      stop_d1_3_title: 'Peñas de la Bruja',
      stop_d1_3_desc: "The Witches' Rocks viewpoint — panoramic Eastern Cordillera.",
      stop_d1_4_title: 'Mountain Breakfast',
      stop_d1_4_desc: 'Traditional Cundiboyacense: Amasijos, hot chocolate.',
      stop_d1_5_title: 'RocaBlanca Expedition',
      stop_d1_5_desc: '3-hour hike through high Andean cloud forest on Private Land. El Guardián Indígena, giant anthuriums, siete cueros trees, Cascada del Chuscal.',
      stop_d1_6_title: 'Local Lunch',
      stop_d1_6_desc: 'Traditional lunch on a typical restaurant on the road (one of the bests!).',
      stop_d1_7_title: 'Termales Santa Mónica',
      stop_d1_7_desc: 'Natural geothermal springs. Páramo mist in the morning — 38°C water by afternoon.',
      stop_d1_8_title: 'Naranjalia — Overnight Refuge',
      stop_d1_8_desc: 'Private mountain cabin. Bonfire dinner under the stars. Mountain silence.',

      day2_img_alt: 'Day 2 — Sacred Waters & White Villages',
      day2_badge: 'Day 2',
      day2_title: 'Sacred Waters & White Villages',
      stop_d2_1_title: 'Chingaza Sunrise',
      stop_d2_1_desc: 'Watch the sun rise over the mountains of the natural reserve from Naranjalia.',
      stop_d2_2_title: 'Laguna de Ubaque',
      stop_d2_2_desc: 'Sacred Muisca lake. Site of El Dorado legend. Over 1,000 years of spiritual history.',
      stop_d2_3_title: 'Fómeque',
      stop_d2_3_desc: '16th-century colonial white village. Coffee, church, daily Andean life — no tourist version.',
      stop_d2_4_title: 'Río Blanco + Suspension Bridge',
      stop_d2_4_desc: 'River that originates from The páramo. Optional swim. You stood where this water was born — yesterday morning.',
      stop_d2_5_title: 'Closing Lunch at local restaurant',
      stop_d2_5_desc: 'Traditional Cundiboyacense cooking. Then private transfer back to Bogotá.',

      dest_label: 'Destinations',
      dest_title_html: 'One ecosystem.<br>Many worlds.',
      gallery_paramo_alt: 'El Verjón Páramo',
      gallery_paramo_title: 'El Verjón Páramo',
      gallery_paramo_desc: '3,400 masl · Water factory for Bogotá',
      gallery_rocablanca_alt: 'RocaBlanca Cloud Forest',
      gallery_rocablanca_title: 'RocaBlanca',
      gallery_rocablanca_desc: 'Private cloud forest · El Guardián Indígena',
      gallery_termales_alt: 'Termales Santa Mónica',
      gallery_termales_title: 'Termales Santa Mónica',
      gallery_termales_desc: 'Natural geothermal springs',
      gallery_laguna_alt: 'Laguna de Ubaque',
      gallery_laguna_title: 'Laguna de Ubaque',
      gallery_laguna_desc: 'Sacred Muisca lake · El Dorado',
      gallery_naranjalia_alt: 'Naranjalia Refuge',
      gallery_naranjalia_title: 'Naranjalia',
      gallery_naranjalia_desc: 'Private overnight refuge',

      included_label: 'All-Inclusive',
      included_title: 'Everything taken care of.',
      included_desc: "From the moment we collect you at your hotel, you don't need to think about logistics. Focus on the landscape.",
      included_cta_html: 'Reserve Your Spot<br>260 EUR / 290 USD',
      included_1: 'Private 4×4 transport throughout',
      included_2: 'Exclusive guide',
      included_3: 'All meals — breakfast, lunch, dinner',
      included_4: 'Overnight stay at Naranjalia',
      included_5: 'Termales Santa Mónica entry',
      included_6: 'Water and snacks on trail',
      included_7: 'Bonfire dinner',
      included_8: 'Small groups — maximum privacy',
      included_9: 'Medical assistance insurance',

      book_label: 'Ready?',
      book_title: 'Book Your Expedition',
      book_desc: 'Private departures available year-round. Group sizes: 1–4 people. Starting from Bogotá.',
      book_img_alt: 'Andean landscape',
      form_name_label: 'Full Name',
      form_name_placeholder: 'Your name',
      form_email_label: 'Email',
      form_email_placeholder: 'your@email.com',
      form_phone_label: 'Contact Number (WhatsApp)',
      form_phone_placeholder: '300 253 3146',
      phone_prefix_aria: 'Country code',
      form_guests_label: 'Number of Guests',
      guests_opt_1: '1 guest',
      guests_opt_2: '2 guests',
      guests_opt_3: '3 guests',
      guests_opt_4: '4 guests',
      form_date_label: 'Preferred Dates',
      form_date_placeholder: 'Select your dates',
      form_message_label: 'Message (optional)',
      form_message_placeholder: 'Any questions, special requirements, or context about your group...',
      book_submit_html: 'Send Enquiry<br>(260 EUR / 290 USD) / person',
      book_note: "We'll respond within 24 hours. No payment taken at this stage.",

      footer_tagline_html: 'Private bio-expeditions in the Colombian Andes.<br>1 hour from Bogotá.',
      footer_explore_label: 'Explore',
      footer_book_link: 'Book',
      footer_contact_label: 'Contact',
      footer_instagram_aria: 'Instagram',
      footer_copyright: '© 2026 Choachi Wild. All rights reserved.',

      whatsapp_aria: 'Chat on WhatsApp',

      date_picker_note: 'Select arrival day — departure is Day 2',
      date_picker_prev: 'Previous month',
      date_picker_next: 'Next month',

      modal_coming_soon_title: 'Coming Soon',
      modal_coming_soon_text_html: 'Online booking is on its way. In the meantime, reach us directly at <a href="mailto:info@choachiwild.com">info@choachiwild.com</a>',
      modal_close: 'Got it',
      btn_sending: 'Sending…',
      modal_success_title: 'Enquiry Sent!',
      modal_success_text: 'Your enquiry was sent successfully. We will contact you as soon as possible.',
      modal_error_title: 'Something went wrong',
      modal_error_text: 'Ups, sorry but our mail service is broken, if you want you can contact us directly by WhatsApp',
      modal_whatsapp_cta: 'Open WhatsApp',
    },

    es: {
      meta_title: 'Choachi Wild — Expediciones Andinas',
      meta_description: 'Bioexpediciones privadas por los Andes colombianos. Páramo, bosque de niebla, herencia Muisca, aguas termales. 2 Días / 1 Noche desde Bogotá.',

      nav_experience: 'La Experiencia',
      nav_itinerary: 'Itinerario',
      nav_destinations: 'Destinos',
      nav_book: 'Reservar',
      nav_menu_aria: 'Menú',

      hero_img_alt: 'Paisaje de páramo en los Andes colombianos',
      hero_eyebrow: 'Colombia · Andes · 2 Días / 1 Noche',
      hero_title_html: 'Donde el Bosque de Niebla<br><em>Toca lo Sagrado</em>',
      hero_subtitle: 'Expediciones privadas por el páramo, tierra ancestral Muisca y aguas termales — a una hora de Bogotá, lejos del turismo masivo.',
      hero_cta_book: 'Reserva tu Expedición',
      hero_cta_discover: 'Descubre la Ruta',
      hero_scroll_aria: 'Desplázate hacia abajo',

      stat_altitude_label: 'Sobre el nivel del mar',
      stat_private_label: 'Tierra Privada',
      stat_private_desc: 'En Roca Blanca, siempre sin multitudes.',
      stat_allinclusive_label: 'Todo incluido',
      stat_allinclusive_desc: 'Todas las comidas y el alojamiento incluidos',

      exp_label: 'La Experiencia',
      exp_title_html: 'No es una lista de atracciones.<br>Es un viaje coherente.',
      exp_desc: 'En dos días cruzarás zonas ecológicas que en Europa tomarían días de viaje para experimentar — desde la niebla helada del páramo hasta aguas geotermales de 38 grados, desde sitios sagrados Muiscas hasta cena junto a la fogata bajo las estrellas.',
      route_map_alt: 'Mapa de la ruta de expedición Choachi Wild',

      feature_paramo_title: 'El Ecosistema Más Raro de la Tierra',
      feature_paramo_desc: 'El páramo solo existe en los Andes tropicales. En ningún otro lugar. Camina entre frailejones — esponjas vivas que proveen de agua a Bogotá y a Choachi — a 3.400 metros sobre el nivel del mar.',
      feature_private_title: 'Acceso a Tierra Privada',
      feature_private_desc: 'RocaBlanca y Naranjalia son privadas. Sin buses turísticos. Sin filas. Solo tu grupo, el bosque y el guía.',
      feature_muisca_title: 'Historia Precolombina',
      feature_muisca_desc: 'Visita El Guardián Indígena y la Laguna de Ubaque, un lago sagrado ligado a la leyenda de El Dorado. Esta es la prehistoria Colombiana que sigue viva.',
      feature_food_title: 'Cultura gastronómica',
      feature_food_desc: 'Amasijos, arepa de maíz, chocolate caliente. Cena junto a la fogata bajo las estrellas de la montaña. Cocina tradicional cundiboyacense que te conecta con el territorio.',

      pullquote_text: '"El agua viene directamente del páramo que visitamos esta mañana, filtrada por suelo volcánico durante meses antes de emerger aquí."',
      pullquote_cite: '— En la Cascada del Chuscal, RocaBlanca',

      itinerary_label: 'El recorrido',
      itinerary_title: '2 Días / 1 Noche',

      day1_img_alt: 'Día 1 — Inmersión en el Ecosistema Andino',
      day1_badge: 'Día 1',
      day1_title: 'Inmersión en el Ecosistema Andino',
      stop_d1_1_title: 'Recogida e inicio del viaje',
      stop_d1_1_desc: 'Recogida privada en 4×4 desde tu hotel en Bogotá.',
      stop_d1_2_title: 'Páramo de El Verjón',
      stop_d1_2_desc: '3.400 msnm. Frailejones, niebla, la fuente de agua de una ciudad de 8 millones de personas.',
      stop_d1_3_title: 'Peñas de la Bruja',
      stop_d1_3_desc: 'Mirador de las Peñas de la Bruja — vista panorámica de la Cordillera Oriental.',
      stop_d1_4_title: 'Desayuno de Montaña',
      stop_d1_4_desc: 'Tradición cundiboyacense: cocina local, chocolate caliente.',
      stop_d1_5_title: 'Expedición RocaBlanca',
      stop_d1_5_desc: 'Caminata de 3 horas por bosque de niebla altoandino en terreno privado. Visita al Guardián Indígena, anturios gigantes, árboles siete cueros, Cascada del Chuscal.',
      stop_d1_6_title: 'Almuerzo Local',
      stop_d1_6_desc: 'Almuerzo tradicional en un restaurante típico de la vía (¡uno de los mejores!).',
      stop_d1_7_title: 'Termales Santa Mónica',
      stop_d1_7_desc: 'Aguas termales naturales. Niebla del páramo en la mañana — agua caliente por la tarde.',
      stop_d1_8_title: 'Naranjalia — Refugio Nocturno',
      stop_d1_8_desc: 'Cabaña privada de montaña. Cena junto a la fogata bajo las estrellas. Con el silencio de la naturaleza.',

      day2_img_alt: 'Día 2 — Laguna Sagrada y recorrido por la montaña',
      day2_badge: 'Día 2',
      day2_title: 'Laguna Sagrada y recorrido por la montaña',
      stop_d2_1_title: 'Amanecer en Chingaza',
      stop_d2_1_desc: 'Observa el amanecer sobre las montañas de la reserva natural desde el refugio Naranjalia.',
      stop_d2_2_title: 'Laguna de Ubaque',
      stop_d2_2_desc: 'Lago sagrado Muisca. Uno de los sitios de la leyenda de El Dorado. Más de 1.000 años de historia espiritual.',
      stop_d2_3_title: 'Fómeque',
      stop_d2_3_desc: 'Pueblo colonial blanco del siglo XVI. Café, iglesia, vida andina cotidiana — sin versión turística.',
      stop_d2_4_title: 'Río Blanco + Puente Colgante',
      stop_d2_4_desc: 'Río que nace en el páramo que visitamos el dia 1. Baño opcional.',
      stop_d2_5_title: 'Almuerzo de Cierre en Restaurante Local',
      stop_d2_5_desc: 'Cocina tradicional cundiboyacense. Luego, traslado privado de regreso a Bogotá.',

      dest_label: 'Destinos',
      dest_title_html: 'Un ecosistema.<br>Muchos mundos.',
      gallery_paramo_alt: 'Páramo de El Verjón',
      gallery_paramo_title: 'Páramo de El Verjón',
      gallery_paramo_desc: '3.400 msnm · Fábrica de agua de Bogotá y Choachi',
      gallery_rocablanca_alt: 'Bosque de Niebla RocaBlanca',
      gallery_rocablanca_title: 'RocaBlanca',
      gallery_rocablanca_desc: 'Bosque de niebla privado · El Guardián Indígena',
      gallery_termales_alt: 'Termales Santa Mónica',
      gallery_termales_title: 'Termales Santa Mónica',
      gallery_termales_desc: 'Aguas termales naturales',
      gallery_laguna_alt: 'Laguna de Ubaque',
      gallery_laguna_title: 'Laguna de Ubaque',
      gallery_laguna_desc: 'Lago sagrado Muisca · Parte del Dorado',
      gallery_naranjalia_alt: 'Refugio Naranjalia',
      gallery_naranjalia_title: 'Naranjalia',
      gallery_naranjalia_desc: 'Refugio privado nocturno',

      included_label: 'Todo Incluido',
      included_title: 'No te preocupes por nada!',
      included_desc: 'Desde el momento en que te recogemos en tu hotel, no necesitas pensar en logística. Concéntrate en la aventura.',
      included_cta_html: 'Reserva tu Cupo<br>260 EUR / 290 USD',
      included_1: 'Transporte privado en 4×4 durante todo el recorrido',
      included_2: 'Guía exclusivo',
      included_3: 'Todas las comidas — desayuno, almuerzo, cena',
      included_4: 'Alojamiento en Naranjalia',
      included_5: 'Entrada a Termales Santa Mónica',
      included_6: 'Agua y snacks en el camino',
      included_7: 'Cena junto a la fogata',
      included_8: 'Grupos pequeños — máxima privacidad',
      included_9: 'Seguro de asistencia médica',

      book_label: '¿Preparado?',
      book_title: 'Reserva tu Expedición',
      book_desc: 'Salidas privadas disponibles todo el año. Tamaño de grupo: 1–4 personas. Saliendo desde Bogotá.',
      book_img_alt: 'Paisaje andino',
      form_name_label: 'Nombre Completo',
      form_name_placeholder: 'Tu nombre',
      form_email_label: 'Correo Electrónico',
      form_email_placeholder: 'tu@correo.com',
      form_phone_label: 'Número de Contacto (WhatsApp)',
      form_phone_placeholder: '300 253 3146',
      phone_prefix_aria: 'Código de país',
      form_guests_label: 'Número de Personas',
      guests_opt_1: '1 persona',
      guests_opt_2: '2 personas',
      guests_opt_3: '3 personas',
      guests_opt_4: '4 personas',
      form_date_label: 'Fechas Preferidas',
      form_date_placeholder: 'Selecciona tus fechas',
      form_message_label: 'Mensaje (opcional)',
      form_message_placeholder: 'Cualquier pregunta, requerimiento especial o contexto sobre tu grupo...',
      book_submit_html: 'Enviar Solicitud<br>(260 EUR / 290 USD) / persona',
      book_note: 'Responderemos en menos de 24 horas. No se realiza ningún pago en esta etapa.',

      footer_tagline_html: 'Bioexpediciones privadas en los Andes colombianos.<br>A 1 hora de Bogotá.',
      footer_explore_label: 'Explorar',
      footer_book_link: 'Reservar',
      footer_contact_label: 'Contacto',
      footer_instagram_aria: 'Instagram',
      footer_copyright: '© 2026 Choachi Wild. Todos los derechos reservados.',

      whatsapp_aria: 'Chatear por WhatsApp',

      date_picker_note: 'Selecciona el día de llegada — la salida es el Día 2',
      date_picker_prev: 'Mes anterior',
      date_picker_next: 'Mes siguiente',

      modal_coming_soon_title: 'Próximamente',
      modal_coming_soon_text_html: 'La reserva en línea está en camino. Mientras tanto, contáctanos directamente en <a href="mailto:info@choachiwild.com">info@choachiwild.com</a>',
      modal_close: 'Entendido',
      btn_sending: 'Enviando…',
      modal_success_title: '¡Solicitud Enviada!',
      modal_success_text: 'Tu solicitud fue enviada con éxito. Nos pondremos en contacto contigo lo antes posible.',
      modal_error_title: 'Algo salió mal',
      modal_error_text: 'Lo sentimos, nuestro servicio de correo tiene un problema. Si quieres, puedes contactarnos directamente por WhatsApp',
      modal_whatsapp_cta: 'Abrir WhatsApp',
    },
  };

  const dateLocale = {
    en: {
      days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      locale: 'en-GB',
    },
    es: {
      days: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
      months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      locale: 'es-CO',
    },
  };

  function detect() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'en' || saved === 'es') return saved;
    return navigator.language && navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en';
  }

  let current = detect();

  function t(key) {
    return (dict[current] && dict[current][key]) ?? dict.en[key] ?? key;
  }

  function translate(root) {
    root.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    root.querySelectorAll('[data-i18n-html]').forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
    root.querySelectorAll('[data-i18n-placeholder]').forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); });
    root.querySelectorAll('[data-i18n-aria-label]').forEach(el => { el.setAttribute('aria-label', t(el.dataset.i18nAriaLabel)); });
    root.querySelectorAll('[data-i18n-alt]').forEach(el => { el.alt = t(el.dataset.i18nAlt); });
    root.querySelectorAll('[data-i18n-content]').forEach(el => { el.setAttribute('content', t(el.dataset.i18nContent)); });
  }

  function updateSwitchUI() {
    document.querySelectorAll('.lang-switch__btn').forEach(btn => {
      const active = btn.dataset.lang === current;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', String(active));
    });
  }

  function apply() {
    document.documentElement.lang = current;
    translate(document);
    updateSwitchUI();
    document.dispatchEvent(new CustomEvent('cw:langchange', { detail: { lang: current } }));
  }

  function setLang(lang) {
    if (lang !== 'en' && lang !== 'es') return;
    current = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    apply();
  }

  apply();

  document.querySelectorAll('.lang-switch__btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });

  return {
    t,
    getLang: () => current,
    setLang,
    translate,
    dateLocale,
  };
})();
