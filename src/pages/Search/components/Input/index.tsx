import './styles.scss';

type Props = {
  fieldName: string;
  userData: string;
}

const Input = ({ fieldName, userData }: Props) => {
  return (
    <div className="input-info">
      <p>
        {fieldName} <span>{userData}</span>
      </p>
    </div>
  );
};

export default Input;
