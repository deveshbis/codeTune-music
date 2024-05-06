import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const { email, password, image, fullName } = data;
        createUser(email, password)
            .then(() => {
                toast.success("Registration successful!");
                updateUserProfile(fullName, image)
                    .then(() => {
                        toast.success("Registration successful!");
                        navigate(from, { replace: true });
                        setReload(true)
                    })
            }).catch(error => {
                toast.error(`Failed to register: ${error.message}`);
            });
    };
    return (
        <div>
            <div className="hero min-h-[calc(100vh-290px)]">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" placeholder="Full Name" className="input input-bordered" {...register("fullName", { required: true })} />
                                {errors.fullName && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" className="input input-bordered" {...register("email", { required: true })} />
                                {errors.email && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" placeholder="Photo Url" className="input input-bordered" {...register("image", { required: true })} />

                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>

                                <div className="relative">
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className="input input-bordered pr-12"
                                        {...register("password")}
                                    />
                                </div>

                                {errors.password && <span className="text-red-500">{errors.password.message}</span>}
                                <label>
                                    <Link to='/login' className="flex justify-between items-center">
                                        Have an Account? <span className="label hover:underline text-blue-700">Login Now</span>
                                    </Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn  btn-primary text-white hover:bg-black">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;