export const checkUrl = async (url, setIsUrlValid, setErrorMessage, setIsLoading) => {

  let id = 0;

  const suffixArray = ["txt", "xlsx", "pptx", "rtf", "pdf", "jpeg", "gif", "png", "svg", "mp3", "zip", "js", "html", "ts", "css", "env"];
  
  setIsLoading(true);
  // Überprüfen, ob die URL existiert
  fetch(url, {
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Request-Headers": "*",
      "Access-Control-Request-Method": "*",
      "Access-Control-Allow-Origin": "*"
    },
  })
    .then(async (res) => {
     
      if (res?.status == 0 || res?.status == 200) {
        let isFile = suffixArray.includes(url.split('.').pop())
        let letzterString = url.split('/').pop().indexOf('.') > -1;
        let isOrdner = url.endsWith('/');

        if (letzterString) {
          if (isFile) id = 2;
          else id = 3;
        }
        else id = 3;
        const response = await fetch(`https://validate-url-data.onrender.com/data/${id}`)    //(`https://validate-url-data.onrender.com/data/${id}`)
        const data = await response?.json();
        setIsUrlValid(data);
        return;
      }
    })
    .catch(async (err) => {
      console.log("resss err ", err)
      let id = 1;
      const response = await fetch(`https://validate-url-data.onrender.com/data/${id}`)     //(`https://validate-url-data.onrender.com/data/${id}`);
      const data = await response?.json();
      setErrorMessage(data.message);
      setIsUrlValid(data);
      throw new Error(err);
    }).finally(()=>{
      setIsLoading(false);
    });
};
