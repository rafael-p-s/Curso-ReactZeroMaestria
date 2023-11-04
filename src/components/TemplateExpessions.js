const TemplateExpressions = () => {
  const name = "Rafael";
  const data = {
    age: 30,
    job: "Estágiario",
  };
  return (
    <>
      <h1>Olá {name}, tudo bem?</h1>
      <h1>
        {data.age},{data.job}
      </h1>
    </>
  );
};

export default TemplateExpressions;
