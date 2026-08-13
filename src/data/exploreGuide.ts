export type ExplorePlace = {
  id: string;
  name: string;
  text: string;
  group: 'nearby' | 'halfday' | 'culture' | 'fullday' | 'countryside';
  featured?: boolean;
  mapsQuery?: string;
};

export type ExploreGuideContent = {
  lang: 'en' | 'te';
  path: string;
  alternatePath: string;
  title: string;
  description: string;
  h1: string;
  intro: string[];
  groupLabels: Record<ExplorePlace['group'], string>;
  places: ExplorePlace[];
  tripsHeading: string;
  trips: string[];
  ctaTitle: string;
  ctaText: string;
  ctaLabel: string;
};

export const exploreGuideEn: ExploreGuideContent = {
  lang: 'en',
  path: '/places-to-visit-near-mopidevi/',
  alternatePath: '/te/places-to-visit-near-mopidevi/',
  title: 'Places to Visit Near Mopidevi | Local Travel Guide',
  description:
    'Plan trips near Mopidevi — Hamsaladeevi, Manginapudi, Ghantasala, Movva, Kuchipudi, Challapalli and more across the Krishna delta and Diviseema region.',
  h1: 'Places to Visit Near Mopidevi',
  intro: [
    'A visit to Mopidevi does not have to end after darshan. The surrounding Krishna delta and Diviseema region bring together sacred temples, river-and-sea landscapes, old port-town history, Buddhist heritage, classical dance traditions and quiet countryside drives.',
    'Whether you have a few hours or a full day, Mopidevi can work as a comfortable base for a wider family trip.',
  ],
  groupLabels: {
    nearby: 'Nearby',
    halfday: 'Half-day',
    culture: 'Culture & Stories',
    fullday: 'Full-day',
    countryside: 'Countryside',
  },
  places: [
    {
      id: 'hamsaladeevi',
      name: 'Hamsaladeevi — Temple, River and Sea',
      text: 'Hamsaladeevi is one of the strongest add-on trips from Mopidevi. It is known for Sri Venugopala Swamy Temple and Sagara Sangamam, where the Krishna River meets the Bay of Bengal. The area suits visitors looking for a peaceful spiritual-and-nature outing rather than a busy beach-town experience.',
      group: 'halfday',
      featured: true,
      mapsQuery: 'Hamsaladeevi Venugopala Swamy Temple',
    },
    {
      id: 'pedakallepalli',
      name: 'Pedakallepalli / Kallepalli',
      text: 'A quiet local temple-town stop with a rural atmosphere, Pedakallepalli fits naturally into a short spiritual circuit around Mopidevi.',
      group: 'nearby',
      mapsQuery: 'Pedakallepalli Krishna district',
    },
    {
      id: 'avanigadda',
      name: 'Avanigadda',
      text: 'A practical nearby town and orientation hub for travellers moving through Diviseema. It is useful for food, supplies, transport and nearby local visits.',
      group: 'nearby',
      mapsQuery: 'Avanigadda Andhra Pradesh',
    },
    {
      id: 'challapalli',
      name: 'Challapalli Rajavari Fort / Palace Area',
      text: 'Challapalli adds a nearby heritage layer. Local accounts connect the Challapalli zamindari family with regional patronage. It can be a short architecture-and-history stop; visitors should confirm current access before travelling.',
      group: 'halfday',
      mapsQuery: 'Challapalli Fort Andhra Pradesh',
    },
    {
      id: 'machilipatnam',
      name: 'Machilipatnam — Port-Town History',
      text: 'Historically an important east-coast trading port, Machilipatnam gives visitors a coastal-town experience shaped by centuries of trade. It pairs naturally with Manginapudi Beach.',
      group: 'halfday',
      mapsQuery: 'Machilipatnam Andhra Pradesh',
    },
    {
      id: 'manginapudi',
      name: 'Manginapudi Beach',
      text: 'A relaxed coastal option for families wanting sea views and an evening break after temple travel. It is best enjoyed as a simple leisure stop rather than a resort destination.',
      group: 'halfday',
      mapsQuery: 'Manginapudi Beach',
    },
    {
      id: 'ghantasala',
      name: 'Ghantasala Buddhist Heritage',
      text: 'Ghantasala brings a very different historical layer to the trip. Its ancient Buddhist remains and stupa tradition show the wider region’s cultural depth beyond temple tourism.',
      group: 'culture',
      mapsQuery: 'Ghantasala Buddhist site',
    },
    {
      id: 'movva',
      name: 'Movva — Venugopala Swamy and Kshetrayya',
      text: 'Movva connects temple devotion with Telugu music and poetry. The village is associated with Kshetrayya and his celebrated padams dedicated to Venugopala Swamy — a place where devotion became music.',
      group: 'culture',
      mapsQuery: 'Movva Venugopala Swamy Temple',
    },
    {
      id: 'kuchipudi',
      name: 'Kuchipudi Village',
      text: 'The village internationally associated with the classical dance tradition of Kuchipudi. Its story is tied to devotional theatre and Siddhendra Yogi, making it one of the region’s most distinctive cultural stops.',
      group: 'culture',
      mapsQuery: 'Kuchipudi village Andhra Pradesh',
    },
    {
      id: 'srikakulam-mahavishnu',
      name: 'Andhra Mahavishnu Temple, Srikakulam',
      text: 'Regional tradition connects this temple with Sri Krishnadevaraya and divine inspiration associated with the composition of Amuktamalyada, giving the visit a distinctive spiritual and literary character.',
      group: 'culture',
      mapsQuery: 'Andhra Mahavishnu Temple Srikakulam Krishna',
    },
    {
      id: 'vijayawada',
      name: 'Vijayawada Full-Day Cluster',
      text: 'For travellers with a full day: Kanaka Durga Temple, Undavalli Caves, Prakasam Barrage and selected riverfront attractions can be grouped into one longer day trip.',
      group: 'fullday',
      mapsQuery: 'Kanaka Durga Temple Vijayawada',
    },
    {
      id: 'diviseema',
      name: 'Krishna Delta / Diviseema Countryside',
      text: 'Not every memorable stop needs a famous monument. Agricultural fields, canals, village roads and open skies are part of the local experience and fit naturally with a slow, peaceful family trip.',
      group: 'countryside',
    },
  ],
  tripsHeading: 'Suggested Trip Ideas',
  trips: [
    'Temple + nature half-day: Mopidevi Temple → Hamsaladeevi Venugopala Swamy Temple → Sagara Sangamam.',
    'Coastal half-day: Mopidevi → Machilipatnam → Manginapudi Beach.',
    'Culture route: Mopidevi → Movva → Kuchipudi → nearby heritage stops.',
    'Heritage route: Mopidevi → Ghantasala → Challapalli / local heritage.',
    'Full-day city trip: Mopidevi → Vijayawada cluster.',
  ],
  ctaTitle: 'Ready to plan your stay?',
  ctaText: 'Use Mopidevi as your base — enquire on WhatsApp with your dates and guest count.',
  ctaLabel: 'Enquire About Your Stay',
};

