import './SessionList.css';
import SessionCard from './SessionCard';

function SessionList({ sessions, filter, onJoin }) {
  const filtered = filter === 'All'
    ? sessions
    : sessions.filter(s => s.course === filter);

  return (
    <div className="session-list">
      {filtered.map(session => (
        <SessionCard key={session.id} session={session} onJoin={onJoin} />
      ))}
    </div>
  );
}

export default SessionList;