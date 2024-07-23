import { test, expect } from "@playwright/experimental-ct-react";
import App from "./App";

test.use({ viewport: { width: 500, height: 500 } });

test("should work", async ({ mount, page }) => {
  const component = await mount(<App />);
  await expect(component).toContainText("Vite");

  const countUpButton = await page.getByRole("button", {
    name: "count up button",
  });
  await countUpButton.click();
  expect(countUpButton).toHaveText("count is 1");
});
