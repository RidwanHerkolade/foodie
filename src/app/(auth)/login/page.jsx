// "use client"
// import styles from "./page.module.css";
// import MailOutlineIcon from "@mui/icons-material/MailOutline";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import { useForm } from "react-hook-form";
// const page = () => {
//   return (
//     <div className={styles.form}>
//     <h1 className={styles.h1}>Login</h1>
//     <form className={styles.forms} onSubmit={handleSubmit(onSubmit)}>
//     <div className={styles.inputt}>
//       <div className={styles.inputs}>
//         <div className={styles.icon}>
//           <MailOutlineIcon className={styles.icons} />
//         </div>
      
//         <input
//           type="text"
//           placeholder="email"
//           name="email"
//           // required
//           {...register("email", {
//             required: "input your email",
//             pattern: {
//               value:
//                 /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
//               message: "Please enter a valid email",
//             },
//           })}
//         />
       
      
//       </div> 
//       {errors.email && <p className={styles.errors}>{errors.email.message}</p>}
//       </div>
//       <div className={styles.inputt}>
//       <div className={styles.inputs}>
//         <div className={styles.icon}>
//           <LockOutlinedIcon className={styles.icons} />
//         </div>
//         <input
//           type="text"
//           placeholder="password"
//           name="password"
//           // required
//           {...register("password", {
//             required: "enter a valid password",
//           })}
//         />
         

//       </div>
//       {errors.password && <p className={styles.errors}>{errors.password.message}</p>}
//       </div>
//       <div className={styles.check}>
//         <input
//           type="checkbox"
//           // required
//           {...register("terms", {
//             required: "You must accept the terms",
//           })}
//         />
//         <p className={styles.forget}>forget password</p>
//       </div>
//       <button className={styles.btn} href="/Dashboard">
//         Login
//       </button>
//     </form>
//   </div>
//   )
// }

// export default page