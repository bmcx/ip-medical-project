export const Appointments = () => {
  return (
    <div>
      Today's Appointments
      <div>
        <div class="flex flex-col max-w-full overflow-x-hidden shadow-md ">
          <div class="flex bg-white p-6 space-x-2 ">
            <div class="flex-1">
              <input
                type="text"
                placeholder="Search ....."
                class=" w-full px-8 py-2 border border-gray-300 placeholder-gray-500 text-gray-800 shadow-sm rounded-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
              />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="absolute left-3 bottom-3 h-4 w-4 text-gray-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <div class="">
              <select
                name="status"
                class="appearance-none relative  w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-800 shadow-sm rounded-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
              >
                <option value="">Status Report</option>
              </select>
            </div>

            <div class="">
              <select
                name="schedule"
                class="appearance-none relative  w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-800 shadow-sm rounded-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
              >
                <option value="">Schedule Date</option>
              </select>
            </div>
          </div>

          <table class="overflow-x-auto w-full bg-white">
            <thead class="bg-blue-100 border-b border-gray-300">
              <tr>
                <th class="p-4 text-left text-sm font-medium text-gray-500">
                  Date
                </th>
                <th class="p-4 text-left text-sm font-medium text-gray-500">
                  Time
                </th>
                <th class="p-4 text-left text-sm font-medium text-gray-500">
                  Status
                </th>
                <th class="p-4 text-left text-sm font-medium text-gray-500">
                  Patient
                </th>
                <th class="p-4 text-left text-sm font-medium text-gray-500">
                  Phone Number
                </th>
                <th class="p-4 text-left text-sm font-medium text-gray-500">
                  Representative
                </th>
                <th class="p-4 text-left text-sm font-medium text-gray-500">
                  Actions
                </th>
                <th class="p-4 text-left text-sm font-medium text-gray-500"></th>
              </tr>
            </thead>
            <tbody class="text-gray-600 text-sm divide-y divide-gray-300">
              <tr class="bg-white font-medium text-sm divide-y divide-gray-200">
                <td class="p-4 whitespace-nowrap">20-02-2021</td>
                <td class="p-4 whitespace-nowrap">09:00 am</td>
                <td class="p-4 whitespace-nowrap">
                  <span class="bg-indigo-100 text-indigo-600 text-xs font-semibold rounded-2xl py-1 px-4">
                    New
                  </span>
                </td>
                <td class="p-4 whitespace-nowrap">nelaks</td>
                <td class="p-4 whitespace-nowrap">490-122</td>
                <td class="p-4 whitespace-nowrap">Dr. Alfred Hoose</td>
                <td class="p-4 whitespace-nowrap">
                  <div class="flex space-x-1">
                    <button class="border-2 border-indigo-200 rounded-md p-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="h-4 w-4 text-indigo-500"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </button>

                    <button class="border-2 border-indigo-200 rounded-md p-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="h-4 w-4 text-indigo-500"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                      </svg>
                    </button>

                    <button class="border-2 border-red-200 rounded-md p-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="h-4 w-4 text-red-500"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
                <td class="p-4 whitespace-nowrap">
                  <button class="bg-indigo-100 text-indigo-800 text-xs font-semibold px-4 py-2 rounded-md border-0">
                    Start Session
                  </button>
                </td>
              </tr>
              <tr class="bg-white font-medium text-sm divide-y divide-gray-200">
                <td class="p-4 whitespace-nowrap">20-02-2021</td>
                <td class="p-4 whitespace-nowrap">09:00 am</td>
                <td class="p-4 whitespace-nowrap">
                  <span class="bg-yellow-100 text-yellow-600 text-xs font-semibold rounded-2xl py-1 px-4">
                    Reg
                  </span>
                </td>
                <td class="p-4 whitespace-nowrap">pramdith</td>
                <td class="p-4 whitespace-nowrap">490-122</td>
                <td class="p-4 whitespace-nowrap">Dr. Alfred Hoose</td>
                <td class="p-4 whitespace-nowrap">
                  <div class="flex space-x-1">
                    <button class="border-2 border-indigo-200 rounded-md p-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="h-4 w-4 text-indigo-500"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </button>

                    <button class="border-2 border-indigo-200 rounded-md p-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="h-4 w-4 text-indigo-500"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                      </svg>
                    </button>

                    <button class="border-2 border-red-200 rounded-md p-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="h-4 w-4 text-red-500"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
                <td class="p-4 whitespace-nowrap">
                  <button class="bg-indigo-100 text-indigo-800 text-xs font-semibold px-4 py-2 rounded-md border-0">
                    Start Session
                  </button>
                </td>
              </tr>
              <tr class="bg-white font-medium text-sm divide-y divide-gray-200">
                <td class="p-4 whitespace-nowrap">20-02-2021</td>
                <td class="p-4 whitespace-nowrap">09:00 am</td>
                <td class="p-4 whitespace-nowrap">
                  <span class="border border-gray-300 text-gray-600 text-xs font-semibold rounded-2xl py-1 px-4">
                    N/A
                  </span>
                </td>
                <td class="p-4 whitespace-nowrap">adeepa</td>
                <td class="p-4 whitespace-nowrap">490-122</td>
                <td class="p-4 whitespace-nowrap">Dr. Alfred Hoose</td>
                <td class="p-4 whitespace-nowrap">
                  <div class="flex space-x-1">
                    <button class="border-2 border-indigo-200 rounded-md p-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="h-4 w-4 text-indigo-500"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </button>

                    <button class="border-2 border-indigo-200 rounded-md p-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="h-4 w-4 text-indigo-500"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                      </svg>
                    </button>

                    <button class="border-2 border-red-200 rounded-md p-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="h-4 w-4 text-red-500"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
                <td class="p-4 whitespace-nowrap">
                  <button class="bg-indigo-100 text-indigo-800 text-xs font-semibold px-4 py-2 rounded-md border-0">
                    Start Session
                  </button>
                </td>
              </tr>
              <tr class="bg-white font-medium text-sm divide-y divide-gray-200">
                <td class="p-4 whitespace-nowrap">20-02-2021</td>
                <td class="p-4 whitespace-nowrap">09:00 am</td>
                <td class="p-4 whitespace-nowrap">
                  <span class="bg-indigo-100 text-indigo-600 text-xs font-semibold rounded-2xl py-1 px-4">
                    New
                  </span>
                </td>
                <td class="p-4 whitespace-nowrap">surath</td>
                <td class="p-4 whitespace-nowrap">490-122</td>
                <td class="p-4 whitespace-nowrap">Dr. Alfred Hoose</td>
                <td class="p-4 whitespace-nowrap">
                  <div class="flex space-x-1">
                    <button class="border-2 border-indigo-200 rounded-md p-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="h-4 w-4 text-indigo-500"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </button>

                    <button class="border-2 border-indigo-200 rounded-md p-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="h-4 w-4 text-indigo-500"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                      </svg>
                    </button>

                    <button class="border-2 border-red-200 rounded-md p-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="h-4 w-4 text-red-500"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
                <td class="p-4 whitespace-nowrap">
                  <button class="bg-indigo-100 text-indigo-800 text-xs font-semibold px-4 py-2 rounded-md border-0">
                    Start Session
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
