"use client";
import styles from "./page.module.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AddContext } from "@/context/AddContextProvider";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "./firebase/config";
import { setDoc, doc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "sonner";

// import Link from "next/link";
const page = () => {
  const [IsDefault, setIsDefault] = useState(true);
  const [isLoading, setIsLoading] = useState(false)
  const {setInitials} = useContext(AddContext)
  // forms authentication using reach hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (IsDefault) {
      handleLogin(data);
    } else {
      handleSignUp(data);
    }
    console.log(data);
  };
  // handling the sign up auth app
  const router = useRouter();
  const handleSignUp = async (data) => {
    setIsLoading(true);
    const { email, password } = data;
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      const userInitials = email.slice(0, 3);
      setInitials(userInitials);
      // setInitials(email.slice(0, 3));
      console.log(user);
      if (user) {
        setDoc(doc(db, "User", user.uid), {
          email: user.email,
          password: user.password,
          initials: userInitials,
        });
      }
      console.log("success");
      setTimeout(() => {
        toast.success('success', {
          richColors: true
        })
        router.push(`/Dashboard?initials=${email.slice(0, 3)}`);
        setIsLoading(false)
      }, 5000)
     
    } catch (error) {
      console.log(error.message);
      toast.error(error.message || "Signup failed!", {
        richColors: true
      });
    }
    finally{
      setIsLoading(false)
    }
  };
  // handling sign in page
  const handleLogin = async (data) => {
    setIsLoading(true);
    const { email, password } = data;
    setInitials(email.slice(0, 3));
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("success");
      setTimeout(() => {
        toast.success('success', {
          richColors: true
        })
        router.push(`/Dashboard?initials=${email.slice(0, 3)}`);
        setIsLoading(false)
      }, 3000)
    } catch (error) {
      console.error(error.message);
      toast.error("Invalid email or password",{
        richColors: true
      } )
    }
    finally{
      setIsLoading(false)
    }
  };
  return (
    <div className={styles.section}>
      <Toaster position="top-right" />
      <div className={styles.divs}>
        <div className={styles.daily}>
          <h1>
            Hello,<br></br> Good evening
          </h1>
        </div>
        <div className={styles.form}>
          <h1 className={styles.h1}>{IsDefault ? "Login" : "Sign up"}</h1>
          {IsDefault ? (
            <form className={styles.forms} onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.inputt}>
                <div className={styles.inputs}>
                  <div className={styles.icon}>
                    <MailOutlineIcon className={styles.icons} />
                  </div>
                  <input
                    type="text"
                    placeholder="email"
                    name="email"
                    // required
                    {...register("email", {
                      required: "input your email",
                      pattern: {
                        value:
                          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: "Please enter a valid email",
                      },
                    })}
                  />
                </div>
                {errors.email && (
                  <p className={styles.errors}>{errors.email.message}</p>
                )}
              </div>
              <div className={styles.inputt}>
                <div className={styles.inputs}>
                  <div className={styles.icon}>
                    <LockOutlinedIcon className={styles.icons} />
                  </div>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    // required
                    {...register("password", {
                      required: "enter a valid password",
                    })}
                  />
                </div>
                {errors.password && (
                  <p className={styles.errors}>{errors.password.message}</p>
                )}
              </div>
              <div className={styles.check}>
                <input
                  type="checkbox"
                  // required
                  {...register("terms", {
                    required: "You must accept the terms",
                  })}
                />
                <p className={styles.forget}>forget password</p>
              </div>
              <button className={styles.btn} type="submit" disabled={isLoading}>
                {isLoading ? "loading..." : "Login"}
              </button>
            </form>
          ) : (
            <form className={styles.forms} onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.inputt}>
                <div className={styles.inputs}>
                  <div className={styles.icon}>
                    <MailOutlineIcon className={styles.icons} />
                  </div>
                  <input
                    type="text"
                    placeholder="email"
                    name="email"
                    // required
                    {...register("email", {
                      required: "input your email",
                      pattern: {
                        value:
                          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: "Please enter a valid email",
                      },
                    })}
                  />
                </div>
                {errors.email && (
                  <p className={styles.errors}>{errors.email.message}</p>
                )}
              </div>
              <div className={styles.inputt}>
                <div className={styles.inputs}>
                  <div className={styles.icon}>
                    <LockOutlinedIcon className={styles.icons} />
                  </div>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    // required
                    {...register("password", {
                      required: "enter a valid password",
                    })}
                  />
                </div>
                {errors.password && (
                  <p className={styles.errors}>{errors.password.message}</p>
                )}
              </div>
              <div className={styles.check}>
                <input
                  type="checkbox"
                  // required
                  {...register("terms", {
                    required: "You must accept the terms",
                  })}
                />
                <p className={styles.forget}>forget password</p>
              </div>
              <button className={styles.btn} type="submit">
              {isLoading ? "loading..." : "Sign up"}
              </button>
            </form>
          )}
          <p
            className={styles.default}
            onClick={() => setIsDefault(!IsDefault)}
          >
            {IsDefault ? "create an account" : "Already have an acccount"}
          </p>
        </div>
      </div>
    </div>
  );
};
export default page;
