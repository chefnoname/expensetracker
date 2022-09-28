import { useField } from 'formik';

const CustomSelect = ({ ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <select
        {...field}
        {...props}
        className={meta.touched && meta.error ? 'input-error' : ''}
      />
    </>
  );
};
export default CustomSelect;
