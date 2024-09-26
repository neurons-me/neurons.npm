import assert from 'assert';
import { cleak } from '../src/cleaker.js'; // Update with the correct path

// Mock a .me profile
const mockProfile = {
  name: 'John Doe',
  lastname: 'Doe',
  birthday: '1990-01-01',
  password: 'examplePassword',
  pin: '1234'
};

// Test function
function testGenerateDID() {
  try {
    const didSHA256 = cleak(mockProfile, 'SHA-256');
    console.log('cleakerDID (SHA-256):', didSHA256);
    assert.strictEqual(typeof didSHA256, 'string', 'cleaker DID should be a string');
    assert.strictEqual(didSHA256.length, 64, 'cleaker DID length for SHA-256 should be 64 characters');

    const didKeccak256 = cleak(mockProfile, 'Keccak-256');
    console.log('cleakerDID (Keccak-256):', didKeccak256);
    assert.strictEqual(typeof didKeccak256, 'string', 'cleaker DID should be a string');
    assert.strictEqual(didKeccak256.length, 64, 'cleaker DID length for Keccak-256 should be 64 characters');

    console.log('All tests passed!');
  } catch (error) {
    console.error('Test failed:', error.message);
  }
}

// Run the test
testGenerateDID();
