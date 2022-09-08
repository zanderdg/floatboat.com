import axios from "axios";
import { notification } from "antd";
import { privateAPI, publicAPI, attachToken } from "../../config/constants";

// export const authLogin = (payload, history) => {
//   return async (dispatch) => {
//     try {
//       const res = await publicAPI.post(`/employee/login`, payload);
//       if (res) {
//         if (res.data.user.blocked) {
//         } else {
//           localStorage.setItem("token", res.data.token);
//           localStorage.setItem("userName", res.data.user.name);
//           localStorage.setItem("userId", res.data.user._id);
//           localStorage.setItem("userType", res.data.userType);
//           attachToken();
//           notification.success({
//             description: res.data.message,
//             duration: 2,
//           });
//           window.location.reload();
//           history.replace("/");
//           // if (res.data.userType === "admin") {
//           //   history.replace("/admin");
//           // } else {
//           // }
//         }
//       }
//     } catch (err) {
//       //console.log(err);
//     }
//   };
// };
