import { useField } from 'formik';

const CustomInput = ({ ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <input {...field} {...props} />
    </>
  );
};
export default CustomInput;
