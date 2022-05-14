import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useToken from "../../hooks/useToken";
import Loading from "../Shared/Loading";

const Signup = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, uperror] = useUpdateProfile(auth);

  const navigate = useNavigate();
  //custom hook
  const [token] = useToken(user);

  let errorMessage;

  const onSubmit = async (data) => {
    const email = data.email;
    const pass = data.password;
    await createUserWithEmailAndPassword(email, pass);
    await updateProfile({ displayName: data?.name });
    alert("Updated profile");
    navigate('/appointment')
  };

  if (error || uperror) {
    errorMessage = (
      <p className="text-red-500">{error?.message || uperror?.message}</p>
    );
  }

  if (loading || updating) {
    return <Loading></Loading>;
  }

  if(token){
    navigate('/appointment')
  }

  return (
    <div className="flex h-screen justify-center items-center">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="text-center text-2xl font-bold">Sign in</h2>
          <hr />
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="form-control w-full max-w-xs">
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
                {/* passsword */}

                <label class="label">
                  <span class="label-text-alt">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="your password"
                  class="input input-bordered w-full max-w-xs"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "password is required",
                    },
                    minLength: {
                      value: 6,
                      message: "must be 6 chareter",
                    },
                  })}
                />
                <label class="label">
                  {errors.password?.type === "required" && (
                    <span class="label-text-alt text-red-700">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span class="label-text-alt text-red-700">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>
              {errorMessage}
              <div className="text-center mt-4">
                <input
                  className="btn btn-primary w-full"
                  type="submit"
                  value="Sign up"
                />
              </div>
              <p className="my-4">
                <small>
                  allrady have an account?{" "}
                  <Link className="text-blue-600 underline" to="/login">
                    login here
                  </Link>
                </small>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
