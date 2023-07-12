import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const data = useLoaderData();
  console.log("Datgaaaaa", data);

  return (
    <div className="flex justify-center items-center mx-auto">
      <div className="my-[60px] rounded-md p-[20px] bg-sky-100">
        <div className="avatar">
          <div className="flex text-center ml-[74px] justify-center items-center w-24 rounded-xl">
            <img  src={data.img} />
          </div>
        </div>
        <h2 className="text-center mt-4 text-2xl font-semibold">Name: {data.name}</h2>
        <p>Email: {data.email}</p>
        <p>Phone: {data.phone}</p>
      </div>
    </div>
  );
};

export default UserDetails;
