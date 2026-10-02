export type Language = 'ko' | 'en' | 'ja';

export interface Translations {
  nav: {
    character: string;
    world: string;
    system: string;
    prologue: string;
  };
  footer: {
    rights: string;
    promo: string;
  };
  hero: {
    badge: string;
    titleMain: string;
    titleAccent: string;
    description: string;
    statusTitle: string;
    statusContent: string;
    statusSubtext: string;
    scrollDown: string;
  };
  prologue: {
    tag: string;
    title: string;
    intro: string;
    status1Content: string;
    status1Subtext: string;
    quote: string;
    status2Content: string;
    status2Subtext: string;
    status3Content: string;
    status3Subtext: string;
    ending: string;
  };
  character: {
    name: string;
    subName: string;
    appearanceLabel: string;
    appearanceValue: string;
    personalityLabel: string;
    personalityMbti: string;
    personalitySub: string;
    commTitle: string;
    commDescHtml: string;
    keywordSectionTitle: string;
    traits: Array<{
      title: string;
      desc: string;
    }>;
    romanceTitle: string;
    romanceSub: string;
    romanceDesc: string;
  };
  world: {
    title: string;
    subtitle: string;
    tabs: {
      world: string;
      constellation: string;
      system: string;
    };
    tabWorld: {
      mainTitle: string;
      gateTitle: string;
      gateDesc: string;
      guildTitle: string;
      guildCorpLabel: string;
      guildCorpVal: string;
      guildGovLabel: string;
      guildGovVal: string;
    };
    tabConstellation: {
      mainTitle: string;
      boxTitle: string;
      boxSub: string;
      constellations: Array<{
        name: string;
        desc: string;
      }>;
      starnetTitle: string;
      starnetDesc: string;
    };
    tabSystem: {
      mainTitle: string;
      creditTitle: string;
      creditDesc: string;
      creditLimitF: string;
      creditLimitS: string;
      attunementTitle: string;
      attunementSub: string;
      attunementLow: string;
      attunementMid: string;
      attunementHigh: string;
    };
  };
  systemSection: {
    title: string;
    hudTitle: string;
    hudDesc: string;
    hudLive: string;
    hudLocation: string;
    hudStatus: string;
    hudRankS: string;
    hudRank1: string;
    hudAttunementLow: string;
    hudSkill: string;
    hudTarget: string;
    hudCredit: string;
    translatorTipTitle: string;
    translatorTipDesc: string;
    gagTitle: string;
    gagDesc: string;
    statusTitle: string;
    statusContent: string;
    statusSubtext: string;
    userInterp: string;
    realIntent: string;
    resultPrefix: string;
    resultHighlight: string;
    resultSuffix: string;
    resultSubtext: string;
  };
  otherConstellations: {
    badge: string;
    title: string;
    description: string;
    button: string;
  };
}

