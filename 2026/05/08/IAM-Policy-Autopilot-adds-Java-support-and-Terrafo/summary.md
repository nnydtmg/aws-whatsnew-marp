# IAM Policy Autopilot adds Java support and Terraform-aware policy generation

**カテゴリ:** What's New  
**公開日:** 2026-05-08  
**元記事:** https://aws.amazon.com/about-aws/whats-new/2026/05/iam-policy-autopilot/

---

## 要約

IAM Policy Autopilotは、新たにJavaサポートとTerraform対応ポリシー生成機能を追加しました。これにより、Java開発者やTerraformユーザーがより正確で限定的なIAMポリシーを効率的に生成できるようになり、IAMポリシー作成とアクセス問題のトラブルシューティングに要する時間が大幅に短縮されます。

---

## 詳細

### Java言語サポート

- IAM Policy Autopilotに新たにJava言語のサポートが追加されました
- 従来対応していたPython、TypeScript、Goに加えてJavaが新たにサポート対象言語となりました
- Java開発者がアプリケーションソースコードを分析してIAMポリシーを自動生成できます
- Javaは IAM Policy Autopilot ユーザーから最も要望されていた言語です

### Terraform対応ポリシー生成機能

- Terraform対応のポリシー生成機能が実装されました
- Terraformリソース定義とアプリケーション内のSDK呼び出しを相互参照して、実際のリソースARNを解決できるようになりました
- 例えば、S3 GetObjectを呼び出すアプリケーションのポリシーは、ワイルドカード(*)ではなくTerraformで定義された特定のバケットを参照するようになりました

### より限定的なポリシー生成

- Terraform定義とアプリケーションコード内のSDK呼び出しを相互参照し、より限定的なIAMポリシーを生成できるようになりました
- セキュリティベストプラクティスに基づいた最小権限の原則を実装

### 利用方法と料金

- IAM Policy Autopilotは追加費用なしで利用できます
- ユーザー自身のマシンから使用可能です
- GitHubリポジトリから開始できます
- オープンソースツールとして実装されています

### 対象ユーザー

- Java開発者がIAM Policy Autopilotの利用対象となりました
- Terraformを使用してインフラストラクチャを管理しているユーザーに有益です
- IAMポリシーの作成時間を短縮したいビルダーに適しています
- アクセス問題のトラブルシューティング時間を削減したいユーザーに有用です

---

## 背景

IAM Policy Autopilotは、AWS re:Invent 2025で発表されたオープンソースツールです。開発者がアプリケーションのソースコードを分析して、基本的なIAMポリシーを自動的に生成するためのツールとして開発されました。

これにより、IAMポリシー作成にかかる時間を削減し、セキュリティベストプラクティスに準拠したより限定的なポリシーを生成することが可能になります。

---

## 主な利点

### セキュリティ

- ワイルドカード使用の最小化により、セキュリティリスクを低減
- 最小権限の原則に基づいたポリシー自動生成
- コンプライアンス要件への準拠を支援

### 運用効率

- IAMポリシー作成時間の大幅短縮
- アクセス問題のトラブルシューティング時間を削減
- ポリシー漂流の防止

### 開発効率

- 複数プログラミング言語への対応
- Terraformなどのinternational as Code(IaC)ツールとの統合
- 繰り返しの改善に対応した自動ポリシー更新

---

## 利用開始方法

1. IAM Policy Autopilot GitHubリポジトリにアクセス
2. 対応言語（Java、Python、TypeScript、Go）でアプリケーションコードを準備
3. Terraform定義がある場合は、ローカル環境で設定
4. ツールを実行してIAMポリシーを自動生成
5. 生成されたポリシーを検証して本番環境に適用

---

## 参考リンク

- [IAM Policy Autopilot GitHub リポジトリ](https://github.com/awslabs/iam-policy-autopilot)
- [AWS IAM ドキュメント](https://docs.aws.amazon.com/iam/)
- [AWS セキュリティベストプラクティス](https://aws.amazon.com/security/best-practices/)
