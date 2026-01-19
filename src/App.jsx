import { useState } from "react";
import "./App.css";
import Home from "./components/home/Home";
import { checkUrl } from "./api/ApiCheck";

function App() {
  const [isUrlValid, setIsUrlValid] = useState({});
  const [url, setUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  let highNumberOfscheme = 9;
  let validUrlschemes = [
    "file://",
    "ftp://",
    "http://",
    "https://",
    "mailto:",
    "wss://",
  ];

  // Prüfen, ob die eingegebene string eine URL ist
  const handleChange = (e) => {
    setUrl(e.target.value);
    setIsUrlValid({});
    let isValidHttpUrl = validateHttpURL(e.target.value);
    let isValidEmail = isEmail(e.target.value);
   // let isValidFIle = isLocalFile(e.target.value)

    if (e.target.value.length === 0) {
      setErrorMessage("");
    } else if (
      e.target.value.length < highNumberOfscheme &&
      validUrlschemes.some((item) => item.includes(e.target.value))
    ) {
      setErrorMessage("");
    } else if (isValidHttpUrl === false && isValidEmail === false)
      setErrorMessage("Bitte geben Sie eine gültige URL ein!");
    else setErrorMessage("");
    console.log("error message", errorMessage);
  };

  // Prüfen, ob die eingegebene string eine http URL ist
  function validateHttpURL(value) {
    const validURLPattern =
      /^(http|https|ftp|wss|file):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
    return validURLPattern.test(value);
  }

  //Prüfen, ob die eingegebene string eine email ist
  const isEmail = (value) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(value);
  };
   
  //Prüfen, ob die eingegebene string eine lokale Datei ist.
  // const isLocalFile = (value) =>{
  //   const filePattern = /^file:\/\/\/(?=.*abc)(?=.*123)(?=.*xyz)(?!.*456).*$/i
  //   return  filePattern.test(value);
  // }


  return (
    <div className="w-full">
      <Home
        url={url}
        onChange={handleChange}
        onClick={() => checkUrl(url, setIsUrlValid, setErrorMessage,setIsLoading)}
        errorMessage={errorMessage}
        isLoading={isLoading}
      />
      
      {(errorMessage.length > 0) && (
        <div
          className="max-w-2xl sm:w-auto bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-2"
          role="alert"
        >
          <p>{errorMessage}</p>
        </div>
      )}

      {isUrlValid?.isValid === 'true' &&
        (<div
          className="max-w-2xl sm:w-auto bg-teal-100 border-1-4 border-teal-500 rounded-b text-teal-700 p-2"
          role="alert"
        >
          <p>{isUrlValid?.message}</p>
        </div>)
      }
    </div>
  );
}

export default App;
