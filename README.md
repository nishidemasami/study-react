# あらかじめインストールが必要なもの

- Git
- VSCode
- Node.js
- yarn

# VSCode でインストールするプラグイン

- ESLint(dbaeumer.vscode-eslint)
- Prettier(esbenp.prettier-vscode)
- vscode-styled-components(jpoissonnier.vscode-styled-components)

# 手順

1. git の文字コードの設定を CRLF にしない設定にする(Global の `AutoCrlf` を false にする)
1. `git clone git@github.com:nishidemasami/study-react.git`を実行して GitHub から clone してくる
1. git で clone して作成されたディレクトリで`yarn install`を実行する。`node_modules`ディレクトリに、モジュール(ライブラリ)がいっぱいいろいろダウンロードされたことを確認する
1. `yarn start`を実行して起動して、<http://localhost:3000/>でページが見れることを確認する

# ビルドしたもの

<https://nishidemasami.github.io/study-react/>

# エラーが出る時

- もう一度`yarn install`してみる
- VSCode を再起動してみる
- node_modules を削除してもう一度`yarn install`してみる

# 処理の流れ

[![処理の流れ](https://www.plantuml.com/plantuml/png/TPJXJjim4CU_-odoUTB6zqQQa7W3s0j4mQCH8QaILqEQAiqsOq11T6DZWm65hUk0Ikqa49FOn1xcv8QznSvsqoGIyoVxpdV-_yvdpwRCIrXp9IGrjN4yFkekC8zHbqGneqv8dpEI9lvCGXURgpEfTiqyUi9I1_Y015700Yyq0S3FWNy4tbV3m-pkWj1eqT4fI48Rr6DERPBsyLEdcT856bAVnGdmxsHUfmRU1h6fTlVL7IOv0D4cXBYaWTBmZ3XoL6UDfQiWFu0u0z43EN1U4WT7RPvwFWC-d8jN6d548-OQUw5VhwPEuAE9tg7gROu_NuDuD-uTPTrlADziLUixuztTxFqlzAXXz_vismgoJXl3j_COr8F-I-1lpUH74Sr7kVVGXdPm-YdRkXc_RWFNPk1ViMptP-TPxzRkpMuEJIPxsBI6hL8XGEw3l03H1t6Jby2UQBcnm22FGFm1UQMF4IEGbo0bY5oFQCChRZHVc0WNynVLAkS7FiXXB4aV-9gEvqF48vD23jJTda7fJ-7KrgdwEQrEb-Ht1E9AovB787-3t37pZQ9N2afpnGVMdrEMRTd1RSO73zrq7Cs5WRyCOWrdTIzQeiQC1J7n9_faWH1VJA8J1BKPImK1Bh0PGQmRr4iGUth93NP9G_MEdCb86s70fgk2g7X5hDwCbiqhCcJ5g3tJ7hTYgyBbu-_n2ROJFbRrffzrrdKpdrwh3aACAljCGkpZYd4nI1iUy-j5Mvln84shokLuIruGaVBsWhVAMlanggmr_UHzchZa_vIcjr2vxQIgrAhC5cbDFfaNzI2aP1Qz-9tz0m00 "処理の流れ")](http://www.plantuml.com/plantuml/uml/TPJXJjim4CU_-odoUTB6zqQQa7W3s0j4mQCH8QaILqEQAiqsOq11T6DZWm65hUk0Ikqa49FOn1xcv8QznSvsqoGIyoVxpdV-_yvdpwRCIrXp9IGrjN4yFkekC8zHbqGneqv8dpEI9lvCGXURgpEfTiqyUi9I1_Y015700Yyq0S3FWNy4tbV3m-pkWj1eqT4fI48Rr6DERPBsyLEdcT856bAVnGdmxsHUfmRU1h6fTlVL7IOv0D4cXBYaWTBmZ3XoL6UDfQiWFu0u0z43EN1U4WT7RPvwFWC-d8jN6d548-OQUw5VhwPEuAE9tg7gROu_NuDuD-uTPTrlADziLUixuztTxFqlzAXXz_vismgoJXl3j_COr8F-I-1lpUH74Sr7kVVGXdPm-YdRkXc_RWFNPk1ViMptP-TPxzRkpMuEJIPxsBI6hL8XGEw3l03H1t6Jby2UQBcnm22FGFm1UQMF4IEGbo0bY5oFQCChRZHVc0WNynVLAkS7FiXXB4aV-9gEvqF48vD23jJTda7fJ-7KrgdwEQrEb-Ht1E9AovB787-3t37pZQ9N2afpnGVMdrEMRTd1RSO73zrq7Cs5WRyCOWrdTIzQeiQC1J7n9_faWH1VJA8J1BKPImK1Bh0PGQmRr4iGUth93NP9G_MEdCb86s70fgk2g7X5hDwCbiqhCcJ5g3tJ7hTYgyBbu-_n2ROJFbRrffzrrdKpdrwh3aACAljCGkpZYd4nI1iUy-j5Mvln84shokLuIruGaVBsWhVAMlanggmr_UHzchZa_vIcjr2vxQIgrAhC5cbDFfaNzI2aP1Qz-9tz0m00)

# 実装の方針

以下を使う

- TypeScript
  言語
- ESLint
  リンタ
- Prettier
  コード整形
- Styled Components
  スタイル記述ライブラリ
- React
  フロントエンドフレームワーク
- Redux
  状態管理ライブラリ

# 各ファイルの説明

| ファイル・ディレクトリ                     | 説明                                                                            |
| :----------------------------------------- | :------------------------------------------------------------------------------ |
| 📁.github                                  | GitHub の設定用ファイル                                                         |
| 📁.github/ISSUE_TEMPLATE                   | GitHub の Issue のテンプレート                                                  |
| 📁.github/ISSUE_TEMPLATE/アイデアや要望.md | アイデアや要望用の Issue のテンプレート                                         |
| 📁.github/ISSUE_TEMPLATE/バグ報告.md       | バグ報告用の Issue のテンプレート                                               |
| 📁.github/workflows/nodejs.yml             | このリポジトリの GitHub Pages を自動生成するためのワークフロー                  |
| 📁.github/PULL_REQUEST_TEMPLATE.md         | プルリクエスト用の Issue のテンプレート                                         |
| 📄.eslintrc.json                           | ESLint の設定ファイル                                                           |
| 📁.git                                     | git の管理用ファイル(自動生成)                                                  |
| 📄.gitignore                               | git で無視するファイル・ディレクトリの設定                                      |
| 📄.prettierrc                              | Prettier の設定ファイル                                                         |
| 📄yarn.json                                | node_modules のパッケージとそのバージョンの管理用ファイル(自動生成)             |
| 📄package.json                             | node_modules のパッケージの管理やアプリケーションの設定などの設定ファイル       |
| 📄README.md                                | このファイル                                                                    |
| 📄tsconfig.json                            | TypeScript の設定ファイル                                                       |
| 📁.vscode                                  | VSCode の設定ファイルを保存するディレクトリ                                     |
| 📄.vscode/settings.json                    | VSCode の設定ファイル                                                           |
| 📄.vscode/launch.json                      | VSCode のデバッグの設定ファイル(未作成)                                         |
| 📁build                                    | ビルドで生成されたファイルが保存されるディレクトリ(`yarn build`が自動生成)      |
| 📁node_modules                             | モジュール(ライブラリ)が保存されているディレクトリ(`yarn install`が自動生成)    |
| 📁public                                   | 公開用ディレクトリ(ビルド用)                                                    |
| 📄public/favicon.ico                       | ファビコン                                                                      |
| 📄public/index.html                        | index.html                                                                      |
| 📄public/logo192.png                       | ロゴ(高解像度ファビコン用)                                                      |
| 📄public/logo512.png                       | ロゴ(高解像度ファビコン用)                                                      |
| 📄public/manifest.json                     | WEB サイト設定ファイル                                                          |
| 📄public/robots.txt                        | クローラ・ボット用設定ファイル                                                  |
| 📁src                                      | ソースディレクトリ                                                              |
| 📄src/App.test.tsx                         | アプリケーションのルートとなるコンポーネントのテストコード(適当)                |
| 📄src/App.tsx                              | アプリケーションのルートとなるコンポーネント                                    |
| 📄src/index.tsx                            | これが public/index.html の`<div id="root" />`へ描画している。                  |
| 📄src/react-app-env.d.ts                   | react-app の型定義を参照することを宣言しているらしい(Create React App 由来)     |
| 📄src/setupTests.ts                        | テストの実行に必要なライブラリをインポートしているらしい(Create React App 由来) |
| 📄src/components/Count/Count.tsx           | Count コンポーネントを実装している。                                            |
| 📄src/components/Count/index.ts            | Count コンポーネントを`export default`している。                                |
| 📄src/components/Menu/index.ts             | Menu コンポーネントを`export default`している。                                 |
| 📄src/components/Menu/Menu.tsx             | 左側にニョキッと出るメニューと、左上のアイコンを実装している。                  |
| 📄src/components/Menu/MenuItems.tsx        | ここで、メニュー ID とコンポーネント・メニュー名・アイコンを紐付けている。      |
| 📄src/components/SpinLogo/index.ts         | SpinLogo コンポーネントを`export default`している。                             |
| 📄src/components/SpinLogo/logo.svg         | ロゴ                                                                            |
| 📄src/components/SpinLogo/SpinLogo.tsx     | SpinLogo コンポーネントを実装している。                                         |
| 📄src/redux/hooks.ts                       | redux-toolkit 製の`useDispatch`と`useSelector`を生成しているだけのファイル。    |
| 📄src/redux/store.ts                       | `store`を定義しているファイル。                                                 |
| 📄src/redux/state/app.ts                   | アプリケーションの状態を保持する State                                          |
| 📄src/redux/state/count.ts                 | Count の状態を保持する State                                                    |
| 📄src/redux/state/spinLogo.ts              | SpinLogo の状態を保持する State                                                 |
| 📄src/redux/thunk/fetchCounter.ts          | カウントの非同期処理の Thunk を定義している。                                   |
