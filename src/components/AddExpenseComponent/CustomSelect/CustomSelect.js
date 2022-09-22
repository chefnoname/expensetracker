import { useField } from 'formik';

const CustomSelect = ({ label, ...props }) => {
  const [field] = useField(props);
  console.log(props);
  return (
    <>
      <label>{label}</label>
      <select {...field} {...props} />
    </>
  );
};
export default CustomSelect;
