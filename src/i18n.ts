import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      "About Our Team": "About Our Team",
      "Prof. Dr. Shu-Kai Hsieh": "Prof. Dr. Shu-Kai Hsieh",
      "PROJECT LEADER": "PROJECT LEADER",
      "Professor, Graduate Institute of Linguistics, National Taiwan University, Taiwan":
        "Professor, Graduate Institute of Linguistics, National Taiwan University, Taiwan",
      "Wei-Ling Chen": "Wei-Ling Chen",
      "Ph.D. in Linguistics, National Taiwan University, Taiwan":
        "Ph.D. in Linguistics, National Taiwan University, Taiwan",
      "Lang-Ching Yeh": "Lang-Ching Yeh",
      "M.A. in Linguistics, National Taiwan University, Taiwan":
        "M.A. in Linguistics, National Taiwan University, Taiwan",
      "Deborah Watty": "Deborah Watty",
      "Research Assistant ,Institute of Linguistics, Academia Sinica, Taiwan":
        "Research Assistant ,Institute of Linguistics, Academia Sinica, Taiwan",
      "Micah Kitsunai": "Micah Kitsunai",
      "Yu-Hsiang Tseng": "Yu-Hsiang Tseng",
      "Post-doc researcher, Universität Tübingen, Germany":
        "Post-doc researcher, Universität Tübingen, Germany",
      "Yongfu Liao": "Yongfu Liao",
      "Graduate Institute of Linguistics, National Taiwan University, Taiwan":
        "Graduate Institute of Linguistics, National Taiwan University, Taiwan",
      About: "About",
      Tools: "Tools",
      Papers: "Papers",
      Workshop: "Workshop",
      "About SinDia": "About SinDia",
      "Read More": "Read More",
      "@Graduate":
        "@ National Taiwan University, Graduate Institute of Linguistics",
      "Paper & Talk": "Papers & Talks",
      Workshops: "Workshops",
      "Read Paper": "Read Paper",
      "View Slides": "View Slides",
      Access: "Access",
      "Workshop Website": "Workshop Website",
      "View Details": "View Details",
      LandingAbout:
        "The vision of Sinographia Diachronica (SinDia) is to awaken the millennia-deep intelligence in the age of AI. We aim to construct a comprehensive semantic and cultural map where classical writings, Buddhist translations, vernacular texts, modern online discourse, inscriptions, manuscripts, and multimodal artifacts intersect within a single computational universe."
    },

    about: {
      title: "Sinographia Diachronica (SinDia)",
      subtitle:
        "Vision & Mission — The Civilizational Memory of the Sinographic World",

      hero: {
        p1: "Across the long river of history, the Chinese script has never been merely a writing system. It is a <bold>technology of memory</bold> — a vessel that preserves how past generations sensed the world, shaped meaning, and understood life and cosmos.",
        p2: "It records each moment of transformation: the rise and fall of dynasties, the arrival of new religions, the encounters among cultures, and the continual re-encoding of language and thought.",
        p3: "The vision of <bold>Sinographia Diachronica (SinDia)</bold> is to awaken this millennia-deep intelligence in the age of AI.",
        p4: "We aim to construct a comprehensive semantic and cultural map where <bold>classical writings, Buddhist translations, vernacular texts, modern online discourse, inscriptions, manuscripts, and multimodal artifacts</bold> intersect within a single computational universe."
      },

      conviction: {
        title: "Our Conviction",
        body: "SinDia rests on a conviction: When the history of language is re-woven into computationally visible structures, the deeper architecture of civilization becomes <bold>traceable, interpretable, and imaginable.</bold> To understand the history of language is to open a path toward understanding <bold>how human consciousness shapes itself across centuries.</bold>"
      },

      missionsTitle: "Our Missions",

      missions: {
        "1": {
          title:
            "1. To weave a linguistic continuum that spans thousands of years",
          body: "From oracle-bone inscriptions and early imperial documents, to medieval Buddhist translations, to late imperial literature, and to contemporary digital communities, SinDia's mission is not simply to collect data but to <bold>connect, compare, and reconstruct.</bold> Our goal is to build a “diachronic observatory” where the life cycles of linguistic forms can be seen with clarity."
        },

        "2": {
          title:
            "2. To create tools that prepare the Sinographic world for an AI future",
          lead: "SinDia develops computational instruments designed for the unique ecology of the Chinese script:",
          items: {
            "1": "<bold>Glyph tokenization and glyph embeddings</bold> to capture the co-evolution of form and meaning",
            "2": "<bold>Component-level analyzers</bold> that reveal the internal logic of characters",
            "3": "<bold>Construction search for permutation-sensitive patterns</bold> (e.g., same-morpheme different-order structures)",
            "4": "<bold>Models and simulations of semantic change</bold>, integrating cultural, cognitive, and statistical perspectives"
          },
          footer:
            "These tools transform historical evidence into navigable landscapes of meaning."
        },

        "3": {
          title:
            "3. To bridge AI and the Humanities in order to illuminate the “historical mind”",
          lead: "SinDia investigates how writing, cognition, and cultural memory intertwine:",
          items: {
            "1": "How concepts emerge, shift, stabilize, or dissolve",
            "2": "How writing systems mediate collective thought",
            "3": "How meaning survives the centuries"
          },
          footer:
            "Our mission is to reveal how language becomes a medium through which civilization remembers."
        },

        "4": {
          title:
            "4. To foster a multidisciplinary and transregional community for the Sinographosphere",
          body: "SinDia brings together scholars from linguistics, AI, neuroscience, history, philology, cultural studies, and computational humanities. It also reaches across the broader Sinographosphere—to Sinitic varieties, neighboring scripts, textual networks, and cross-regional cultural flows—building a shared methodological and conceptual platform for future research."
        }
      },

      closing: {
        body: "At its core, SinDia is an inquiry into the <bold>deep time of language.</bold> Tracing the shifts in characters, words, and constructions is ultimately a way of <bold>tracing how thought is preserved, how culture is remembered, and how consciousness unfolds along the long arc of history.</bold> SinDia seeks to set these buried forces back into motion – to understand how the past thought, and to help us imagine how the future might think.",
        joinUs: "Join Us!",
        contact: "Contact: Prof. Shu-Kai Hsieh, shukaihsieh@ntu.edu.tw"
      }
    }
  },

  zh: {
    translation: {
      "About Our Team": "我們的團隊",
      "Prof. Dr. Shu-Kai Hsieh": "謝舒凱 教授",
      "PROJECT LEADER": "計畫主持人",
      "Professor, Graduate Institute of Linguistics, National Taiwan University, Taiwan":
        "國立臺灣大學語言學研究所教授",
      "Wei-Ling Chen": "陳韋伶",
      "Ph.D. in Linguistics, National Taiwan University, Taiwan":
        "國立臺灣大學語言學研究所博士",
      "Lang-Ching Yeh": "葉朗敬",
      "M.A. in Linguistics, National Taiwan University, Taiwan":
        "國立臺灣大學語言學研究所碩士",
      "Deborah Watty": "Deborah Watty",
      "Research Assistant ,Institute of Linguistics, Academia Sinica, Taiwan":
        "中央研究院語言學研究所研究助理",
      "Micah Kitsunai": "橘內每歌",
      "Yu-Hsiang Tseng": "曾昱翔",
      "Post-doc researcher, Universität Tübingen, Germany":
        "德國杜賓根大學博士後研究員",
      "Graduate Institute of Linguistics, National Taiwan University, Taiwan":
        "國立臺灣大學語言學研究所",
      "Yongfu Liao": "廖永賦",
      About: "關於我們",
      Tools: "工具",
      Papers: "論文",
      "About SinDia": "關於 SinDia",
      "Read More": "了解更多",
      "@Graduate": "@ 國立臺灣大學語言學研究所",
      "Paper & Talk": "研究成果與演講",
      Workshops: "工作坊",
      "Read Paper": "閱讀論文",
      "View Slides": "查看投影片",
      Access: "打開網站",
      "Workshop Website": "工作坊網站",
      "View Details": "查看詳情",
      LandingAbout:
        "Sinographia Diachronica（SinDia） 的願景，是讓這條跨越千年的智慧脈絡在 AI 時代重新甦醒。我們期待建構一個能看見 語言變遷、文字演化、文化記憶、認知生長 的大地圖——讓古典文獻、佛教翻譯、白話寫作、現代網路語言、乃至碑刻與影像，都能在同一套語義宇宙中互相呼應。"
    },

    about: {
      title: "Sinographia Diachronica（SinDia）",
      subtitle: "願景與使命 — 漢字長時段的文明記憶",

      hero: {
        p1: "在漫長的歷史之河中，漢字不只是一套書寫系統，更是一種<bold>保存心靈的技術</bold>。",
        p2: "它記錄了先民如何感受世界、如何建立秩序、如何理解生命與宇宙；也記錄了每一次王朝興替、宗教傳入、文化碰撞中，語言與思想的重新編碼。",
        p3: "Sinographia Diachronica（SinDia） 的願景，是讓這條跨越千年的智慧脈絡在 AI 時代重新甦醒。",
        p4: "我們期待建構一個能看見 <bold>語言變遷、文字演化、文化記憶、認知生長</bold> 的大地圖——讓古典文獻、佛教翻譯、白話寫作、現代網路語言、乃至碑刻與影像，都能在同一套語義宇宙中互相呼應。"
      },

      conviction: {
        title: "我們的信念",
        body: "我們相信：當語言史被重新編織為可計算的結構，文明的深層意義也將變得<bold>可探索、可推演、可想像。</bold> 理解漢語史，也是一扇通往<bold>理解人類意識如何在千年中自我塑形</bold>的入口。"
      },

      missionsTitle: "我們的使命是：",

      missions: {
        "1": {
          title: "一、編織跨越千年的語言長河",
          body: "從甲骨刻辭、秦漢碑牘，到魏晉翻譯佛經、唐宋文獻，一直到當代的網路語言，SinDia 的使命不是單純蒐集，而是<bold>串聯—比對—重構。</bold> 我們要建造的不只是語料庫，而是一座能觀察語言生命週期的「歷時觀測站」。"
        },

        "2": {
          title: "二、打造迎向 AI 未來的文字與語意工具",
          lead: "SinDia 開發屬於漢字文明的計算工具，包括：",
          items: {
            "1": "<bold>Glyph tokenization / glyph embeddings</bold>：以字形為粒度理解形—義共演",
            "2": "<bold>漢字部件解析器</bold>：揭露文字的內在邏輯",
            "3": "<bold>構式與同素異序的智能檢索</bold>：捕捉語法變形中的深層規律",
            "4": "<bold>語義變遷的模型與模擬</bold>：讓意義的流動可被追蹤與預測"
          },
          footer:
            "這些工具的目的不是技術本身，而是讓語言成為能「聽見歷史」的裝置。"
        },

        "3": {
          title: "三、在 AI 與人文之間建立理解「歷史心靈」的橋梁",
          lead: "我們關注語言、認知與文明記憶如何交織：",
          items: {
            "1": "從概念的形成，到意義的漂移與穩定",
            "2": "從書寫的發明，到集體心智的凝固與鬆動",
            "3": "語言如何讓思想傳遞、讓文化延續，也讓意識在世代之間留下痕跡"
          },
          footer: ""
        },

        "4": {
          title: "四、為漢字文化圈打造跨學科與跨地域的研究共同體",
          body: "SinDia (Sinographia Diachronica) 連結語言學、AI、認知神經科學、歷史學、文獻學、資訊科學等領域，也連結更廣義的漢字文化圈 （Sinographosphere） ——不論是漢語變異、周邊語言、文本傳統，或跨地域文化流動，都將在此找到共同的研究語言與方法論。"
        }
      },

      closing: {
        body: "SinDia 的核心，是對<bold>「語言的長時段生命」</bold>的敬畏。當我們追蹤一個字的形變、一個詞的語義漂移、一種語法的萌生或消亡，所看見的其實是<bold>思想如何被保存、文化如何被記住、意識如何在歷史中延展。</bold> SinDia 立志讓這些深埋於文獻與文字中的力量重新流動。理解過去如何思考，也讓我們得以重新發明未來。",
        joinUs: "請加入我們！",
        contact: "主持人：謝舒凱教授  shukaihsieh@ntu.edu.tw"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    supportedLngs: ["en", "zh"],
    ns: ["translation", "about"],
    defaultNS: "translation",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
