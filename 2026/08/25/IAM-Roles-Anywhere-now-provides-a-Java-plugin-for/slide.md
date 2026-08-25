---
marp: true
theme: aws-whatsnew
paginate: true
---

# IAM Roles Anywhere が AWS SDK for Java v2 向けプラグインを提供

AWS外で実行されるJavaアプリケーション向けの認証情報管理の新しい選択肢

**発表日: 2026年8月25日**

---

## 概要

### IAM Roles Anywhere Java プラグイン

- **AWS SDK for Java v2 向けプラグイン** の提供開始
- JVM内で **直接一時的なAWS認証情報を取得** 可能に
- 別プロセス実行や複雑な設定が **不要**
- AWS外で実行されるワークロード向けソリューション

---

## 前提・背景

### 従来の課題

- AWS外で実行するJavaアプリケーションの認証情報管理の複雑さ
- IAM Roles Anywhere認証情報ヘルパーを別プロセスとして実行が必須
- AWSプロファイルでcredential_processの設定が必要
- 開発・運用の効率低下

### IAM Roles Anywhere の進化

- オンプレミス、エッジ、ハイブリッド環境での認証管理を簡素化
- Java開発者向けの開発体験向上
- AWS SDK との統合による シームレスな認証フロー

---

## 主な機能と改善

### プラグインの特徴

- **JVM内実行**: アプリケーションと同じプロセス内で実行
- **自動認証情報取得**: AWS SDK for Java v2のサービスクライアントビルダーで設定すればOK
- **自動更新機能**: CreateSessionの呼び出しを処理、有効期限切れ前に自動更新
- **複数鍵タイプ対応**: RSA、楕円曲線（EC）、ML-DSA に対応

---

## 技術仕様

### サポート環境

| 項目 | 詳細 |
|------|------|
| **Java バージョン** | Java 8以上 |
| **SDK** | AWS SDK for Java v2 |
| **鍵タイプ** | RSA、EC、ML-DSA |
| **コスト** | 追加料金なし |

### 利用可能リージョン

- すべてのAWSリージョン
- AWS GovCloud（US）リージョン
- AWSヨーロッパソブリンクラウド（ドイツ）リージョン
- 中国リージョン

---

## 効果・メリット

### 開発効率の向上

- **認証情報取得ロジックの記述が不要**
- **設定の簡素化**により開発期間短縮
- **IDE統合の強化**による開発体験向上

### 運用効率の向上

- **プロセス管理の負担軽減**
- **自動更新により認証情報切れを防止**
- **セキュリティレベルの一貫性確保**

### アーキテクチャの改善

- マイクロサービス間の認証簡素化
- コンテナ化環境での採用容易
- ハイブリッド環境での統一された認証方式

---

## ユースケース

### 1. オンプレミス Javaアプリケーション

- AWS リソースへのセキュアなアクセス
- 従来のcredential_process設定から移行
- プロセス管理の簡素化

### 2. エッジ/コンテナ環境

- Kubernetes上で実行されるJavaマイクロサービス
- 分散トレーシング、監視ツールの統合
- 自動スケーリング環境での安定動作

### 3. ハイブリッド環境

- オンプレミス + AWS クラウド間の統一認証
- 複数クラウド環境での認証の一元管理

---

## 使用開始方法

### ステップ1: プラグインの取得

**Maven Central リポジトリから入手可能**

- アーティファクト: `software.amazon.rolesanywhere.plugin:roles-anywhere-java`
- リリース情報: [Maven Central](https://central.sonatype.com/artifact/software.amazon.rolesanywhere.plugin/roles-anywhere-java)
- ソースコード: [GitHub roles-anywhere-java](https://github.com/aws-sdk-plugin/roles-anywhere-java)

### ステップ2: AWS SDK設定

**AWS SDK for Java v2のサービスクライアントビルダーでプラグイン設定**

---

## まとめ

### IAM Roles Anywhere Java プラグインの位置づけ

- **AWS外で実行されるJavaアプリケーション向けの新しい認証方式**
- **開発効率と運用効率を大幅に向上させるソリューション**
- **セキュアなAWS リソースアクセスを実現**
- **追加コストなしで利用可能**

### 次のステップ

1. IAM Roles Anywhere の設定を確認
2. 既存Java アプリケーションでのプラグイン適用を検討
3. パイロットプロジェクトでの検証
4. 本番環境への段階的展開

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/08/iam-roles-anywhere-java/
- **IAM Roles Anywhere Java プラグイン ドキュメント**: https://docs.aws.amazon.com/rolesanywhere/latest/userguide/java-plugin.html
- **Maven Central**: https://central.sonatype.com/artifact/software.amazon.rolesanywhere.plugin/roles-anywhere-java
- **GitHub リポジトリ**: https://github.com/aws-sdk-plugin/roles-anywhere-java
- **IAM Roles Anywhere ドキュメント**: https://docs.aws.amazon.com/rolesanywhere/latest/userguide/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**