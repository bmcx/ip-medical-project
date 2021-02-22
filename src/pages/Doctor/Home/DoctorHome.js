const DoctorHome = () => {
    return (
       <div className="m-1">
            Doctor Home
            <div className="m-5">
                <div className=" mt-2 border border-blue-500 rounded-lg  " >

                    <nav className="ml-10 ">
                       <button className="ml-10 border border-bule-500">History</button>
                       <button className="ml-10">Diagnosis</button>
                       <button className="ml-10">Schedule</button>
                       <button className="ml-10">Appoinments</button>
                    </nav>
                    <section>
                        <figure className="bg-gray-100 rounded-x1 p-8">
                        <img className="w-32 h-32 rounded-full max-auto self-center" src="C:\Users\Dilshan\Downloads" ></img>
                        <div className=" pt-4   space-y-4">
                        <figcaption className="font-medium">
                            <div>name</div>
                            <div>age</div>
                            <div>medical History</div>

                        </figcaption>
                        </div>
                        </figure>

                    </section>
                    <section>
                        <figure className="bg-gray-100 rounded-x1 p-8">
                        <img className="w-32 h-32 rounded-full max-auto self-center" src="C:\Users\Dilshan\Downloads" ></img>
                        <div className=" pt-4  space-y-4">
                        <figcaption className="font-medium">
                            <div>name</div>
                            <div>age</div>
                            <div>medical History</div>

                        </figcaption>
                        </div>
                        </figure>

                    </section>


                </div>
            </div>
        </div>
    )
}

export default DoctorHome