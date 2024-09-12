const Benefits = () => {
  return (
    <section className="py-20 bg-gray-100">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold mb-12">Why Choose Us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-[#90E0EF] p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Efficiency</h3>
          <p>Save time with automated attendance recording.</p>
        </div>
        <div className="bg-[#90E0EF] p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Accuracy</h3>
          <p>Eliminate manual errors and ensure accurate attendance records.</p>
        </div>
        <div className="bg-[#90E0EF] p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Scalability</h3>
          <p>Suitable for institutions and organizations of all sizes.</p>
        </div>
        <div className="bg-[#90E0EF] p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Integration</h3>
          <p>Easily integrates with existing systems and databases.</p>
        </div>
      </div>
    </div>
  </section>
  )
};

export default Benefits;
