---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# AWS Transform が Visual Studio 用 AWS Toolkit にエージェント型 AI アシスタントを追加

IDEを離れることなく対話的にアプリケーション最新化を実行

**発表日: 2026年5月14日**

---

## 概要

### AWS Transform のアップデート内容

- **IDE 統合**: Visual Studio 用 AWS Toolkit 内にエージェント型 AI アシスタントを追加
- **対話的な最新化**: .NET 開発者が IDE から離れずにアプリケーション最新化を実行
- **段階的な制御**: 各ステップを確認、編集、承認してから進行
- **透明性**: 詳細なワークログと HTML サマリーレポートで進捗を可視化

---

## 前提・背景

### 従来の課題

- **IDE 切り替え負荷**: Web コンソールと IDE の行き来が非効率
- **複雑な最新化**: レガシー .NET アプリケーションの最新化は人手が必要
- **エラー対応**: ビルドエラーの手動修正に時間がかかる
- **コンテキスト喪失**: Web コンソールで開始したプロジェクトの進捗管理が煩雑

### AI エージェント型アシスタントの期待

- 自動化による生産性向上
- IDE 内完結による開発効率化
- 段階的な制御による安全性確保
- SQL Server → PostgreSQL や VMWare → EC2 などの幅広い移行に対応

---

## 主な機能と特徴

### エージェント型 AI アシスタント

- **ソースコード分析**: 自動的にコードを分析し、最新化方針を提案
- **評価レポート生成**: 詳細な評価レポートを作成
- **変換計画の作成**: 段階的な変換計画を自動生成
- **対話的ガイダンス**: 各ステップで開発者が確認・承認可能

### 統合機能

- **ビルドエラー自動修正**: コンパイルエラーを自動検出・修正
- **詳細なワークログ**: プロセス全体をログに記録
- **HTML サマリーレポート**: 完了時に完全なサマリーを生成

### クロスツール対応

- **Kiro や AI コーディングアシスタント**: 他の AI ツールからも AWS Transform エージェントを利用可能
- **Web コンソール連携**: Web で開始したプロジェクトを VS で継続、コンテキストと進捗を保持

---

## 対応範囲

### 対応する最新化シナリオ

- **.NET Framework 3.5 → .NET 10** への移行
- **VB.NET → C#** への言語変更
- **Windows Forms** の最新化
- **SQL Server → PostgreSQL** への移行
- **レガシー .NET アプリ** から最新版への自動化

### 利用可能なリージョン

- **米国東部** (US East)
- **カナダ中部** (Canada Central)
- **ヨーロッパ** (EU 2地域)
- **アジアパシフィック** (APAC 4地域)

---

## 利用方法

### インストール方法

1. Visual Studio 2022 または 2026 を起動
2. **Extensions > Manage Extensions** を選択
3. **AWS Toolkit for Visual Studio** をインストール

### 使用フロー

1. 最新化対象の .NET プロジェクトを開く
2. AWS Toolkit 内の AWS Transform を起動
3. AI アシスタントに対話的にガイダンス
4. 各ステップを確認して承認
5. 自動変換実行とレポート生成

---

## 効果・メリット

- **開発生産性向上**: IDE 内完結で開発効率が大幅向上
- **リスク低減**: 段階的な制御と詳細なログで変換の安全性を確保
- **エラー削減**: 自動修正で手動エラーを削減
- **スケーラビリティ**: 複数プロジェクトの並行最新化が容易
- **コスト削減**: AI による自動化で人手削減
- **ノウハウ活用**: Web コンソール連携で既存プロジェクトのコンテキストを活用

---

## ユースケース

### 1. レガシー .NET アプリケーションの最新化

- 古いバージョンの .NET Framework で書かれたアプリを最新版に自動移行
- ビルドエラーの自動修正で稼働時間を短縮

### 2. VB.NET から C# への移行

- 言語の変換を自動化し、開発者は検証に集中
- 細かなシンタックスエラーを自動修正

### 3. マルチリージョンの同時最新化

- IT 部門が複数プロジェクトの進捗を Web コンソールで一元管理
- 開発者は IDE で個別作業

### 4. SQL Server から PostgreSQL への移行

- データベース接続コードを自動変換
- ハイブリッドな環境でコスト最適化を実現

---

## まとめ

### AWS Transform の位置づけ

- **エージェント型 AI** が .NET 開発者の生産性を飛躍的に向上
- **IDE 統合** により、より自然な開発ワークフローを実現
- **段階的な制御** で企業での採用リスクを最小化
- **多リージョン対応** でグローバル展開を加速

### 次のステップ

1. 小規模プロジェクトでパイロット実施
2. 既存のレガシー .NET アプリケーションを評価
3. チーム単位での導入を検討
4. 本番環境での活用拡大

---

## 参考リソース

- **AWS 公式**: https://aws.amazon.com/about-aws/whats-new/2026/05/aws-transform-ai-assistant/
- **AWS Transform for .NET**: https://aws.amazon.com/transform/windows/net/
- **AWS Transform ドキュメント**: https://docs.aws.amazon.com/transform/latest/userguide/dotnet-ide.html
- **ブログ: The New AWS Transform .NET Developer Experience**: https://aws.amazon.com/blogs/dotnet/the-new-aws-transform-net-developer-experience/
- **ブログ: Modernize VB.NET applications to .NET 10 with AWS Transform**: https://aws.amazon.com/blogs/dotnet/modernize-vb-net-applications-to-net-10-with-aws-transform/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**