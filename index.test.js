// Hello World Test Suite
const { describe, it, mock } = require('node:test');
const assert = require('node:assert');

describe('Hello World', () => {
  it('should output Hello, World! to stdout', () => {
    let capturedOutput = '';
    const originalLog = console.log;
    
    // Mock console.log to capture output
    console.log = (msg) => {
      capturedOutput = msg;
    };
    
    try {
      // Re-require to get fresh module
      delete require.cache[require.resolve('./index.js')];
      require('./index.js');
      assert.strictEqual(capturedOutput, 'Hello, World!');
    } finally {
      // Restore console.log
      console.log = originalLog;
    }
  });

  it('should export a program that can be run', () => {
    // Verify the file can be required without errors
    const indexModule = require('./index.js');
    assert.ok(indexModule !== undefined);
  });
});
