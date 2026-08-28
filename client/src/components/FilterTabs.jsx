import './FilterTabs.css';

function FilterTabs({ courses, selectedCourse, onSelect }) {
  return (
    <div className="filter-tabs">
      {courses.map(course => (
        <button
          key={course}
          className={course === selectedCourse ? 'tab tab-active' : 'tab'}
          onClick={() => onSelect(course)}
        >
          {course}
        </button>
      ))}
    </div>
  );
}

export default FilterTabs;