"use client";

const Main = () => {
  const birth = new Date(2002, 2, 23);
  const current = new Date();
  const age = current.getFullYear() - birth.getFullYear();
  return (
    <>
      <div className="h-full rounded-lg border-2 border-gray-300 p-4 dark:border-gray-300">
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
