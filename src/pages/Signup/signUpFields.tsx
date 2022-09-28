export type signUpField = {
    type: "text" | "email" | "password";
    name: "firstName" | "lastName" | "email" | "password" | "ConfirmPassword";
    id: "name" | "surname" | "email" | "password" | "confirmPassword";
    placeholder: string;
    required: 'required';
}

export const  signUpFields: signUpField[] = [
    {
      type: "text",
      name: "firstName",
      id: "name",
      placeholder: "Ім'я",
      required:'required'
    },
    {
      type: "text",
      name: "lastName",
      id: "surname",
      placeholder: "Прізвище",
      required:'required'
    },

    {
      type: "email",
      name: "email",
      id: "email",
      placeholder: "Електронна пошта",
      required:'required'
    },

    {
      type: "password",
      name: "password",
      id: "password",
      placeholder: "Пароль",
      required:'required'
    },
    {
      type: "password",
      name: "ConfirmPassword",
      id: "confirmPassword",
      placeholder: "Підтвердити пароль",
      required:'required'
    },
  ];