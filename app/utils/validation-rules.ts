import * as yup from "yup";

const phoneAllowedCharsRegex = /^[0-9+\s().-]+$/;

export const signInSchema = yup.object({
  email: yup
    .string()
    .trim()
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, "Uncorrect email")
    .required("Enter your email"),
  password: yup
    .string()
    .required("Enter your password")
    .min(6, "Minimum 6 characters"),
});

export const signUpSchema = yup.object({
  firstName: yup.string().required("Enter your first name"),
  lastName: yup.string().required("Enter your last name"),
  email: yup
    .string()
    .trim()
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, "Uncorrect email")
    .required("Enter your email"),
  password: yup
    .string()
    .required("Enter your password")
    .min(6, "Minimum 6 characters"),
});

export const forgotSchema = yup.object({
  email: yup
    .string()
    .trim()
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, "Uncorrect email")
    .required("Enter your email"),
});

export const contactsSchema = yup.object({
  name: yup.string().required("Введите имя"),
  phone: yup
    .string()
    .trim()
    .matches(phoneAllowedCharsRegex, "Phone contains invalid characters")
    .test("min-digits", "Phone must contain at least 10 digits", (value) => {
      const digits = String(value ?? "").replace(/\D/g, "");
      return digits.length >= 10;
    })
    .max(25, "Phone must be at most 25 characters")
    .required("Phone is required"),
  selectedService: yup.string().required("Выберите услугу"),
});

export const reviewModalSchema = yup.object({
  name: yup.string().trim().required("Введите имя"),
  city: yup.string().required("Выберите город"),
  locationId: yup.string().required("Выберите локацию"),
  review: yup
    .string()
    .trim()
    .required("Напишите отзыв")
    .min(10, "Минимум 10 символов"),
});

export const profileSchema = yup.object({
  name: yup.string().required("Введите имя"),
  phone: yup
    .string()
    .trim()
    .matches(phoneAllowedCharsRegex, "Phone contains invalid characters")
    .test("min-digits", "Phone must contain at least 10 digits", (value) => {
      const digits = String(value ?? "").replace(/\D/g, "");
      return digits.length >= 10;
    })
    .max(25, "Phone must be at most 25 characters")
    .required("Phone is required"),
  email: yup
    .string()
    .trim()
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, "Uncorrect email")
    .required("Enter your email"),
});
