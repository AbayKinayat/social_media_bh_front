import * as yup from "yup";
import { useFormik } from "formik";
import { AnyObject, Maybe } from "yup/lib/types";

declare module 'yup' {
  interface StringSchema<
    TType extends Maybe<string> = string | undefined,
    TContext extends AnyObject = AnyObject,
    TOut extends TType = TType,
  > extends yup.BaseSchema<TType, TContext, TOut> {
    passwordCopy(): StringSchema<TType, TContext>;
  }
}

const useRegistration = () => {

  yup.addMethod(yup.string, "passwordCopy", function () {
    return this.test({
      name: 'string',
      message: "Пароли должны совпадать",
      test: (value) => value === formik.values.password
    });
  },)

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordRepeat: ""
    },
    onSubmit(values) {
    },
    validationSchema: yup.object({
      firstName: yup
        .string()
        .min(2, "Введите не менее 2 символов")
        .required("Введите имя"),
      lastName: yup
        .string()
        .min(2, "Введите не менее 2 символов")
        .required("Введите фамилия"),
      email: yup
        .string()
        .email("Введите корректную почту")
        .required("Введите почту"),
      password: yup
        .string()
        .min(8, "Введите не менее 8 символов")
        .max(30, "Введите не более 30 символов")
        .required("Введите пароль"),
      passwordRepeat: yup
        .string()
        .passwordCopy()
        .required("Повторите пароль")
    })
  })

  return [formik]
}


export default useRegistration;