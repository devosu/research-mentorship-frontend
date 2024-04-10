// ./jest.setup.js
//
// Setup file for Jest, runs before all tests.

// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import {
  beforeEach, beforeAll, afterEach, afterAll,
} from '@jest/globals';
import { TextEncoder, TextDecoder } from 'util';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

beforeAll(() => {

});

beforeEach(() => {

});

afterEach(() => {

});

afterAll(() => {

});
