import React from 'react'
import Button from '@material-ui/core/Button';
import Info from '../components/Info';

export default () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.download = `resume_miles_boswell.pdf`;
    link.href = `${process.env.PUBLIC_URL}/resume_miles_boswell.pdf`;
    link.click();
  };

  return (
    <div>
      <Info title="About Me">
        This page will contain some information about me.
        <br />
        This page should link to another page displaying some of my projects.
      </Info>

      <div align="center">
        <Button onClick={downloadResume} color="secondary" variant="contained">
          Download My Resume
        </Button>
      </div>
    </div>
  );
};