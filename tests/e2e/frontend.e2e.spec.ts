import { test, expect } from '@playwright/test'

test.describe('Frontend', () => {
  test('can load homepage', async ({ page }) => {
    await page.goto('http://localhost:3000')
    await expect(page).toHaveTitle(/Outrospective/)
    const heading = page.locator('h1').first()
    await expect(heading).toContainText('Beyond Perspective.')
    await expect(heading).toContainText('Into Possibility.')

    const hasHorizontalOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth + 1,
    )
    expect(hasHorizontalOverflow).toBe(false)

    if ((page.viewportSize()?.width ?? 0) < 768) {
      await page.getByRole('button', { name: 'Toggle menu' }).click()
      const aboutLink = page.locator('header').getByRole('link', { name: 'About' })
      await expect(aboutLink).toBeVisible()
      await aboutLink.click()
      await expect(page).toHaveURL(/#about$/)
    }
  })
})
