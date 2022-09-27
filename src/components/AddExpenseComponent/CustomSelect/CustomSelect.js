import { useField } from 'formik';

const CustomSelect = ({ ...props }) => {
  const [field] = useField(props);
  return (
    <>
      <select {...field} {...props} />
    </>
  );
};
export default CustomSelect;
