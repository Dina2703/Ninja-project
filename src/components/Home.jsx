function Home() {
  const handleClick = () => {
    console.log("it's clicked");
  };

  const handleClickAgain = (name) => {
    console.log(`clicked with ${name}`);
  };

  const handleClickEvent = (e) => {
    console.log("clicked", e);
  };

  const handleClickEventTarget=(text, e) => {
    console.log(text, e.target);
  }
  return (
    <div className="home">
      <h2>Home Page</h2>
      {/*handleClick with () gets fired immediately, before the Click occurs, we don't neet to add() */}
      <button onClick={handleClick}>Click Me</button>

      <button
        /* the below function is not gonna fire before the event occurs, because it's wrapped with an anonymous function which isn't firing to begin with. Now when we click on this button it fires  anonymous function  and then invokes the other one(inside the curly braces), which passe s in the name
        onClick={() => {
          handleClickAgain("Dina");
        }}*/
        //or we can remove curly braces, and make it one line
        onClick={() => handleClickAgain("Dina")}
      >
        Click me again
      </button>
      {/* EVENT object or EVENT parameter that we automatically get access to inside these functions when an event occurs. handleClickEvent function(which is the referenced function) automatically gains as the first parameter the EVENT OBJECT, and we can do something with that event object. onClick={() => handleClickAgain("Dina")} in this example  handleClickAgain is not being referenced as the function, the anonymous function(() =>) gets access to the EVENT OBJECT, then if we want to use this event object, we can just pass it as an argument, like: onClick={(e) => handleClickAgain("Dina", e)}, then we can use it inside handleClickAgain, like: 
      const handleClickAgain = (name, e) => {
      console.log(`clicked with ${name}, e `);
        };*/}
      <button onClick={handleClickEvent}>Click with event object</button>
      <button onClick={(e) => handleClickEventTarget('clcked', e)}>Click to get Event Target</button>
    </div>
  );
}
export default Home;
