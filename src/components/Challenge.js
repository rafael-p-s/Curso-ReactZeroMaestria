const Challenge = () => {
  const n1 = "2";
  const n2 = "3";
  const somar = () => {
    const soma = parseInt(n1) + parseInt(n2);
    console.log(soma);
  };
  const subtratir = () => {
    const subtracao = parseInt(n1) - parseInt(n2);
    console.log(subtracao);
  };
  const multiplicar = () => {
    const multiplicacao = parseInt(n1) * parseInt(n2);
    console.log(multiplicacao);
  };
  const dividir = () => {
    const divisao = parseInt(n1) / parseInt(n2);
    console.log(divisao);
  };
  return (
    <>
      <div>
        <h1>Challenge</h1>
        <p>{n1}</p>
        <p>{n2}</p>
        <button onClick={somar}>Somar</button>
        <button onClick={subtratir}>Subtratir</button>
        <button onClick={multiplicar}>Multiplicar</button>
        <button onClick={dividir}>Dividir</button>
      </div>
    </>
  );
};

export default Challenge;
