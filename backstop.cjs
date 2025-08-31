module.exports = {
  id: "backstop_default",
  viewports: [
    /* {
      "label": "phone",
      "width": 320,
      "height": 480
    }, */
    {
      label: "tablet",
      width: 794,
      height: 1123,
    },
    /* { "label": "desktop", "width": 1280, "height": 800 } */
  ],
  // onBeforeScript: "playwright/onBefore.cjs",
  // onReadyScript: "playwright/onReady.cjs",
  scenarios: [
    {
      label: "Full Preview (1st page)",
      url: "https://localhost:3715",
      // referenceUrl: "",
      // readyEvent: "",
      // readySelector: "",
      delay: 0,
      hideSelectors: [],
      removeSelectors: [".editor-frame"],
      hoverSelector: "",
      clickSelector: "",
      postInteractionWait: 0,
      selectors: [".display-page"],
      selectorExpansion: false,
      expect: 0,
      misMatchThreshold: 0.1,
      requireSameDimensions: false,
    },
    {
      label: "<ProfilePicture>",
      url: "https://localhost:3715",
      referenceURl: "",
      delay: 0,
      selectors: [".profile-picture-section"],
      misMatchThreshold: 0.1,
      requireSameDimensions: false,
    },
  ],
  paths: {
    bitmaps_reference: "backstop_data/bitmaps_reference",
    bitmaps_test: "backstop_data/bitmaps_test",
    engine_scripts: "backstop_data/engine_scripts",
    html_report: "backstop_data/html_report",
    ci_report: "backstop_data/ci_report",
  },
  report: ["browser"],
  engine: "playwright",
  engineOptions: {
    browser: "chromium",
    headless: true,
    channel: "chromium",
  },
  asyncCaptureLimit: 5,
  asyncCompareLimit: 50,
  debug: false,
  debugWindow: false,
};
