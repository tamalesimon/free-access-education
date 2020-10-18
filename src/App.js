import React from 'react';
import CourseCategories from './components/courseCategories';
import FooterPage from './components/footerPage';
import PopularContent from './components/popularContent';
import HOME_PAGE from './pages/HOME_PAGE';




function App() {
  return (
    <div>
      <HOME_PAGE />
      <CourseCategories />
      <PopularContent />
      <FooterPage />     
    </div>
  );
}

export default App;
