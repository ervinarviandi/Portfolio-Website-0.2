import React from 'react'

const PageInsight = () => {

const url = 'AIzaSyDnvR0T7pKlq0osyWXX_0qetf3sYsab95c';
const apiCall = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${url}`;


fetch(apiCall)
  .then(response => response.json())
  .then(json => {
      // Real-world metrics
      const cruxMetrics = {
      "First Contentful Paint": json.loadingExperience.metrics.FIRST_CONTENTFUL_PAINT_MS.category,
      "First Input Delay": json.loadingExperience.metrics.FIRST_INPUT_DELAY_MS.category
      };
      // Lab metrics
      const lighthouse = json.lighthouseResult;
      const lighthouseMetrics = {
      'First Contentful Paint': lighthouse.audits['first-contentful-paint'].displayValue,
      'Speed Index': lighthouse.audits['speed-index'].displayValue,
      'Time To Interactive': lighthouse.audits['interactive'].displayValue,
      };
      // ...
});
  return (
    <div className='w-full py-10'>
      <div className='lg:max-w-6xl mx-auto px-5 '>
        <div className=''>
          <h1 className='font-bold text-center text-2xl'>Page Speed Insight</h1>
        </div>
      </div>



    </div>
  )
}

export default PageInsight