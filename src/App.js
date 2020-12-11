import React from 'react';
import CourseCategories from './components/courseCategories';
import FAQ from './components/faq/faq';
import FooterPage from './components/footerPage';
import Partners from './components/partners/partner';
import PopularContent from './components/popularContent';
import HOME_PAGE from './pages/HOME_PAGE';




function App() {
  return (
    <div>
      <HOME_PAGE />
      <CourseCategories />
      <PopularContent />
      <FAQ/>
      <Partners/>
      <FooterPage />  
    </div>
  );
}

export default App;
