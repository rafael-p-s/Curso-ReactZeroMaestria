const Events = () => {
  const handleMyEvent = (e) => {
    console.log(e);
    console.log("Ativou o evento.");
  };
const renderSomething = (x) => {
if(x){
  return <h1>Renderizando isso!</h1>;
  }else{
    return <h1>Não foi renderizado!</h1>;
}
};
  return (
    <>
      <button onClick={handleMyEvent}>Clique aqui.</button>
      <div>
        <button onClick={()=>console.log("Foi clicado aqui.")}>Clique Aqui!</button>
      </div>
      {renderSomething(true)}
      {renderSomething(false)}
    </>
  );
};
export default Events;
