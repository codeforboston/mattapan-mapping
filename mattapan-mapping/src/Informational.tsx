import * as React from 'react';

const headerText = 'The Neighborhood of Mattapan is Shrinking';
const descriptionText = 'Mattapan became a part of Boston when Dorchester was annexed in 1870. As of the 2010 census, it had a population of 36,480, with the majority of its population immigrants. From 2008 to 2021 the town lines began shrinking. A leading indicator of regentrification, and the inevitable displacement of communities most impacted, is best visualized through land use.'

function Informational() {
    return (<div className="information-pane"><h2>{headerText}</h2><p>{descriptionText}</p><div><a href="#">what is lost?</a></div></div>);
}

export default Informational;