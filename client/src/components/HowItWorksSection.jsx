const HowItWorks = () => {
    return(
        <section className="bg-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">How It Works</h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12">
            <div className="bg-[#48CAE4] p-6 rounded-lg shadow h-40 w-72">
              <h3 className="text-xl font-semibold mb-2">Step 1</h3>
              <p>Students or employees tap their RFID cards on the reader.</p>
            </div>
            <div className="bg-[#48CAE4] p-6 rounded-lg shadow h-40 w-72">
              <h3 className="text-xl font-semibold mb-2">Step 2</h3>
              <p>Attendance is instantly recorded and stored in the cloud.</p>
            </div>
            <div className="bg-[#48CAE4] p-6 rounded-lg shadow h-40 w-72">
              <h3 className="text-xl font-semibold mb-2">Step 3</h3>
              <p>
                Administrators can view and manage attendance data via the
                dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
}

export default HowItWorks;