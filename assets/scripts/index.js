const mobileNavButton = document.querySelector(".mobile-nav-button");
const headerMobile = document.querySelector(".header-mobile");
let flag = false;

if (mobileNavButton && headerMobile) {
  mobileNavButton.addEventListener("click", () => {
    flag = !flag;
    if (flag) {
      headerMobile.style.opacity = "1";
      headerMobile.style.pointerEvents = "all";
      mobileNavButton.classList.add("is-open");
    } else {
      headerMobile.style.opacity = "0";
      headerMobile.style.pointerEvents = "none";
      mobileNavButton.classList.remove("is-open");
      mobileNavButton.style.backgroundColor = "";
    }
  });

  mobileNavButton.addEventListener("mouseenter", () => {
    if (!flag) {
      mobileNavButton.style.backgroundColor = "#3A3A3A";
    }
  });

  mobileNavButton.addEventListener("mouseleave", () => {
    if (!flag) {
      mobileNavButton.style.backgroundColor = "";
    }
  });
}

const LANG_STORAGE_KEY = "siteLocale";

const LANGUAGES = [
  {
    code: "ru",
    label: "Rus",
    flag: "assets/images/flag-rus.png",
  },
  {
    code: "en",
    label: "EN",
    flag: "assets/images/flag-eng.png",
  },
];

function getInitialLocale() {
  try {
    const stored = localStorage.getItem(LANG_STORAGE_KEY);
    if (!stored) return "ru";
    const exists = LANGUAGES.some((lang) => lang.code === stored);
    return exists ? stored : "ru";
  } catch (e) {
    return "ru";
  }
}

function saveLocale(locale) {
  try {
    localStorage.setItem(LANG_STORAGE_KEY, locale);
  } catch (e) {
    // silent fallback
  }
}

function initLanguageSwitchers() {
  const switchers = document.querySelectorAll(".lang-switcher");
  if (!switchers.length) return;

  const getLangConfig = (code) =>
    LANGUAGES.find((lang) => lang.code === code) || LANGUAGES[0];

  function detectInitialLocaleFromDOM() {
    const anyCurrent = document.querySelector(
      ".lang-switcher .lang-current .lang-code"
    );
    if (anyCurrent) {
      const text = anyCurrent.textContent.trim().toUpperCase();
      const byLabel = LANGUAGES.find(
        (lang) => lang.label.toUpperCase() === text
      );
      if (byLabel) return byLabel.code;
    }
    return getInitialLocale();
  }

  let currentLocale = detectInitialLocaleFromDOM();

  function buildOptionsForSwitcher(switcher) {
    const dropdown = switcher.querySelector(".lang-dropdown");
    if (!dropdown) return;

    dropdown.innerHTML = "";

    LANGUAGES.forEach((lang) => {
      if (lang.code === currentLocale) return;

      const option = document.createElement("button");
      option.type = "button";
      option.className = "lang-option";
      option.setAttribute("data-locale", lang.code);

      const img = document.createElement("img");
      img.className = "lang-flag";
      img.src = lang.flag;
      img.alt = lang.label;

      const span = document.createElement("span");
      span.className = "lang-code";
      span.textContent = lang.label;

      option.appendChild(img);
      option.appendChild(span);
      dropdown.appendChild(option);
    });
  }

  function updateCurrentForSwitcher(switcher) {
    const currentBtn = switcher.querySelector(".lang-current");
    if (!currentBtn) return;

    const cfg = getLangConfig(currentLocale);
    const flagImg = currentBtn.querySelector(".lang-flag");
    const codeSpan = currentBtn.querySelector(".lang-code");

    if (flagImg) {
      flagImg.src = cfg.flag;
      flagImg.alt = cfg.label;
    }
    if (codeSpan) {
      codeSpan.textContent = cfg.label;
    }
  }

  function updateAllSwitchers() {
    switchers.forEach((switcher) => {
      updateCurrentForSwitcher(switcher);
      buildOptionsForSwitcher(switcher);
      switcher.classList.remove("is-open");
    });

    attachOptionHandlers();
  }

  function setLocale(newLocale) {
    if (newLocale === currentLocale) {
      switchers.forEach((s) => s.classList.remove("is-open"));
      return;
    }

    const exists = LANGUAGES.some((lang) => lang.code === newLocale);
    if (!exists) return;

    currentLocale = newLocale;
    saveLocale(currentLocale);
    updateAllSwitchers();
  }

  function attachCurrentHandlers() {
    switchers.forEach((switcher) => {
      const currentBtn = switcher.querySelector(".lang-current");
      if (!currentBtn) return;

      const cloned = currentBtn.cloneNode(true);
      currentBtn.parentNode.replaceChild(cloned, currentBtn);
      const btn = cloned;

      btn.addEventListener("click", (event) => {
        event.stopPropagation();
        switcher.classList.toggle("is-open");
      });
    });
  }

  function attachOptionHandlers() {
    switchers.forEach((switcher) => {
      const options = switcher.querySelectorAll(".lang-option");
      options.forEach((option) => {
        option.onclick = (event) => {
          event.stopPropagation();
          const locale = option.getAttribute("data-locale");
          setLocale(locale);
          switcher.classList.remove("is-open");
        };
      });
    });
  }

  // Инициализация
  attachCurrentHandlers();
  updateAllSwitchers();

  // Клик вне переключателей — закрыть только language dropdown
  document.addEventListener("click", () => {
    switchers.forEach((switcher) => {
      switcher.classList.remove("is-open");
    });
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initLanguageSwitchers);
} else {
  initLanguageSwitchers();
}

// Slider
const slider = document.querySelector(".slider");

if (slider) {
  console.log(slider);

  const wrapper = document.querySelector(".slider-wrapper");
  const slides = document.querySelectorAll(".slider-slide");

  let index = 0;
  let startX = 0;

  function update() {
    const slideWidth = slides[0].offsetWidth + 20;
    wrapper.style.transform = `translateX(-${index * slideWidth}px)`;
  }

  slider.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  slider.addEventListener("touchend", (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = endX - startX;

    if (diff > 50 && index > 0) {
      index--;
    }

    if (diff < -50 && index < slides.length - 1) {
      index++;
    }

    update();
  });
}
