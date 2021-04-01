import CustomCalendar from "./Calendar";

export const Schedule = () => {
  return (
    <div className="p-10">
      <div className="text-md mb-6 font-bold">Availability Schedule</div>
      <div class="container mx-auto mt-10">
        <div class="wrapper bg-white rounded shadow w-full ">
          <CustomCalendar />
        </div>
      </div>
    </div>
  );
};
