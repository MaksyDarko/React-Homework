import ShowInfo from "./ShowInfo";

const Main = () => {
  return (
    <section className="max-w-xl mx-auto p-6 bg-gray-900 rounded-lg shadow-lg mb-5">
      <div className="flex justify-center mb-4">
        <img
          src="https://picsum.photos/150/150"
          alt="Profile Pic"
          className="rounded-full shadow-md"
        />
      </div>
      <h1 className="text-3xl font-bold text-cyan-400 text-center mb-4">
        About Me
      </h1>
      <div className="text-center space-y-4">
        <p className="text-xl font-semibold text-cyan-300 hover:text-cyan-500 transition duration-200">
          From: Macedonia, Kumanovo
        </p>
        <p className="text-xl font-semibold text-cyan-300 hover:text-cyan-500 transition duration-200">
          Address: ul 75 n 1
        </p>
        <p className="text-xl font-semibold text-cyan-300 hover:text-cyan-500 transition duration-200">
          Phone: 123-456-789
        </p>
      </div>
      <ShowInfo />
    </section>
  );
};

export default Main;
