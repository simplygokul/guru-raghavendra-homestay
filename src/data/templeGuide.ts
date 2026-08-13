export type Ritual = { name: string; purpose: string };

export type TempleGuideContent = {
  lang: 'en' | 'te';
  path: string;
  alternatePath: string;
  title: string;
  description: string;
  h1: string;
  intro: string[];
  serpentHeading: string;
  serpent: string[];
  swayambhuHeading: string;
  swayambhu: string[];
  whyHeading: string;
  why: { title: string; text: string }[];
  ritualsHeading: string;
  rituals: Ritual[];
  festivalsHeading: string;
  festivals: string;
  timingsHeading: string;
  timings: string;
  reachHeading: string;
  reach: string[];
  tipsHeading: string;
  tips: string[];
  midCtaHeading: string;
  midCtaText: string;
  midCtaLabel: string;
  finalCtaTitle: string;
  finalCtaText: string;
};

export const templeGuideEn: TempleGuideContent = {
  lang: 'en',
  path: '/mopidevi-temple/',
  alternatePath: '/te/mopidevi-temple/',
  title: 'Mopidevi Temple Guide | Story, Timings & Visitor Information',
  description:
    'A respectful guide to Sri Subrahmanyeswara Swamy Temple in Mopidevi — serpent-penance tradition, swayambhu discovery, poojas, festivals, timings and visitor tips.',
  h1: 'Mopidevi Sri Subrahmanyeswara Swamy Temple Guide',
  intro: [
    'Mopidevi is one of Andhra Pradesh’s well-known Subrahmanya kshetras. Families and devotees visit for its serpent-linked traditions, Sarpa Dosha and Rahu-Ketu worship, vows connected with marriage and children, and the devotional atmosphere of the Krishna delta region.',
    'For many visitors, Mopidevi is more than a quick darshan. Its legends, rituals and local customs give the temple a distinct identity, and knowing the stories before you arrive can make the visit more meaningful.',
  ],
  serpentHeading: 'The Traditional Story of the Serpent Penance',
  serpent: [
    'According to the most commonly repeated temple tradition, four eternally youthful sages once visited Kailasa to see Lord Shiva. The sages had renounced worldly attachment and appeared like unclothed children. Seeing them beside the richly adorned gods and goddesses, young Lord Subrahmanya is said to have laughed innocently at the contrast.',
    'Goddess Parvati corrected him for the disrespect. Realising his mistake, Subrahmanya sought to atone through penance. Local tradition says he came to earth in serpent form and performed severe tapas in seclusion. Mopidevi is associated with the place of that penance.',
    'This serpent-form tradition is one reason the temple became closely associated with Naga worship, Sarpa Dosha remedies and Rahu-Ketu related prayers.',
  ],
  swayambhuHeading: 'The Swayambhu Discovery Story',
  swayambhu: [
    'Another well-known local account tells of a potter-devotee named Veeravarapu Parvathalu. Lord Subrahmanya is said to have appeared in his dream and revealed that the divine presence was hidden inside an anthill in the village.',
    'Parvathalu and the villagers then opened the anthill and discovered the self-manifested sacred form worshipped at Mopidevi. Tradition also remembers the potter as making clay images associated with the deity, linking the temple’s origin story closely with local village devotion.',
  ],
  whyHeading: 'Why Devotees Visit Mopidevi',
  why: [
    {
      title: 'Sarpa Dosha / Naga Dosha',
      text: 'Devotees commonly seek relief from serpent-related astrological concerns.',
    },
    {
      title: 'Rahu-Ketu concerns',
      text: 'Worship is associated with delays, obstacles and horoscope-related difficulties traditionally linked to Rahu and Ketu.',
    },
    {
      title: 'Marriage prayers',
      text: 'Some devotees visit when marriage is delayed or to seek blessings for family harmony.',
    },
    {
      title: 'Progeny prayers',
      text: 'The temple is widely associated with couples seeking blessings for children.',
    },
    {
      title: 'Family vows',
      text: 'Cradle offerings, tonsure and ear piercing are among the customs followed by some families.',
    },
    {
      title: 'General wellbeing',
      text: 'Some traditions also mention prayers for health concerns; these are devotional beliefs and not medical treatment.',
    },
  ],
  ritualsHeading: 'Popular Poojas and Rituals',
  rituals: [
    {
      name: 'Sarpa Dosha Nivarana Pooja',
      purpose: 'Devotees perform this seeking relief from Sarpa / Naga Dosha-related obstacles.',
    },
    {
      name: 'Rahu-Ketu Pooja',
      purpose:
        'Associated with prayers for relief from delays and difficulties traditionally linked to Rahu and Ketu.',
    },
    {
      name: 'Naga Pratishta',
      purpose: 'A more elaborate Naga-related vow or remedial ritual performed by some devotees.',
    },
    {
      name: 'Anapathya-related worship',
      purpose: 'Traditionally associated with prayers for progeny and family blessings.',
    },
    {
      name: 'Rudrabhishekam / Abhishekam',
      purpose: 'A devotional abhishekam for blessings and fulfilment of personal prayers.',
    },
    {
      name: 'Uyala / Cradle Offering',
      purpose:
        'Women seeking blessings for children are traditionally said to tie a cradle made from a new saree to a sacred tree.',
    },
    {
      name: 'Pongal Offering',
      purpose: 'Some devotees prepare rice-and-jaggery pongal while praying for an early marriage.',
    },
    {
      name: 'Tonsure / Ear Piercing',
      purpose: 'Families may perform these as part of a vow or thanksgiving ritual.',
    },
  ],
  festivalsHeading: 'Festivals and Busy Periods',
  festivals:
    'Commonly mentioned festival periods include Subrahmanya Shashti, Skanda Shashti, Nagula Chavithi and the Karthika season. Special rituals and crowd patterns can change from year to year, so current-year schedules should be checked before travel.',
  timingsHeading: 'Current Published Timings',
  timings:
    'Current published timings are generally listed as 5:30 AM–1:00 PM and 4:00 PM–8:00 PM. Timings may change on festivals and special days, so visitors should confirm before travel.',
  reachHeading: 'How to Reach Mopidevi',
  reach: [
    'Mopidevi is accessible by road from Vijayawada and Machilipatnam, with routes continuing through the Krishna delta towns toward the temple.',
    'Visitors arriving from the Repalle side can approach Mopidevi through the regional road network. Public transport availability and road conditions can change, so confirm your preferred route before starting.',
  ],
  tipsHeading: 'Practical Visitor Tips',
  tips: [
    'Arrive early on busy days if you prefer a calmer darshan.',
    'If travelling with elders or children, plan rest time between morning and evening sessions.',
    'If you are planning a specific pooja, confirm the current procedure and timing before arriving.',
    'For early-arrival stays, contact the homestay in advance; flexible check-in may be available subject to confirmation.',
  ],
  midCtaHeading: 'Visiting Mopidevi with family?',
  midCtaText:
    'Sri Guru Raghavendra HomeStay offers spacious rooms, kitchen convenience, a peaceful terrace and local guidance for visitors who want a comfortable base in Mopidevi.',
  midCtaLabel: 'Check Stay Availability on WhatsApp',
  finalCtaTitle: 'Need a calm place after darshan?',
  finalCtaText:
    'Share your travel dates on WhatsApp and we will help you plan a comfortable stay in Mopidevi.',
};

