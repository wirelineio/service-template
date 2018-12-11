
import Wireline from '@wirelineio/sdk';

module.exports = {

  test: Wireline.exec(async (event, context) => {
    let { name = 'Wireline' } = event.queryStringParameters || {};

    return {
      message: `Hello, ${name}!`
    };
  })
};
