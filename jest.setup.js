// ./jest.setup.js
//
// Setup file for Jest, runs before all tests.

import { TextDecoder, TextEncoder } from 'util';
import {
  afterAll,
  // afterEach,
  // beforeAll,
  beforeEach,
  jest,
} from '@jest/globals';
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Allow total of 10 seconds for unit tests.
jest.setTimeout(10000);

// beforeAll(() => {});

beforeEach(() => {
  jest.clearAllMocks();
});

// afterEach(() => {});

afterAll(() => {
  jest.restoreAllMocks();
});
