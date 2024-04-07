import { describe, it } from 'vitest';
import { render } from '@testing-library/react';

import App from './App';

describe("App", () => {
  it("should allow the user to enter their wish", async () => {
    render(<App />);
  });

  it("should enable button after a wish is entered", async () => {
    render(<App />);
  });

  it("should replace the wish entry area with the wish after submission", async () => {    
    render(<App />);
  });
})
