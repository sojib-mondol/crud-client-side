import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const inputStyle =
  "border-[1px] focus:ring-2 focus:ring-transparent focus:border-none input focus-visible:border-red-500 dark:border-[#D0D5DD] w-full py-2 md:py-2.5 px-2.5 md:px-3 rounded-[8px] mt-1 dark:bg-[#8A8F98] bg-[#F8FFF9]  text-black dark:placeholder-[white] text-sm md:text-base";

const AddUser = () => {

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const userDetails = {
      name: data?.name,
      email: data?.email,
      phone: data?.phone,
    };
    //console.log("userDetails :", userDetails);

    // save user to the database
    fetch("http://localhost:5000/api/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userDetails),
    })
      .then((res) => res.json())
      .then((result) => {
        //console.log(result);
        toast.success(`${data.name} is added successfully`);
        navigate('/view-all-user');
      });

    reset();
  };

  return (
    <div className="w-[80%] md:w-[70%] lg:w-[50%] mx-auto my-[60px]">
      
      <div className=" flex flex-col border-[1px] dark:bordder-[#8A8F98] justify-between gap-5 bg-[#D1FFD0] dark:bg-[#1C202A] p-5 md:p-10 rounded-[10px]">
      <h2 className="text-2xl font-semibold">Add user</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <div>
            <label
              htmlFor="name"
              className="dark:text-[#E4E4E4] text-xs md:text-sm"
            >
              Name
              {/* <span className="text-[#EB5757]">*</span> */}
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter you name"
              className={`${inputStyle}`}
              {...register("name", { required: "Enter you name" })}
              aria-invalid={errors.name ? "true" : "false"}
            />
            {errors.name && (
              <p role="alert" className="text-red-600">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="dark:text-[#E4E4E4] text-xs md:text-sm"
            >
              Email
              {/* <span className="text-[#EB5757]">*</span> */}
            </label>
            <input
              name="email"
              type="email"
              placeholder="your@email.com"
              className={inputStyle}
              {...register("email", { required: "Enter your email" })}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && (
              <p role="alert" className="text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="phone"
              className="dark:text-[#E4E4E4] text-xs md:text-sm"
            >
              Phone Number
              {/* <span className="text-[#EB5757]">*</span> */}
            </label>
            <input
              name="phone"
              type="tel"
              placeholder="89484 95894"
              className={inputStyle}
              {...register("phone", { required: "Enter your phone number" })}
              aria-invalid={errors.phone ? "true" : "false"}
            />
            {errors.phone && (
              <p role="alert" className="text-red-600">
                {errors.phone.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="text-white bg-[#00A3FF] rounded-[25px] p-2 md:p-3 mt-5 text-sm md:text-base hover:transition hover:duration-5000 hover:ease-in-out hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
