---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# IAM Roles Anywhere で Java プラグイン提供開始

AWS SDK for Java v2 ネイティブ統合により認証情報管理を簡素化

**発表日: 2026年8月25日**

---

## 概要

### AWS SDK for Java v2 統合プラグイン

- **IAM Roles Anywhere** がネイティブ Java プラグインを提供開始
- JVM内で直接AWS認証情報を自動取得・更新
- 別プロセスの実行や複雑な設定が不要
- シームレスな統合で開発効率が向上

---

## 前提・背景

### AWS外でのワークロード認証の課題

- オンプレミスやエッジなど AWS 外で実行される Javaアプリケーション
- セキュアな認証情報管理の必要性
- 長期的な認証情報管理の複雑さと セキュリティリスク

### IAM Roles Anywhere の進化

- AWS外のワークロードに IAM の信頼性と機能を提供
- 従来は **credential_process** による別プロセス実行が必要
- Java開発者向けの改善要望が継続的に存在

---

## 主な機能

### JVM インプロセス統合

- **同一JVM内での実行**: 別プロセス不要
  - オーバーヘッド削減
  - 簡潔な設定
  - パフォーマンス向上

- **自動認証情報更新**: CreateSession 呼び出しの自動処理
  - 有効期限前の自動更新
  - デベロッパーの実装負担ゼロ

### セキュリティ対応

- **複数の暗号化アルゴリズム対応**
  - RSA（従来型）
  - 楕円曲線（EC）
  - **ML-DSA**（ポスト量子暗号）

---

## 技術仕様

### システム要件

| 項目 | 要件 |
|------|------|
| **Java バージョン** | Java 8 以上 |
| **AWS SDK** | AWS SDK for Java v2 |
| **配布形式** | Maven Central Repository |
| **アップデート** | SDK とは独立したリリースサイクル |

### 実装方法（例）

```java
S3Client s3 = S3Client.builder()
    .addPlugin(RolesAnywherePlugin.builder()
        .trustAnchorArn("arn:aws:rolesanywhere:...")
        .profileArn("arn:aws:rolesanywhere:...")
        .roleArn("arn:aws:iam::...")
        .build())
    .build();
```

---

## メリット・効果

### 開発効率の向上

- ✅ **設定の簡素化**: credential_process 不要
- ✅ **コード量削減**: 認証情報ロジックを記述不要
- ✅ **統一的な管理**: AWS SDK に統合

### 運用負荷の低減

- ✅ **自動更新**: 有効期限管理を自動化
- ✅ **安定性向上**: プロセス管理の複雑性を排除
- ✅ **セキュリティ**: ポスト量子暗号対応

### コスト最適化

- ✅ **追加料金なし**: 既存の IAM Roles Anywhere 料金のみ
- ✅ **リソース効率**: インプロセス実行でオーバーヘッド削減

---

## グローバル対応

### 利用可能リージョン

- 🌍 **すべての AWS リージョン**
- 🏛️ **AWS GovCloud (US)**
- 🇩🇪 **AWS ヨーロッパソブリンクラウド（ドイツ）**
- 🇨🇳 **中国リージョン**

---

## ユースケース

### 対象ワークロード

<div class="columns">
<div>

### オンプレミス

- データセンター内アプリケーション
- IAM ロール による権限管理
- セキュアな認証情報管理

</div>
<div>

### エッジ・IoT

- IoTデバイス上の Java アプリケーション
- AWS とのセキュア通信
- 自動認証情報更新

</div>
<div>

### ハイブリッド環境

- マルチクラウド構成
- オンプレ＋クラウド連携
- 統一的なアクセス制御

</div>
</div>

---

## まとめ

### 主要なポイント

✅ **Java開発者向け統合プラグイン** により AWS SDK での認証情報管理が大幅に簡素化

✅ **JVM インプロセス実行** で設定複雑性を削減

✅ **自動認証情報更新** により運用負荷を軽減

✅ **ポスト量子暗号対応** で長期的なセキュリティを確保

✅ **追加料金なし** で既存 IAM Roles Anywhere リソースで利用可能

---

## 参考リソース

### 公式ドキュメント

- **[AWS What's New - 元記事](https://aws.amazon.com/about-aws/whats-new/2026/08/iam-roles-anywhere-java/)**
- **[IAM Roles Anywhere Java プラグイン ユーザーガイド](https://docs.aws.amazon.com/rolesanywhere/latest/userguide/java-plugin.html)**
- **[Maven Central - roles-anywhere-java](https://mvnrepository.com/artifact/software.amazon.rolesanywhere.plugin/roles-anywhere-java)**

### 関連サービス

- [IAM Roles Anywhere 公式ドキュメント](https://docs.aws.amazon.com/rolesanywhere/)
- [AWS SDK for Java v2](https://docs.aws.amazon.com/sdk-for-java/)

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**