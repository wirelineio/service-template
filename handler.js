//
// Copyright 2017 Wireline, Inc.
//

// Enable source map support.
// https://github.com/evanw/node-source-map-support#programmatic-usage
import 'source-map-support/register';

import Wireline from '@wirelineio/sdk';

module.exports = {

  test: Wireline.exec(async (event, context, response) => {
    let { name='Alice' } = event.queryStringParameters || {};

    response.send({
      message: `Hello ${name}`
    });
  })
};
