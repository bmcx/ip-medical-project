const PatientHome = () => {
    return (
        <div>
            <div className="bg-gray-100 rounded-lg shadow">
                <div className="p-9 mb-5 font-mono">
                    <h1 className="text-4xl">User name</h1>
                    <h3 className="text-xl">User id</h3>
                </div>
                <div className="p-2 px-10 rounded-lg  mx-3  w-36  bg-gray-300  shadow">
                    <button >
                       <a href="#shedule">Shedule</a>
                    </button>
                </div>
            </div>
            <div>
                <div className="grid grid-cols-3 gap-4">
                    <div>
                        <div className="p-5 m-6 bg-blue-200 rounded-lg shadow">My medications</div>
                            <div className="p-8">
                                <ul className="list-disc">
                                    <li>Children need permission from their parents in the form of an authorization letter when they have to go on a school field trip.</li>
                                    <li>Children need permission from their parents in the form of an authorization letter when they have to go on a school field trip.</li>
                                    <li>Children need permission from their parents in the form of an authorization letter when they have to go on a school field trip.</li>
                                </ul>
                            </div>
                    </div>
                    
                    <div>
                        <div className="p-5 m-6 bg-blue-200 rounded-lg shadow">My appointments</div>
                            <div className="p-8">
                                <ul className="list-disc">
                                    <li>Children need permission from their parents in the form of an authorization letter when they have to go on a school field trip.</li>
                                    <li>Children need permission from their parents in the form of an authorization letter when they have to go on a school field trip.</li>
                                    <li>Children need permission from their parents in the form of an authorization letter when they have to go on a school field trip.</li>
                                </ul>
                            </div>
                    </div>
                    
                    <div>
                        <div className="p-5 m-6 bg-blue-200 rounded-lg shadow">History</div>
                            <div className="p-8 ">
                                <ul className="list-disc">
                                    <li>Children need permission from their parents in the form of an authorization letter when they have to go on a school field trip.</li>
                                    <li>Children need permission from their parents in the form of an authorization letter when they have to go on a school field trip.</li>
                                    <li>Children need permission from their parents in the form of an authorization letter when they have to go on a school field trip.</li>
                                </ul>
                            </div>
                    </div>        
                        
                
                    
                </div>
            </div>
        </div>
    )
}

export default PatientHome
