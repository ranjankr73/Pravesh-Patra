import { useNavigate } from 'react-router-dom';
const Hero = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/login');
  }
  const handleLearnMore = () => {
    navigate('/learn-more');
  }
  return (
    <section className="bg-[rgb(46,164,168)] text-white flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/2 h-full">
        <img
          src="\RFID_17__Converted__generated.jpg"
          alt="rfid"
          className="w-full h-auto"
        />
      </div>
      <div className="container mx-auto px-6 text-center md:text-left py-4 md:py-0">
        <h1 className="sm:text-xl md:text-5xl font-bold mb-4">
          Welcome to the Future of Attendance with <br />
          Smart RFID Precision
        </h1>
        <p className="text-base md:text-lg mb-8">
          Experience Effortless Attendance Tracking with Pravesh Patra's Smart
          RFID Technology
        </p>
        <div className="flex flex-col md:flex-row justify-center md:justify-start">
          <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-200 mb-4 md:mb-0 md:mr-4"
          onClick={handleLogin}>
            Get Started
          </button>
          <button className="bg-transparent border border-white text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-700"
          onClick={handleLearnMore}>
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;