let mode = "madhi";
let current = "";

// ======================
// SUBJECT
// ======================
const subjects = [
  { key: "ana", ar: "أنا", id: "Saya", label: "tunggal" },
  { key: "nahnu", ar: "نحن", id: "Kami", label: "jamak" },

  { key: "anta", ar: "أنتَ", id: "Kamu", label: "tunggal pria" },
  { key: "anti", ar: "أنتِ", id: "Kamu", label: "tunggal wanita" },
  { key: "antuma_m", ar: "أنتما", id: "Kalian", label: "ganda pria" },
  { key: "antuma_f", ar: "أنتما", id: "Kalian", label: "ganda wanita" },
  { key: "antum", ar: "أنتم", id: "Kalian", label: "jamak pria" },
  { key: "antunna", ar: "أنتنّ", id: "Kalian", label: "jamak wanita" },

  { key: "huwa", ar: "هو", id: "Dia", label: "tunggal pria" },
  { key: "hiya", ar: "هي", id: "Dia", label: "tunggal wanita" },
  { key: "huma_m", ar: "هما", id: "Mereka", label: "ganda pria" },
  { key: "huma_f", ar: "هما", id: "Mereka", label: "ganda wanita" },
  { key: "hum", ar: "هم", id: "Mereka", label: "jamak pria" },
  { key: "hunna", ar: "هنّ", id: "Mereka", label: "jamak wanita" }
];

// ======================
// KATA KERJA
// ======================
const verb = {
  id_present: "melakukan",
  id_past: "telah melakukan",

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
  let verbId;

  if (mode === "madhi") {
    verbAr = verb.past[subject.key];
    verbId = verb.id_past;
  } else {
    verbAr = verb.present[subject.key];
    verbId = verb.id_present;
  }
  
  const sentenceId = subject.id + " " + verbId;
  const sentenceAr = subject.ar + " " + verbAr;

  current = sentenceAr;

  document.getElementById("question").innerText = sentenceId;
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