export const exploreGuideTe: ExploreGuideContent = {
  lang: 'te',
  path: '/te/places-to-visit-near-mopidevi/',
  alternatePath: '/places-to-visit-near-mopidevi/',
  title: 'మోపిదేవి సమీపంలోని సందర్శనీయ ప్రదేశాలు | స్థానిక యాత్రా గైడ్',
  description:
    'మోపిదేవి సమీపంలో హంసలదీవి, మంగినపూడి, ఘంటసాల, మొవ్వ, కూచిపూడి, చల్లపల్లి మరియు కృష్ణా డెల్టా / దివిసీమ ప్రాంత పర్యటనలు.',
  h1: 'మోపిదేవి సమీపంలో చూడదగిన ప్రదేశాలు',
  intro: [
    'మోపిదేవి యాత్ర దర్శనంతోనే ముగియాల్సిన అవసరం లేదు. చుట్టుపక్కల కృష్ణా డెల్టా, దివిసీమ ప్రాంతాల్లో ఆలయాలు, నది-సముద్ర సంగమం, తీరప్రాంతాలు, పాత వాణిజ్య పట్టణ చరిత్ర, బౌద్ధ వారసత్వం, కూచిపూడి నృత్య సంప్రదాయం, ప్రశాంతమైన గ్రామీణ దృశ్యాలు కలిసిన ప్రత్యేక అనుభవం ఉంటుంది.',
    'మీ దగ్గర కొన్ని గంటల సమయం ఉన్నా, ఒక పూర్తి రోజు ఉన్నా, మోపిదేవిని బేస్‌గా తీసుకుని కుటుంబంతో చుట్టుపక్కల ప్రాంతాలను సులభంగా అన్వేషించవచ్చు.',
  ],
  groupLabels: {
    nearby: 'సమీపం',
    halfday: 'అర్ధదినం',
    culture: 'సంస్కృతి & కథలు',
    fullday: 'పూర్తి రోజు',
    countryside: 'గ్రామీణ అనుభవం',
  },
  places: [
    {
      id: 'hamsaladeevi',
      name: 'హంసలదీవి — ఆలయం, నది, సముద్రం',
      text: 'మోపిదేవి నుంచి వెళ్లడానికి అత్యంత మంచి అదనపు యాత్రల్లో హంసలదీవి ఒకటి. శ్రీ వేణుగోపాల స్వామి ఆలయం మరియు కృష్ణా నది బంగాళాఖాతంలో కలిసే సాగర సంగమం ఈ ప్రాంతానికి ప్రత్యేకత. రద్దీగా ఉండే బీచ్ టౌన్ కంటే ప్రశాంతమైన ఆధ్యాత్మిక-ప్రకృతి అనుభవం కోరేవారికి ఇది బాగా సరిపోతుంది.',
      group: 'halfday',
      featured: true,
      mapsQuery: 'Hamsaladeevi Venugopala Swamy Temple',
    },
    {
      id: 'pedakallepalli',
      name: 'పెదకళ్లేపల్లి / కళ్లేపల్లి',
      text: 'పెదకళ్లేపల్లి ప్రశాంతమైన స్థానిక దేవాలయ గ్రామం. గ్రామీణ వాతావరణంతో మోపిదేవి చుట్టూ చిన్న ఆధ్యాత్మిక యాత్రలో భాగంగా బాగా సరిపోతుంది.',
      group: 'nearby',
      mapsQuery: 'Pedakallepalli Krishna district',
    },
    {
      id: 'avanigadda',
      name: 'అవనిగడ్డ',
      text: 'దివిసీమలో ప్రయాణించే వారికి ఉపయోగకరమైన సమీప పట్టణం. ఆహారం, ప్రయాణ సదుపాయాలు, అవసరమైన వస్తువులు మరియు స్థానిక సందర్శనలకు ఒక ప్రాక్టికల్ హబ్‌గా ఉపయోగపడుతుంది.',
      group: 'nearby',
      mapsQuery: 'Avanigadda Andhra Pradesh',
    },
    {
      id: 'challapalli',
      name: 'చల్లపల్లి రాజావారి కోట / ప్యాలెస్ ప్రాంతం',
      text: 'మోపిదేవి సమీపంలోనే ప్రాంతీయ చరిత్రను చూపించే మంచి హెరిటేజ్ స్టాప్. చల్లపల్లి జమీందారీ కుటుంబం ఈ ప్రాంతంలోని ఆలయ పరిరక్షణతో అనుబంధించబడిందనే స్థానిక కథనాలు ఉన్నాయి. సందర్శకుల ప్రవేశం ప్రస్తుతం ఎలా ఉందో చూసి సందర్శించండి.',
      group: 'halfday',
      mapsQuery: 'Challapalli Fort Andhra Pradesh',
    },
    {
      id: 'machilipatnam',
      name: 'మచిలీపట్నం — పాత పోర్టు పట్టణ చరిత్ర',
      text: 'తూర్పు తీరంలో ఒకప్పుడు ప్రముఖ వాణిజ్య నౌకాశ్రయంగా ఉన్న మచిలీపట్నం శతాబ్దాల వాణిజ్య చరిత్రను కలిగి ఉంది. మంగినపూడి బీచ్‌తో కలిపి అర్ధదిన పర్యటనగా ప్లాన్ చేయవచ్చు.',
      group: 'halfday',
      mapsQuery: 'Machilipatnam Andhra Pradesh',
    },
    {
      id: 'manginapudi',
      name: 'మంగినపూడి బీచ్',
      text: 'దేవాలయ యాత్ర తర్వాత కుటుంబంతో సముద్ర దృశ్యాలు చూసి ప్రశాంతంగా గడపడానికి మంచి తీరప్రాంత ఎంపిక. ఇది రిసార్ట్ అనుభవం కంటే సరళమైన విశ్రాంతి ప్రదేశంగా బాగా సరిపోతుంది.',
      group: 'halfday',
      mapsQuery: 'Manginapudi Beach',
    },
    {
      id: 'ghantasala',
      name: 'ఘంటసాల బౌద్ధ వారసత్వం',
      text: 'ఘంటసాల ఈ యాత్రకు పూర్తిగా భిన్నమైన చారిత్రక కోణాన్ని ఇస్తుంది. పురాతన బౌద్ధ అవశేషాలు, స్తూప సంప్రదాయం ఈ ప్రాంతం ఆలయ యాత్రలకే పరిమితం కాకుండా విస్తృతమైన సాంస్కృతిక చరిత్ర కలిగి ఉందని చూపిస్తాయి.',
      group: 'culture',
      mapsQuery: 'Ghantasala Buddhist site',
    },
    {
      id: 'movva',
      name: 'మొవ్వ — వేణుగోపాల స్వామి మరియు క్షేత్రయ్య',
      text: 'మొవ్వలో భక్తి, తెలుగు సంగీతం, సాహిత్యం ఒకే కథలో కలుస్తాయి. ప్రసిద్ధ పదకవి క్షేత్రయ్య మరియు వేణుగోపాల స్వామి భక్తితో ఈ గ్రామం అనుబంధించబడింది — భక్తి సంగీతమై మారిన ప్రదేశం.',
      group: 'culture',
      mapsQuery: 'Movva Venugopala Swamy Temple',
    },
    {
      id: 'kuchipudi',
      name: 'కూచిపూడి గ్రామం',
      text: 'ప్రపంచ ప్రసిద్ధ కూచిపూడి శాస్త్రీయ నృత్య సంప్రదాయానికి పేరు ఇచ్చిన గ్రామం. సిద్ధేంద్రయోగి మరియు భక్తి నాట్య సంప్రదాయంతో దీని కథ అనుబంధించబడింది. ఆంధ్ర సంస్కృతిని అనుభవించాలనుకునే వారికి ఇది ప్రత్యేకమైన స్టాప్.',
      group: 'culture',
      mapsQuery: 'Kuchipudi village Andhra Pradesh',
    },
    {
      id: 'srikakulam-mahavishnu',
      name: 'శ్రీకాకుళం ఆంధ్ర మహావిష్ణు ఆలయం',
      text: 'స్థానిక సాహిత్య సంప్రదాయం ప్రకారం శ్రీకృష్ణదేవరాయలు ఇక్కడ స్వామిని దర్శించి, ఆముక్తమాల్యద రచనకు సంబంధించిన దివ్య ప్రేరణ పొందారనే కథ ప్రసిద్ధి. ఈ అనుబంధం ఆలయానికి ప్రత్యేకమైన ఆధ్యాత్మిక మరియు సాహిత్య ప్రాధాన్యాన్ని ఇస్తుంది.',
      group: 'culture',
      mapsQuery: 'Andhra Mahavishnu Temple Srikakulam Krishna',
    },
    {
      id: 'vijayawada',
      name: 'విజయవాడ పూర్తి రోజు పర్యటన',
      text: 'పూర్తి రోజు సమయం ఉన్నవారు కనకదుర్గ ఆలయం, ఉండవల్లి గుహలు, ప్రకాశం బ్యారేజ్ మరియు కొన్ని కృష్ణా నది తీర ప్రాంతాలను ఒకే రోజు పర్యటనగా ప్లాన్ చేయవచ్చు.',
      group: 'fullday',
      mapsQuery: 'Kanaka Durga Temple Vijayawada',
    },
    {
      id: 'diviseema',
      name: 'కృష్ణా డెల్టా / దివిసీమ గ్రామీణ అనుభవం',
      text: 'ప్రతి మంచి అనుభవానికి ప్రసిద్ధ స్మారకం అవసరం లేదు. పచ్చని వ్యవసాయ భూములు, కాలువలు, గ్రామీణ రహదారులు, విశాలమైన ఆకాశం — ఇవన్నీ ఈ ప్రాంతపు అసలైన అనుభవంలో భాగమే.',
      group: 'countryside',
    },
  ],
  tripsHeading: 'సూచించిన ట్రిప్ ఐడియాలు',
  trips: [
    'ఆలయం + ప్రకృతి అర్ధదిన యాత్ర: మోపిదేవి ఆలయం → హంసలదీవి వేణుగోపాల స్వామి ఆలయం → సాగర సంగమం.',
    'తీరప్రాంత అర్ధదిన యాత్ర: మోపిదేవి → మచిలీపట్నం → మంగినపూడి బీచ్.',
    'సాంస్కృతిక మార్గం: మోపిదేవి → మొవ్వ → కూచిపూడి → సమీప హెరిటేజ్ ప్రదేశాలు.',
    'హెరిటేజ్ మార్గం: మోపిదేవి → ఘంటసాల → చల్లపల్లి / స్థానిక చారిత్రక ప్రదేశాలు.',
    'పూర్తి రోజు నగర యాత్ర: మోపిదేవి → విజయవాడ క్లస్టర్.',
  ],
  ctaTitle: 'మీ స్టే ప్లాన్ చేసుకోవాలా?',
  ctaText: 'మోపిదేవిని బేస్‌గా తీసుకోండి — తేదీలు మరియు అతిథుల సంఖ్య WhatsApp లో పంపండి.',
  ctaLabel: 'మీ స్టే గురించి WhatsApp లో అడగండి',
};
