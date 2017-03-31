# ezlo

ezlo is a utility function for converting text containing a url into a clickable link.

It is attached to the String Prototype.

### Usage

#### Basic
```
  require('ezlo');

  'Please visit our website at www.google.com to learn more.'.ezlo()
    =>
      'Please visit our website at <a href="www.google.com">www.google.com</a> to learn more.'
```

#### Applying options
```
  require('ezlo');

  const opts = {
    redirectUrl: 'www.yahoo.com',
    alternateText: 'The website',
  };

  'Please visit our website at www.google.com to learn more.'.ezlo(opts)
     =>
      'Please visit our website at <a href="www.yahoo.com">The website</a> to learn more.'
```
