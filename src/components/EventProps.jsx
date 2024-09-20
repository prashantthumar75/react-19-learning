export const EventProps = () => {
  const HandleWelcomeUser = (user) => {
    alert(`Hey, ${user} Welcome`);
  };

  const handleHover = () => {
    alert(`Hey Thanks for hovering me`);
  };

  return (
    <>
      <WelcomeUser
        onButtonClick={() => HandleWelcomeUser("Prashant")}
        onMouseEnter={handleHover}
      />
    </>
  );
};

const WelcomeUser = (props) => {
  const { onButtonClick, onMouseEnter } = props;
  const handleGreeting = () => {
    console.log(`Hey User, Welcome`);
    onButtonClick();
  };
  return (
    <>
      <button onClick={onButtonClick}>Click</button>
      <button onMouseEnter={onMouseEnter}>Hover me</button>
      <button onClick={handleGreeting}>Greeting</button>
    </>
  );
};
