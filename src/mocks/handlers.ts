import { http, HttpResponse } from 'msw';

export const handlers = [
  // 示例：登录接口 mock
  http.post('/aap/login', async ({ request }) => {
    const body = await request.json();

    return HttpResponse.json(
      {
        token: 'mock-token-123456',
        user: {
          id: 1,
          name: 'Mock User',
          email: 'mock@test.com',
        },
      },
      { status: 200 }
    );
  }),

  // 示例：列表接口 mock
  http.get('https://api.demo.com/posts', () => {
    return HttpResponse.json([
      { id: 1, title: 'Mock Title 1' },
      { id: 2, title: 'Mock Title 2' },
    ]);
  }),
];
