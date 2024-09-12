const Features = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-[#00B4D8] p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">
              Automated Attendance Tracking
            </h3>
            <p>Track attendance in real-time using RFID cards and tags.</p>
          </div>
          <div className="bg-[#00B4D8] p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Data Security</h3>
            <p>
              Ensure data privacy and security with encrypted storage and secure
              connections.
            </p>
          </div>
          <div className="bg-[#00B4D8] p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Detailed Analytics</h3>
            <p>Get comprehensive reports on attendance patterns and trends.</p>
          </div>
          <div className="bg-[#00B4D8] p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">
              User-Friendly Interface
            </h3>
            <p>
              Easily manage and monitor attendance with an intuitive dashboard.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
