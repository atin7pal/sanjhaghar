import { useEffect, useState } from "react";
import '../../App.css'

const Translator = () => {
  const [showTranslator, setShowTranslator] = useState(false);

  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false
      },
      "google_translate_element"
    );
  };
  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, [setShowTranslator, showTranslator]);
  return (
    <div className="relative">
      {/* Translate Button */}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        onClick={() => setShowTranslator(!showTranslator)}
      >
        {showTranslator ? "Hide Translate" : "Translate"}
      </button>

      {/* Translator Dialog */}
      {showTranslator && (
        <div className="absolute top-12 right-0 bg-white border border-gray-300 rounded-lg shadow-lg p-4 z-50 w-30% h-full">
          <div id="google_translate_element"></div>
        </div>
      )}
    </div>
  );
};

export default Translator;
