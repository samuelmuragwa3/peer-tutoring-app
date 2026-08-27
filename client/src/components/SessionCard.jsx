import './SessionCard.css';
import AvatarRow from './AvatarRow';
import { getCapacityColor } from '../utils/capacityColor';

function SessionCard({ session, onJoin }) {
  const { id, title, capacity, tutor, participants, course, day, time } = session;

  const joined = participants.length;
  const isFull = joined >= capacity;
  const fillColor = getCapacityColor(joined, capacity);

  return (
    <div className="session-card">
      <p className="session-meta">{course} · {day} {time}</p>
      <h3>{title}</h3>
      <p className="session-tutor">Led by {tutor}</p>

      <div className="capacity-bar">
        <div
          className="capacity-fill"
          style={{ width: `${(joined / capacity) * 100}%`, backgroundColor: fillColor }}
        />
      </div>

      <span className={isFull ? 'status-full' : 'status-open'}>
        {isFull ? 'FULL' : 'OPEN'} · {joined}/{capacity}
      </span>

      <AvatarRow participants={participants} />

      <button
        className="join-button"
        disabled={isFull}
        onClick={() => onJoin(id, 'Current User')}
      >
        {isFull ? 'Full' : 'Sign Up'}
      </button>
    </div>
  );
}

export default SessionCard;