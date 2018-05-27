#### NOTE: This project was forked from react-metismenu.

# nodely-metismenu

A ready / simple to use, highly customizable, updateable, ajax supported, animated and material designed menu component for [React](https://facebook.github.io/react/)

All features from react-metismenu, including ability to provide item-based context actions.

All information is available [here](https://github.com/alpertuna/react-metismenu).

Install
=======

```console
npm install --save nodely-metismenu
```

Extended Usage
=====

With Ecma Script 6 and React Loaders
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import MetisMenu from 'react-metismenu';

const buildContextActions = hasSubMenu => () => {
    if (hasSubMenu) {
      // build actions for sub menu root
      return [
        ...
      ]
    }
    // build actions for item
    return [
      ...
    ]
};

ReactDOM.render(<MetisMenu contextActions={buildContextActions}/>, document.getElementById('dom_id'));
```
