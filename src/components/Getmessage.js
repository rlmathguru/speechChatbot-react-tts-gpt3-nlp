const openai_api_key = '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';

const DEFAULT_PARAMS = {
  model: 'text-davinci-003',
  temperature: 0.4,
  max_tokens: 230,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0.6,
  stop: ['###'],
};

const Ans = async (params = {}) => {
  const params_ = { ...DEFAULT_PARAMS, ...params };
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + String(openai_api_key),
    },
    body: JSON.stringify(params_),
  };
  const response = await fetch(
    'https://api.openai.com/v1/completions',
    requestOptions
  );
  const data = await response.json();
  return data.choices[0].text;
};

exports.Ans = Ans;
