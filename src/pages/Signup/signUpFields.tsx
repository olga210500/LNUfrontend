export type signUpField = {
    type: "text" | "email" | "password";
    name: "Name" | "SurName" | "Email" | "Password" | "ConfirmPassword";
    id: "name" | "surname" | "email" | "password" | "confirmPassword";
    placeholder: string;
    required: 'required';
}

export const  signUpFields: signUpField[] = [
    {
      type: "text",
      name: "Name",
      id: "name",
      placeholder: "Ім'я",
      required:'required'
    },
    {
      type: "text",
      name: "SurName",
      id: "surname",
      placeholder: "Прізвище",
      required:'required'
    },

    {
      type: "email",
      name: "Email",
      id: "email",
      placeholder: "Електронна пошта",
      required:'required'
    },

    {
      type: "password",
      name: "Password",
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