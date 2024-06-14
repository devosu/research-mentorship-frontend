// ./__tests__/config/firebaseInit.test.ts
//
// Unit tests for Firebase setup and export.

// Type imports.
import type { FirebaseApp } from 'firebase/app';
import type { Auth } from 'firebase/auth';
import type { Database } from 'firebase/database';
import type { Firestore } from 'firebase/firestore';
import type { Functions } from 'firebase/functions';
import type { Analytics } from 'firebase/analytics';

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

// 1.3. Mock the firebase/database module.
// TODO: Bad mock, fix by using Partial<OriginalType> instead of forced casting.
const mockDatabase: Database = 'mockDB' as unknown as Database;
const mockGetDatabase = jest.fn().mockReturnValue(mockDatabase) as jest.MockedFunction<(fbApp: FirebaseApp) => Database>;
jest.mock('firebase/database', () => ({
  getDatabase: mockGetDatabase
}));

// 1.4. Mock the firebase/firestore module.
// TODO: Bad mock, fix by using Partial<OriginalType> instead of forced casting.
const mockStore: Firestore = 'mockFirestore' as unknown as Firestore;
const mockGetFirestore = jest.fn().mockReturnValue(mockStore) as jest.MockedFunction<(fbApp: FirebaseApp) => Firestore>;
jest.mock('firebase/firestore', () => ({
  getFirestore: mockGetFirestore,
}));

// 1.5. Mock the firebase/functions module.
// TODO: Bad mock, fix by using Partial<OriginalType> instead of forced casting.
// const mockFunctions: Functions = 'mockFunctions' as unknown as Functions;
// jest.mock('firebase/functions', () => ({
//   getFunctions: jest.fn().mockReturnValue(mockFunctions) as jest.MockedFunction<(fbApp: FirebaseApp) => Functions>
// }));

// 1.6. Mock the firebase/analytics module.
// TODO: Bad mock, fix by using Partial<OriginalType> instead of forced casting.
// const mockAnalytics: Analytics = 'mockAnalytics' as unknown as Analytics;
// jest.mock('firebase/analytics', () => ({
//   getAnalytics: jest.fn().mockReturnValue(mockAnalytics) as jest.MockedFunction<(fbApp: FirebaseApp) => Analytics>
// }));

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

  // // 2.3. Test the real-time database initialization.
  // it('initializes the real-time database', () => {
  //   jest.isolateModules(() => {
  //     mockGetApps.mockImplementation(() => []);
  //     const { fbApp, fbDatabase } = require('@config/firebaseInit');
  //     expect(mockGetDatabase).toHaveBeenCalledWith(fbApp);
  //     expect(fbDatabase).toBe(mockDatabase);
  //   });
  // });

  // 2.4. Test the Firestore database initialization.
  it('initializes the Firestore document database', () => {
    jest.isolateModules(() => {
      mockGetApps.mockImplementation(() => []);
      const { fbApp, fbStore } = require('@config/firebaseInit');
      expect(mockGetFirestore).toHaveBeenCalledWith(fbApp, 'dangerously-unsafe-temp-dev-database');
      expect(fbApp).toBe(mockApp);
      expect(fbStore).toBe(mockStore);
    });
  });

  // // 2.5. Test the Cloud Functions initialization.
  // it('initializes the Cloud Functions', () => {
  //   jest.isolateModules(() => {
  //     mockGetApps.mockImplementation(() => []);
  //     const { fbApp, fbFn } = require('@config/firebaseInit');
  //     expect(getFunctions).toHaveBeenCalledWith(fbApp);
  //     expect(fbFn).toBe(mockFunctions);
  //   });
  // });

  // // 2.6. Test the Analytics service initialization.
  // it('initializes the Analytics service', () => {
  //   jest.isolateModules(() => {
  //     mockGetApps.mockImplementation(() => []);
  //     const { fbApp, fbAn } = require('@config/firebaseInit');
  //     expect(getAnalytics).toHaveBeenCalledWith(fbApp);
  //     expect(fbAn).toBe(mockAnalytics);
  //   });
  // });
});
