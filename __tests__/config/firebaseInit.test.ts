// ./__tests__/config/firebaseInit.test.ts
//
// Unit tests for Firebase setup and export.

// Type imports.
import type { FirebaseApp } from 'firebase/app';
import type { Auth } from 'firebase/auth';

// Jest essential imports.
import { beforeEach, describe, expect, it, jest } from '@jest/globals';

// 1. Setup mocks for the firebase modules before import.

// 1.1. Mock the firebase/app module.
// TODO: Bad mock, fix by using Partial<OriginalType> instead of forced casting.
const mockApp: FirebaseApp = 'mockApp' as unknown as FirebaseApp;
const existingApp: FirebaseApp = 'existingApp' as unknown as FirebaseApp;
const mockGetApps = jest.fn(() => []) as jest.MockedFunction<() => FirebaseApp[]>;
const mockInitializeApp = jest.fn().mockReturnValue(mockApp) as jest.MockedFunction<() => FirebaseApp>;
jest.mock('firebase/app', () => ({
  getApps: mockGetApps,
  initializeApp: mockInitializeApp,
}));

// 1.2. Mock the firebase/auth module.
// TODO: Bad mock, fix by using Partial<OriginalType> instead of forced casting.
const mockAuth: Auth = 'mockAuth' as unknown as Auth;
const mockGetAuth = jest.fn().mockReturnValue(mockAuth) as jest.MockedFunction<(fbApp: FirebaseApp) => Auth>;
jest.mock('firebase/auth', () => ({
  getAuth: mockGetAuth,
}));

// 2. Import and test the firebase setup module.

// 2.0. Reset the mock function call counters before each test.
beforeEach(() => {

  // Reset cached modules before each test.
  jest.resetModules();

  // Reset all mock function call counters before each test.
  jest.clearAllMocks();

  // Reset mockGetApps implementation before each test.
  mockGetApps.mockClear();
});

describe('Firebase service setup and export', () => {
  
  // 2.1. Test the app initialization.
  it('initializes the app if not already initialized', () => {
    jest.isolateModules(() => {
      // Scenario: mockGetApps returns an empty array.
      mockGetApps.mockImplementation(() => []);
      const { fbApp } = require('@config/firebaseInit');
      expect(mockInitializeApp).toHaveBeenCalled();
      expect(fbApp).toEqual(mockApp);
    });
  });

  it('updates ref to the app if already initialized', () => {
    jest.isolateModules(() => {
      // Scenario: mockGetApps returns a non-empty array.
      mockGetApps.mockImplementation(() => [existingApp]);
      const { fbApp } = require('@config/firebaseInit');
      expect(mockInitializeApp).not.toHaveBeenCalled();
      expect(fbApp).toEqual(existingApp);
    });
  });

  // 2.2. Test the auth service initialization.
  it('initializes the auth service', () => {
    jest.isolateModules(() => {
      mockGetApps.mockImplementation(() => []);
      const { fbApp, fbAuth } = require('@config/firebaseInit');
      expect(mockGetAuth).toHaveBeenCalledWith(fbApp);
      expect(fbApp).toBe(mockApp);
      expect(fbAuth).toBe(mockAuth);
    });
  });
});
