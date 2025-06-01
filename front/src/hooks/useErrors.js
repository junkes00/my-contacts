import { useState } from 'react';

export default function useErrors() {
  const [errors, setErrors] = useState([]);

  function setError({ field, message }) {
    const errorAlredyExists = errors.find((error) => error.field === field);

    if (errorAlredyExists) return;

    setErrors((prevErrors) => [...prevErrors, { field, message }]);
  }

  function removeError(fieldName) {
    setErrors((prevErrors) => prevErrors.filter((error) => error.field !== fieldName));
  }

  function getErrorMessageByFieldName(filedName) {
    return errors.find((error) => error.field === filedName)?.message;
  }

  return {
    errors, setError, removeError, getErrorMessageByFieldName,
  };
}
