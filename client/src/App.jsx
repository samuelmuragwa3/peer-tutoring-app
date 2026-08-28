import { useState } from 'react';
import './App.css';
import FilterTabs from './components/FilterTabs';
import SessionList from './components/SessionList';

function App() {
  const [sessions, setSessions] = useState([
    {
      id: 1,
      course: 'CSIS 3290',
      day: 'Wed',
      time: '3:00 PM',
      title: 'Gradient Boosting & Ensemble Methods',
      tutor: 'John Smith',
      capacity: 6,
      participants: ['Priya', 'Jaden', 'Kayla', 'Sofia', 'Aiden', 'Tao'],
    },
    {
      id: 2,
      course: 'MATH 1200',
      day: 'Thu',
      time: '1:00 PM',
      title: 'Related Rates Problem Set Review',
      tutor: 'Devon K.',
      capacity: 5,
      participants: ['Maya', 'Aiden', 'Sofia', 'Liam', 'Emma'],
    },
    {
      id: 3,
      course: 'ACCT 1110',
      day: 'Thu',
      time: '4:30 PM',
      title: 'Adjusting Entries & Trial Balances',
      tutor: 'Rita P.',
      capacity: 4,
      participants: ['Noah', 'Grace'],
    },
    {
      id: 4,
      course: 'ENGL 1130',
      day: 'Fri',
      time: '11:00 AM',
      title: 'Essay Structure Workshop',
      tutor: 'Owen T.',
      capacity: 6,
      participants: ['Aiden', 'Liam', 'Raj'],
    },
  ]);

  const [selectedCourse, setSelectedCourse] = useState('All');

  const courseOptions = ['All', ...new Set(sessions.map(s => s.course))];

  function handleJoin(sessionId, participantName) {
    setSessions(prevSessions =>
      prevSessions.map(session =>
        session.id === sessionId
          ? { ...session, participants: [...session.participants, participantName] }
          : session
      )
    );
  }

  return (
    <div className="app">
      <h1>Open Study Sessions</h1>
      <FilterTabs
        courses={courseOptions}
        selectedCourse={selectedCourse}
        onSelect={setSelectedCourse}
      />
      <SessionList sessions={sessions} filter={selectedCourse} onJoin={handleJoin} />
    </div>
  );
}

export default App;