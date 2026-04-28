import { FormData } from '@/lib/types';

export function sendEmail(data: FormData) {
  const apiEndpoint = '/api/send';

  return fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => {
    if (!res.ok) {
      throw new Error('Failed to send message');
    }
    return res.json();
  });
}
