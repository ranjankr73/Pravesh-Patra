const Testimonials = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">What Our Users Say</h2>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12">
          <div className="bg-[#90E0EF] p-6 rounded-lg shadow h-48 w-72">
            <p>
              "Our attendance process has become seamless and more accurate
              since we started using the Smart Attendance System."
            </p>
            <p className="mt-4 text-gray-600">- John Doe, Principal</p>
          </div>
          <div className="bg-[#90E0EF] p-6 rounded-lg shadow h-48 w-72">
            <p>
              "The system is easy to use and has significantly reduced our
              administrative workload."
            </p>
            <p className="mt-4 text-gray-600">- Jane Smith, HR Manager</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;