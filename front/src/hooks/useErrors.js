import { useCallback, useState } from 'react';

export default function useErrors() {
  const [errors, setErrors] = useState([]);

  const setError = useCallback(({ field, message }) => {
    const errorAlreadyExists = errors.find((error) => error.field === field);

    if (errorAlreadyExists) return;

    setErrors((prevErrors) => [...prevErrors, { field, message }]);
  }, [errors]);

  const removeError = useCallback((fieldName) => {
    setErrors((prevErrors) => prevErrors.filter((error) => error.field !== fieldName));
  }, []);

  const getErrorMessageByFieldName = useCallback((filedName) => (
    errors.find((error) => error.field === filedName)?.message
  ), [errors]);

  return {
    errors, setError, removeError, getErrorMessageByFieldName,
  };
}
