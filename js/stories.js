/* ═══════════════════════════════════════════════════════════
   STORY MODAL ENGINE — Kurdistan Site
   Opens rich, translated story modals for culture cards
   ═══════════════════════════════════════════════════════════ */

/* ──────────────────────────────────────────────────────────
   STORY DATA (full content in ar / en / ku)
────────────────────────────────────────────────────────── */
const storyData = {

  /* ══════════════ NOWRUZ ══════════════ */
  nowruz: {
    ar: {
      tag: "عيد كوردي",
      title: "نوروز — عيد رأس السنة الكوردي",
      banner_bg: "linear-gradient(135deg,#1a3a0a,#2d5c15)",
      banner_icon: "🌿",
      sections: [
        {
          icon: "📜",
          title: "أصل الاحتفال",
          content: `نوروز — يعني حرفيًا «اليوم الجديد» (نو = جديد، روز = يوم) — هو أعظم أعياد الشعب الكوردي وأقدمها. تمتد جذوره إلى أكثر من ٣٠٠٠ سنة في حضارات الهلال الخصيب، وهو مرتبط بأسطورة الحداد كاوه الذي ثار على الطاغية الضحاك.

وفق الأسطورة الكوردية، كان الملك الظالم الضحاك يذبح شبابًا كل يوم ليُطعم أفاعي تنبت من كتفيه بدماء البشر. لكن الحداد كاوه، بعد أن فقد أبناءه، حمل مطرقته وانتفض بالشعب ضد الضحاك في أول يوم من الربيع — فكان ذلك أول نوروز. منذ ذلك الحين، يُشعل الكورد النيران على قمم الجبال إعلانًا للحرية وانتصارًا للحياة.`
        },
        {
          icon: "📅",
          title: "متى يُحتفل به؟",
          content: "يُحتفل بنوروز كل عام في ٢١ مارس، وهو يوم الاعتدال الربيعي. اعترفت الأمم المتحدة بنوروز يومًا دوليًا في عام ٢٠١٠، ويحتفل به أكثر من ٣٠٠ مليون شخص حول العالم في إيران، أفغانستان، أذربيجان، ألبانيا، وكوردستان.",
          type: "info",
          cards: [
            { icon: "📆", label: "تاريخ الاحتفال", value: "٢١ مارس" },
            { icon: "🌍", label: "عدد المحتفلين", value: "+٣٠٠ مليون" },
            { icon: "🏛️", label: "اعتراف أممي", value: "٢٠١٠" },
            { icon: "📖", label: "عمر الاحتفال", value: "+٣٠٠٠ سنة" }
          ]
        },
        {
          icon: "🔥",
          title: "طقوس وتقاليد نوروز",
          content: "لنوروز طقوس عريقة تختلف قليلًا من منطقة إلى أخرى، لكنها تشترك في روح واحدة:",
          steps: [
            "إشعال النيران الكبيرة على قمم الجبال والتلال ليلة ٢٠ مارس — رمز طرد الظلام وإعلان النصر.",
            "الرقص الجماعي بالزي الكوردي التقليدي الملوّن — حلقات الهوري (Hore) تجمع الشباب والشيخ.",
            "تناول الأطباق التقليدية الخاصة كالدولمة وأطباق البيض المسلوق المزيّن.",
            "قفز الشباب فوق النيران — رمز التطهر والتجدد والشفاء من أمراض الشتاء.",
            "الزيارات العائلية وتبادل الهدايا وارتداء الملابس الجديدة.",
            "إقامة الأسواق والمهرجانات الشعبية في الساحات والبساتين.",
          ]
        },
        {
          icon: "💬",
          title: "نوروز في الأدب والشعر",
          quote: `«في نوروز تضحك الجبال وتبكي الشتاءات، يعود الربيع كما يعود الأبطال من الغياب.»\n— من الشعر الكوردي الشعبي`,
          content: "وصف الشعراء الكورد نوروز وصفًا ملحميًا عبر الأجيال؛ فهو عندهم ليس مجرد عيد بل هو قيامة الشعب وانبعاثه من عتمة الظلم. ربطه الشاعر أحمدي خاني بالحرية والانعتاق في ملحمته الشهيرة «مم وزين»."
        }
      ]
    },

    en: {
      tag: "Kurdish Holiday",
      title: "Nowruz — Kurdish New Year",
      banner_bg: "linear-gradient(135deg,#1a3a0a,#2d5c15)",
      banner_icon: "🌿",
      sections: [
        {
          icon: "📜",
          title: "Origins of the Celebration",
          content: `Nowruz — literally meaning "New Day" (Now = New, Roz = Day) — is the greatest and oldest holiday of the Kurdish people, with roots stretching back over 3,000 years. It is linked to the legend of the blacksmith Kawa, who rose against the tyrant Zahhak.

According to Kurdish legend, the cruel king Zahhak had serpents growing from his shoulders that demanded young human brains for food each day. Kawa the blacksmith, having lost his sons, raised his hammer and led the people in rebellion on the first day of spring — and that was the first Nowruz. Since then, Kurds light fires on mountaintops as a declaration of freedom and a triumph of life over death.`
        },
        {
          icon: "📅",
          title: "When is it Celebrated?",
          content: "Nowruz is celebrated on March 21st, the spring equinox. The United Nations recognized Nowruz as an International Day in 2010. Over 300 million people worldwide celebrate it across Iran, Afghanistan, Azerbaijan, Albania, and Kurdistan.",
          type: "info",
          cards: [
            { icon: "📆", label: "Date", value: "March 21" },
            { icon: "🌍", label: "Celebrants", value: "+300 million" },
            { icon: "🏛️", label: "UN Recognition", value: "2010" },
            { icon: "📖", label: "Age", value: "3000+ years" }
          ]
        },
        {
          icon: "🔥",
          title: "Traditions & Rituals",
          content: "Nowruz has ancient rituals that vary slightly by region, but share one spirit:",
          steps: [
            "Lighting great bonfires on mountaintops and hills on the night of March 20 — symbolizing the expulsion of darkness.",
            "Collective dancing in colorful traditional Kurdish dress — Hore circle dances uniting young and old.",
            "Preparing traditional dishes like dolma and decorated boiled eggs.",
            "Young people jump over fires — symbolizing purification, renewal, and healing.",
            "Family visits, gift exchanges, and wearing new clothes.",
            "Folk festivals and markets in town squares and gardens.",
          ]
        },
        {
          icon: "💬",
          title: "Nowruz in Literature & Poetry",
          quote: `"On Nowruz the mountains laugh and winters weep, spring returns as heroes return from absence."\n— Kurdish folk poetry`,
          content: "Kurdish poets have described Nowruz in epic terms through the centuries — it is not merely a holiday but the resurrection of a people from the darkness of oppression."
        }
      ]
    },

    ku: {
      tag: "Cejna Kurdî",
      title: "Newroz — Serê Salê Kurdî",
      banner_bg: "linear-gradient(135deg,#1a3a0a,#2d5c15)",
      banner_icon: "🌿",
      sections: [
        {
          icon: "📜",
          title: "Destpêka Cejna Newrozê",
          content: `Newroz — wateya wê bi rêkî «Roja Nû» e (New = Nû, Roz = Roj) — ev cejna herî mezin û herî kevn a gelê Kurdî ye, bi koka xwe ya zêdetirî 3000 salan. Ew bi efsaneya hesinkar Kawa ve girêdayî ye ku li dijî zalim Dehak rabû.

Li gorî efsaneya Kurdî, padîşahê zalim Dehak mar li ser milên wî hene û roj bi roj mejiyê ciwan dixarin. Kawa hesinkar, piştî ku kurên wî hatin kuştin, çekûça xwe hilgirt û gel li dijî Dehak rabûn. Ew di yekem roja biharê de bû — û ew yekem Newroz bû. Ji wê demê de, Kurd agir li serê çiyayan vêdixin da ku azadî û jiyanê ragihînin.`
        },
        {
          icon: "📅",
          title: "Newroz Kengê Tê Pîrozkirin?",
          content: "Newroz her sal di 21ê Adarê de tê pîrozkirin — roja hevsengiya biharê. Neteweyên Yekbûyî di sala 2010an de Newroz wek Roja Navneteweyî nas kir. Zêdetirî 300 milyonî kes li Îran, Efganistan, Azerbaycan, Arnavutlûk û Kurdistanê pîroz dikin.",
          type: "info",
          cards: [
            { icon: "📆", label: "Dîrok", value: "21 Adar" },
            { icon: "🌍", label: "Hejmar", value: "+300 milyon" },
            { icon: "🏛️", label: "Nasîna NYê", value: "2010" },
            { icon: "📖", label: "Temenê Cejnê", value: "+3000 sal" }
          ]
        },
        {
          icon: "🔥",
          title: "Kevneşopî û Rêûresm",
          content: "Newroz xwediyê gelek kevneşopiyan e:",
          steps: [
            "Şevaroşa 20ê Adarê: agirên mezin li serê çiyayan û gundên bilind tên vêxistin.",
            "Dîlana komî bi kincên kevneşopî yên Kurdî — dîlana Horeyê ya bi derdor tê kirin.",
            "Xwarinên taybet mîna dolmê û hêkên boyaxkirî tên amadekirin.",
            "Ciwanên jin û mêr ji ser agir diqeltin — sembolê paqijbûn û nûbûnê ye.",
            "Serdana malbatan û peşkêşkirina diyariyan û li xwe kincên nû kirin.",
            "Bazarên gelêrî û cejna li qadan û baxçan.",
          ]
        },
        {
          icon: "💬",
          title: "Newroz di Wêje û Helbestê de",
          quote: `«Di Newrozê de çiyayên bişkivin û zivistanê bigirî, bihar wek lehengên ku ji xirtûmê digerên.»\n— ji helbesta gelêrî ya Kurdî`,
          content: "Helbestvanên Kurd bi dengek lehengî Newroz wesifdine — ew ji bo wan ne tenê cejna ye, lê vejîna gelekî ye ji tarîtiya zulmê."
        }
      ]
    }
  },

  /* ══════════════ CLOTHING ══════════════ */
  clothing: {
    ar: {
      tag: "التراث الكوردي",
      title: "الزي الكوردي التقليدي",
      banner_bg: "linear-gradient(135deg,#2c1a3a,#5c1590)",
      banner_icon: "👘",
      sections: [
        {
          icon: "📜",
          title: "تاريخ الزي الكوردي",
          content: `الزي الكوردي التقليدي هو أحد أكثر الأزياء الشعبية في منطقة الشرق الأوسط تنوعًا وجمالًا وعمقًا. يعكس الزي الكوردي تاريخًا يمتد لآلاف السنين، وهو يختلف من منطقة إلى أخرى ومن قبيلة إلى أخرى، مما يجعله موسوعة ثقافية متكاملة على الجسد.

الكورد لم يحتفظوا بزيهم التقليدي كتراث متحفي فحسب، بل يرتدونه في المناسبات الكبرى كنوروز والأعراس والأعياد، وكثير من الشباب الكوردي يفتخر بارتدائه في يومياته.`
        },
        {
          icon: "👗",
          title: "الزي النسائي الكوردي",
          content: "يتميز الزي النسائي الكوردي بألوانه الزاهية وتطريزه اليدوي الفاخر:",
          steps: [
            "الفستان الطويل (كراس Kras): فستان ملوّن مطرّز يمتد حتى القدمين، يصنع من الحرير أو القطن الفاخر.",
            "الدمامل والحلي الذهبية: خاصة في المناسبات، تُزيّن المرأة الكوردية بأساور وأقراط وعقود ذهبية مشغولة يدويًا.",
            "الطرحة أو الوشاح المطرّز: يلف الرأس بأناقة ويُظهر الهوية القبلية.",
            "الحزام الملوّن (شال): يُربط حول الخصر ويضيف بُعدًا جماليًا للزي.",
            "الحذاء الكوردي (كلاش Klash): صنيع يدوي بنقوش تقليدية.",
          ]
        },
        {
          icon: "🧥",
          title: "الزي الرجالي الكوردي",
          content: "الزي الرجالي الكوردي لا يقل أناقة وعمقًا:",
          steps: [
            "الشروال (Shal): بنطلون فضفاض واسع في الوسط يضيق عند الساقين، يمنح حرية الحركة.",
            "الكوفية الكوردية (Jamadani): وشاح رأس ملوّن يُعقد بطريقة مميزة تعكس الانتماء القبلي.",
            "القميص (Kras): قميص طويل ملوّن مع حزام متموج.",
            "الحزام المرصّع (Kamarband): حزام جلدي أو قماشي مزيّن بنقوش هندسية.",
            "المشلح أو العباءة في المناسبات الرسمية.",
          ]
        },
        {
          icon: "🗺️",
          title: "التنوع الإقليمي في الزي",
          content: "يختلف الزي الكوردي بحسب المنطقة الجغرافية:",
          type: "info",
          cards: [
            { icon: "🌿", label: "باشور (عراق)", value: "ألوان زاهية — حمراء وخضراء" },
            { icon: "🌙", label: "باكور (تركيا)", value: "أسود وبنفسجي مع تطريز ذهبي" },
            { icon: "🌄", label: "روجافا (سوريا)", value: "أبيض وأصفر مع نقوش ملونة" },
            { icon: "⛰️", label: "روجهلات (إيران)", value: "أزرق وأخضر مع كوفية مميزة" }
          ]
        },
        {
          icon: "💬",
          title: "الزي والهوية الثقافية",
          quote: `«الكوردي حين يرتدي زيه، يرتدي وطنه كله — تاريخه وجباله وأنهاره وأجداده.»\n— مثل كوردي`,
          content: "في السياق السياسي والتاريخي، كان ارتداء الزي الكوردي في بعض الأحيان فعلًا مقاومة في مناطق كانت فيها الهوية الكوردية مقيّدة. اليوم، يرمز الزي إلى الفخر والانتماء والاستمرارية الحضارية."
        }
      ]
    },

    en: {
      tag: "Kurdish Heritage",
      title: "Traditional Kurdish Dress",
      banner_bg: "linear-gradient(135deg,#2c1a3a,#5c1590)",
      banner_icon: "👘",
      sections: [
        {
          icon: "📜",
          title: "History of Kurdish Dress",
          content: `Kurdish traditional dress is one of the most diverse, beautiful, and culturally rich folk costumes in the Middle East. It reflects a history spanning thousands of years and varies from region to region and tribe to tribe, making it a complete cultural encyclopedia worn on the body.

Kurds haven't preserved their traditional dress merely as a museum artifact — they wear it at major occasions like Nowruz, weddings, and festivals, and many young Kurds proudly wear it in daily life.`
        },
        {
          icon: "👗",
          title: "Women's Kurdish Dress",
          content: "Women's Kurdish dress is distinguished by its vibrant colors and exquisite handmade embroidery:",
          steps: [
            "The long dress (Kras): a colorful embroidered dress reaching the feet, made from silk or fine cotton.",
            "Gold jewelry and ornaments: especially for occasions, Kurdish women adorn themselves with handcrafted bracelets, earrings, and necklaces.",
            "The embroidered headscarf: elegantly wrapped and reflecting tribal identity.",
            "The colorful sash (Shal): tied around the waist, adding an aesthetic dimension.",
            "Kurdish shoes (Klash): handcrafted with traditional motifs.",
          ]
        },
        {
          icon: "🧥",
          title: "Men's Kurdish Dress",
          content: "Men's Kurdish dress is equally elegant and meaningful:",
          steps: [
            "Shal (baggy trousers): wide-legged trousers that narrow at the ankle, allowing freedom of movement.",
            "Kurdish keffiyeh (Jamadani): a colorful head wrap tied in a distinctive style reflecting tribal affiliation.",
            "Long colorful shirt (Kras) with a wavy belt.",
            "Ornate belt (Kamarband): leather or fabric decorated with geometric patterns.",
            "Cloak or robe for formal occasions.",
          ]
        },
        {
          icon: "🗺️",
          title: "Regional Variations",
          content: "Kurdish dress varies by geographic region:",
          type: "info",
          cards: [
            { icon: "🌿", label: "Bashur (Iraq)", value: "Vibrant reds and greens" },
            { icon: "🌙", label: "Bakur (Turkey)", value: "Black and purple with gold embroidery" },
            { icon: "🌄", label: "Rojava (Syria)", value: "White and yellow with colorful patterns" },
            { icon: "⛰️", label: "Rojhelat (Iran)", value: "Blue and green with distinctive keffiyeh" }
          ]
        },
        {
          icon: "💬",
          title: "Dress & Cultural Identity",
          quote: `"When a Kurd wears their dress, they wear their entire homeland — its history, mountains, rivers, and ancestors."\n— Kurdish proverb`,
          content: "Historically, wearing Kurdish dress was sometimes an act of resistance in regions where Kurdish identity was suppressed. Today, it symbolizes pride, belonging, and cultural continuity."
        }
      ]
    },

    ku: {
      tag: "Mîrasa Kurdî",
      title: "Cilûbergên Neteweyî yên Kurdî",
      banner_bg: "linear-gradient(135deg,#2c1a3a,#5c1590)",
      banner_icon: "👘",
      sections: [
        {
          icon: "📜",
          title: "Dîroka Cilûbergên Kurdî",
          content: `Cilûbergên kevneşopî yên Kurdî yek ji xweşiktrîn û dewlemendtrîn cilûbergên gelêrî li Rojhilata Navîn e. Ev cilûberg dîrokeke bi hezaran salan nîşan dide û ji herêmekê ber bi herêmeke din ve diguhere, ku her yek çanda xwe ya taybetî nîşan dide.

Kurd cilûbergên xwe ne tenê wek tiştek mîzeximî diparêzin — di bûyerên mezin de mîna Newrozê, dawetan û cejnan li xwe dikin, û gelek ciwanên Kurd bi serbilindî li xwe dikin.`
        },
        {
          icon: "👗",
          title: "Cilûbergên Jinên Kurd",
          content: "Cilûbergên jinên Kurd bi rengên xweş û xemilandinên destkar ên xweşik tên naskirin:",
          steps: [
            "Kirasê dirêj (Kras): kirasekî rengîn û xemilkirî heya lingê, ji hevsim an pemboyê çêkirî.",
            "Zêrûzîv û xemilandinên zêr: bi taybetî di bûyeran de, jinên Kurd xwe bi destkarên zêrîn dixemilînin.",
            "Şalê serê xemilkirî: bi awayekî nazik tê girêdan û nasnameya eşîrê nîşan dide.",
            "Kembera rengîn (Şal): li dora waştê tê girêdan.",
            "Pêlawên Kurdî (Klash): destkar bi xemlên kevneşopî.",
          ]
        },
        {
          icon: "🧥",
          title: "Cilûbergên Mêrên Kurd",
          content: "Cilûbergên mêrên Kurd jî xweşik û dewlemend in:",
          steps: [
            "Şal (pantorê fireh): pantoreke fireh ku li ser lingê teng dibe, azadiya tevgerê dide.",
            "Jamadanî (Kofiye): sermaleke rengîn ku bi şêwazek taybetî tê girêdan.",
            "Kirasê dirêj ê rengîn bi kemberek tevlihev.",
            "Kembera xemilkirî (Kamarband): çerm an qumaş bi xemlên geometrîk.",
            "Lihêfa an gerenal ji bo bûyerên fermî.",
          ]
        },
        {
          icon: "🗺️",
          title: "Cûdahiya Herêmî",
          content: "Cilûbergên Kurdî li gorî herêmê diguhere:",
          type: "info",
          cards: [
            { icon: "🌿", label: "Başûr (Iraq)", value: "Sor û kesk ên geş" },
            { icon: "🌙", label: "Bakur (Tirkiye)", value: "Reş û binefşî bi zêrê zêrîn" },
            { icon: "🌄", label: "Rojava (Sûriye)", value: "Spî û zer bi xemlên rengîn" },
            { icon: "⛰️", label: "Rojhilat (Îran)", value: "Şîn û kesk bi jamadaniyeke taybetî" }
          ]
        },
        {
          icon: "💬",
          title: "Cil û Nasnameya Çandî",
          quote: `«Dema Kurdekî cilên xwe li xwe dike, welata xwe ya tevahî li xwe dike — dîrok, çiya, çem û bapîrên xwe.»\n— Gotina gelêrî ya Kurdî`,
          content: "Di hevdengiya siyasî û dîrokî de, carinan li xwe kirin cilûbergên Kurdî bûye çalakiyek berxwedanê. Îro, cil sembolê serbilindî, xwebelengazî û berdewamiya çandî ye."
        }
      ]
    }
  },

  /* ══════════════ LANGUAGE ══════════════ */
  language: {
    ar: {
      tag: "اللغة والهوية",
      title: "اللغة الكوردية — لسان الأمة",
      banner_bg: "linear-gradient(135deg,#1a2a3a,#155c5c)",
      banner_icon: "🗣️",
      sections: [
        {
          icon: "📜",
          title: "نبذة عن اللغة الكوردية",
          content: `اللغة الكوردية إحدى أقدم وأغنى لغات منطقة الشرق الأوسط. تنتمي إلى المجموعة الإيرانية من عائلة اللغات الهندوأوروبية، وتُعد بذلك قريبة من الفارسية والبشتو وبعض اللغات الهندية.

يتحدث الكوردية ما بين ٣٠ و٤٠ مليون شخص حول العالم، مما يجعلها إحدى أكبر لغات العالم التي لا تمتلك دولة مستقلة تُعبّر عنها. رغم ذلك، ازدهرت الكوردية في الأدب والشعر والموسيقى والصحافة عبر قرون طويلة.`
        },
        {
          icon: "🗺️",
          title: "اللهجات الكوردية الرئيسية",
          content: "تنقسم الكوردية إلى ثلاث لهجات رئيسية:",
          type: "info",
          cards: [
            { icon: "🌿", label: "كورمانجي", value: "الأكثر انتشارًا — باكور وروجافا" },
            { icon: "📖", label: "سورانية", value: "باشور وروجهلات — اللغة الأدبية" },
            { icon: "🌙", label: "زازا", value: "منطقة ديرسم وشمال شرق تركيا" },
            { icon: "⛰️", label: "لوري", value: "جنوب غرب إيران وتعتبر قريبة" }
          ]
        },
        {
          icon: "✍️",
          title: "الكتابة والأبجدية",
          content: `استخدم الكورد أنظمة كتابة متعددة عبر التاريخ:

• **الأبجدية الكوردية اللاتينية (هَوراماني)**: تُستخدم في كوردستان تركيا وسوريا، طوّرها جيلادت بدرخان في ثلاثينيات القرن الماضي.

• **الأبجدية العربية المعدّلة**: تُستخدم في إقليم كوردستان العراق (باشور) والجمهورية الإيرانية.

• **النصوص القديمة**: الكوردية الكلاسيكية كُتبت بأبجدية خاصة تعود إلى آلاف السنين.`
        },
        {
          icon: "🎓",
          title: "لوحة تعلم الكوردية",
          content: "هذه اللوحة مصممة لتمنحك مسارًا عمليًا في تعلم الكوردية: ابدأ بالحروف، ثم العبارات اليومية، ثم الأرقام، ثم اللهجات المختلفة. كل تبويب يضع بين يديك أداة جديدة للتقدم خطوة بخطوة.",
          is_learn: true
        }
      ]
    },

    en: {
      tag: "Language & Identity",
      title: "Kurdish Language — Voice of a Nation",
      banner_bg: "linear-gradient(135deg,#1a2a3a,#155c5c)",
      banner_icon: "🗣️",
      sections: [
        {
          icon: "📜",
          title: "About the Kurdish Language",
          content: `Kurdish is one of the oldest and richest languages in the Middle East. It belongs to the Iranian branch of the Indo-European language family, making it related to Persian, Pashto, and some Indian languages.

Between 30 and 40 million people speak Kurdish worldwide, making it one of the world's largest languages without an independent state to call its own. Despite this, Kurdish has flourished in literature, poetry, music, and journalism across many centuries.`
        },
        {
          icon: "🗺️",
          title: "Main Kurdish Dialects",
          content: "Kurdish is divided into three main dialects:",
          type: "info",
          cards: [
            { icon: "🌿", label: "Kurmanji", value: "Most spoken — Bakur & Rojava" },
            { icon: "📖", label: "Sorani", value: "Bashur & Rojhelat — literary standard" },
            { icon: "🌙", label: "Zaza", value: "Dersim region, NE Turkey" },
            { icon: "⛰️", label: "Luri", value: "SW Iran — closely related" }
          ]
        },
        {
          icon: "✍️",
          title: "Writing Systems",
          content: `Kurds have used multiple writing systems throughout history:

• **Latin-based Kurdish script**: Used in Turkish and Syrian Kurdistan, developed by Jeladet Bedir Khan in the 1930s.

• **Modified Arabic script**: Used in the Kurdistan Region of Iraq (Bashur) and Iran.

• **Classical scripts**: Classical Kurdish texts were written with their own ancient alphabet.`
        },
        {
          icon: "🎓",
          title: "Kurdish Learning Hub",
          content: "This learning hub gives you a practical path into Kurdish: start with the alphabet, then everyday phrases, then numbers, and finally the main dialects. Each tab gives you a focused way to progress.",
          is_learn: true
        }
      ]
    },

    ku: {
      tag: "Ziman û Nasnameya",
      title: "Zimanê Kurdî — Dengê Miletekî",
      banner_bg: "linear-gradient(135deg,#1a2a3a,#155c5c)",
      banner_icon: "🗣️",
      sections: [
        {
          icon: "📜",
          title: "Zimanê Kurdî",
          content: `Zimanê Kurdî yek ji kevntirîn û dewlemendtrîn zimanên Rojhilata Navîn e. Ew ji koma Îranî ya malbata zimanên Hind-Ewropî ye, ku wê nêzîkî Farisî, Paştoyî û hin zimanên Hindî dike.

Di navbera 30 û 40 milyon kesan de li cîhanê Kurdî diaxivin, ku wê yek ji mezintirîn zimanên cîhanê dike ku bêyî dewleteke serbixwe ye. Lêbelê, Kurdî di wêje, helbest, muzîk û rojnamegeriyê de ji bo sedsalan geşedayî ye.`
        },
        {
          icon: "🗺️",
          title: "Zaravayên Sereke yên Kurdî",
          content: "Kurdî bi sê zaravayên sereke tê dabeşkirin:",
          type: "info",
          cards: [
            { icon: "🌿", label: "Kurmancî", value: "Herî belav — Bakur û Rojava" },
            { icon: "📖", label: "Soranî", value: "Başûr û Rojhilat — standard wêjeyî" },
            { icon: "🌙", label: "Zazayî", value: "Dêrsim — bakurê rojhilatê Tirkiyeyê" },
            { icon: "⛰️", label: "Lorî", value: "Başûrê rojavayê Îranê" }
          ]
        },
        {
          icon: "✍️",
          title: "Nivîsandin û Alfabe",
          content: `Kurd li seranserê dîrokê gelek pergalên nivîsandinê bikar anîne:

• **Alfabeya Latînî ya Kurdî**: Li Tirkiye û Sûriyeyê tê bikaranîn, di salên 1930î de ji hêla Jeladet Bedir Xan ve hatiye pêşxistin.

• **Alfabeya Erebî ya Guhezbar**: Li herêma Kurdistana Iraqê (Başûr) û Îranê tê bikaranîn.

• **Nivîsên Kevn**: Nivîsarên Kurdî yên klasîk bi alfabeya xwe ya kevn hatine nivîsandin.`
        },
        {
          icon: "🎓",
          title: "Navenda Fêrbûna Kurdî",
          content: "Ev navend rêyek pratîkî dide we ji bo fêrbûna Kurdî: bi alfabe dest pê bikin, paşê hevokên rojane, dûv re jimare, û di dawiyê de zaravayên sereke. Her tab awayekî baldar a pêşveçûnê dide we.",
          is_learn: true
        }
      ]
    }
  },

  /* ══════════════ HISTORY: SALAHADDIN ══════════════ */
  salahaddin: {
    ar: {
      tag: "شخصية تاريخية",
      title: "صلاح الدين الأيوبي — بطل التحرير",
      banner_bg: "linear-gradient(135deg, #4a3b11, #806315)",
      banner_icon: "⚔️",
      sections: [
        {
          icon: "📜",
          title: "نشأته وأصوله",
          content: "وُلد صلاح الدين يوسف بن أيوب عام ١١٣٨م في قلعة تكريت (بالعراق الحالي). ينتمي إلى عائلة كوردية عريقة من قبيلة الروادية. نشأ في دمشق وبعلبك حيث برع في العلوم والفقه والفروسية."
        },
        {
          icon: "🏰",
          title: "تأسيس الدولة الأيوبية",
          content: "استطاع صلاح الدين توحيد أجزاء كبيرة من العالم الإسلامي، شملت مصر والشام والحجاز واليمن، مؤسساً الدولة الأيوبية. كان قائداً فذاً وسياسياً حكيماً أعاد الوحدة للأمة في مرحلة حرجة."
        },
        {
          icon: "🛡️",
          title: "معركة حطين وتحرير القدس",
          content: "في عام ١١٨٧م، قاد صلاح الدين جيوشه في معركة حطين الفاصلة، والتي انتهت بانتصار ساحق على الصليبيين. إثر ذلك، دخل مدينة القدس محرراً إياها بعد ٨٨ عاماً من الاحتلال الصليبي، وعفا عن سكانها في موقف تاريخي يجسد التسامح."
        },
        {
          icon: "💬",
          title: "إرثه",
          quote: "«لم أرى في حياتي رجلاً أكثر تسامحاً ورحمة من صلاح الدين.»\n— مؤرخون أوروبيون",
          content: "يظل صلاح الدين رمزاً للفروسية والعدل والتسامح، ويفتخر به الشعب الكوردي كأحد أعظم القادة الذين أنجبتهم الأمة."
        }
      ]
    },
    en: {
      tag: "Historical Figure",
      title: "Salahaddin Ayyubi — The Liberator",
      banner_bg: "linear-gradient(135deg, #4a3b11, #806315)",
      banner_icon: "⚔️",
      sections: [
        {
          icon: "📜",
          title: "Origins and Early Life",
          content: "Salahaddin Yusuf ibn Ayyub was born in 1138 CE in the citadel of Tikrit (in modern-day Iraq). He belonged to a noble Kurdish family from the Rawadiya tribe. He grew up in Damascus and Baalbek, excelling in theology, science, and horsemanship."
        },
        {
          icon: "🏰",
          title: "Founding the Ayyubid Dynasty",
          content: "Salahaddin unified large parts of the Islamic world, including Egypt, the Levant, Hejaz, and Yemen, establishing the Ayyubid Dynasty. He was a brilliant commander and wise statesman who restored unity during a critical era."
        },
        {
          icon: "🛡️",
          title: "Battle of Hattin & Liberation of Jerusalem",
          content: "In 1187 CE, Salahaddin led his armies in the decisive Battle of Hattin, scoring a crushing victory over the Crusaders. Subsequently, he liberated Jerusalem after 88 years of Crusader occupation, famously pardoning its inhabitants in a historic act of tolerance."
        },
        {
          icon: "💬",
          title: "Legacy",
          quote: "«I have never seen a man more tolerant and merciful than Salahaddin.»\n— European Historians",
          content: "Salahaddin remains a global symbol of chivalry, justice, and tolerance. The Kurdish people proudly remember him as one of their greatest sons."
        }
      ]
    },
    ku: {
      tag: "Kesayetiya Dîrokî",
      title: "Selaheddînê Eyûbî — Lehengê Rizgariyê",
      banner_bg: "linear-gradient(135deg, #4a3b11, #806315)",
      banner_icon: "⚔️",
      sections: [
        {
          icon: "📜",
          title: "Jidayikbûn û Koka Wî",
          content: "Selaheddîn Yûsiv kurê Eyûb di sala 1138an de li keleha Tikrîtê (Iraq) ji dayik bûye. Ew ji malbateke Kurd a resen ji eşîra Rewadî bû. Li Şam û Beilebekê mezin bû û di zanist û siwarbûnê de jêhatî bû."
        },
        {
          icon: "🏰",
          title: "Damezrandina Dewleta Eyûbî",
          content: "Selaheddîn karîbû beşên mezin ji cîhana îslamî yek bike, wekî Misir, Şam, Hîcaz û Yemenê, û Dewleta Eyûbî ava kir. Ew serkirdeyekî zîrek bû ku di demek dijwar de yekîtî vegerand."
        },
        {
          icon: "🛡️",
          title: "Şerê Hetînê û Rizgarkirina Qudsê",
          content: "Di sala 1187an de, wî artêşên xwe di Şerê Hetînê de birin serkeftineke mezin li dijî Xaçperestan. Piştre, wî bajarê Qudsê piştî 88 salan ji dagirkeriyê rizgar kir, û di helwêsteke dîrokî ya lêborînê de xelkê bajar bexşand."
        },
        {
          icon: "💬",
          title: "Mîrate",
          quote: "«Min di jiyana xwe de mirovekî ji Selaheddîn zêdetir bêtehemul û dilovan nedîtiye.»\n— Dîroknasên Ewropî",
          content: "Selaheddîn wekî sembola mêrxasî, dadperwerî û lêborînê dimîne, û gelê Kurd bi wî wekî yek ji serkirdeyên herî mezin serbilind e."
        }
      ]
    }
  },

  /* ══════════════ HISTORY: KHANI ══════════════ */
  khani: {
    ar: {
      tag: "أدب وشعر",
      title: "أحمدي خاني — فيلسوف الكورد",
      banner_bg: "linear-gradient(135deg, #2a1a3a, #4a2b66)",
      banner_icon: "✍️",
      sections: [
        {
          icon: "📜",
          title: "حياتــه",
          content: "وُلد الشاعر والفيلسوف الكوردي أحمدي خاني عام ١٦٥٠م في منطقة هكاري. يُعد من أعظم شعراء ومفكري الكورد، حيث لم يكن مجرد شاعر بل كان فيلسوفاً ومصلحاً يدعو إلى وحدة الكورد وتأسيس دولتهم."
        },
        {
          icon: "📖",
          title: "ملحمة مم وزين (Mem û Zîn)",
          content: "أشهر أعماله هي ملحمة «مم وزين» التي كُتبت عام ١٦٩٢م، وهي قصة حب تراجيدية تُشبه روميو وجولييت، لكنها تحمل أبعاداً فلسفية وصوفية عميقة، وتُعبّر عن الشوق للحرية والانعتاق. تعتبر هذه الملحمة الإنجيل القومي للأدب الكوردي."
        },
        {
          icon: "🎓",
          title: "أول قاموس كوردي",
          content: "ألف خاني كتاب «نوبهارا بجوكان» (ربيع الأطفال)، وهو أول قاموس عربي-كوردي مُنظّم شعرياً، خُصص لتعليم الأطفال الكورد لغتهم الأم واللغة العربية."
        },
        {
          icon: "💬",
          title: "فكرتــه القومية",
          quote: "«لو كان لنا اتحاد، لو كان لنا جميعاً قيادة واحدة... لفتحنا العالم.»\n— من قصائد أحمدي خاني",
          content: "كان خاني من أوائل الذين صاغوا الفكر القومي الكوردي، داعياً لنبذ التفرقة والتوحد من أجل بناء مستقبل أفضل للشعب الكوردي."
        }
      ]
    },
    en: {
      tag: "Literature & Poetry",
      title: "Ahmadi Khani — The Kurdish Philosopher",
      banner_bg: "linear-gradient(135deg, #2a1a3a, #4a2b66)",
      banner_icon: "✍️",
      sections: [
        {
          icon: "📜",
          title: "His Life",
          content: "Kurdish poet and philosopher Ahmadi Khani was born in 1650 CE in the Hakkari region. He is considered one of the greatest Kurdish thinkers, acting not just as a poet but as a philosopher and reformer advocating for Kurdish unity."
        },
        {
          icon: "📖",
          title: "The Epic of Mem û Zîn",
          content: "His most famous work is the epic poem 'Mem û Zîn' (written in 1692). It is a tragic love story akin to Romeo and Juliet, but carrying profound mystical and philosophical dimensions, symbolizing the Kurdish yearning for freedom."
        },
        {
          icon: "🎓",
          title: "First Kurdish Dictionary",
          content: "Khani wrote 'Nûbihara Biçûkan' (The Spring of Children), the first Arabic-Kurdish dictionary written in verse, designed to teach Kurdish children both their mother tongue and Arabic."
        },
        {
          icon: "💬",
          title: "National Vision",
          quote: "«If only we had unity, if only we were all led by one crown... we would conquer the world.»\n— Ahmadi Khani",
          content: "Khani was one of the earliest pioneers of Kurdish nationalism, constantly urging his people to cast aside divisions and unite to build a sovereign future."
        }
      ]
    },
    ku: {
      tag: "Wêje û Helbest",
      title: "Ehmedê Xanî — Fîlozofê Kurdan",
      banner_bg: "linear-gradient(135deg, #2a1a3a, #4a2b66)",
      banner_icon: "✍️",
      sections: [
        {
          icon: "📜",
          title: "Jiyana Wî",
          content: "Helbestvan û fîlozofê Kurd Ehmedê Xanî di sala 1650î de li herêma Hekariyê ji dayik bûye. Ew yek ji mezintirîn helbestvan û rewşenbîrên Kurd e, ku ne tenê helbestvanek bû, lê fîlozof û reformxwazek bû ku banga yekîtiya Kurdan dikir."
        },
        {
          icon: "📖",
          title: "Destana Mem û Zîn",
          content: "Berhema wî ya herî navdar destana «Mem û Zîn» e (ku di 1692an de hatiye nivîsandin). Ev çîrokeke evînî ya trajîk e, lê xwedî aliyên kûr ên felsefî û tesewifî ye, û hesreta Kurdan ji bo azadiyê nîşan dide."
        },
        {
          icon: "🎓",
          title: "Yekem Ferhenga Kurdî",
          content: "Xanî pirtûka «Nûbihara Biçûkan» nivîsand, ku yekem ferhenga Erebî-Kurdî bi şêweyê helbestê bû, ji bo fêrkirina zarokên Kurd zimanê wan ê dayikê hatibû amadekirin."
        },
        {
          icon: "💬",
          title: "Ramana Wî ya Neteweyî",
          quote: "«Ger dîn û dewlet me hebiya... ger me yekgirtin hebiya, me yê cîhan hemî bigirta.»\n— Ehmedê Xanî",
          content: "Xanî yek ji pêşengên yekem bû ku bîrokeya neteweyî ya Kurdî darişt, û bang li Kurdan dikir ku duberekîyê bidin aliyekî û bibin yek."
        }
      ]
    }
  },

  /* ══════════════ HISTORY: LAUSANNE ══════════════ */
  lausanne: {
    ar: {
      tag: "حدث تاريخي",
      title: "معاهدة لوزان — تقسيم كوردستان",
      banner_bg: "linear-gradient(135deg, #3a1a1a, #662b2b)",
      banner_icon: "📜",
      sections: [
        {
          icon: "🌍",
          title: "خلفية تاريخية",
          content: "بعد الحرب العالمية الأولى وتفكك الإمبراطورية العثمانية، وُعد الكورد بحق تقرير المصير في معاهدة سيفر (١٩٢٠). لكن صعود مصطفى كمال أتاتورك وتأسيس الجمهورية التركية الحديثة غيّر موازين القوى الدولية."
        },
        {
          icon: "✍️",
          title: "توقيع المعاهدة",
          content: "في ٢٤ يوليو ١٩٢٣، تم توقيع معاهدة لوزان في سويسرا بين القوى العظمى المنتصرة وتركيا. تجاهلت هذه المعاهدة تماماً حقوق الكورد وألغت وعود معاهدة سيفر."
        },
        {
          icon: "✂️",
          title: "التقسيم والنتائج",
          content: "أدت المعاهدة إلى ترسيم الحدود الحالية في الشرق الأوسط، حيث قُسّمت كوردستان بين أربع دول حديثة: تركيا، العراق، سوريا، وإيران. أدى هذا التقسيم إلى حرمان الكورد من دولتهم المستقلة، وبدء حقبة طويلة من التهميش وصهر الهويات والثورات الكوردية المتلاحقة للمطالبة بالحقوق المسلوبة."
        }
      ]
    },
    en: {
      tag: "Historical Event",
      title: "Treaty of Lausanne — The Division",
      banner_bg: "linear-gradient(135deg, #3a1a1a, #662b2b)",
      banner_icon: "📜",
      sections: [
        {
          icon: "🌍",
          title: "Historical Background",
          content: "Following WWI and the collapse of the Ottoman Empire, Kurds were promised self-determination in the Treaty of Sèvres (1920). However, the rise of Mustafa Kemal Atatürk and the modern Turkish state shifted international power dynamics."
        },
        {
          icon: "✍️",
          title: "Signing the Treaty",
          content: "On July 24, 1923, the Treaty of Lausanne was signed in Switzerland between the victorious Allied powers and Turkey. This treaty completely ignored Kurdish rights and nullified the promises of Sèvres."
        },
        {
          icon: "✂️",
          title: "Division and Consequences",
          content: "The treaty established the modern borders of the Middle East, dividing Kurdistan across four newly defined borders: Turkey, Iraq, Syria, and Iran. This left the Kurds as the largest stateless nation in the world, sparking a century of struggle for basic rights and autonomy."
        }
      ]
    },
    ku: {
      tag: "Bûyera Dîrokî",
      title: "Peymana Lozanê — Dabeşkirina Kurdistanê",
      banner_bg: "linear-gradient(135deg, #3a1a1a, #662b2b)",
      banner_icon: "📜",
      sections: [
        {
          icon: "🌍",
          title: "Paşxaneya Dîrokî",
          content: "Piştî Şerê Cîhanî yê Yekem û hilweşîna Împaratoriya Osmanî, di Peymana Sêvrê (1920) de mafê çarenivîsê ji Kurdan re hatibû dayîn. Lêbelê, rabûna Ataturk û avakirina Tirkiyeya nû hevsengiya hêzên navneteweyî guhert."
        },
        {
          icon: "✍️",
          title: "Îmzekirina Peymanê",
          content: "Di 24ê Tîrmeha 1923an de, Peymana Lozanê li Swîsreyê hat îmzekirin. Vê peymanê mafên Kurdan bi tevahî paşguh kirin û sozên Peymana Sêvrê betal kirin."
        },
        {
          icon: "✂️",
          title: "Dabeşkirin û Encam",
          content: "Peymanê sînorên nû yên Rojhilata Navîn diyar kirin, û Kurdistan di navbera çar dewletan de dabeş kir: Tirkiye, Iraq, Sûriye û Îran. Vê yekê Kurd bêyî dewlet hiştin û serdemeke dirêj a têkoşîn û serhildanan dest pê kir."
        }
      ]
    }
  },

  /* ══════════════ HISTORY: KURDISTAN REGION ══════════════ */
  kurdistan_region: {
    ar: {
      tag: "تاريخ حديث",
      title: "إقليم كوردستان — الحكم الذاتي",
      banner_bg: "linear-gradient(135deg, #1a2a3a, #2b4a66)",
      banner_icon: "🏛️",
      sections: [
        {
          icon: "🕊️",
          title: "الانتفاضة وملاذ آمن",
          content: "بعد عقود من الاضطهاد والحروب، قام الكورد في العراق بانتفاضة شعبية كبرى عام ١٩٩١. وبفضل قرار مجلس الأمن رقم ٦٨٨، تم إنشاء ملاذ آمن وتأسيس أول برلمان وحكومة كوردية عام ١٩٩٢، ليصبح الإقليم كياناً شبه مستقل."
        },
        {
          icon: "📜",
          title: "الاعتراف الدستوري (٢٠٠٥)",
          content: "بعد سقوط النظام العراقي عام ٢٠٠٣، شارك الكورد في صياغة الدستور العراقي الجديد لعام ٢٠٠٥، والذي اعترف رسمياً بإقليم كوردستان كإقليم اتحادي (فيدرالي) يتمتع بصلاحيات واسعة، ليكون نموذجاً ناجحاً للحكم الذاتي."
        },
        {
          icon: "🏗️",
          title: "التطور والازدهار",
          content: "منذ ذلك الحين، شهد إقليم كوردستان نهضة عمرانية وثقافية واقتصادية، وأصبح ملاذاً للسلام والتعايش في منطقة مضطربة، وعاصمته أربيل (هولير) أصبحت مركزاً استثمارياً وسياحياً مهماً."
        }
      ]
    },
    en: {
      tag: "Modern History",
      title: "Kurdistan Region — Autonomy",
      banner_bg: "linear-gradient(135deg, #1a2a3a, #2b4a66)",
      banner_icon: "🏛️",
      sections: [
        {
          icon: "🕊️",
          title: "The Uprising & Safe Haven",
          content: "After decades of persecution, Kurds in Iraq led a massive popular uprising in 1991. Following UN Resolution 688, a safe haven was established, leading to the creation of the first Kurdish parliament and government in 1992."
        },
        {
          icon: "📜",
          title: "Constitutional Recognition (2005)",
          content: "Following the fall of the Iraqi regime in 2003, Kurds played a key role in drafting the new 2005 Iraqi Constitution. It officially recognized the Kurdistan Region as a federal entity with broad autonomous powers."
        },
        {
          icon: "🏗️",
          title: "Development & Prosperity",
          content: "Since then, the Kurdistan Region has experienced a cultural and economic renaissance, becoming an oasis of peace and coexistence in a turbulent region, with its capital Erbil becoming a major hub for investment and tourism."
        }
      ]
    },
    ku: {
      tag: "Dîroka Nûjen",
      title: "Herêma Kurdistanê — Xweserî",
      banner_bg: "linear-gradient(135deg, #1a2a3a, #2b4a66)",
      banner_icon: "🏛️",
      sections: [
        {
          icon: "🕊️",
          title: "Raperîn û Herêma Ewle",
          content: "Piştî bi dehan salan ji zilmê, Kurdên Iraqê di sala 1991an de raperîneke mezin pêk anîn. Bi biryara NY 688, herêmeke ewle hat avakirin, û yekem parlamento û hikûmeta Kurdî di 1992an de hatin damezrandin."
        },
        {
          icon: "📜",
          title: "Nasîna Destûrî (2005)",
          content: "Piştî rûxîna rejîma Iraqê di 2003an de, Kurdan tevlî nivîsandina Destûra Iraqê ya sala 2005an bûn, ku bi fermî Herêma Kurdistanê wekî herêmeke federal nas kir."
        },
        {
          icon: "🏗️",
          title: "Geşepêdan û Avadanî",
          content: "Ji wê demê ve, Herêma Kurdistanê bûye navendeke geşepêdan û pêşketinê, û bûye cihê aştî û pêkvejiyanê li herêmê, bi paytexta xwe Hewlêr."
        }
      ]
    }
  },

  /* ══════════════ CULTURE: FLAG ══════════════ */
  flag: {
    ar: {
      tag: "الرمز الوطني",
      title: "العلم الكوردي — آلا رنكين",
      banner_bg: "linear-gradient(135deg, #bd2c35, #1d823d)",
      banner_icon: "☀️",
      sections: [
        {
          icon: "🏳️",
          title: "رمز الأمة",
          content: "العلم الكوردي (آلا رنكين - Alaya Rengîn) هو الرمز القومي للشعب الكوردي في كل أجزاء كوردستان. ظهر لأول مرة في بدايات القرن العشرين، وتم رفعه رسمياً خلال جمهورية مهاباد عام ١٩٤٦."
        },
        {
          icon: "🎨",
          title: "دلالات الألوان",
          content: "يتكون العلم من ثلاثة خطوط أفقية، وشمس ساطعة في المنتصف:",
          steps: [
            "الأحمر: يرمز لدم الشهداء وللتضحية المستمرة من أجل الحرية والاستقلال.",
            "الأبيض: يرمز للسلام والنقاء والتعايش السلمي.",
            "الأخضر: يرمز لطبيعة كوردستان الخلابة وجبالها الخضراء وأراضيها الزراعية.",
            "الشمس الذهبية: ترمز لنور الحرية وتجدد الحياة ومقاومة الظلام."
          ]
        },
        {
          icon: "☀️",
          title: "سر الـ ٢١ شعاعاً",
          content: "تحتوي الشمس في وسط العلم على ٢١ شعاعاً بالضبط. هذا الرقم ليس عشوائياً، بل يرمز إلى ٢١ مارس، وهو يوم عيد نوروز (رأس السنة الكوردية الممثل للربيع والانتفاضة)."
        }
      ]
    },
    en: {
      tag: "National Symbol",
      title: "The Kurdish Flag — Ala Rengîn",
      banner_bg: "linear-gradient(135deg, #bd2c35, #1d823d)",
      banner_icon: "☀️",
      sections: [
        {
          icon: "🏳️",
          title: "Symbol of the Nation",
          content: "The Kurdish Flag (Ala Rengîn) is the national symbol of the Kurdish people across all parts of Kurdistan. It first appeared in the early 20th century and was officially flown during the Republic of Mahabad in 1946."
        },
        {
          icon: "🎨",
          title: "Meaning of the Colors",
          content: "The flag consists of three horizontal bands with a blazing sun in the center:",
          steps: [
            "Red: Symbolizes the blood of the martyrs and the continued struggle for freedom.",
            "White: Symbolizes peace, purity, and coexistence.",
            "Green: Represents the beautiful nature and green mountains of Kurdistan.",
            "Golden Sun: Represents the light of freedom, renewal of life, and resistance against darkness."
          ]
        },
        {
          icon: "☀️",
          title: "The 21 Rays",
          content: "The sun in the center has exactly 21 rays. This number is not random; it stands for March 21st, the day of Nowruz (the Kurdish New Year representing spring and uprising)."
        }
      ]
    },
    ku: {
      tag: "Sembola Neteweyî",
      title: "Alaya Kurdistanê — Ala Rengîn",
      banner_bg: "linear-gradient(135deg, #bd2c35, #1d823d)",
      banner_icon: "☀️",
      sections: [
        {
          icon: "🏳️",
          title: "Sembola Neteweyê",
          content: "Alaya Kurdistanê (Ala Rengîn) sembola neteweyî ya gelê Kurd e li hemû parçeyên Kurdistanê. Ew cara yekem di serê sedsala 20an de xuya bû û bi fermî di Komara Mahabadê de sala 1946an hat hildan."
        },
        {
          icon: "🎨",
          title: "Wateya Rengan",
          content: "Ala ji sê xetên asoyî û rojeke geş pêk tê:",
          steps: [
            "Sor: Sembola xwîna şehîdan û têkoşîna ji bo azadiyê ye.",
            "Spî: Sembola aştî û paqijiyê ye.",
            "Kesk: Sembola xwezaya bedew û çiyayên kesk ên Kurdistanê ye.",
            "Roja Zêrîn: Sembola ronahiya azadiyê û nûbûna jiyanê ye."
          ]
        },
        {
          icon: "☀️",
          title: "Nihêniya 21 Tîrêjan",
          content: "Roj di navenda alayê de tam 21 tîrêj hene. Ev hejmar ne tesaduf e, ew nûnertiya 21ê Adarê dike, roja cejna Newrozê."
        }
      ]
    }
  },

  /* ══════════════ HEROES ══════════════ */
  hero_barzani: {
    ar: {
      tag: "أعلام الأمة", title: "ملا مصطفى البارزاني", banner_bg: "linear-gradient(135deg, #2a3a1a, #4a662b)", banner_icon: "⚔️",
      sections: [
        { icon: "🛡️", title: "رمز النضال", content: "يُعد ملا مصطفى البارزاني (١٩٠٣ - ١٩٧٩) الأب الروحي للحركة القومية الكوردية الحديثة. قاد العديد من الثورات ضد الأنظمة القمعية في العراق للدفاع عن حقوق الكورد." },
        { icon: "⛰️", title: "مسيرة لا تلين", content: "من جمهورية مهاباد إلى جبال كوردستان، قضى حياته في ساحات القتال والسياسة، وأسس الحزب الديمقراطي الكوردستاني، مجسداً إرادة شعب يرفض الخضوع." }
      ]
    },
    en: {
      tag: "Heroes of the Nation", title: "Mustafa Barzani", banner_bg: "linear-gradient(135deg, #2a3a1a, #4a662b)", banner_icon: "⚔️",
      sections: [
        { icon: "🛡️", title: "Symbol of Struggle", content: "Mulla Mustafa Barzani (1903 - 1979) is considered the spiritual father of the modern Kurdish national movement. He led numerous revolutions against oppressive regimes in Iraq." },
        { icon: "⛰️", title: "Unyielding Journey", content: "From the Republic of Mahabad to the mountains of Kurdistan, he spent his life fighting for Kurdish rights, establishing the Kurdistan Democratic Party and embodying the will of his people." }
      ]
    },
    ku: {
      tag: "Lehengên Neteweyê", title: "Mistefa Barzanî", banner_bg: "linear-gradient(135deg, #2a3a1a, #4a662b)", banner_icon: "⚔️",
      sections: [
        { icon: "🛡️", title: "Sembola Têkoşînê", content: "Mela Mistefa Barzanî (1903 - 1979) wekî bavê giyanî yê tevgera neteweyî ya Kurd tê naskirin. Wî gelek şoreş li dijî rejîmên zordar li Iraqê bi rê ve bir." },
        { icon: "⛰️", title: "Têkoşîna Bêdawî", content: "Ji Komara Mahabadê ta çiyayên Kurdistanê, jiyana xwe di xebata siyasî û çekdarî de derbas kir û Partiya Demokrat a Kurdistanê damezrand." }
      ]
    }
  },

  hero_qazi: {
    ar: {
      tag: "أعلام الأمة", title: "قاضي محمد", banner_bg: "linear-gradient(135deg, #3a1a1a, #662b2b)", banner_icon: "📜",
      sections: [
        { icon: "🏛️", title: "جمهورية مهاباد", content: "قاضي محمد (١٨٩٣ - ١٩٤٧) هو سياسي وقائد كوردي أعلن تأسيس أول جمهورية كوردية (جمهورية مهاباد) في روجهلات (كوردستان إيران) في ٢٢ يناير ١٩٤٦." },
        { icon: "⚖️", title: "تضحية من أجل المبدأ", content: "رغم قصر عمر الجمهورية (١١ شهراً)، إلا أنها تركت إرثاً دستورياً وقومياً عظيماً، من ضمنه رفع علم كوردستان. فضل قاضي محمد البقاء مع شعبه وأُعدم في ساحة جارجرا، ليصبح رمزاً للتضحية." }
      ]
    },
    en: {
      tag: "Heroes of the Nation", title: "Qazi Muhammad", banner_bg: "linear-gradient(135deg, #3a1a1a, #662b2b)", banner_icon: "📜",
      sections: [
        { icon: "🏛️", title: "Republic of Mahabad", content: "Qazi Muhammad (1893 - 1947) was a Kurdish leader who declared the first Kurdish republic (Republic of Mahabad) in Rojhelat (Iranian Kurdistan) on January 22, 1946." },
        { icon: "⚖️", title: "Sacrifice for Principle", content: "Despite its short lifespan (11 months), the republic left a massive national legacy, including the raising of the Kurdish flag. Qazi chose to stay with his people and was executed, becoming a martyr of the nation." }
      ]
    },
    ku: {
      tag: "Lehengên Neteweyê", title: "Qazî Mihemed", banner_bg: "linear-gradient(135deg, #3a1a1a, #662b2b)", banner_icon: "📜",
      sections: [
        { icon: "🏛️", title: "Komara Mahabadê", content: "Qazî Mihemed (1893 - 1947) rêberekî Kurd bû ku yekemîn komara Kurdî (Komara Mahabadê) li Rojhilatê Kurdistanê di 22ê Rêbendana 1946an de ragihand." },
        { icon: "⚖️", title: "Qurbanîdana ji bo Neteweyê", content: "Tevî ku temenê komarê kurt bû (11 meh), wê mîrateyek neteweyî ya mezin hişt. Qazî hilbijart ku bi gelê xwe re bimîne û li meydana Çarçira hat bidarvekirin." }
      ]
    }
  },

  hero_sheikh: {
    ar: {
      tag: "أعلام الأمة", title: "الشيخ محمود الحفيد", banner_bg: "linear-gradient(135deg, #1a2a3a, #2b4a66)", banner_icon: "🏔️",
      sections: [
        { icon: "👑", title: "ملك كوردستان", content: "الشيخ محمود البرزنجي (١٨٧٨ - ١٩٥٦) قاد أولى الثورات الكوردية في القرن العشرين ضد الانتداب البريطاني في العراق. أعلن نفسه ملكاً على كوردستان في السليمانية." },
        { icon: "⚔️", title: "مقاومة الإمبراطورية", content: "خاض معارك شرسة ضد القوات البريطانية مطالباً بالاستقلال التام للكورد. أُسر ونُفي إلى الهند، لكن روحه الثورية بقيت ملهمة للأجيال." }
      ]
    },
    en: {
      tag: "Heroes of the Nation", title: "Sheikh Mahmud Barzanji", banner_bg: "linear-gradient(135deg, #1a2a3a, #2b4a66)", banner_icon: "🏔️",
      sections: [
        { icon: "👑", title: "King of Kurdistan", content: "Sheikh Mahmud Barzanji (1878 - 1956) led the first Kurdish revolts of the 20th century against the British mandate in Iraq. He declared himself King of Kurdistan in Sulaymaniyah." },
        { icon: "⚔️", title: "Resisting the Empire", content: "He fought fierce battles against British forces demanding full independence. He was eventually captured and exiled to India, but his revolutionary spirit remained an inspiration." }
      ]
    },
    ku: {
      tag: "Lehengên Neteweyê", title: "Şêx Mehmûdê Berzencî", banner_bg: "linear-gradient(135deg, #1a2a3a, #2b4a66)", banner_icon: "🏔️",
      sections: [
        { icon: "👑", title: "Şahê Kurdistanê", content: "Şêx Mehmûdê Berzencî (1878 - 1956) serokatiya yekemîn şoreşên Kurdî di sedsala 20an de li dijî mandateriya Brîtanî li Iraqê kir û xwe wek Şahê Kurdistanê li Silêmaniyê ragihand." },
        { icon: "⚔️", title: "Berxwedana li dijî Împaratoriyê", content: "Wî şerên dijwar li dijî hêzên Brîtanî kirin ji bo serxwebûna Kurdan. Piştre hat dîl girtin û bo Hindistanê hat sirgûnkirin, lê giyanê wî yê şoreşgerî ma." }
      ]
    }
  },

  hero_nali: {
    ar: {
      tag: "أعلام الأمة", title: "الشاعر نالي", banner_bg: "linear-gradient(135deg, #4a2b3a, #7a3b56)", banner_icon: "🌹",
      sections: [
        { icon: "✍️", title: "أمير الشعر الرومانسي", content: "ملا خضر الشويسي المعروف بـ «نالي» (١٧٩٧ - ١٨٥٥) هو أحد مؤسسي المدرسة الشعرية السورانية الكلاسيكية. تميز بشعره العاطفي والرومانسي العميق الذي تغنى بحبيبته (حبيبة) وبوطنه." },
        { icon: "🎶", title: "قصائد تُغنى", content: "لا تزال قصائده حتى اليوم تُلحّن وتُغنى من قبل كبار الفنانين الكورد، وتعتبر تحفاً أدبية لا تفقد بريقها، تعكس رقة المشاعر الكوردية." }
      ]
    },
    en: {
      tag: "Heroes of the Nation", title: "Nali — The Poet", banner_bg: "linear-gradient(135deg, #4a2b3a, #7a3b56)", banner_icon: "🌹",
      sections: [
        { icon: "✍️", title: "Prince of Romantic Poetry", content: "Mulla Khidir Shaweysi, known as 'Nali' (1797 - 1855), is one of the founders of the classical Sorani school of poetry. He is famous for his deep, romantic verses dedicated to his love 'Habiba' and his homeland." },
        { icon: "🎶", title: "Poems as Songs", content: "To this day, his poems are composed and sung by great Kurdish artists. They are considered literary masterpieces that reflect the tenderness of Kurdish emotion." }
      ]
    },
    ku: {
      tag: "Lehengên Neteweyê", title: "Nalî — Helbestvanê Evînê", banner_bg: "linear-gradient(135deg, #4a2b3a, #7a3b56)", banner_icon: "🌹",
      sections: [
        { icon: "✍️", title: "Mîrê Helbesta Romantîk", content: "Mela Xidirê Şaweysî nasnav 'Nalî' (1797 - 1855) yek ji damezrênerên dibistana klasîk a helbesta Soranî ye. Ew bi helbestên xwe yên evînî û kûr ên ji bo 'Hebîbe' û welatê xwe tê naskirin." },
        { icon: "🎶", title: "Helbestên ku Têne Strandin", content: "Ta roja îro, helbestên wî ji aliyê hunermendên mezin ên Kurd ve têne strandin û wekî şaheserên wêjeyî têne dîtin." }
      ]
    }
  },

  hero_leyla: {
    ar: {
      tag: "أعلام الأمة", title: "ليلى قاسم", banner_bg: "linear-gradient(135deg, #8a2b3a, #b83c56)", banner_icon: "🕊️",
      sections: [
        { icon: "✊", title: "عروس كوردستان", content: "ليلى قاسم (١٩٥٢ - ١٩٧٤) ناشطة سياسية كوردية شجاعة انضمت للحركة التحررية في مقتبل شبابها. عُرفت بشجاعتها في مواجهة النظام البعثي في بغداد." },
        { icon: "🕊️", title: "أيقونة الشهادة", content: "أُلقي القبض عليها وأُعدمت وهي في الـ ٢٢ من عمرها، لتكون أول امرأة كوردية تُعدم لأسباب سياسية. تقدمت إلى حبل المشنقة بابتسامة وزي كوردي، مرددة نشيد (Ey Reqîb)، لتصبح رمزاً لنضال المرأة الكوردية." }
      ]
    },
    en: {
      tag: "Heroes of the Nation", title: "Leyla Qasim", banner_bg: "linear-gradient(135deg, #8a2b3a, #b83c56)", banner_icon: "🕊️",
      sections: [
        { icon: "✊", title: "The Bride of Kurdistan", content: "Leyla Qasim (1952 - 1974) was a brave Kurdish political activist who joined the liberation movement in her youth. She was known for her courage in facing the Baathist regime in Baghdad." },
        { icon: "🕊️", title: "Icon of Martyrdom", content: "She was arrested and executed at the age of 22, becoming the first Kurdish woman to be executed for political reasons. She walked to the gallows with a smile in traditional Kurdish dress, singing the national anthem 'Ey Reqîb', becoming a timeless symbol of Kurdish women's struggle." }
      ]
    },
    ku: {
      tag: "Lehengên Neteweyê", title: "Leyla Qasim", banner_bg: "linear-gradient(135deg, #8a2b3a, #b83c56)", banner_icon: "🕊️",
      sections: [
        { icon: "✊", title: "Bûka Kurdistanê", content: "Leyla Qasim (1952 - 1974) çalakvaneke siyasî ya Kurd bû ku di xortaniya xwe de tev li tevgera azadiyê bû. Ew bi wêrekiya xwe ya li dijî rejîma Beis li Bexdayê tê naskirin." },
        { icon: "🕊️", title: "Sembola Şehadetê", content: "Di 22 saliya xwe de hat girtin û bidarvekirin, û bû yekemîn jina Kurd ku ji ber sedemên siyasî hat îdamkirin. Bi ken û bi cilên Kurdî, sirûda 'Ey Reqîb' digot û ber bi sêdarê ve çû." }
      ]
    }
  },

  hero_seyid: {
    ar: {
      tag: "أعلام الأمة", title: "سيد رضا", banner_bg: "linear-gradient(135deg, #5a3b2a, #8a563c)", banner_icon: "🦁",
      sections: [
        { icon: "⛰️", title: "أسد ديرسم", content: "سيد رضا (١٨٦٣ - ١٩٣٧) قائد ديني وعشائري كوردي (زازي) من منطقة ديرسم في باكور. قاد انتفاضة ديرسم الشهيرة ضد سياسات الصهر القومي للحكومة التركية في الثلاثينيات." },
        { icon: "⚖️", title: "«أنا أيضاً لم أركع»", content: "بعد قمع الانتفاضة بوحشية، تم إعدامه مع ابنه ومجموعة من رفاقه. كلماته الأخيرة أمام المشنقة تعبر عن كبرياء الكوردي: «لقد كبرت ولم أستطع التعامل مع حيلكم وأكاذيبكم، فليكن ذلك درساً لي، ولكني أيضاً لم أركع أمامكم، فليكن ذلك حسرة في قلوبكم»." }
      ]
    },
    en: {
      tag: "Heroes of the Nation", title: "Seyid Riza", banner_bg: "linear-gradient(135deg, #5a3b2a, #8a563c)", banner_icon: "🦁",
      sections: [
        { icon: "⛰️", title: "The Lion of Dersim", content: "Seyid Riza (1863 - 1937) was a Kurdish Alevi religious and tribal leader from the Dersim region in Bakur. He led the famous Dersim rebellion against the assimilation policies of the Turkish government in the 1930s." },
        { icon: "⚖️", title: "«I Also Did Not Kneel»", content: "After the rebellion was brutally crushed, he was executed alongside his son and comrades. His final words at the gallows remain legendary: «I could not cope with your lies and tricks, let that be my sorrow. But I did not kneel before you, let that be your sorrow»." }
      ]
    },
    ku: {
      tag: "Lehengên Neteweyê", title: "Seyîd Riza", banner_bg: "linear-gradient(135deg, #5a3b2a, #8a563c)", banner_icon: "🦁",
      sections: [
        { icon: "⛰️", title: "Şêrê Dêrsimê", content: "Seyîd Riza (1863 - 1937) rêberekî olî û eşîrî yê Kurdên Zaza ji herêma Dêrsimê bû. Wî serhildana navdar a Dêrsimê li dijî polîtîkayên asîmîlasyonê yên hikûmeta Tirkiyeyê bi rê ve bir." },
        { icon: "⚖️", title: "«Min Jî Çok Danenî»", content: "Piştî serkutkirina serhildanê, ew bi kurê xwe û hevalên xwe re hat bidarvekirin. Gotinên wî yên dawî manîdar in: «Ez bi hîle û derewên we re nikaribûm, bila ev ji min re bibe derd. Lê min jî li ber we çok danenî, bila ev jî ji we re bibe derd»." }
      ]
    }
  },

  hero_masoud: {
    ar: {
      tag: "أعلام الأمة", title: "مسعود بارزاني", banner_bg: "linear-gradient(135deg, #2b3a4a, #3c567a)", banner_icon: "🦅",
      sections: [
        { icon: "🏛️", title: "بناء الإقليم", content: "مسعود بارزاني (مواليد ١٩٤٦) هو الرئيس السابق لإقليم كوردستان العراق ورئيس الحزب الديمقراطي الكوردستاني. كان له دور محوري في قيادة الإقليم نحو الاستقرار والاعتراف الدستوري وبناء المؤسسات الحكومية، وخاض معارك طويلة في الجبال قبل تحقيق الحكم الذاتي." },
        { icon: "🗳️", title: "استفتاء الاستقلال", content: "في عام ٢٠١٧، قاد بارزاني خطوة تاريخية بإجراء استفتاء استقلال إقليم كوردستان، حيث صوّتت الأغلبية الساحقة لصالح الاستقلال. رغم التحديات السياسية الكبيرة التي تلت ذلك، اعتبرت هذه الخطوة توثيقاً تاريخياً لإرادة الشعب الكوردي، ومحطة مفصلية في تاريخ القضية الكوردية." }
      ]
    },
    en: {
      tag: "Heroes of the Nation", title: "Masoud Barzani", banner_bg: "linear-gradient(135deg, #2b3a4a, #3c567a)", banner_icon: "🦅",
      sections: [
        { icon: "🏛️", title: "Building the Region", content: "Masoud Barzani (born 1946) is the former President of the Kurdistan Region of Iraq and head of the Kurdistan Democratic Party. He played a pivotal role in leading the region toward stability, constitutional recognition, and building government institutions." },
        { icon: "🗳️", title: "Independence Referendum", content: "In 2017, Barzani led a historic move by holding an independence referendum for the Kurdistan Region, where an overwhelming majority voted in favor. Despite significant subsequent political challenges, this step is considered a historic documentation of the Kurdish people's will." }
      ]
    },
    ku: {
      tag: "Lehengên Neteweyê", title: "Mesûd Barzanî", banner_bg: "linear-gradient(135deg, #2b3a4a, #3c567a)", banner_icon: "🦅",
      sections: [
        { icon: "🏛️", title: "Avakirina Herêmê", content: "Mesûd Barzanî (z. 1946) Serokê berê yê Herêma Kurdistanê û Serokê Partiya Demokrat a Kurdistanê ye. Wî roleke girîng di gihandina herêmê ber bi aramî, nasîna destûrî û avakirina saziyên hikûmetê de lîst." },
        { icon: "🗳️", title: "Giştpirsiya Serxwebûnê", content: "Di sala 2017an de, Barzanî gaveke dîrokî avêt bi lidarxistina giştpirsiya serxwebûnê ya Herêma Kurdistanê. Tevî astengiyên siyasî yên li pey wê, ev gav wekî belgeyeke dîrokî ji bo îradeya gelê Kurd tê dîtin." }
      ]
    }
  }
};

