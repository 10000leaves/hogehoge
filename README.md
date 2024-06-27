This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Storybookの追加方法

インストール
```
npx storybook@latest init
```

Storybookを起動
```
npm run storybook
```

## Jestの追加方法

インストール

```
npm install -D jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom
```

- `npm install -D`: プロジェクトの開発依存関係としてパッケージをインストールします。
- `jest`: JavaScriptのテストフレームワーク。
- `jest-environment-jsdom`: ブラウザ環境を模倣するためのJest環境。
- `@testing-library/react`: Reactコンポーネントをテストするためのライブラリ。
- `@testing-library/jest-dom`: JestでDOMノードをより簡単にアサートするためのカスタムマッチャ。

Jest設定ファイルの生成

```
npm init jest@latest
```

Jest設定の更新

`jest.config.ts`

```ts
import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './',
})

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  // その他のセットアップオプション
}

export default createJestConfig(config)
```

テストスクリプトの追加

`package.json`

```
{
  "scripts": {
    "test": "jest",
    "test:w": "jest --watch"
  }
}
```

- `test`: Jestを実行するコマンド。
- `test:w`: ファイルが変更されるとテストを自動的に再実行するためのコマンド。
