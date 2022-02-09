// Module to fetch GeoJSON files



const https = require('https')
const fs = require('fs');

// getDateString() is now unused
function getDateString() {
    const ts = Date.now();
    const date = new Date(ts);
    const year = String(date.getFullYear())
    const month = date.toLocaleString('en-us', {month : 'short'});
    const day = String(date.getDate()).padStart(2, '0')
    return (year + month + day)
}

function fetchData(url, options, saveName, ext) {
    const data = https.get(url, options, (resp) => {
      let data = '';
    
      resp.on('data', (chunk) => {
        data += chunk;
      });
    
      resp.on('end', () => {
        /* Mattapan map expects a name at the root of FeatureCollections
           for the table of contents */
        const parsedJson = JSON.parse(data)
        const addNameToJson = {...parsedJson, name: saveName.replace("_"," ")}
        fs.writeFile('./public/boundaries/' + saveName + '.' + ext, data, err => {
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


// Fetch BTD Tranportation Project Data as GeoJSON
//
var url = 'https://services.arcgis.com/sFnw0xNflSi8J0uh/ArcGIS/rest/services/BTD_PWD_Project_2021_Street_Lines_Public/FeatureServer/0/query?where=0%3D0&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=*&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pgeojson&token='

fetchData(url, {}, 'BTD_transportation_projects', 'geojson')


//// Fetch BPDA Development Project Data as JSON
////
//var url = 'https://www.bostonplans.org/rest/content/currentsite/en-us/childrenof/projects/development-projects?format=json&classnames=BRA.Project&columns=BRAProjectID%2C+BRAProjectType%2C+Title%2C+BRAProjectDescription%2C+MenuItemTeaserImage%2C+BRALatitude%2C+BRALongitude%2C+BRANeighborhoodID%2C+BRAProjectStatus%2CBRABldgSqFt%2CBRALandSqFt%2CBRAArticle80Type';
//
//var options = {
//    headers: {
//        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:92.0) Gecko/20100101 Firefox/92.0',
//        'Accept': 'application/json, text/javascript, */*; q=0.01',
//        'Accept-Language': 'en-US,en;q=0.5',
//        'Authorization': 'Basic UmVzdEFQSTpCUkFCb3N0b242MTchIQ==',
//        'X-Requested-With': 'XMLHttpRequest',
//        'DNT': '1',
//        'Connection': 'keep-alive',
//        'Referer': 'https://www.bostonplans.org/map/index.html?tabletype=dev&hidesearch=true&hideviewby=true',
//        'Cookie': 'CMSPreferredCulture=en-US; VisitorStatus=21062777352; ASP.NET_SessionId=ttzvs41nlb1e5t0htteak5gb; NSC_wcsbxfc_80=ffffffff09f97b5345525d5f4f58455e445a4a423660',
//        'Sec-Fetch-Dest': 'empty',
//        'Sec-Fetch-Mode': 'cors',
//        'Sec-Fetch-Site': 'same-origin',
//        'Pragma': 'no-cache',
//        'Cache-Control': 'no-cache'
//    }
//}
//
//fetchData(url, options, 'BPDA_development_projects', 'json');
