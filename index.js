const ezlo = function(opts) {
  const {
    externalPattern,
    redirectUrl,
    alternateText,
  } = opts;

  if (externalPattern) {
    return this.replace(externalPattern, constructUrl);
  }

  const pattern = /(ftp:\/\/|www\.|https?:\/\/){1}[a-zA-Z0-9u00a1-\uffff0-]{2,}\.[a-zA-Z0-9u00a1-\uffff0-]{2,}(\S*)/g;

  return this.replace(pattern, constructUrl);

  function constructUrl(link) {
    const href = redirectUrl ? redirectUrl : link;
    const text = alternateText ? alternateText : link;
    const contructedUrl = `<a href="${href}">${text}</a>`;

    return contructedUrl;
  }
}

String.prototype['ezlo'] = ezlo;

module.exports = ezlo;