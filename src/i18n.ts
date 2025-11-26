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
      Workshop: "工作坊",
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
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
