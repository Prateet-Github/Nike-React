import Button from "../Components/Button";

const Subscribe = () => {
  return (
    <section
      className="max-container flex justify-between items-center max-1g: flex-col gap-10"
      id="contact-us"
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold ">
        Sign Up For<span className="text-coral-red"> Updates</span> & Newsletter
      </h3>
      <div className="flex justify-between items-center gap-2">
        <input
          type="text"
          placeholder="Subscribe @gmail.com"
          className="input border-2 border-coral-red border-solid rounded"
        ></input>
        <div>
          <Button label="Sign Up" ></Button>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
