import { test, expect } from "@playwright/experimental-ct-react";
import { Counter } from "./Counter";

test.use({ viewport: { width: 500, height: 500 } });

test("ボタンをクリックするとカウントが増えること", async ({ mount, page }) => {
  await mount(<Counter />);

  const countUpButton = await page.getByRole("button", {
    name: "count up button",
  });
  await countUpButton.click();
  expect(countUpButton).toHaveText("count is 1");
});
