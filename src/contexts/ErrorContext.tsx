import React, { createContext, useState } from "react";

export interface CEError {
  message: string;
  id: number;
}

export interface IErrorContext {
  errors: CEError[];
}

export interface ErrorContextContent {
  errors: CEError[];
  addError: (error: string) => void;
  removeError: (errorKey: number) => void;
}

export const ErrorContext = createContext({} as ErrorContextContent);

const ErrorProvider: React.FC = ({ children }) => {
  const [errors, setErrors] = useState([] as CEError[]);
  const addError = (error: string) => {
    const errs = errors;
    console.log(errs);
    errs.sort((a, b) => a.id - b.id);
    const id = errs.length > 0 ? errs[errs.length - 1].id + 1 : 1;

    setErrors([...errs, { message: error, id: id }]);
  };

  const removeError = (id: number) => {
    console.log(
      "Removing",
      id,
      errors.filter((e) => e.id !== id)
    );
    setErrors(errors.filter((e) => e.id !== id));
  };

  const val: ErrorContextContent = {
    errors,
    addError,
    removeError,
  };

  return <ErrorContext.Provider value={val}>{children}</ErrorContext.Provider>;
};

export default ErrorProvider;