export const templeGuideTe: TempleGuideContent = {
  lang: 'te',
  path: '/te/mopidevi-temple/',
  alternatePath: '/mopidevi-temple/',
  title: 'మోపిదేవి ఆలయ గైడ్ | స్థలపురాణం, సమయాలు & యాత్రిక సమాచారం',
  description:
    'మోపిదేవి శ్రీ సుబ్రహ్మణ్యేశ్వర స్వామి ఆలయం — సర్పరూప తపస్సు సంప్రదాయం, స్వయంభూ కథ, పూజలు, పండుగలు, దర్శన సమయాలు మరియు యాత్రిక సూచనలు.',
  h1: 'మోపిదేవి శ్రీ సుబ్రహ్మణ్యేశ్వర స్వామి ఆలయ దర్శన గైడ్',
  intro: [
    'మోపిదేవి ఆంధ్రప్రదేశ్‌లో ప్రసిద్ధి చెందిన సుబ్రహ్మణ్య క్షేత్రాలలో ఒకటి. నాగ సంబంధిత సంప్రదాయాలు, సర్పదోష / రాహు-కేతు పూజలు, వివాహం మరియు సంతానం కోసం చేసే మొక్కులు, కృష్ణా డెల్టా ప్రాంతంలోని ప్రశాంతమైన భక్తి వాతావరణం వల్ల అనేక కుటుంబాలు మరియు భక్తులు ఇక్కడికి వస్తారు.',
    'చాలామందికి మోపిదేవి యాత్ర అనేది కేవలం దర్శనం మాత్రమే కాదు. ఇక్కడి స్థలపురాణాలు, పూజా విధానాలు, స్థానిక ఆచారాలు ఈ క్షేత్రానికి ప్రత్యేకతను ఇస్తాయి. వీటి గురించి ముందుగా తెలుసుకుంటే దర్శనం మరింత అర్థవంతంగా అనిపించవచ్చు.',
  ],
  serpentHeading: 'సర్పరూపంలో తపస్సు చేసిన స్వామి — స్థలపురాణం',
  serpent: [
    'సాధారణంగా చెప్పబడే ఆలయ సంప్రదాయం ప్రకారం, చిరయువులుగా భావించే నలుగురు మహర్షులు ఒకసారి కైలాసానికి పరమశివుని దర్శించడానికి వచ్చారు. వారు లోకాసక్తులకు దూరంగా ఉండే తపోవ్రతులు. అలంకారాలతో ఉన్న దేవతల మధ్య వారిని చూసిన బాల సుబ్రహ్మణ్యుడు అమాయకంగా నవ్వాడని కథ చెబుతుంది.',
    'ఆ ప్రవర్తన సరైంది కాదని పార్వతీదేవి మందలించగా, తన తప్పును గ్రహించిన సుబ్రహ్మణ్యుడు ప్రాయశ్చిత్తంగా తపస్సు చేయాలని నిర్ణయించుకున్నాడని చెబుతారు. స్థానిక సంప్రదాయం ప్రకారం ఆయన సర్పరూపంలో భూమికి వచ్చి దీర్ఘ తపస్సు చేసిన ప్రదేశమే మోపిదేవి.',
    'ఈ సర్పరూప తపస్సు కథ వల్లే మోపిదేవి క్షేత్రం నాగారాధన, సర్పదోష నివారణ, రాహు-కేతు సంబంధిత పూజలతో ప్రత్యేకంగా అనుబంధించబడింది.',
  ],
  swayambhuHeading: 'స్వయంభూ స్వామి వెలుగు చూసిన కథ',
  swayambhu: [
    'మరొక ప్రసిద్ధ స్థానిక కథ వీరవరపు పర్వతాలు అనే కుమ్మరి భక్తుడితో సంబంధం కలిగి ఉంది. స్వామి ఆయన కలలో ప్రత్యక్షమై, గ్రామంలోని ఒక పుట్టలో తన దివ్య సాన్నిధ్యం ఉందని తెలిపాడని చెబుతారు.',
    'అతను గ్రామస్తులతో కలిసి ఆ పుట్టను తెరిచి స్వయంభూ రూపాన్ని దర్శించాడని స్థానిక విశ్వాసం. పర్వతాలు స్వామికి సంబంధించిన మట్టి విగ్రహాలను తయారు చేశాడనే కథ కూడా ప్రచారంలో ఉంది. ఈ కథ మోపిదేవి ఆలయాన్ని రాజసిక నిర్మాణం కంటే గ్రామీణ భక్తి సంప్రదాయంతో మరింత దగ్గరగా కలుపుతుంది.',
  ],
  whyHeading: 'భక్తులు మోపిదేవికి ఎందుకు వస్తారు?',
  why: [
    {
      title: 'సర్పదోషం / నాగదోషం',
      text: 'జాతకంలో నాగ సంబంధిత దోషాల వల్ల కలిగే అడ్డంకులు తగ్గాలని భక్తులు ప్రార్థిస్తారు.',
    },
    {
      title: 'రాహు-కేతు దోషాలు',
      text: 'ఆలస్యం, ఆటంకాలు, జాతక సమస్యలు తగ్గాలని ప్రత్యేక పూజలు చేస్తారు.',
    },
    {
      title: 'వివాహ ప్రార్థనలు',
      text: 'వివాహం ఆలస్యమవుతున్న వారు లేదా కుటుంబ సౌఖ్యం కోరేవారు స్వామిని ఆశ్రయిస్తారు.',
    },
    {
      title: 'సంతాన ప్రార్థనలు',
      text: 'సంతానం కోసం దంపతులు మోపిదేవికి రావడం ప్రసిద్ధ సంప్రదాయం.',
    },
    {
      title: 'పిల్లల మొక్కులు',
      text: 'ఊయల కట్టడం, తలనీలాలు సమర్పించడం, చెవి కుట్టించడం వంటి ఆచారాలు కొన్ని కుటుంబాలలో ఉంటాయి.',
    },
    {
      title: 'ఆరోగ్యానికి సంబంధించిన ప్రార్థనలు',
      text: 'కొన్ని స్థానిక సంప్రదాయాల్లో ఆరోగ్య సమస్యల కోసం కూడా ప్రార్థనలు ప్రస్తావించబడతాయి; ఇవి భక్తి విశ్వాసాలు మాత్రమే, వైద్య చికిత్సకు ప్రత్యామ్నాయం కావు.',
    },
  ],
  ritualsHeading: 'ప్రసిద్ధ పూజలు మరియు ఆచారాలు',
  rituals: [
    {
      name: 'సర్పదోష నివారణ పూజ',
      purpose: 'సర్ప / నాగదోషాలకు సంబంధించిన అడ్డంకులు తగ్గాలని భక్తులు చేసే పూజ.',
    },
    {
      name: 'రాహు-కేతు పూజ',
      purpose: 'రాహు-కేతు ప్రభావాలతో అనుబంధించే ఆలస్యం, ఆటంకాలు తగ్గాలని ప్రార్థించే పూజ.',
    },
    {
      name: 'నాగ ప్రతిష్ఠ',
      purpose: 'నాగ సంబంధిత మొక్కులు లేదా దోష పరిహారంలో భాగంగా కొందరు చేసే విశిష్ట ఆచారం.',
    },
    {
      name: 'అనపత్య సంబంధిత పూజ',
      purpose: 'సంతానం కోసం దంపతులు చేసే ప్రార్థనలతో అనుబంధించబడిన ఆచారం.',
    },
    {
      name: 'రుద్రాభిషేకం / అభిషేకం',
      purpose: 'ఆశీర్వాదం మరియు వ్యక్తిగత సంకల్పాల నెరవేర్పు కోసం చేసే భక్తి పూజ.',
    },
    {
      name: 'ఊయల మొక్కు',
      purpose:
        'సంతానం కోసం కొత్త చీరతో ఊయల కట్టి పవిత్ర వృక్షానికి సమర్పించే సంప్రదాయం కొన్ని కథనాల్లో కనిపిస్తుంది.',
    },
    {
      name: 'పొంగలి నైవేద్యం',
      purpose: 'త్వరగా వివాహం జరగాలని కొందరు భక్తులు బియ్యం-బెల్లంతో పొంగలి సమర్పిస్తారని చెబుతారు.',
    },
    {
      name: 'తలనీలాలు / చెవి కుట్టింపు',
      purpose: 'మొక్కు తీర్చుకోవడం లేదా పిల్లల కోసం కృతజ్ఞతార్పణగా కొన్ని కుటుంబాలు చేసే ఆచారాలు.',
    },
  ],
  festivalsHeading: 'పండుగలు మరియు రద్దీ సమయాలు',
  festivals:
    'సుబ్రహ్మణ్య షష్ఠి, స్కంద షష్ఠి, నాగుల చవితి, కార్తీక మాసం వంటి సందర్భాలలో ఎక్కువ మంది భక్తులు వస్తారని సాధారణంగా చెప్పబడుతుంది. ప్రతి సంవత్సరం ప్రత్యేక పూజలు, తేదీలు, సమయాలు మారవచ్చు కాబట్టి ప్రయాణానికి ముందు తాజా వివరాలు తెలుసుకోవడం మంచిది.',
  timingsHeading: 'ప్రస్తుతం ప్రచారంలో ఉన్న దర్శన సమయాలు',
  timings:
    'ప్రస్తుతం ప్రచారంలో ఉన్న దర్శన సమయాలు సాధారణంగా ఉదయం 5:30–మధ్యాహ్నం 1:00 మరియు సాయంత్రం 4:00–రాత్రి 8:00గా పేర్కొంటున్నారు. పండుగలు, ప్రత్యేక రోజులలో సమయాలు మారవచ్చు కాబట్టి ప్రయాణానికి ముందు నిర్ధారించుకోండి.',
  reachHeading: 'మోపిదేవికి ఎలా చేరుకోవాలి?',
  reach: [
    'విజయవాడ మరియు మచిలీపట్నం నుంచి రోడ్డు మార్గంలో కృష్ణా డెల్టా పట్టణాల గుండా మోపిదేవికి చేరుకోవచ్చు.',
    'రేపల్లె వైపు నుంచి వచ్చే వారు ప్రాంతీయ రహదారుల ద్వారా మోపిదేవికి చేరుకోవచ్చు. ప్రజా రవాణా సదుపాయాలు, రహదారి పరిస్థితులు మారవచ్చు కాబట్టి బయలుదేరే ముందు మీ మార్గాన్ని నిర్ధారించుకోండి.',
  ],
  tipsHeading: 'యాత్రికులకు ఉపయోగకరమైన సూచనలు',
  tips: [
    'రద్దీ రోజుల్లో ప్రశాంతమైన దర్శనం కావాలంటే ఉదయం త్వరగా రావడం మంచిది.',
    'వృద్ధులు లేదా చిన్న పిల్లలతో వస్తే ఉదయం, సాయంత్రం దర్శనాల మధ్య విశ్రాంతి సమయం ప్లాన్ చేసుకోండి.',
    'ప్రత్యేక పూజ చేయాలనుకుంటే ముందుగా ఆ రోజు విధానం, సమయం తెలుసుకోండి.',
    'ఉదయం చాలా త్వరగా చేరుకునే కుటుంబాలు హోమ్‌స్టేను ముందుగానే సంప్రదించండి; ముందస్తు నిర్ధారణతో ఫ్లెక్సిబుల్ చెక్-ఇన్ అందుబాటులో ఉండవచ్చు.',
  ],
  midCtaHeading: 'కుటుంబంతో మోపిదేవి వస్తున్నారా?',
  midCtaText:
    'శ్రీ గురు రాఘవేంద్ర హోమ్‌స్టేలో విశాలమైన గదులు, కిచెన్ సౌకర్యం, ప్రశాంతమైన టెర్రస్ మరియు స్థానిక మార్గదర్శక సహాయం అందుబాటులో ఉన్నాయి.',
  midCtaLabel: 'WhatsApp లో స్టే అందుబాటులో ఉందో తెలుసుకోండి',
  finalCtaTitle: 'దర్శనం తర్వాత ప్రశాంతంగా ఉండాలనుకుంటున్నారా?',
  finalCtaText: 'మీ ప్రయాణ తేదీలు WhatsApp లో పంపండి — మోపిదేవిలో సౌకర్యవంతమైన స్టే ప్లాన్ చేసుకోవడంలో సాయం చేస్తాం.',
};
