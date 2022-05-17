import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";

const AddDoctors = () => {
  const {
    register,
    formState: { errors },
    handleSubmit, reset
  } = useForm();
  const { data: service, isLoading } = useQuery("data", () =>
    fetch("http://localhost:5000/services").then((res) => res.json())
  );

  const onSubmit = async (data) => {
    const img = data.img[0];
    const imgSecretKry = "79fd0b725c9bb9b85e875f16c38c1622";
    const formData = new FormData();
    formData.append("image", img);

    const url = `https://api.imgbb.com/1/upload?key=${imgSecretKry}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const imge = result.data.url;
          const doctor = {
            name: data.name,
            email: data.email,
            specialist: data.specialist,
            img: imge,
          };
          //set to my database
          fetch("http://localhost:5000/doctors", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((inserted) => {
             if(inserted.insertedId){
                 toast.success('added fnished');
                 reset();
             }
             else{
                 toast.error('faild')
             }
            });
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2 className="text-2xl text-center py-4">Add a doctor</h2>
      <div className="">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="form-control w-50 mx-auto max-w-xs">
            {/* name */}
            <label class="label">
              <span class="label-text-alt">Name</span>
            </label>
            <input
              type="text"
              placeholder="your name"
              class="input input-bordered w-full max-w-xs"
              {...register("name", {
                required: {
                  value: true,
                  message: "name is required",
                },
              })}
            />
            <label class="label">
              {errors.name?.type === "required" && (
                <span class="label-text-alt text-red-700">
                  {errors.name.message}
                </span>
              )}
            </label>
            {/* email */}
            <label class="label">
              <span class="label-text-alt">Email</span>
            </label>
            <input
              type="email"
              placeholder="your email"
              class="input input-bordered w-full max-w-xs"
              {...register("email", {
                required: {
                  value: true,
                  message: "email is required",
                },
                pattern: {
                  value: /w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  message: "provide a valid email",
                },
              })}
            />
            <label class="label">
              {errors.email?.type === "required" && (
                <span class="label-text-alt text-red-700">
                  {errors.email.message}
                </span>
              )}
              {errors.email?.type === "pattern" && (
                <span class="label-text-alt text-red-700">
                  {errors.email.message}
                </span>
              )}
            </label>
            {/* specialist */}

            <label class="label ">
              <span class="label-text-alt">specialist</span>
            </label>
            <select
              {...register("specialist")}
              class="select input input-bordered w-full max-w-xs"
            >
              {service.map((d) => (
                <option key={d._id} value={d.name}>
                  {d.name}
                </option>
              ))}
            </select>

            {/* image */}

            <label class="label">
              <span class="label-text-alt">photo</span>
            </label>
            <input
              type="file"
              class="input input-bordered w-full max-w-xs"
              {...register("img", {
                required: {
                  value: true,
                  message: "photo is required",
                },
              })}
            />
          </div>
          <div className="text-center mt-4">
            <input className="btn btn-primary" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDoctors;
