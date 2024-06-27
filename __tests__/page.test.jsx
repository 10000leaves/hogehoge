import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import Home from "@/app/page"

// Homeのテスト
describe("Home", () => {
  // 見出しが正しくレンダリングされることをテスト
  it("renders a heading", () => {
    // Homeをレンダリング
    render(<Home />)

    // level 1の見出し（h1）を取得
    const heading = screen.getByRole("heading", { level: 1 })

    // 見出しがドキュメント内に存在することを確認
    expect(heading).toBeInTheDocument()
  })
})
