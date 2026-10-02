import { test, expect } from '@playwright/test'

test.describe('Frontend', () => {
  test('can load homepage', async ({ page }, testInfo) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Outrospective/)
    const heading = page.locator('h1').first()
    await expect(heading).toContainText('Beyond Perspective.')
    await expect(heading).toContainText('Into Possibility.')

    const hasHorizontalOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth + 1,
    )
    expect(hasHorizontalOverflow).toBe(false)

    const heroHand = page.locator('img[src*="hero-hand-open-palm-v3"]')
    const heroButterfly = page.locator('img[src*="hero-butterfly-animated"]')

    await expect(heroHand).toBeVisible()
    await expect(heroButterfly).toBeVisible()
    expect(
      await heroHand.evaluate(
        (image) => image instanceof HTMLImageElement && image.complete && image.naturalWidth > 0,
      ),
    ).toBe(true)

    const screenshotPath = process.env.QA_SCREENSHOT_PATH
    if (screenshotPath) {
      await page.screenshot({
        path: screenshotPath.replace('{project}', testInfo.project.name),
        fullPage: false,
      })
    }

    if ((page.viewportSize()?.width ?? 0) < 768) {
      await expect(page.locator('header')).toHaveAttribute('data-hydrated', 'true')
      await page.getByRole('button', { name: 'Toggle menu' }).click()
      const aboutLink = page.locator('header').getByRole('link', { name: 'About' })
      await expect(aboutLink).toBeVisible()
      await Promise.all([
        page.waitForURL(/\/about$/, { timeout: 15_000 }),
        aboutLink.click(),
      ])
    }
  })

  test('core brand routes render without horizontal overflow', async ({ page }) => {
    const routes = ['/work', '/services', '/about', '/insights', '/contact']

    for (const route of routes) {
      await page.goto(route)
      await expect(page.locator('h1')).toBeVisible()
      await expect(page.getByRole('link', { name: 'Outrospective home' }).first()).toBeVisible()

      const hasHorizontalOverflow = await page.evaluate(
        () => document.documentElement.scrollWidth > window.innerWidth + 1,
      )
      expect(hasHorizontalOverflow, `${route} should not overflow horizontally`).toBe(false)
    }
  })
})
