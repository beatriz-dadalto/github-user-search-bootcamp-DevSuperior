import './styles.scss';

type Props = {
  fieldName: string;
  userData: string;
}

const UserTags = ({fieldName, userData}: Props) => {
  return (
    <div className="user-follows-item">
      <p>{fieldName} {userData}</p>
    </div>
  );
};

export default UserTags;
