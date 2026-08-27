import './AvatarRow.css';

function AvatarRow({ participants }) {
  return (
    <div className="avatar-row">
      {participants.map((name, index) => (
        <div key={index} className="avatar-circle">
          {name.charAt(0)}
        </div>
      ))}
    </div>
  );
}

export default AvatarRow;