/* ──────────────────────────────────────────────────────────
   KURDISH LEARNING DATA
────────────────────────────────────────────────────────── */
const kurdishLearn = {
  alphabet: [
    { kurd: "ا", latin: "a", ar: "أ" },
    { kurd: "ب", latin: "b", ar: "ب" },
    { kurd: "پ", latin: "p", ar: "پ" },
    { kurd: "ت", latin: "t", ar: "ت" },
    { kurd: "ج", latin: "c", ar: "ج" },
    { kurd: "چ", latin: "ç", ar: "چ" },
    { kurd: "ح", latin: "h", ar: "ح" },
    { kurd: "خ", latin: "x", ar: "خ" },
    { kurd: "د", latin: "d", ar: "د" },
    { kurd: "ر", latin: "r", ar: "ر" },
    { kurd: "ز", latin: "z", ar: "ز" },
    { kurd: "ژ", latin: "j", ar: "ژ" },
    { kurd: "س", latin: "s", ar: "س" },
    { kurd: "ش", latin: "ş", ar: "ش" },
    { kurd: "ع", latin: "'", ar: "ع" },
    { kurd: "غ", latin: "ğ", ar: "غ" },
    { kurd: "ف", latin: "f", ar: "ف" },
    { kurd: "ڤ", latin: "v", ar: "ڤ" },
    { kurd: "ق", latin: "q", ar: "ق" },
    { kurd: "ک", latin: "k", ar: "ك" },
    { kurd: "گ", latin: "g", ar: "گ" },
    { kurd: "ل", latin: "l", ar: "ل" },
    { kurd: "م", latin: "m", ar: "م" },
    { kurd: "ن", latin: "n", ar: "ن" },
    { kurd: "و", latin: "w/u", ar: "و" },
    { kurd: "ه", latin: "h", ar: "ه" },
    { kurd: "ی", latin: "y/î", ar: "ي" },
  ],
  phrases: [
    { kurd: "سڵاو", latin: "Silaw", ar: "مرحبًا", en: "Hello", label_ar: "تحية" },
    { kurd: "سپاس", latin: "Sipas", ar: "شكرًا", en: "Thank you", label_ar: "شكر" },
    { kurd: "باش بیت", latin: "Baş bît", ar: "مع السلامة", en: "Goodbye", label_ar: "وداع" },
    { kurd: "بەخێربێیت", latin: "Bexêr bêt", ar: "أهلًا وسهلًا", en: "Welcome", label_ar: "ترحيب" },
    { kurd: "ناوم...", latin: "Nawim...", ar: "اسمي...", en: "My name is...", label_ar: "تعريف" },
    { kurd: "تۆ چۆنی؟", latin: "To çonî?", ar: "كيف حالك؟", en: "How are you?", label_ar: "سؤال" },
    { kurd: "باشم", latin: "Başim", ar: "أنا بخير", en: "I'm fine", label_ar: "إجابة" },
    { kurd: "بەڵێ", latin: "Belê", ar: "نعم", en: "Yes", label_ar: "تأكيد" },
    { kurd: "نەخێر", latin: "Nexêr", ar: "لا", en: "No", label_ar: "نفي" },
    { kurd: "ببورە", latin: "Bibore", ar: "آسف/عفوًا", en: "Sorry/Excuse me", label_ar: "اعتذار" },
    { kurd: "حیوانت بوو", latin: "Heywanet bu", ar: "الله يرحمك", en: "God bless you", label_ar: "دعاء" },
    { kurd: "كوردستان", latin: "Kurdistan", ar: "كوردستان", en: "Kurdistan", label_ar: "وطن" },
  ],
  numbers: [
    { kurd: "یه‌ک", latin: "yek", ar: "واحد ١", en: "1" },
    { kurd: "دوو", latin: "duu", ar: "اثنان ٢", en: "2" },
    { kurd: "سێ", latin: "sê", ar: "ثلاثة ٣", en: "3" },
    { kurd: "چوار", latin: "çwar", ar: "أربعة ٤", en: "4" },
    { kurd: "پێنج", latin: "pênc", ar: "خمسة ٥", en: "5" },
    { kurd: "شه‌ش", latin: "şeş", ar: "ستة ٦", en: "6" },
    { kurd: "حه‌وت", latin: "hewt", ar: "سبعة ٧", en: "7" },
    { kurd: "هه‌شت", latin: "heşt", ar: "ثمانية ٨", en: "8" },
    { kurd: "نۆ", latin: "no", ar: "تسعة ٩", en: "9" },
    { kurd: "ده", latin: "deh", ar: "عشرة ١٠", en: "10" },
    { kurd: "بیست", latin: "bîst", ar: "عشرون ٢٠", en: "20" },
    { kurd: "سه‌د", latin: "sed", ar: "مئة ١٠٠", en: "100" },
  ]
};

