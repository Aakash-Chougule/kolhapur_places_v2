// File: js/lang.js
const translations = {
  en: {
    title: "Kolhapur Tourist Guide",
    home: "Home",
    details: "Places",
    contact: "Contact Us",
    intro: "Kolhapur is a historic city in Maharashtra known for its temples, palaces, lakes, and rich cultural heritage. It is famous for the Mahalaxmi Temple, Kolhapuri chappals, spicy cuisine, and vibrant festivals.",
    name: "Name",
    email: "Email",
    phone: "Phone",
    message: "Message",
    submit: "Submit",
    thankYou: "Thank you for contacting us!"
  },
  hi: {
    title: "कोल्हापुर पर्यटन गाइड",
    home: "होम",
    details: "स्थान",
    contact: "संपर्क करें",
    intro: "कोल्हापुर महाराष्ट्र का एक ऐतिहासिक शहर है जो अपने मंदिरों, महलों, झीलों और समृद्ध सांस्कृतिक विरासत के लिए जाना जाता है। यह महालक्ष्मी मंदिर, कोल्हापुरी चप्पल, तीखा खाना और उत्सवों के लिए प्रसिद्ध है।",
    name: "नाम",
    email: "ईमेल",
    phone: "फ़ोन",
    message: "संदेश",
    submit: "जमा करें",
    thankYou: "हमसे संपर्क करने के लिए धन्यवाद!"
  },
  mr: {
    title: "कोल्हापूर पर्यटन मार्गदर्शक",
    home: "मुख्यपृष्ठ",
    details: "स्थळे",
    contact: "संपर्क",
    intro: "कोल्हापूर हे महाराष्ट्रातील एक ऐतिहासिक शहर आहे, जे मंदिरं, महाल, तलाव आणि सांस्कृतिक वारशासाठी प्रसिद्ध आहे. हे महालक्ष्मी मंदिर, कोल्हापुरी चप्पल, झणझणीत अन्न आणि उत्सवांसाठी ओळखले जाते.",
    name: "नाव",
    email: "ईमेल",
    phone: "फोन",
    message: "संदेश",
    submit: "सबमिट",
    thankYou: "संपर्क केल्याबद्दल धन्यवाद!"
  }
};

function translate(lang) {
  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.getAttribute("data-translate");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll("input, textarea, button").forEach(el => {
    const key = el.name || el.id;
    if (translations[lang][key]) {
      if (el.tagName === "BUTTON") {
        el.textContent = translations[lang][key];
      } else {
        el.placeholder = translations[lang][key];
      }
    }
  });
}

const langSelect = document.getElementById("languageSelect");
if (langSelect) {
  langSelect.addEventListener("change", () => {
    const lang = langSelect.value;
    localStorage.setItem("lang", lang);
    translate(lang);
  });

  const storedLang = localStorage.getItem("lang") || "en";
  langSelect.value = storedLang;
  translate(storedLang);
}
