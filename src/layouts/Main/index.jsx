import { useEffect, useState } from "react";
import Letters from "../../components/Letters";
import { ABECEDARIO } from "../../services/Constants/mainConstants";

export default function Main() {
  const WORD = "BETTER".split("");
  const WORDSIZE = WORD.length;
  const WORDLINE = "_".repeat(WORDSIZE).split("");

  // VALOR INICIAL
  const [letras, setLetras] = useState(WORDLINE);
  // VIDAS
  const [life, setLife] = useState(6);

  // AGREGA LA LETRA SI ES LA CORRECTA
  const handleCLick = (element) => {
    const position = [];
    const newLetras = [...letras];

    for (let index = 0; index < WORD.length; index++) {
      if (WORD[index] === element) {
        position.push(index);
      }
    }
    if (position.length === 0 && life > 0) {
      const count = life - 1;
      setLife(count);
    }
    for (const iterator of position) {
      newLetras.splice(iterator, 1, element);
      setLetras(newLetras);
    }
  };

  useEffect(() => {
    if (life === 0) {
      alert("you loose, try again");
    }
  }, [life]);

  return (
    <>
      <h1 className="text-black text-xl">VIDAS = {life}</h1>
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
