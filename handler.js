
import Wireline from '@wirelineio/sdk';

module.exports = {

  test: Wireline.exec(async (event) => {
    let { name='Alice' } = event.queryStringParameters || {};

    return {
      message: `Hello ${name}`
    };
  })
};