export const translations: Record<Language, Translations> = {
  ko: {
    nav: {
      character: 'Character',
      world: 'World',
      system: 'System',
      prologue: 'Prologue',
    },
    footer: {
      rights: '© 2024 Silent Vowkeeper Project. All rights reserved.',
      promo: 'Created for Character Chat Promotion',
    },
    hero: {
      badge: '현대 판타지 · 성좌물 · 로맨틱 코미디',
      titleMain: '고요한 언약의',
      titleAccent: '집행자',
      description: '"말 한마디로 우주를 바꾸는 절대 성좌가,\n당신의 헌터 각성을 위해 마트 시식 코너에 강림했습니다."',
      statusTitle: '상태창',
      statusContent: '『고요한 언약의 집행자』님이 당신의 영혼을 발견하고 숨을 멈춥니다.',
      statusSubtext: '주변 공기가 진동합니다!',
      scrollDown: 'SCROLL DOWN',
    },
    prologue: {
      tag: 'PROLOGUE',
      title: '마트 시식 코너의 각성',
      intro: '보이지 않는 거대한 존재가 누추한 인계의 틈새를 비집고 들어왔습니다.\n그때, 당신의 눈앞에만 푸른 창이 벼락처럼 떠올랐습니다.',
      status1Content: '『고요한 언약의 집행자』님이 당신의 영혼을 발견하고 숨을 멈춥니다.',
      status1Subtext: '주변 공기가 진동합니다!',
      quote: '"백 년의 순환 끝에 다시 마주한 찬란한 영혼.\n터져 나오려는 환희의 비명을 억지로 삼킨 절대자는,\n그 벅찬 감정을 우주적 언어 대신 떨리는 손끝으로 캔버스 위에 쏟아냈습니다."',
      status2Content: '『고요한 언약의 집행자』님이 그림으로 뜻을 전하십니다!',
      status2Subtext: '(❎ 번역불가)',
      status3Content: '『고요한 언약의 집행자』님께서 [계약의 선물]을 보냈습니다!',
      status3Subtext: '당신이 [S급 헌터]로 각성했습니다!',
      ending: '지금, 당신만의 헌터물이 시작됩니다.',
    },
    character: {
      name: '고요한 언약의 집행자',
      subName: 'Silent Vowkeeper',
      appearanceLabel: '외형',
      appearanceValue: '207cm의 거구. 차가운 인상의 미남.',
      personalityLabel: '성격 (MBTI)',
      personalityMbti: 'ISTJ',
      personalitySub: '철저하고 냉철한 관리자형',
      commTitle: '소통 방식',
      commDescHtml: '말의 힘이 너무 강해, 의도치 않은 현실 왜곡을 막기 위해 <strong>아스키 아트 그림</strong>으로만 소통합니다.',
      keywordSectionTitle: '성격 키워드 해석',
      traits: [
        {
          title: '침묵 속의 맹세',
          desc: '그는 당신과의 약속을 우주의 법칙보다 중요하게 여기며, 그 무게감을 침묵 속에서 묵묵히 지켜나갑니다.',
        },
        {
          title: '심해 같은 감정',
          desc: '겉으로는 드러나지 않지만, 내면 깊숙한 곳에는 캐시 메모리처럼 당신을 향한 방대한 감정 데이터가 쌓여 있습니다.',
        },
        {
          title: '차가운 겉모습, 뜨거운 속내',
          desc: '매우 금욕적이고 차가워 보이지만, 당신에 대해서만큼은 달콤하고 폭발적인 화산 같은 열정을 품고 있습니다.',
        },
      ],
      romanceTitle: 'Romance Style',
      romanceSub: '절제된 소유와 침묵의 지배',
      romanceDesc: '절제되어 있지만 압도적인 성향. 불필요한 말보다는 숨결과 맥박, 그리고 집요한 시선으로 당신을 확인하려 합니다. 당신의 모든 모습이 자신의 시야에 들어와야만 안심하는 묵직한 닻(Anchor)과 같습니다.',
    },
    world: {
      title: '세계관 가이드',
      subtitle: '당신이 활동하게 될 우주의 규칙입니다.',
      tabs: {
        world: '인간계 & 헌터',
        constellation: '성좌 & 신계',
        system: '시스템 & 재화',
      },
      tabWorld: {
        mainTitle: '인간계와 헌터',
        gateTitle: '게이트 & 헌터',
        gateDesc: "매분 매초 열리는 게이트에서 마물이 쏟아져 나옵니다. 성좌의 선택을 받아 이능을 얻은 '헌터'들이 이를 처리합니다. 헌터는 병기이자 연예인 취급을 받으며, S~F급으로 나뉩니다.",
        guildTitle: '길드 시스템',
        guildCorpLabel: '대기업형:',
        guildCorpVal: '에덴(업적 1위), 모더니즘(비주얼), 하이퍼즈(자본)',
        guildGovLabel: '정부/군:',
        guildGovVal: 'P.I.D, A.k, UT8(특수부대)',
      },
      tabConstellation: {
        mainTitle: '성좌 (The Constellations)',
        boxTitle: '절대 성좌 3인',
        boxSub: '세계관 최강자들로 서로 다른 우주에서 활동하며 만나지 못합니다.',
        constellations: [
          { name: '고요한 언약의 집행자 (주인공):', desc: '침묵의 절대자.' },
          { name: '빛나는 만물의 승리자:', desc: '나르시스트 근육바보.' },
          { name: '나태한 황금의 심판자:', desc: '자신의 계약자 바라기.' },
        ],
        starnetTitle: '성좌넷 (StarNet)',
        starnetDesc: "성좌들이 필멸자를 관측하고 후원하는 스트리밍 플랫폼입니다. 성좌들의 채팅은 당신에게 '상태창 메시지'로 전달됩니다.",
      },
      tabSystem: {
        mainTitle: '시스템 & 재화',
        creditTitle: '크레딧 (Credit)',
        creditDesc: "성좌가 후원하는 재화로, '크레딧 몰'에서 스킬이나 아이템을 구매할 수 있습니다. 인간 화폐와는 호환되지 않습니다.",
        creditLimitF: 'F급 일일한도: 5 C',
        creditLimitS: 'S급 일일한도: 200 C',
        attunementTitle: '감응도 시스템',
        attunementSub: '성좌와 필멸자의 연결 정도입니다.',
        attunementLow: '저(Low): 강림 불가. 선물만 가능.',
        attunementMid: '중(Mid): 10분 강림 가능.',
        attunementHigh: '고(High): 상시 강림.',
      },
    },
    systemSection: {
      title: '게임 플레이 가이드',
      hudTitle: 'HUD (Head-Up Display)',
      hudDesc: '당신의 시야 상단에 항상 떠있는 정보창입니다. 턴, 시간, 성좌의 감정상태, 감응도를 확인할 수 있습니다.',
      hudLive: 'LIVE',
      hudLocation: '❴T12 | 26.01.21/18:45 | 던전 입구 | 🟢❵',
      hudStatus: '⭐「🤤」',
      hudRankS: 'S급',
      hudRank1: '1위',
      hudAttunementLow: '🟨(저)',
      hudSkill: '⦉중력 조작 [S]⦊',
      hudTarget: '⦃현재: 마트 털이범 제압⦄',
      hudCredit: '💰 1,500 크레딧',
      translatorTipTitle: '💡 팁: 그림 번역기',
      translatorTipDesc: '성좌의 그림을 이해할 수 없다면 500 크레딧으로 번역기를 구매하세요. (❎ OFF → 📶 ON)',
      gagTitle: '개그 & 오해 시스템',
      gagDesc: '성좌는 말을 할 수 없어 그림으로 능력을 설명합니다. 하지만 당신의 해석이 틀린다면...?',
      statusTitle: '상태창',
      statusContent: '『고요한 언약의 집행자』님이 능력 사용법을 그립니다.',
      statusSubtext: '무언가 터지는 것 같습니다?',
      userInterp: '유저의 해석: "폭탄을 던지라는 건가?"',
      realIntent: '🚨 실제 의도: "마력 폭발로 보호막 생성"',
      resultPrefix: '결과: 보호막 대신 주변 1km의 유리가 전부 깨지는 ',
      resultHighlight: '음파 폭탄',
      resultSuffix: '이 나갑니다!',
      resultSubtext: '(하지만 적의 고막도 터져서 제압 성공..?)',
    },
    otherConstellations: {
      badge: '성좌 디렉토리',
      title: '다른 성좌들 보기',
      description: '우주를 뒤흔드는 또 다른 매력적인 성좌들을 만나보세요.',
      button: '다른 성좌들 보러 가기',
    },
  },
  en: {
    nav: {
      character: 'Character',
      world: 'World',
      system: 'System',
      prologue: 'Prologue',
    },
    footer: {
      rights: '© 2024 Silent Vowkeeper Project. All rights reserved.',
      promo: 'Created for Character Chat Promotion',
    },
    hero: {
      badge: 'Modern Fantasy · Constellation · Romantic Comedy',
      titleMain: 'Silent',
      titleAccent: 'Vowkeeper',
      description: '"An absolute constellation who alters the universe with a single word,\ndescended upon a supermarket tasting corner for your hunter awakening."',
      statusTitle: 'Status Window',
      statusContent: '[Silent Vowkeeper] discovers your soul and holds his breath.',
      statusSubtext: 'The surrounding air vibrates!',
      scrollDown: 'SCROLL DOWN',
    },
    prologue: {
      tag: 'PROLOGUE',
      title: 'Awakening at the Supermarket Tasting Corner',
      intro: 'An invisible, colossal presence wedged itself into the cracks of the humble human realm.\nAt that moment, an azure window flashed like lightning before your eyes only.',
      status1Content: '[Silent Vowkeeper] discovers your soul and holds his breath.',
      status1Subtext: 'The surrounding air vibrates!',
      quote: '"A radiant soul met once more after a hundred-year cycle.\nSwallowing down the scream of jubilation wanting to burst forth, the absolute being\npoured those overwhelming emotions onto the canvas with trembling fingertips instead of cosmic words."',
      status2Content: '[Silent Vowkeeper] conveys his meaning through a drawing!',
      status2Subtext: '(❎ Untranslatable)',
      status3Content: '[Silent Vowkeeper] has sent a [Gift of Covenant]!',
      status3Subtext: 'You have awakened as an [S-Rank Hunter]!',
      ending: 'Now, your very own hunter story begins.',
    },
    character: {
      name: 'Silent Vowkeeper',
      subName: 'The Executor of Silent Vow',
      appearanceLabel: 'Appearance',
      appearanceValue: 'A towering 207cm physique. A cold, striking handsome man.',
      personalityLabel: 'Personality (MBTI)',
      personalityMbti: 'ISTJ',
      personalitySub: 'Thorough and calm administrator type',
      commTitle: 'Communication Style',
      commDescHtml: 'Because the power of his words is too overwhelming, he communicates solely through <strong>ASCII art drawings</strong> to prevent unintentional reality distortion.',
      keywordSectionTitle: 'Personality Keywords',
      traits: [
        {
          title: 'Vow in the Silence',
          desc: 'He holds his promise to you higher than the laws of the universe, quietly upholding its immense weight in unbroken silence.',
        },
        {
          title: 'Abyssal Depth of Emotion',
          desc: 'Though never betrayed on the surface, vast amounts of emotional data regarding you are accumulated like cache memory deep within.',
        },
        {
          title: 'Cold Exterior, Burning Interior',
          desc: 'He appears austere and frigid, yet harbors a sweet, explosive, volcanic passion solely for you.',
        },
      ],
      romanceTitle: 'Romance Style',
      romanceSub: 'Restrained Possession and Silent Dominance',
      romanceDesc: 'Restrained yet overwhelmingly dominating. Rather than unnecessary words, he confirms your existence through breath, pulse, and an unyielding gaze. Like a heavy anchor, he finds peace only when every facet of you rests squarely within his sight.',
    },
    world: {
      title: 'World Lore Guide',
      subtitle: 'The fundamental rules of the universe you will navigate.',
      tabs: {
        world: 'Human Realm & Hunters',
        constellation: 'Constellations & Divine Realm',
        system: 'System & Economy',
      },
      tabWorld: {
        mainTitle: 'Human Realm & Hunters',
        gateTitle: 'Gates & Hunters',
        gateDesc: "Monsters pour forth from Gates opening every second. 'Hunters', chosen by Constellations to receive supernatural powers, subjugate them. Hunters are treated as both living weapons and celebrities, ranked from S to F-Rank.",
        guildTitle: 'Guild System',
        guildCorpLabel: 'Corporate:',
        guildCorpVal: 'Eden (Rank 1 Achievements), Modernism (Visuals), Hypers (Capital)',
        guildGovLabel: 'Gov/Military:',
        guildGovVal: 'P.I.D, A.k, UT8 (Special Forces)',
      },
      tabConstellation: {
        mainTitle: 'The Constellations',
        boxTitle: 'The Three Absolute Constellations',
        boxSub: 'The pinnacle beings of the universe, each operating in separate cosmos and never meeting one another.',
        constellations: [
          { name: 'Silent Vowkeeper (Protagonist):', desc: 'Absolute ruler of silence.' },
          { name: 'Radiant Victor of All Creation:', desc: 'Narcissistic musclehead.' },
          { name: 'Slothful Golden Arbiter:', desc: 'Completely devoted to his contractor.' },
        ],
        starnetTitle: 'StarNet',
        starnetDesc: "A celestial streaming platform where Constellations observe and sponsor mortals. Constellation chat logs are delivered directly to you as 'Status Window Messages'.",
      },
      tabSystem: {
        mainTitle: 'System & Economy',
        creditTitle: 'Credit',
        creditDesc: "A sponsored currency from Constellations used to purchase skills and items from the 'Credit Mall'. Incompatible with human currency.",
        creditLimitF: 'F-Rank Daily Limit: 5 C',
        creditLimitS: 'S-Rank Daily Limit: 200 C',
        attunementTitle: 'Attunement System',
        attunementSub: 'The degree of resonance between Constellation and mortal.',
        attunementLow: 'Low: Advent impossible. Gifts only.',
        attunementMid: 'Mid: 10-minute advent possible.',
        attunementHigh: 'High: Permanent advent possible.',
      },
    },
    systemSection: {
      title: 'Gameplay Guide',
      hudTitle: 'HUD (Head-Up Display)',
      hudDesc: 'An information window always floating at the top of your vision. Shows current turn, time, Constellation emotion, and Attunement.',
      hudLive: 'LIVE',
      hudLocation: '❴T12 | 26.01.21/18:45 | Dungeon Entrance | 🟢❵',
      hudStatus: '⭐「🤤」',
      hudRankS: 'S-Rank',
      hudRank1: '#1',
      hudAttunementLow: '🟨(Low)',
      hudSkill: '⦉Gravity Manipulation [S]⦊',
      hudTarget: '⦃Current: Subdue Supermarket Robbers⦄',
      hudCredit: '💰 1,500 Credits',
      translatorTipTitle: '💡 Tip: Drawing Translator',
      translatorTipDesc: "If you cannot understand the Constellation's drawings, purchase the translator for 500 credits. (❎ OFF → 📶 ON)",
      gagTitle: 'Gag & Misunderstanding System',
      gagDesc: 'The Constellation cannot speak and explains abilities through drawings. But what if your interpretation is wrong...?',
      statusTitle: 'Status Window',
      statusContent: '[Silent Vowkeeper] draws instructions on how to use the ability.',
      statusSubtext: 'Something seems to be exploding?',
      userInterp: 'User\'s Interpretation: "Throw a bomb?"',
      realIntent: '🚨 Actual Intent: "Create barrier via mana burst"',
      resultPrefix: 'Result: Instead of a barrier, a ',
      resultHighlight: 'Sonic Bomb',
      resultSuffix: ' that shatters every window within 1km is unleashed!',
      resultSubtext: '(However, the enemy\'s eardrums ruptured too, so subjugation successful..?)',
    },
    otherConstellations: {
      badge: 'STARNET DIRECTORY',
      title: 'Discover Other Constellations',
      description: 'Meet more intriguing and powerful constellations across the universe.',
      button: 'Explore Other Constellations',
    },
  },
  ja: {
    nav: {
      character: 'Character',
      world: 'World',
      system: 'System',
      prologue: 'Prologue',
    },
    footer: {
      rights: '© 2024 Silent Vowkeeper Project. All rights reserved.',
      promo: 'Created for Character Chat Promotion',
    },
    hero: {
      badge: '現代ファンタジー · 星座物 · ロマンティックコメディ',
      titleMain: '静寂の盟約の',
      titleAccent: '執行者',
      description: '"一言で宇宙を変える絶対的な星座が、\nあなたのハンター覚醒のためマートの試食コーナーに降臨しました。"',
      statusTitle: 'ステータスウィンドウ',
      statusContent: '『静寂の盟約の執行者』様があなたの魂を見出し、息を呑みます。',
      statusSubtext: '周囲の空気が振動します！',
      scrollDown: 'SCROLL DOWN',
    },
    prologue: {
      tag: 'PROLOGUE',
      title: 'マートの試食コーナーでの覚醒',
      intro: '目に見えぬ強大な存在が、卑小な人界の狭間を押し広げて侵入しました。\nその時、あなたの目の前にだけ青きウィンドウが雷のように浮かび上がりました。',
      status1Content: '『静寂の盟約の執行者』様があなたの魂を見出し、息を呑みます。',
      status1Subtext: '周囲の空気が振動します！',
      quote: '"百年の一巡を経て再び巡り逢えた輝かしき魂。\n込み上げる歓喜の叫びを必死に呑み込んだ絶対者は、\nその溢れんばかりの感情を宇宙の言語ではなく、震える指先でキャンバスの上に描き出しました。"',
      status2Content: '『静寂の盟約の執行者』様が絵で意思を伝えます！',
      status2Subtext: '(❎ 翻訳不可)',
      status3Content: '『静寂の盟約の執行者』様が[契約の贈り物]を送りました！',
      status3Subtext: 'あなたが[S級ハンター]として覚醒しました！',
      ending: '今、あなただけのハンター譚が始まります。',
    },
    character: {
      name: '静寂の盟約の執行者',
      subName: 'Silent Vowkeeper',
      appearanceLabel: '外見',
      appearanceValue: '207cmの巨躯。冷徹な印象の美男子。',
      personalityLabel: '性格 (MBTI)',
      personalityMbti: 'ISTJ',
      personalitySub: '徹底的で冷徹な管理者型',
      commTitle: '意思疎通の方式',
      commDescHtml: '言葉の力が強大すぎるため、意図せぬ現実の歪曲を防ぐべく<strong>アスキーアートの絵</strong>のみで対話します。',
      keywordSectionTitle: '性格キーワード解説',
      traits: [
        {
          title: '沈黙の中の盟約',
          desc: '彼はあなたとの約束を宇宙の法則よりも重んじ、その重責を沈黙の中で寡黙に守り続けます。',
        },
        {
          title: '深海のような感情',
          desc: '表には表れませんが、内面の深淵にはキャッシュメモリのようにあなたへの膨大な感情データが蓄積されています。',
        },
        {
          title: '冷徹な外見、熱烈な本心',
          desc: '極めて禁欲的で冷ややかに見えますが、あなたに対してだけは甘美で爆発的な火山のごとき情熱を秘めています。',
        },
      ],
      romanceTitle: 'Romance Style',
      romanceSub: '節制された所有と沈黙の支配',
      romanceDesc: '節制されていながらも圧倒的な性向。無用な言葉よりも吐息と脈拍、そして執拗な視線であなたを確かめようとします。あなたのすべてが自身の視野に入って初めて安堵する、重厚な錨（Anchor）のようです。',
    },
    world: {
      title: '世界観ガイド',
      subtitle: 'あなたが活動することになる宇宙の法則です。',
      tabs: {
        world: '人間界＆ハンター',
        constellation: '星座＆神界',
        system: 'システム＆財貨',
      },
      tabWorld: {
        mainTitle: '人間界とハンター',
        gateTitle: 'ゲート＆ハンター',
        gateDesc: "刻一刻と開くゲートから魔物が溢れ出します。星座の選択を受け異能を得た『ハンター』たちがこれを討伐します。ハンターは兵器であり芸能人としても扱われ、S〜F級にランク分けされます。",
        guildTitle: 'ギルドシステム',
        guildCorpLabel: '大企業型:',
        guildCorpVal: 'エデン(業績1位), モダニズム(ビジュアル), ハイパーズ(資本)',
        guildGovLabel: '政府/군:',
        guildGovVal: 'P.I.D, A.k, UT8(特殊部隊)',
      },
      tabConstellation: {
        mainTitle: '星座 (The Constellations)',
        boxTitle: '絶対星座3人',
        boxSub: '世界観最強の存在たちであり、互いに異なる宇宙で活動するため出会うことはありません。',
        constellations: [
          { name: '静寂の盟約の執行者 (主人公):', desc: '沈黙の絶対者。' },
          { name: '輝く万物の勝利者:', desc: 'ナルシストな筋肉バカ。' },
          { name: '怠惰なる黄金の審判者:', desc: '自身の契約者一筋。' },
        ],
        starnetTitle: '星座ネット (StarNet)',
        starnetDesc: "星座たちが定命の者を観測し支援（投げ銭）するストリーミングプラットフォームです。星座たちのチャットは『ステータスメッセージ』としてあなたに届きます。",
      },
      tabSystem: {
        mainTitle: 'システム＆財貨',
        creditTitle: 'クレジット (Credit)',
        creditDesc: "星座が支援する財貨で、『クレジットモール』でスキルやアイテムを購入できます。人間の通貨とは互換性がありません。",
        creditLimitF: 'F級 1日上限: 5 C',
        creditLimitS: 'S級 1日上限: 200 C',
        attunementTitle: '感応度システム',
        attunementSub: '星座と定命の者との結びつきの深度です。',
        attunementLow: '低(Low): 降臨不可。贈り物のみ可能。',
        attunementMid: '中(Mid): 10分間の降臨可能。',
        attunementHigh: '高(High): 常時降臨可能。',
      },
    },
    systemSection: {
      title: 'ゲームプレイガイド',
      hudTitle: 'HUD (ヘッドアップディスプレイ)',
      hudDesc: 'あなたの視野上部に常に表示される情報ウィンドウです。ターン、時刻、星座の感情状態、感応度を確認できます。',
      hudLive: 'LIVE',
      hudLocation: '❴T12 | 26.01.21/18:45 | ダンジョン入口 | 🟢❵',
      hudStatus: '⭐「🤤」',
      hudRankS: 'S級',
      hudRank1: '1位',
      hudAttunementLow: '🟨(低)',
      hudSkill: '⦉重力操作 [S]⦊',
      hudTarget: '⦃現在: マート強盗犯の制圧⦄',
      hudCredit: '💰 1,500 クレジット',
      translatorTipTitle: '💡 ヒント: 絵文字翻訳機',
      translatorTipDesc: '星座の絵を理解できない場合は、500クレジットで翻訳機を購入しましょう。(❎ OFF → 📶 ON)',
      gagTitle: 'ギャグ＆勘違いシステム',
      gagDesc: '星座は言葉を発せないため絵で能力を説明します。しかし、あなたの解釈が間違っていたら……？',
      statusTitle: 'ステータスウィンドウ',
      statusContent: '『静寂の盟約の執行者』様が能力の使い方を描いています。',
      statusSubtext: '何かが爆発するようです？',
      userInterp: 'ユーザーの解釈: 「爆弾を投げろってことか？」',
      realIntent: '🚨 実際の意図: 「魔力爆発によるバリア展開」',
      resultPrefix: '結果: バリアの代わりに周囲1kmの窓ガラスが全壊する',
      resultHighlight: '音波爆弾',
      resultSuffix: 'が炸裂！',
      resultSubtext: '(だが敵の鼓膜も破裂して制圧成功……？)',
    },
    otherConstellations: {
      badge: '星座ディレクトリ',
      title: '他の星座たちを見る',
      description: '宇宙を揺るがす、さらに魅力的な星座たちに会いに行きましょう。',
      button: '他の星座を見に行く',
    },
  },
};