/* ──────────────────────────────────────────────────────────
   MODAL BUILDER
────────────────────────────────────────────────────────── */
function buildStoryModal(storyKey) {
  const lang = (typeof currentLang !== 'undefined') ? currentLang : 'ar';
  const story = storyData[storyKey]?.[lang] || storyData[storyKey]?.['ar'];
  if (!story) return;

  const overlay = document.getElementById('storyOverlay');
  const modal = document.getElementById('storyModal');
  const banner = document.getElementById('storyBanner');
  const body = document.getElementById('storyBody');
  if (!overlay || !modal || !banner || !body) return;

  /* Build banner */
  banner.style.background = story.banner_bg;
  banner.querySelector('.story-modal-tag').textContent = story.tag;
  banner.querySelector('h2').textContent = story.title;

  /* Build body */
  body.innerHTML = story.sections.map(sec => buildSection(sec, lang)).join('');

  /* Open */
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function buildSection(sec, lang) {
  let html = `<div class="story-section">
    <div class="story-section-title">${sec.icon} ${sec.title}</div>`;

  /* paragraph content */
  if (sec.content) {
    html += sec.content.split('\n').map(p => p.trim() ? `<p>${p}</p>` : '').join('');
  }

  /* info cards */
  if (sec.type === 'info' && sec.cards) {
    html += `<div class="story-info-grid">`;
    sec.cards.forEach(c => {
      html += `<div class="story-info-card">
        <span class="info-icon">${c.icon}</span>
        <div class="info-label">${c.label}</div>
        <div class="info-value">${c.value}</div>
      </div>`;
    });
    html += `</div>`;
  }

  /* steps list */
  if (sec.steps) {
    html += `<ul class="story-steps">`;
    sec.steps.forEach((step, i) => {
      html += `<li><span class="step-num">${i + 1}</span><span>${step}</span></li>`;
    });
    html += `</ul>`;
  }

  /* quote */
  if (sec.quote) {
    const lines = sec.quote.replace('\\n', '<br>');
    html += `<blockquote class="story-quote">${lines}</blockquote>`;
  }

  /* Kurdish learn section */
  if (sec.is_learn) {
    html += buildLearnSection(lang);
  }

  html += `</div>`;

  /* Add divider unless last */
  html += `<div class="story-divider"></div>`;

  return html;
}

function buildLearnSection(lang) {
  const tabLabels = {
    ar: { alphabet: "الأبجدية", phrases: "العبارات الأساسية", numbers: "الأرقام", dialects: "اللهجات" },
    en: { alphabet: "Alphabet", phrases: "Basic Phrases", numbers: "Numbers", dialects: "Dialects" },
    ku: { alphabet: "Alfabe", phrases: "Hevok", numbers: "Jimare", dialects: "Zarava" }
  };
  const t = tabLabels[lang] || tabLabels['ar'];
  const guideText = {
    ar: "ابدأ بالحروف، ثم العبارات اليومية، ثم الأرقام، ثم اللهجات. كل تبويب يفتح لك مسارًا جديدًا في التعلم.",
    en: "Start with the alphabet, then everyday phrases, then numbers, and finally the dialects. Each tab opens a new learning path.",
    ku: "Bi alfabe dest pê bike, paşê hevokên rojane, dûv re jimare, û di dawiyê de zaravayên Kurdî. Her tab rêyek nû ji bo fêrbûnê vedike."
  };

  return `
  <div style="margin-bottom:16px; padding:14px 16px; background:rgba(245,200,66,0.06); border:1px solid rgba(245,200,66,0.14); border-radius:12px; color:rgba(240,232,208,0.82); line-height:1.8;">${guideText[lang] || guideText['ar']}</div>
  <div class="lang-tabs">
    <button class="lang-tab-btn active" onclick="switchLearnTab(this,'learn-alphabet')">🔤 ${t.alphabet}</button>
    <button class="lang-tab-btn" onclick="switchLearnTab(this,'learn-phrases')">💬 ${t.phrases}</button>
    <button class="lang-tab-btn" onclick="switchLearnTab(this,'learn-numbers')">🔢 ${t.numbers}</button>
    <button class="lang-tab-btn" onclick="switchLearnTab(this,'learn-dialects')">🗺️ ${t.dialects}</button>
  </div>

  <!-- ALPHABET -->
  <div class="lang-tab-panel active" id="learn-alphabet">
    <div class="lesson-grid">
      ${kurdishLearn.alphabet.map(a => `
      <div class="lesson-card">
        <span class="kurd-letter">${a.kurd}</span>
        <span class="kurd-latin">${a.latin}</span>
        <span class="kurd-meaning">${lang === 'ar' ? a.ar : a.kurd}</span>
      </div>`).join('')}
    </div>
  </div>

  <!-- PHRASES -->
  <div class="lang-tab-panel" id="learn-phrases">
    <div class="phrase-list">
      ${kurdishLearn.phrases.map(ph => `
      <div class="phrase-row">
        <span class="phrase-kurd">${ph.kurd}</span>
        <span class="phrase-latin">${ph.latin}</span>
        <span class="phrase-meaning">${lang === 'en' ? ph.en : ph.ar}</span>
      </div>`).join('')}
    </div>
  </div>

  <!-- NUMBERS -->
  <div class="lang-tab-panel" id="learn-numbers">
    <div class="lesson-grid">
      ${kurdishLearn.numbers.map(n => `
      <div class="lesson-card">
        <span class="kurd-letter" style="font-size:1.4rem">${n.kurd}</span>
        <span class="kurd-latin">${n.latin}</span>
        <span class="kurd-meaning">${lang === 'en' ? n.en : n.ar}</span>
      </div>`).join('')}
    </div>
  </div>

  <!-- DIALECTS -->
  <div class="lang-tab-panel" id="learn-dialects">
    <div class="dialect-grid">
      ${buildDialects(lang)}
    </div>
  </div>`;
}

function buildDialects(lang) {
  const dialects = {
    ar: [
      { name: "كورمانجي", badge: "Kurmancî", area: "باكور (تركيا) + روجافا (سوريا) + ديلامي", desc: "أكثر اللهجات انتشارًا بين الكورد. يستخدم الأبجدية اللاتينية المعدّلة، ويُتحدث به في كوردستان تركيا وسوريا وكثير من الجاليات الكوردية في أوروبا.", eg: "سلاو (مرحبًا) / سپاس (شكرًا)" },
      { name: "سورانية", badge: "Soranî", area: "باشور (العراق) + روجهلات (إيران)", desc: "اللغة الأدبية الرسمية في إقليم كوردستان العراق وإيران. تُكتب بأبجدية عربية معدّلة وتعتبر المرجع الأدبي والثقافي.", eg: "هه‌ڵۆ (مرحبًا) / سوپاس (شكرًا)" },
      { name: "زازا (دملج)", badge: "Zazakî", area: "ديرسم وأرضروم — شرق تركيا", desc: "يعتبرها بعض اللغويين لغة مستقلة. يتحدث بها نحو ١-٤ مليون شخص في المنطقة الشمالية الشرقية من تركيا.", eg: "سلام (مرحبًا) / ممنوون (شكرًا)" },
      { name: "غورانية", badge: "Goranî", area: "جنوب كوردستان إيران والعراق", desc: "لهجة تاريخية كانت لغة الأدب الكوردي الكلاسيكي. لا تزال تُستخدم في الشعر والأغاني التقليدية.", eg: "ئه‌وي (هو/هي) / سلاو (تحية)" }
    ],
    en: [
      { name: "Kurmanji", badge: "Kurmancî", area: "Bakur + Rojava + Diaspora", desc: "The most widely spoken Kurdish dialect, using a modified Latin script. Spoken across Turkish and Syrian Kurdistan and most European diaspora.", eg: "Silaw (Hello) / Sipas (Thank you)" },
      { name: "Sorani", badge: "Soranî", area: "Bashur (Iraq) + Rojhelat (Iran)", desc: "The official literary language of the Kurdistan Region of Iraq and Iran. Written in a modified Arabic script.", eg: "Helô (Hello) / Supas (Thank you)" },
      { name: "Zaza (Dimli)", badge: "Zazakî", area: "Dersim, East Turkey", desc: "Considered by some linguists as a separate language. Spoken by 1-4 million people in northeastern Turkey.", eg: "Selam (Hello) / Memnun (Thank you)" },
      { name: "Gorani", badge: "Goranî", area: "South Kurdistan (Iran & Iraq)", desc: "A historical dialect that was once the language of classical Kurdish literature. Still used in poetry and traditional songs.", eg: "Awî (he/she) / Silaw (greeting)" }
    ],
    ku: [
      { name: "Kurmancî", badge: "Kurmancî", area: "Bakur + Rojava + Diaspora", desc: "Herî belav zaravayê Kurdî, bi alfabeya Latînî tê nivîsandin. Li Tirkiye, Sûriye û piraniya diaspora Ewropî tê axaftin.", eg: "Silaw / Sipas" },
      { name: "Soranî", badge: "Soranî", area: "Başûr (Iraq) + Rojhilat (Îran)", desc: "Zimanê edebî yê fermî yê Herêma Kurdistana Iraqê û Îranê. Bi alfabeya Erebî ya guhezbar tê nivîsandin.", eg: "Helô / Supas" },
      { name: "Zazayî", badge: "Zazakî", area: "Dêrsim, bakurê rojhilatê Tirkiyeyê", desc: "Hin zimannasan ew wek zimanekî serbixwe dibînin. 1-4 milyon kes bi wê diaxivin.", eg: "Selam / Memnun" },
      { name: "Goranî", badge: "Goranî", area: "Başûrê Kurdistanê", desc: "Zaravayekî dîrokî bû ku carekê zimanê wêjeya Kurdî ya klasîk bû. Hê jî di helbest û stranên kevneşopî de tê bikaranîn.", eg: "Awî / Silaw" }
    ]
  };

  const list = dialects[lang] || dialects['ar'];
  return list.map(d => `
    <div class="dialect-card">
      <span class="dialect-badge">${d.badge}</span>
      <h4>${d.name}</h4>
      <p style="font-size:0.8rem; color:#F5C842; margin-bottom:8px;">📍 ${d.area}</p>
      <p>${d.desc}</p>
      <p style="margin-top:8px; font-style:italic; font-size:0.82rem;">مثال: ${d.eg}</p>
    </div>
  `).join('');
}

/* ──────────────────────────────────────────────────────────
   MODAL CONTROLS
────────────────────────────────────────────────────────── */

/* Open a story modal */
window.openStory = function (storyKey) {
  buildStoryModal(storyKey);
};

/* Close the modal */
window.closeStory = function () {
  const overlay = document.getElementById('storyOverlay');
  if (overlay) {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
};

/* Switch learning tabs */
window.switchLearnTab = function (btn, panelId) {
  const modal = document.getElementById('storyModal');
  if (!modal) return;
  modal.querySelectorAll('.lang-tab-btn').forEach(b => b.classList.remove('active'));
  modal.querySelectorAll('.lang-tab-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  const panel = document.getElementById(panelId);
  if (panel) panel.classList.add('active');
};

/* Close on overlay click */
document.addEventListener('DOMContentLoaded', function () {
  const overlay = document.getElementById('storyOverlay');
  if (!overlay) return;

  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) window.closeStory();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') window.closeStory();
  });
});

/* Track current language for story re-render */
var currentLang = 'ar';
var _origChangeLang = window.changeLanguage;
window.changeLanguage = function (lang) {
  currentLang = lang;
  if (_origChangeLang) _origChangeLang(lang);
};
