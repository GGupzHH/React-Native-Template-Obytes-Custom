import { setupServer } from 'msw/native';
import { account } from './account';

export const server = setupServer(...account);
