"use strict";

const url = 'https://services.arcgis.com/sFnw0xNflSi8J0uh/ArcGIS/rest/services/BTD_PWD_Project_2021_Street_Lines_Public/FeatureServer/0/query?where=0%3D0&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=*&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pgeojson&token='

const https = require('https')
const fs = require('fs');

function getDateString() {
    const ts = Date.now();
    const date = new Date(ts);
    const year = String(date.getFullYear())
    const month = date.toLocaleString('en-us', {month : 'short'});
    const day = String(date.getDate()).padStart(2, '0')
    return (year + month + day)
}

function fetchGeoJson(url, saveName) {
    const data = https.get(url, (resp) => {
      let data = '';
    
      resp.on('data', (chunk) => {
        data += chunk;
      });
    
      resp.on('end', () => {
        fs.writeFile('./assets/csvFiles/' + saveName + '_' + getDateString()  + '.geojson', data, err => {
          if (err) {
            console.error(err)
            return
          }
        })
      });
    
    }).on("error", (err) => {
      console.error(err);
    });
}

fetchGeoJson(url, 'BTD_transportation_projects')
