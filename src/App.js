import React from 'react';
import CourseCategories from './components/courseCategories';
import PopularContent from './components/popularContent';
import HOME_PAGE from './pages/HOME_PAGE';




function App() {
  return (
    <div>
      <HOME_PAGE />
      <CourseCategories />
      <PopularContent />      
    </div>
  );
}

export default App;
