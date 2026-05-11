exports.handler = async function(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'メソッドが許可されていません' };
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return { statusCode: 500, body: JSON.stringify({ error: 'APIキーが設定されていません' }) };
  }

  試す {
    const body = JSON.parse(event.body);

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      メソッド: 'POST'、
      ヘッダー: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey、
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify(body)
    });

    const data = await response.json();

    戻る {
      ステータスコード: 200、
      ヘッダー: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };
  } catch (err) {
    戻る {
      ステータスコード: 500、
      body: JSON.stringify({ error: err.message })
    };
  }
};
