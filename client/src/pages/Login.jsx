import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";


const Login = () => {

    const { signInUser } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state || '/';

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const { email, password } = data;
        signInUser(email, password)
        .then(result=>{
            toast.success("login successful!");
            if(result.user){
                toast.success("Login successful!");
                navigate(from);
            }
        }).catch(error => {
            toast.error(`Failed to register: ${error.message}`);
        });
    }
    return (
        <div>
            <div className="hero min-h-[calc(100vh-290px)] ">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
                                {errors.email && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" {...register("password", { required: true })} />
                                {errors.password && <span className="text-red-500">This field is required</span>}
                                <label className="mt-5">
                                    <Link to='/register' className="flex justify-between items-center">Do not have an account?  <span className="label hover:underline text-blue-700">Register Now</span></Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary text-white hover:bg-black">Login</button>
                            </div>
                            
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;