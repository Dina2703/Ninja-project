import { useState } from "react";

//useState hook gives as a way to make a reactive value and also provides us with a way to change that value whenever we want.
function Home() {
  {
    /* this value is not reactive value, so if its change not going to change the UI, because React not watching ins value, as it does with reactive values 
  let name = "sam"; */
  }
  //useState() value could be anything, number, string, array, object, boolean
  const [name, setName] = useState("Sam");
  const [age, setAge] = useState(20);


  const handleClick = () => {
    {
      /*this value is reactive value so if it changes at any point it's going to change in the template(UI) as well. So when we use this function setName to change the value, that triggers react to re-render the component, when it re-renders we have that new value of name beacuse it's been updated */
    }
    setName("Dina");
    setAge(21);
  };

  return (
    <div className="home">
      <h2>Home Page</h2>
      <p>
        {name} is {age} years old
      </p>
      {/*handleClick with () gets fired immediately, before the Click occurs, we don't neet to add() */}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
export default Home;
