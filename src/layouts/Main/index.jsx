import { useEffect, useState } from "react";
import Letters from "../../components/Letters";
import { ABECEDARIO } from "../../services/Constants/mainConstants";

export default function Main() {
  const WORD = "BETTER".split("");
  const WORDSIZE = WORD.length;
  const WORDLINE = "_".repeat(WORDSIZE).split("");

  // VALOR INICIAL
  const [letras, setLetras] = useState(WORDLINE);

  // MODIFICA SI LA LETRA ES LA CORRECTA
  const handleCLick = (element) => {
    // if (WORD.includes(element)) {

    //   const indexWORD = WORD.indexOf(element);
    //   const newLetras = [...letras];
    //   newLetras.splice(indexWORD, 1, element);
    //   setLetras(newLetras);
    // }
    // CHECAR COMO VALIDAR DOS DATOS
    for (let e of WORD) {
      if (e === element) {
        console.log(e);
        // console.log(e, " - ", element);
        const indexWORD = WORD.indexOf(element);
        console.log(indexWORD);
        const newLetras = [...letras];
        newLetras.splice(indexWORD, 1, element);
        setLetras(newLetras);
      }
    }
    // WORD.forEach((e) => {
    //   if (e === element) {
    //     console.log(e, " - ", element);
    //     const indexWORD = WORD.indexOf(element);
    //     console.log(indexWORD);
    //     const newLetras = [...letras];
    //     newLetras.splice(indexWORD, 1, element);
    //     setLetras(newLetras);
    //   }
    // });
  };

  useEffect(() => {
    console.log(letras);
  }, [letras]);

  return (
    <>
      <div className={`flex flex-row gap-2`}>
        {letras.map(function (e, index) {
          return (
            <p className="underline text-black" key={`${index + e}`}>
              {e}
            </p>
          );
        })}
      </div>
      <div className="grid grid-cols-9 gap-1 w-80">
        {ABECEDARIO.map(function (element) {
          return (
            <div key={element}>
              <Letters
                letter={element}
                onClick={() => {
                  handleCLick(element);
                }}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
