# ezlo

ezlo is a utility function for converting attached to the String prototype.

[axios](https://www.npmjs.com/package/axios)

### Usage

#### Basic
```
  'Please visit our website at www.google.com'.ezlo()
    =>
      'Please visit our website at <a href="www.google.com">www.google.com</a>
```

#### Applying options
```
  const opts = {
    redirectUrl: 'www.yahoo.com',
    alternateText: 'The website',
  };

  'Please visit our website at www.google.com'.ezlo(opts)
     =>
      'Please visit our website at <a href="www.yahoo.com">The website</a>'
```
