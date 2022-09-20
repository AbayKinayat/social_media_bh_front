import { useFormik } from "formik";
import * as yup from "yup";

import { authorization } from "../../app/slices/AuthSlice/actionCreators";
import useAppDispatch from "../useAppDispatch";

const useLogin = () => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit(values) {
      dispatch(authorization(values));
    },
    validationSchema: yup.object({
      email: yup.string().email("Введите корректный email").required("Введите email"),
      password: yup.string().required("Введите пароль")
    })
  })

  return [formik];
}

export default useLogin;