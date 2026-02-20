# Vivliostyle Techbook Template

Vivliostyle を使った技術同人誌のテンプレートリポジトリです。

## セットアップ

[.tool-versions](.tool-versions) に記載されたバージョンの Node.js で確認しています。

```bash
npm install
```

## 使い方

### プレビュー

```bash
npm run preview
```

### PDF ビルド

```bash
npm run build
```

`build` は以下の 2 コマンドを直列に実行します。

| コマンド | 出力ファイル | 説明 |
|---|---|---|
| `npm run build:web` | `output-web.pdf` | Web 公開用 PDF |
| `npm run build:press` | `output-press.pdf` | 印刷入稿用 PDF（トンボ付き） |

なお `build:press` の実行には Docker が必要です。

### textlint

```bash
npm run textlint
npm run textlint:fix
```

## ファイル構成

```
manuscripts/
  index.md                 # 目次
  00.md                    # はじめに
  01.md                    # 第1章
  99.md                    # あとがき
  colophon.md              # 奥付
  images/                  # 画像ファイル
themes/
  style.css                # カスタムスタイル
  prism/theme-vs-light.css # コードブロック用スタイル
vivliostyle.config.js      # Vivliostyle 設定
.textlintrc                # textlint 設定
```

## カスタマイズ

1. `vivliostyle.config.js` の `title` と `author` を変更
2. `manuscripts/` 配下の Markdown ファイルを編集
3. 章を追加する場合は `vivliostyle.config.js` の `entry` にも追加

## テンプレート独自の拡張

このテンプレートでは以下のカスタマイズが含まれています。

- prism/theme-vs-light.css
  - コードブロックのテーマを Visual Studio Light 相当に変更
- style.css
  - フォント変更
    - 本文: Noto Serif JP
    - 見出し: Noto Sans JP
  - 段落先頭行の字下げ
  - ソースコードブロックの自動番号付け
  - 目次・奥付のスタイル調整
  - 改ページや画像横並び用のユーティリティクラス
- .textlintrc
  - 日本語文章向けの lint ルール
    - スペース、文章ルール、表記ゆれチェックなど

詳細は `manuscripts/01.md` を参照してください。

## References

- [Vivliostyle Flavored Markdown - VFM: Vivliostyle Flavored Markdown](https://vivliostyle.github.io/vfm/#/vfm)
- [vivliostyle/vivliostyle-cli: ⚒ Supercharge command-line publication workflow.](https://github.com/vivliostyle/vivliostyle-cli)
