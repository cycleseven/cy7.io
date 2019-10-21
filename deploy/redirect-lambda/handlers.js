module.exports.redirect = async event => {
  const request = event.Records[0].cf.request;

  if (request.headers.host[0].value === "www.cy7.io") {
    return {
      status: "301",
      statusDescription: "Redirecting to cy7.io",
      headers: {
        location: [
          {
            key: "Location",
            value: `https://cy7.io${request.uri}`
          }
        ]
      }
    };
  }

  return request;
};
