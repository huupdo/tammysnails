// src/components/PhoneIcon.jsx
import { FiPhone } from 'react-icons/fi';

const PhoneIcon = ({ className }) => {
  return (
    <FiPhone className={`inline-block mr-2 ${className}`} />
  );
};

export default PhoneIcon;
