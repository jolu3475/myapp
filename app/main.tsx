"use client";

const Main = () => {
  const birth = new Date(2002, 2, 23);
  const current = new Date();
  const age = current.getFullYear() - birth.getFullYear();
  return (
    <>
      <div>
        <h3 className="uppercase">
          <strong>Rakotomalala</strong>
        </h3>
        <h4>Fahasoavana Johann Luciano</h4>
        <h4>{age} years old</h4>
        <h4>Web Developer</h4>
      </div>
    </>
  );
};

export default Main;
