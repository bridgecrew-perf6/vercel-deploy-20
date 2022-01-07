function DeptStats({ stats }) {
  return (
    <>
      <div className="grid gap-5 grid-cols-12">
        {/* <div className="col-start-2 col-end-12 lg:col-start-4 lg:col-end-10 h-24 bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah rounded-br-2xl rounded-bl-2xl shadow-md inline-flex justify-between lg:justify-evenly space-x-2 text-white"> */}
        <div className="hidden lg:inline-flex lg:col-start-4 lg:col-end-10 h-auto bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah rounded-br-2xl rounded-bl-2xl shadow-md justify-between lg:justify-evenly space-x-2 text-white">
          <div className="flex items-center space-x-6">
            {stats?.map((stat, i) => {
              return (
                <div className="">
                  <div className="font-heading text-center text-3xl">
                    <p>{stat.fieldHeading}</p>
                  </div>
                  <div className="text-center">
                    <p className="w-full">{stat.fieldSubHeading}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default DeptStats;
