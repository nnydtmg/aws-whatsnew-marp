# AWS CloudShell に視覚的ファイルエディタを追加

AWS CloudShell now includes a built-in visual file editor

**カテゴリ:** What's New  
**公開日:** 2026年8月17日  
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/08/aws-cloudshell-visual-file-editor/)

このページでは、AWS What's Newで発表された「AWS CloudShell now includes a built-in visual file editor」の内容を日本語で要約し、ポイントを紹介します。

---

## 📌 要約

AWS CloudShellに組み込みの視覚的ファイルエディタが追加され、ブラウザベースの使いやすい編集環境がシェルセッション内で直接利用可能になりました。これにより、開発者、DevOpsエンジニア、クラウド管理者のスクリプトやインフラストラクチャコードの編集ワークフローが大幅に改善されます。

---

## 🔄 このアップデートで何が変わったか

### 新機能の追加

- **統合ファイルエディタ**: AWS CloudShell 内に視覚的なテキストエディタを搭載
- **即座の起動**: 「edit」コマンド一つでシェルセッションから直接起動
- **セットアップ不要**: 追加インストールや設定は一切不要

### エディタの機能

- **構文ハイライト**: コードの可読性向上、言語の自動認識
- **検索と置換**: テキスト処理の効率化
- **複数行選択**: 大量テキスト編集に対応
- **コピー・ペースト**: 標準的なテキスト操作をサポート
- **アンドゥ・リドゥ**: 編集ミスの即座修正
- **コードフォールディング**: 大規模ファイルの管理
- **ブロック/行コメント**: プログラミング作業の効率化

### 利便性の向上

- ブラウザベースの編集体験により、VimやEmacsなどのターミナルエディタの使用が不要に
- ファイルのダウンロード・アップロード手続きを廃止
- 全作業がブラウザ内で完結

---

## 👥 対象ユーザー

### 主要ユーザー層

- **クラウド開発者**: スクリプト、Lambda関数、アプリケーションコードの開発
- **DevOps エンジニア**: インフラストラクチャコード（CloudFormationテンプレート）の作成・管理
- **クラウド管理者**: AWS リソースの自動化スクリプト、設定ファイルの管理

### 活用ユースケース

- **デプロイメントスクリプト**: 本番環境対応スクリプトの迅速な編集
- **CloudFormation テンプレート**: インフラストラクチャコードの開発・修正
- **Lambda 関数**: サーバーレス関数のオンライン開発
- **エージェント制御ファイル**: 自動化エージェントの動的設定
- **設定ファイル**: 各種AWSツール・アプリケーションの設定編集

---

## ✅ 利点と効果

### 生産性向上

- **学習曲線の短縮**: ターミナルエディタ（Vim/Emacs）の習熟が不要に
- **迅速な編集開始**: セットアップを必要とせず、即座に編集を開始
- **ワークフロー一元化**: CloudShell内でコマンド実行と編集が完結

### セキュリティと管理性

- **既存の認証情報利用**: AWS Management Console の認証をそのまま使用
- **追加認証設定不要**: シンプルで安全な認証体制
- **ファイル転送廃止**: 中間デバイスを経由せずセキュアに操作

### 利便性向上

- **デバイス非依存**: ブラウザさえあればどのデバイスからでも同じUI
- **追加ツール不要**: 特殊なエディタソフトウェアのインストール不要
- **インターネット環境**: クラウドネイティブな操作体験

### コスト削減

- **ライセンス不要**: 有料エディタソフトウェアの購入不要
- **管理負荷削減**: 既存の CloudShell 認証管理で統一

---

## 🌍 利用可能な範囲

### 対応リージョン

- CloudShell が利用可能な **すべての AWS リージョン** で即座に利用可能
- リージョン別の追加費用なし（既存の CloudShell 料金に含まれる）

### 前提条件

- AWS Management Console へのアクセス権限
- CloudShell の利用権限
- 対象ファイルの読み書き権限（IAM）

### 技術仕様

- **起動コマンド**: `edit [ファイルパス]`
- **エディタプラットフォーム**: ブラウザベース（WebAssembly等で実装）
- **対応ファイル形式**: テキストベースの全ファイル形式
- **ファイルサイズ制限**: CloudShell の標準制限に準拠

---

## 🚀 活用シーン

### シーン1: デプロイメント自動化

```bash
# CloudShell でスクリプトを編集して即座にテスト実行
$ edit deploy.sh
# エディタでスクリプトを修正 → 保存 → 実行
$ ./deploy.sh
```

### シーン2: インフラコード開発

```bash
# CloudFormation テンプレートの編集
$ edit template.yaml
# エディタで構文ハイライトを活用しながら編集
$ aws cloudformation create-stack --template-body file://template.yaml ...
```

### シーン3: Lambda 関数の開発

```bash
# Lambda 関数ソースコードの編集
$ edit lambda_function.py
# 編集後、AWS CLI でアップロード
$ aws lambda update-function-code --function-name my-function --zip-file fileb://lambda_function.zip
```

---

## 📋 今後の活用推奨事項

### すぐに試す

1. AWS Management Console から CloudShell を起動
2. `edit test.txt` でエディタの動作を確認
3. 既存ワークフローへの組み込みを検討

### ワークフロー改善の検討

- **既存プロセス**: ローカルエディタ → ファイル転送 → CloudShell 実行
- **新プロセス**: CloudShell 統合エディタ → 実行（ファイル転送不要）

---

## 🔗 参考リソース

### AWS 公式ドキュメント

- **[AWS What's New ページ](https://aws.amazon.com/about-aws/whats-new/2026/08/aws-cloudshell-visual-file-editor/)**  
  公式発表ページ

- **[AWS CloudShell ユーザーガイド](https://docs.aws.amazon.com/cloudshell/)**  
  CloudShell の使用方法全般

- **[CloudShell 環境仕様](https://docs.aws.amazon.com/cloudshell/latest/userguide/vm-specs.html)**  
  利用可能なコマンド・ツール・仕様

### 関連情報

- **[AWS CloudShell セットアップガイド](https://oneuptime.com/blog/post/2026-02-12-setup-aws-cloudshell-quick-command-line-access/view)**  
  効率的なセットアップ手法

- **[CloudShell ベストプラクティス](https://cloudchipr.com/blog/aws-cloudshell)**  
  実践的な活用方法

---

## 📝 まとめ

### 重要なポイント

✅ **統合ファイルエディタ**: CloudShell内でビジュアルなテキスト編集が可能  
✅ **セットアップ不要**: 「edit」コマンド一つで即座に起動  
✅ **ターミナルエディタ不要**: Vim/Emax習熟が不要に  
✅ **ワークフロー効率化**: ファイル転送作業が廃止  
✅ **全リージョン対応**: CloudShell 利用可能なすべてのリージョンで利用可能  
✅ **追加費用不要**: 既存の CloudShell 料金に含まれる  

### AWS CloudShell の位置づけ

AWS CloudShell は、ブラウザベースのクラウド開発環境として、さらに利便性が向上しました。統合ファイルエディタにより、開発者・DevOps エンジニア・クラウド管理者の生産性が大幅に向上し、クラウドネイティブなワークフローの実現が加速します。
