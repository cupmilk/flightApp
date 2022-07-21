import React from "react";
import { FaPlaneDeparture, FaPlaneArrival, FaChild } from "react-icons/fa";
import { GiPerson } from "react-icons/gi";
import { useForm } from "react-hook-form";

const FlightApp = () => {
  //hadle event
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  //handle submit
  const onSubmit = (data) => alert(JSON.stringify(data));

  //오류 반복되는 부분 묶어서 함수로 처리가 가능할것 같은디

  return (
    <>
      <section>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="bg-white-400 w-auto h-auto border-4 border-blue-100 pb-10 mt-5 px-5 rounded-lg text-black sm:w-full md:w-4/5 md:mx-auto lg:w-2/5 lg:mx-auto  ">
            {/* header section */}
            <div className="h-24 flex justify-center items-center ">
              <p className="uppercase font-bold text-4xl text-center">
                flight booking app
              </p>
            </div>

            {/* bodysectioo */}
            <div className="grid justify-center space-y-5 bg-blue-300 rounded-lg pb-0">
              <div className="flex space-x-8 mt-5">
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    className={`w-6 h-6 ${
                      errors.tripType &&
                      "text-sm text-red-600 focus:ring-red-500 border-red-500"
                    }`}
                    value="round trip"
                    {...register("tripType", {
                      required: {
                        value: true,
                        message: "Trip type is required",
                      },
                    })}
                  />
                  <p className="text-xl font-bold uppercase">Round Trip</p>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    className={`w-6 h-6 ${
                      errors.tripType &&
                      "text-sm text-red-600 focus:ring-red-500 border-red-500"
                    }`}
                    value="one way"
                    {...register("tripType", {
                      required: {
                        value: true,
                        message: "Trip type is required",
                      },
                    })}
                  />
                  <p className="text-xl font-bold uppercase">One way</p>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    className={`w-6 h-6 ${
                      errors.tripType &&
                      "text-sm text-red-600 focus:ring-red-500 border-red-500"
                    }`}
                    value="multy-city"
                    {...register("tripType", {
                      required: {
                        value: true,
                        message: "Trip type is required",
                      },
                    })}
                  />
                  <p className="text-xl font-bold uppercase">Multy City</p>
                </div>
              </div>
              <div>
                {errors.tripType && (
                  <span className="text-sm text-red-600 ">
                    {errors.tripType.message}
                  </span>
                )}
                {/* 글자를 올리고 싶은데 안되농*/}
              </div>
            </div>

            {/* departure section  */}
            <div>
              <div>
                <div className="relative">
                  <p className="font-bold text-xl uppercase">flying from</p>
                  <select
                    className={`w-full h-16 rounded-lg text-xl pl-20 ${
                      errors.departure &&
                      "focus:border-red-500 focus:ring-red-500 border-red-500"
                    }`}
                    {...register("departure", {
                      required: {
                        value: true,
                        message: "Departure is required",
                      },
                    })}
                  >
                    {/* 에러가들때 departure section 과 arrival section 둘중 하나가 선택이 안되어있으면 정상 작동x*/}
                    <option value="" selected disabled hidden>
                      --Select Airport--
                    </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                    <option value="5">Five</option>
                    {/* option에 반복문을 이용해서 항공편들이 나오도록 해야함 */}
                  </select>
                  <FaPlaneDeparture className="text-4xl absolute left-5 top-10" />
                </div>
                <div>
                  {errors.departure && (
                    <span className="text-sm text-red-600 ">
                      {errors.departure.message}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* arrival section */}
            <div>
              <div>
                <div className="relative">
                  <p className="font-bold text-xl uppercase">flying to</p>
                  <select
                    className={`w-full h-16 rounded-lg text-xl pl-20 ${
                      errors.departure &&
                      "focus:border-red-500 focus:ring-red-500 border-red-500"
                    }`}
                    {...register("departure", {
                      required: {
                        value: true,
                        message: "Trip type is required",
                      },
                    })}
                  >
                    <option value="" selected disabled hidden>
                      --Select Airport--
                    </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                    <option value="5">Five</option>
                    {/* option에 반복문을 이용해서 항공편들이 나오도록 해야함 */}
                  </select>
                  <FaPlaneArrival className="text-4xl absolute left-5 top-10" />
                </div>
                <div>
                  {errors.departure && (
                    <span className="text-sm text-red-600 ">
                      {errors.departure.message}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* date section */}
            <div className="flex space-x-2">
              {/* departure section */}
              <div>
                <div>
                  <div className="relative">
                    <p className="font-bold text-xm uppercase">
                      departure date
                    </p>
                    <input
                      type="date"
                      className={`w-full h-16 rounded-xl text-xl text-center ${
                        errors.departuredate &&
                        "focus:border-red-500 focus:ring-red-500 border-red-500"
                      }`}
                      {...register("departuredate", {
                        required: {
                          value: true,
                          message: "Departure date  s required",
                        },
                      })}
                    />
                  </div>
                  <div>
                    {" "}
                    {errors.departuredate && (
                      <span className="text-sm text-red-600 ">
                        {errors.departuredate.message}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* return section */}
              <div>
                <div>
                  <div className="relative">
                    <p className="font-bold text-xm uppercase">return date</p>
                    <input
                      type="date"
                      className={`w-full h-16 rounded-xl text-xl text-center ${
                        errors.departuredate &&
                        "focus:border-red-500 focus:ring-red-500 border-red-500"
                      }`}
                      {...register("returndate", {
                        required: {
                          value: true,
                          message: "Return date is required",
                        },
                      })}
                    />
                  </div>
                  <div>
                    {errors.returndate && (
                      <span className="text-sm text-red-600 ">
                        {errors.returndate.message}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* passenger section */}
            <div className="flex space-x-2">
              {/* adult section */}
              <div className="w-full">
                <div>
                  <div className="relative">
                    <p className="font-bold text-xl uppercase"> adults</p>
                    <select
                      className="w-full h-16 rounded-lg text-xl pl-20"
                      {...register("adult", {
                        required: {
                          value: true,
                          message: "Trip type is required",
                        },
                      })}
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      {/* 여기도 숫자 반복 */}
                    </select>
                    <GiPerson className="text-4xl absolute left-5 top-10" />
                  </div>
                </div>
              </div>

              {/* children section */}
              <div className="w-full">
                <div>
                  <div className="relative">
                    <p className="font-bold text-xl uppercase">children</p>
                    <select
                      className="w-full h-16 rounded-lg text-xl pl-20"
                      {...register("children", {
                        required: {
                          value: true,
                          message: "Trip type is required",
                        },
                      })}
                    >
                      <option>0</option>
                      <option>1</option>
                      <option>2</option>
                      {/* 여기도 숫자 반복 */}
                    </select>
                    <FaChild className="text-4xl absolute left-5 top-10" />
                  </div>
                </div>
              </div>
            </div>
            {/* class and price section*/}
            <div className="flex space-x-2">
              {/* class section */}
              <div className="w-full">
                <div>
                  <div className="relative">
                    <p className="font-bold text-xl uppercase">class</p>
                    <select
                      className="w-full h-16 rounded-lg text-xl pl-20"
                      {...register("class", {
                        required: {
                          value: true,
                          message: "Trip type is required",
                        },
                      })}
                    >
                      <option>Economy</option>
                      <option>Business</option>
                    </select>
                  </div>
                  <div>2</div>
                </div>
              </div>

              {/* price section */}
              <div className="w-full">
                <div>
                  <div className="relative">
                    <p className="font-bold text-xl uppercase">price</p>
                    <select
                      className="w-full h-16 rounded-lg text-xl pl-20"
                      {...register("price", {
                        required: {
                          value: true,
                          message: "Trip type is required",
                        },
                      })}
                    >
                      <option>All price</option>
                      <option>$100</option>
                      {/* 반복해서 나타내기 */}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            {/* btn section */}
            <div className="relative">
              <input
                type="submit"
                value="Search"
                className="w-full h-16 font-bold text-xl text-white border border-blue-900 uppercase  rounded-lg bg-blue-300 hover:bg-violet-700"
              />
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default FlightApp;
