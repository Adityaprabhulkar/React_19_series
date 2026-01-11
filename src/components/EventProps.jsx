
import "./EV.css"
export const EventProps = () => {

    const HandleWelcomeUser = (user) => {
        alert(`Hey ${user}`);
    };

    const handleHover = () => {
        alert('Hey You Hover on This')
    }
  return (
    <>
      <WelcomeUser onClick={() => HandleWelcomeUser('Aditya')}
      onMouseEnter={handleHover}
       />
    </>
  )
}

const WelcomeUser = (props) => {
    const {onClick, onMouseEnter} = props;

    const  handleGreeting = () => {
        console.log(`hey User, Welcome`);
        onClick();
    };
    return (
        <>
        <button onClick={onClick}>Click</button>
        <button onMouseEnter={onMouseEnter}>Hover Me</button>
        <button onClick={handleGreeting}>Greeting</button>
        </>
    )
}