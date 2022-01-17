import { test, expect } from "@playwright/test";
import { getManager } from "typeorm";
import { Example } from "../typeorm/example";

test("basic test", async ({ page }) => {
  const manager = await getManager();

  await manager.find(Example, { where: { id: 1 } });

  await page.goto("https://playwright.dev/");
  await page.locator("text=Get started").click();
  await expect(page).toHaveTitle(/Getting started/);
});
