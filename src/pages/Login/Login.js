import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [signInWithGoogle, googleuser, googleloading, googleerror] =
    useSignInWithGoogle(auth);

  const googleLogin = () => {
    signInWithGoogle();
  };

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="flex h-screen justify-center items-center">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="text-center text-2xl font-bold">Log in</h2>
          <hr />
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="form-control w-full max-w-xs">
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
              <div className="text-center mt-4">
                <input className="btn btn-primary w-full" type="submit" value="Login" />
              </div>
            </form>
          </div>
          <div class="flex flex-col w-full border-opacity-50">
            <div class="divider">OR</div>
            <button onClick={googleLogin} class="btn btn-secondary">
              Google login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
