const { Configuration, OpenAIApi } = require('openai')
require("dotenv").config()

const openai = {
  configuration: function() {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    return new OpenAIApi(configuration);
  },

  textCompletion: function({ prompt }) {
    return {
      model: "gpt-3.5-turbo",
      messages: `${prompt}`,
      temperature: 1,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    };
  }
};

module.exports = openai;