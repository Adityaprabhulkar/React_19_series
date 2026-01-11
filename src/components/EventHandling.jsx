import "./EV.css";

export const EventHandling = () => {
  // function handleBUttonClick () {
  //     alert("Hey i am onClick event");
  // }

  const handleBUttonClick = (event) => {
    console.log(event);
    console.log(event.target);
    console.log(event.type);

    alert("Hey i am onClick event");
  };


  const handleWelcomeUser = (user) => {
    console.log(`Hey ${user} Welcome here`);
    
  }
 
  return (
    <>
      {/* Function components with named Functions */}
      <button onClick={handleBUttonClick}>Click Me </button>
      <br />

      <button onClick={(event) => handleBUttonClick(event)}>Click Me2 </button>

      <br/>
        {/* Inline Evnent Handler */}
      <button onClick={(event) => console.log(event)}> Inline function </button>
         <br/>
        {/* Function Components with inline Arrow Functions */}

        <button onClick={() => alert('Hey i am inline event function')}>Inline Arrow</button>

        <br/>
        {/* Passing Arguments to Evenet Handlers  */}
        {/* <button onClick={handleWelcomeUser('Aditya')}>Click Me</button> */}
        <button onClick={()=>handleWelcomeUser('Aditya')}>Click Me</button>
        <button onClick={()=>handleWelcomeUser('Raj')}>Click Me</button>
        <button onClick={()=>handleWelcomeUser('Yatin')}>Click Me</button>


    </>
  );
};
