let mode = "madhi";
let current = "";

// ======================
// SUBJECT
// ======================
const subjects = [
  { key: "ana", ar: "أنا", en: "I", label: "tunggal" },
  { key: "nahnu", ar: "نحن", en: "We", label: "jamak" },

  { key: "anta", ar: "أنتَ", en: "You", label: "tunggal pria" },
  { key: "anti", ar: "أنتِ", en: "You", label: "tunggal wanita" },
  { key: "antuma_m", ar: "أنتما", en: "You", label: "ganda pria" },
  { key: "antuma_f", ar: "أنتما", en: "You", label: "ganda wanita" },
  { key: "antum", ar: "أنتم", en: "You", label: "jamak pria" },
  { key: "antunna", ar: "أنتنّ", en: "You", label: "jamak wanita" },

  { key: "huwa", ar: "هو", en: "He", label: "tunggal pria" },
  { key: "hiya", ar: "هي", en: "She", label: "tunggal wanita" },
  { key: "huma_m", ar: "هما", en: "They", label: "ganda pria" },
  { key: "huma_f", ar: "هما", en: "They", label: "ganda wanita" },
  { key: "hum", ar: "هم", en: "They", label: "jamak pria" },
  { key: "hunna", ar: "هنّ", en: "They", label: "jamak wanita" }
];

// ======================
// KATA KERJA
// ======================
const verb = {
  en: "do",
  past_en: "did",

  past: {
    ana: "فعلتُ",
    nahnu: "فعلنا",

    anta: "فعلتَ",
    anti: "فعلتِ",
    antuma_m: "فعلتما",
    antuma_f: "فعلتما",
    antum: "فعلتم",
    antunna: "فعلتنّ",

    huwa: "فعلَ",
    hiya: "فعلتْ",
    huma_m: "فعلا",
    huma_f: "فعلتا",
    hum: "فعلوا",
    hunna: "فعلنَ"
  },

  present: {
    ana: "أفعل",
    nahnu: "نفعل",

    anta: "تفعل",
    anti: "تفعلين",
    antuma_m: "تفعلان",
    antuma_f: "تفعلان",
    antum: "تفعلون",
    antunna: "تفعلن",

    huwa: "يفعل",
    hiya: "تفعل",
    huma_m: "يفعلان",
    huma_f: "تفعلان",
    hum: "يفعلون",
    hunna: "يفعلن"
  }
};

// ======================
// RANDOM
// ======================
function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// ======================
// GENERATE
// ======================
function generateSentence() {
  const subject = pick(subjects);

  let verbAr;
  let verbEn;

  if (mode === "madhi") {
    verbAr = verb.past[subject.key];
    verbEn = verb.past_en;
  } else {
    verbAr = verb.present[subject.key];
    verbEn = verb.en;
  }

  const sentenceEn = subject.en + " " + verbEn;
  const sentenceAr = subject.ar + " " + verbAr;

  current = sentenceAr;

  document.getElementById("question").innerText = sentenceEn;
  document.getElementById("label").innerText = subject.label;

  document.getElementById("answer").innerText = "";
  document.getElementById("answer").style.display = "none";
}

// ======================
// SHOW ANSWER
// ======================
function showAnswer() {
  document.getElementById("answer").innerText = current;
  document.getElementById("answer").style.display = "block";
}

// ======================
// TOGGLE MODE
// ======================
function toggleMode() {
  mode = mode === "madhi" ? "mudhari" : "madhi";

  const btn = document.getElementById("modeBtn");
  btn.innerText = "Mode: " + (mode === "madhi" ? "Fi'il Madhi" : "Fi'il Mudhari'");
}
