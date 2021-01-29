module.exports.redirect = async (event) => {
  const request = event.Records[0].cf.request;

  if (request.headers.host[0].value === "www.cy7.io") {
    return {
      status: "301",
      statusDescription: "Redirecting to cy7.io",
      headers: {
        location: [
          {
            key: "Location",
            value: `https://cy7.io${request.uri}`,
          },
        ],
      },
    };
  }

  return request;
};

// This function allows clients to access subpaths without explicitly requesting
// the index.html file for simpler URLs, eg. cy7.io/anonymous-functions instead
// of cy7.io/anonymous-functions/index.html
//
// Implementation based on an example from the AWS docs:
// https://aws.amazon.com/blogs/compute/implementing-default-directory-indexes-in-amazon-s3-backed-amazon-cloudfront-origins-using-lambdaedge/
module.exports.subdirectoryIndex = async (event) => {
  const request = event.Records[0].cf.request;

  let uri = request.uri;

  // eslint-disable-next-line
  console.log(`Incoming URI: ${uri}`);

  // If the URI already directly references a file, don't mess with it
  if (uri.indexOf(".") > -1) {
    // eslint-disable-next-line
    console.log("URI not modified");
    return request;
  }

  // Heavily inspired by https://www.barelyknown.com/posts/add-trailing-slash-to-cloudfront-request
  if (uri.slice(-1) !== "/") {
    uri = `${uri}/`;
  }

  // Match any '/' that occurs at the end of a URI.
  // Replace it with a default index.
  request.uri = uri.replace(/\/$/, "/index.html");

  // eslint-disable-next-line
  console.log(`Modified URI: ${uri}`);
  return request;
};
